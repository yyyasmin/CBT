
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
				"ChangedSelection": removeUnchosenBrothers

			} );
		  

		// let gt = {{ json_std_gt |  safe}}
		// //console.log("GT ", gt)

		// Define a node template that is shared by both diagrams
		var myNodeTemplate =
			$( go.Node, "Auto",
			
			  { locationSpot: go.Spot.Center,
				// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/incrementalTree.html 
				selectionObjectName: "PANEL",
				isTreeExpanded: false,
				isTreeLeaf: false
			  },	

			  new go.Binding("text", "key", go.Binding.toString),  // for sorting
			 // FROM http://keracad.org/site/intro/connectionPoints.html	  
			  { fromSpot: go.Spot.RightSide, toSpot: go.Spot.LeftSide },   // coming out from right side  going into at left side
				    
			  
	<!-- FROM https://forum.nwoods.com/t/centering-textblocks-in-panels/7941/9  -->	
	
				$(go.Panel, "Vertical",
				{ name: "PANEL" },
				//$(go.Panel, "Horizontal",
					
					$(go.Picture,
						{ margin: 10, width: 100, height: 100, background: "red", alignment: go.Spot.Left },
						new go.Binding("source") ),
						
					$(go.TextBlock, { 
						text: "לבחיקה הקלק פעמיים",
						editable: true,
						margin: 5, width: 200, height: 150, 
						stroke:"blue", textAlign: "center", 
						font: "bold 16pt Arial, Helvetica, sans-serif",
						//textEditor: window.TextEditorRadioButtons, // defined in textEditorRadioButtons.js,
						background: "lightblue",
						//"undoManager.isEnabled": true,

						} ,
							  
						new go.Binding("text", "id").makeTwoWay(),
						new go.Binding("text", "method").makeTwoWay(),	
						new go.Binding("text", "h_name").makeTwoWay(),	
						new go.Binding("text", "e_name").makeTwoWay(),
						new go.Binding("text", "name").makeTwoWay(),	
						new go.Binding("text", "title").makeTwoWay(),	
						new go.Binding("text", "body").makeTwoWay(),
						
						new go.Binding("background", "background").makeTwoWay(),	
						new go.Binding("text", "color").makeTwoWay(),	
						new go.Binding("text", "gray_color").makeTwoWay(),	
						new go.Binding("text", "grayed").makeTwoWay(),	
						new go.Binding("text", "highlited").makeTwoWay() ),	
						//new go.Binding("choices").makeTwoWay() ),
						
						// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/incrementalTree.html
				),
				
				// FROM https://gojs.net/latest/intro/buttons.html		
				$("TreeExpanderButton",   // EXPAND GRAPH WITH NEW NODES
					{ alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top,
						// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/incrementalTree.html
					name: 'TREEBUTTON' },
						
					$(go.TextBlock, "Click to open a new text box", { margin: 10 } ) ),	// FROM https://gojs.net/latest/intro/buttons.html		

														
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
		display_node_by_loop( parseData(gt), num_of_nodes )  ///////////////////// SET DIAGRAM - ////////////////////////////////////
		myFullDiagram.model = new go.TreeModel(nodeDataArray);

	}	
	   

	
let count = 0
let save_parent_id = 0
	
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
		
	//console.log("parent_gt.class_name ",  parent_gt.class_name)
	
	//let class_choices = []
	
	//setClassChoices(parent_gt)

	parent_gt_node_struct = {
		
		key:      parent_gt.id, 	
		parent:   save_parent_id,
		category: parent_gt.class_name,   // LIKE 'Situations'
		
		method:   parent_gt.method,   // LIKE 'CBT'
		e_name:   parent_gt.e_name,
		h_name:   parent_gt.h_name,
		id:       parent_gt.id,

		background:    parent_gt.color,
		title:         "לבחירה הקליקו פעמיים",
		name:          parent_gt.title,
		body:          parent_gt.body,
		source:        parent_gt.image_url,
		
		color:      parent_gt.color,
		grayed:     'false',
		highlited:  'false',
		gray_color: 'lightgray',
		
		// FROM https://gojs.net/latest/intro/itemArrays.html

	} 
	
	nodeDataArray.push( parent_gt_node_struct );

	
	if ( !parent_gt["CHILDREN"] )  {  	
		return
	}
		
	for ( let i=0; i< parent_gt["CHILDREN"].length; i++ )  {
		
		child_gt = parseData(parent_gt["CHILDREN"][i])
	
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

}


let clicked_nodes = []  // SAVE NODES DATA INORDER USER WANTS TO RE-USE IT
function removeUnchosenBrothers() {
		
	myFullDiagram.startTransaction("CollapseExpandTree");
	
	let selected_node = myFullDiagram.selection.first();
	
	if (clicked_nodes == [])  {  // FIRST ONE ISINT GRAYED
		console.log(" clicked_nodes IS EMPTY PUSHING", selected_node.data)
		clicked_nodes.push(selected_node)
	} 
	
	else {	
		if ( selected_node.data.grayed == 'true' )  {   // FETCH THE ORIGINAL NODE COLOR To COLOR BACK
			for (let i=0; i<clicked_nodes.length; i++)  {  // FIND THE RIGHT ONE TO FETCH
				
				console.log("I CN-KEY    NODE-KEY ", i, clicked_nodes[i].data.key)
				console.log("SELECTED-NODE-KEY ",  selected_node.data.key)
				
				if (clicked_nodes[i].data.key != selected_node.data.key)  {
					break
				}
				else  {  // FOUND NODE TO COLOR BACK
					console.log("ELSE - NODE IS GRAYED - COLORING BACK ", selected_node.data.key, selected_node.data.grayed)
					myFullDiagram.model.setDataProperty(selected_node.data, clicked_nodes[i].data);
				}
			}
		}
		else {   // SAVE ORIGINAL NODE DATA
			clicked_nodes.push(selected_node)
		}
	}
	/****************************/
	// GRAY ALL BROTHERS OF THE SAME LEVEL
	parent_node = myFullDiagram.findPartForKey(selected_node.data.parent)
	parent_node.findLinksOutOf().each(function(n) {

		if (n.data.key != selected_node.data.key) {
			myFullDiagram.model.setDataProperty(n.data, "background", "lightgray");
			myFullDiagram.model.setDataProperty(n.data, "grayed", "true");
			myFullDiagram.model.setDataProperty(n.data, "highlited", "false");
		}
	});
	
	myFullDiagram.commitTransaction("CollapseExpandTree");

}


function setClassChoices(parent_gt) {

	switch (parent_gt.class_name) {
		
		case 'Situation':
		
			print("SITUATION-BROTHERSBBBBBBBBBBBBBBBBBBBB ", parent_gt["BROTHERS"])
			print("SITUATION-BROTHERS-0 ", parent_gt["BROTHERS"][0])
			
			if (!parent_gt["BROTHERS"][0].situations )  {
				class_choices = ["There is no options in this category"]
			}
			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].situations.length; i++)  {
					//console.log("I ", i, parent_gt["BROTHERS"][0].situations[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].situations[i].title )
				}
			}
			break;
			
		case 'Thought':	
			if (!parent_gt["BROTHERS"][0].thoughts )  {
				//console.log("parent_gt-BROTHERS[0].thoughts", parent_gt["BROTHERS"][0].thoughts)
				class_choices.push( ["There is no options in this category"] )
			}
			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].thoughts.length; i++)  {
					//console.log("I ", i, parent_gt["BROTHERS"][0].thoughts[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].thoughts[i].title )
				}
			}
			break;
					
			
		case 'Emotion':	
			if (!parent_gt["BROTHERS"][0].emotions )  {			
				//console.log( "Emotion: ", parent_gt["BROTHERS"][0].emotions )
				class_choices.push( ["There is no options in this category"] )
			}

			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].emotions.length; i++)  {
					//console.log("I ", i, parent_gt["BROTHERS"][0].emotions[i].title)
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
					//console.log("I ", i, parent_gt["BROTHERS"][0].behaviors[i].title)
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
					//console.log("I ", i, parent_gt["BROTHERS"][0].results[i].title)
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