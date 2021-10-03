
{% extends "layout.html" %}

	
{% block content %}

<!DOCTYPE html>
<html>
<head>

{% include "std_title.html" %} 
 
 <script id="code">
 
    function init() {
      if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
      var $ = go.GraphObject.make;  // for conciseness in defining templates
	  
      myFullDiagram =
        $(go.Diagram, "fullDiagram",  // each diagram refers to its DIV HTML element by id
			{
				// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/customTextEditingTool.html
				// default text editor is now a SelectBox
				"textEditingTool.defaultTextEditor": window.TextEditorSelectBox, // defined in textEditorSelectBox.js
				"undoManager.isEnabled": true, 
				
				initialAutoScale: go.Diagram.UniformToFill,  // automatically scale down to show whole tree
				maxScale: 0.80,
				contentAlignment: go.Spot.Center,  // center the tree in the viewport
				isReadOnly: false,  // don't allow user to change the diagram
				"animationManager.isEnabled": true,
				
				layout: $( go.TreeLayout,
					  { angle: 90, sorting: go.TreeLayout.SortingAscending } ),
					  //{ angle: 180, sorting: go.TreeLayout.SortingAscending }),
				maxSelectionCount: 1,  // only one node may be selected at a time in each diagram
				"ChangedSelection": UpdateNodeDataByTitleChoice
			} );
		  

		// let gt = {{ json_std_gt |  safe}}
		// console.log("GT ", gt)

		// Define a node template that is shared by both diagrams
		var myNodeTemplate =
			$( go.Node, "Auto",
			  { locationSpot: go.Spot.Center, },
			  new go.Binding("text", "key", go.Binding.toString),  // for sorting
			 // FROM http://keracad.org/site/intro/connectionPoints.html	  
			  { fromSpot: go.Spot.RightSide, toSpot: go.Spot.LeftSide },   // coming out from right side  going into at left side
				    
			  
	<!-- FROM https://forum.nwoods.com/t/centering-textblocks-in-panels/7941/9  -->	
	
				$(go.Panel, "Vertical",
				//$(go.Panel, "Horizontal",
					new go.Binding("background", "color"),
					// FROM https://gojs.net/latest/intro/itemArrays.html
					//new go.Binding("itemArray", "items" ),
									
					$(go.Picture,
						{ margin: 10, width: 100, height: 100, background: "red", alignment: go.Spot.Left },
						new go.Binding("source") ),
						
					$(go.TextBlock, { 
						text: "לבחיקה הקלק פעמיים",
						editable: true,
						margin: 5, width: 200, height: 150, 
						stroke:"black", textAlign: "center", 
						font: "bold 16pt Arial, Helvetica, sans-serif",
						textEditor: window.TextEditorRadioButtons, // defined in textEditorRadioButtons.js,
						background: "lightblue",
						} ,
							  
						new go.Binding("text", "id").makeTwoWay(),
						new go.Binding("text", "h_name").makeTwoWay(),	
						new go.Binding("text", "e_name").makeTwoWay(),
						new go.Binding("text", "name").makeTwoWay(),	
						new go.Binding("text", "title").makeTwoWay(),	
						new go.Binding("text", "body").makeTwoWay(),	
						new go.Binding("background", "color").makeTwoWay(),	
						new go.Binding("choices").makeTwoWay() ),
				),
				
				// FROM https://gojs.net/latest/intro/buttons.html		
				$("TreeExpanderButton",   // EXPAND GRAPH WITH NEW NODE
					{ alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top },
					{ visible: true } ,
					$(go.TextBlock, "Click to open a new text box", { margin: 10 } )  ),	
																										
														
			);
			
      myFullDiagram.nodeTemplate = myNodeTemplate;
	  
      // Define a basic link template, not selectable, shared by both diagrams
      var myLinkTemplate =
        $( go.Link,
          { routing: go.Link.Normal, selectable: false },
          $(go.Shape,
            { strokeWidth: 2 }),
			{ curve: go.Link.Bezier },  // Bezier curve
			
			$(go.Panel, "Horizontal", {
				segmentOffset: new go.Point(0, -10),
			}),			
        );
		

		myFullDiagram.linkTemplate = myLinkTemplate;

		// Create the full tree diagram
		setupDiagram( {{ json_std_gt |  safe}}, {{ num_of_nodes |  safe}} );
		//setupFlatDiagram( {{ flat_tree_arr | safe }} )  // 1
						
    }

	
	let nodeDataArray = [];  // NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNode Data Array
	
    // Create the tree model containing TOTAL nodes, with each node having a variable number of children
	
    function setupDiagram(gt, num_of_nodes) { ///////////////////// SET DIAGRAM - ////////////////////////////////////
		myFullDiagram.model = new go.TreeModel(nodeDataArray);
		display_node_by_loop( parseData(gt), num_of_nodes )  ///////////////////// SET DIAGRAM - ////////////////////////////////////
    }	
	   

	
let count = 0
let save_parent_id = 0
let class_choices = []
	
function display_node_by_loop( parent_gt, num_of_nodes )  {  //////////////////// DISPLAY-NODE ////////////////////////////////
	
	let branch_color
	let root_color = 1
	let child_gt
	let new_branch = 0
	let parent_gt_node_struct = {}
	var current_node
	
	if ( !parent_gt ) {
		return
	}
		
	class_choices = []
	setClassArray(parent_gt)
	
	console.log("class_choices ",  class_choices)
	
	parent_gt_node_struct = {
		key:     parent_gt.id, 	
		parent:  save_parent_id,
		choices:  class_choices,
		
		e_name:  parent_gt.e_name,
		h_name:  parent_gt.h_name,
		
		color:   parent_gt.color,
		id:      parent_gt.id,
		title:   "לבחירה הקליקו פעמיים",
		name:    parent_gt.title,
		body:    parent_gt.body,
		source:  parent_gt.image_url,
	} 
	//nodeDataArray.push( parent_gt_node_struct );

	// FROM https://menta-idanim.herokuapp.com/login
	// ADD NODE
	myFullDiagram.model.addNodeData(parent_gt_node_struct);
	//current_node = myFullDiagram.findPartForData(parent_gt_node_struct);
	current_node = myFullDiagram.findPartForData(parent_gt_node_struct);	
	current_node.data.key = parent_gt.id
	current_node.data.parent = save_parent_id
	console.log( "CRRENT-NODE ", current_node.data )

// FROM https://forum.nwoods.com/t/how-to-update-all-node-data-object/5177/2

	if ( parent_gt.color )
		current_node.data.color = parent_gt.color 
		
	if 	( parent_gt.id )	
		current_node.data.id = parent_gt.id
		
	if 	( parent_gt.title )	
		current_node.data.title = parent_gt.title
		
	if 	( parent_gt.body )	
		current_node.data.body = parent_gt.body
		
	if 	( parent_gt.image_url )	
		current_node.data.image_url = parent_gt.image_url
	

	
	if ( !parent_gt["CHILDREN"] )  {  	
		return
	}
				
	child_gt = parseData(parent_gt["CHILDREN"][0])

	if (child_gt.class_name == 'Thought')  {
		branch_color = go.Brush.randomColor()
		new_branch = 1
	}

	if (!new_branch)  {
		branch_color = child_gt.color
	}
		
	save_parent_id = parent_gt.id
	display_node_by_loop( child_gt, num_of_nodes )
							
}

function UpdateNodeDataByTitleChoice() {
	let node = myFullDiagram.selection.first();
	console.log("myFullDiagram.model: ", myFullDiagram.model)
	
	children_nodes = node.findTreeChildrenNodes
	// FROM https://forum.nwoods.com/t/highlight-all-ancestors-of-current-node/6521/3
	for ( let c. in children_nodes )  {
		if (c.data.key != node.data.key )
		c.visible = false
	}
}

function setClassArray(parent_gt)  {
	
console.log("IN setClassArray P-gt: ", parent_gt)
	
	switch (parent_gt.class_name) {
		
		case 'Situation':
		
			print("SITUATION-BROTHERSBBBBBBBBBBBBBBBBBBBB ", parent_gt["BROTHERS"])
			print("SITUATION-BROTHERS-0 ", parent_gt["BROTHERS"][0])
			
			if (!parent_gt["BROTHERS"][0].situations )  {
				class_choices = ["There is no options in this category"]
			}
			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].situations.length; i++)  {
					console.log("I ", i, parent_gt["BROTHERS"][0].situations[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].situations[i].title )
				}
			}
			break;
			
		case 'Thought':	
			if (!parent_gt["BROTHERS"][0].thoughts )  {
				console.log("parent_gt-BROTHERS[0].thoughts", parent_gt["BROTHERS"][0].thoughts)
				class_choices.push( ["There is no options in this category"] )
			}
			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].thoughts.length; i++)  {
					console.log("I ", i, parent_gt["BROTHERS"][0].thoughts[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].thoughts[i].title )
				}
			}
			break;
					
			
		case 'Emotion':	
			if (!parent_gt["BROTHERS"][0].emotions )  {			
				console.log( "Emotion: ", parent_gt["BROTHERS"][0].emotions )
				class_choices.push( ["There is no options in this category"] )
			}

			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].emotions.length; i++)  {
					console.log("I ", i, parent_gt["BROTHERS"][0].emotions[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].emotions[i].title )
				}
			}
			break;
				
		case 'Behavior':	
			if (!parent_gt["BROTHERS"][0].behaviors )  {
				class_choices.push( ["There is no options in this category"] )
			}
			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].behaviors.length; i++)  {
					console.log("I ", i, parent_gt["BROTHERS"][0].behaviors[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].behaviors[i].title )
				}
			}
			break;
			
		case 'Result':	
			if (!parent_gt["BROTHERS"][0].results )  {
				class_choices = ["There is no options in this category"]
			}
			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].results.length; i++)  {
					console.log("I ", i, parent_gt["BROTHERS"][0].results[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].results[i].title )
				}
			}
			break;
			
		default:
			class_choices = ["Hello", "Daa", "Welcome", "Go away!"]
			break;
	}

}



function parseData(data) {
	if (!data) return {};
	if (typeof data === 'object') return data;
	if (typeof data === 'string') return JSON.parse(data);
}
	
  </script>
</head>


<body onload="init()">
	<div id="sample">
		<div id="fullDiagram" style="height:1000px;width:100%;border:1px solid black;margin:2px"></div>
	</div>
</body>
</html>

{% endblock %}