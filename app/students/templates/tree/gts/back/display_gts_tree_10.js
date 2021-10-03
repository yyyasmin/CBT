
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
				//"undoManager.isEnabled": true, 
				
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
				    
			  
	            //FROM https://forum.nwoods.com/t/centering-textblocks-in-panels/7941/9  -->	
	
				$(go.Panel, "Vertical",
					{ name: "PANEL" },
					//$(go.Panel, "Horizontal",
					new go.Binding("background", "background"),
					
					$(go.Picture,
						{ margin: 10, width: 100, height: 100, background: "red", alignment: go.Spot.Left },
						new go.Binding("source") ),
						
					$(go.TextBlock, { 
							text: "What are you up today? ",
							editable: true,
							margin: 5, width: 200, height: 150, 
							stroke:"black", textAlign: "center", 
							font: "bold 16pt Arial, Helvetica, sans-serif",
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
						
    }

	
	let nodeDataArray = [];  // NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNode Data Array
	
	
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
			

	parent_gt_node_struct = {
		key:      parent_gt.id, 	
		parent:   save_parent_id,
		
		category: parent_gt.class_name,
		
		method:   parent_gt.method,
		e_name:   parent_gt.e_name,
		h_name:   parent_gt.h_name,
		
		color:    parent_gt.color,
		id:       parent_gt.id,
		title:    "לבחירה הקליקו פעמיים",
		name:     parent_gt.title,
		body:     parent_gt.body,
		source:   parent_gt.image_url,
		
		background: parent_gt.color,
		grayed:     "false",
		highlited:  "false",
		
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


clicked_nodes = []
function removeUnchosenBrothers() {
	
	let selected_node = myFullDiagram.selection.first();
	
	myFullDiagram.startTransaction("CollapseExpandTree");

	console.log("clicked_nodes.length ", clicked_nodes.length)
	
	if ( clicked_nodes.length<1 )  {  // FIRST ONE IS NOT GRAYED
		console.log("CLICKED_ARR IS EMPTY PUSHING ", selected_node.data)
		clicked_nodes.push(selected_node)
	}
		
	else  {
		console.log("SELECTED-NODE-DATA GRAYED ", selected_node.data.grayed, selected_node.data.title)

		if (selected_node.data.grayed == "true")  {
			// Redraw the original data
			for (let i=0; i<clicked_nodes.length; i++)  {
				
	console.log("IN removeUnchosenBrothers selected_node-key: ", selected_node.data.key )
	console.log("IN removeUnchosenBrothers I clicked_nodes-key: ", i, clicked_nodes[i].data.key )

				if (clicked_nodes[i].data.key != selected_node.data.key)  {
					console.log("BREAKING CN-KEY SN-KEY ", clicked_nodes[i].data.key, selected_node.data.key) 
					break
				}
				else  {  // FOUND THE ORIGINAL NODE TO color
					console.log("In EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEELSE ", selected_node.data)
					selected_node.data = clicked_nodes[i].data
					console.log("UPDATED selected_node.data to: ", selected_node.data )

				}
			}
		}
		else {  // SAVE THE ORIGINAL COLOR AND DATA
			clicked_nodes.push(selected_node)
		}			
	}
	

	// FIND BROTHERS THROU SAME PARENT AND GRAY THEM
	parent_node = myFullDiagram.findPartForKey(selected_node.data.parent)
	parent_node.findLinksOutOf().each(function(n) {
		// FROM https://gojs.net/latest/intro/dataBinding.html
		if (n.data.key != selected_node.data.key) {  // GRAY All brothers exceept from selected one itself
			
			console.log("N-DATA ", n.data)
			
			myFullDiagram.model.setDataProperty(n.data, "grayed", "true");
			myFullDiagram.model.setDataProperty(n.data, "highlited", "false");
			myFullDiagram.model.setDataProperty(n.data, "background", "lightgray");
			
			myFullDiagram.model.setDataProperty(n.data, "key", n.data.key);
			myFullDiagram.model.setDataProperty(n.parent, "parent", n.data.parent);
			myFullDiagram.model.setDataProperty(n.data, "category", n.data.category);
			
			myFullDiagram.model.setDataProperty(n.data, "method", n.data.method);
			myFullDiagram.model.setDataProperty(n.data, "e_name", n.data.e_name);
			myFullDiagram.model.setDataProperty(n.data, "h_name", n.data.h_name);
			
			myFullDiagram.model.setDataProperty(n.data, "color", n.data.color);
			myFullDiagram.model.setDataProperty(n.data, "id", n.data.id);
			myFullDiagram.model.setDataProperty(n.data, "title", n.data.title);
			myFullDiagram.model.setDataProperty(n.data, "name", n.data.name);
			myFullDiagram.model.setDataProperty(n.data, "body", n.data.body);
			myFullDiagram.model.setDataProperty(n.data, "source", n.data.source);

		}
	} )
	
	myFullDiagram.commitTransaction("CollapseExpandTree");
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