
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
				// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/orgChartEditor.html
				// FAMILY EDITABLE TREE
				validCycle: go.Diagram.CycleDestinationTree, // make sure users can only create trees
				"clickCreatingTool.archetypeNodeData": { // allow double-click in background to create a new node
					name: "(new something)",
					title: "",
					comments: ""
				},

				"clickCreatingTool.insertPart": function(loc) {  // scroll to the new node
					let node = go.ClickCreatingTool.prototype.insertPart.call(this, loc);
					if (node !== null) {
						this.diagram.select(node);
						this.diagram.commandHandler.scrollToPart(node);
						this.diagram.commandHandler.editTextBlock(node.findObject("NAMETB"));
					}
					return node;
				},
				
				"undoManager.isEnabled": true, // enable undo & redo
				
								
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

			} );  // END myFullDiagram

			
	
	// when a node is double-clicked, add a child to it
	function nodeDoubleClick(e, obj) {
		let clicked = obj.part;
		if (clicked !== null) {
			let thisemp = clicked.data;
			
			myFullDiagram.startTransaction("add a new box");
			
			let newemp = {
				name: "(new something)",
				title: "",
				comments: "",
				parent: thisemp.key
			};
			myFullDiagram.model.addNodeData(newemp);
			
			myFullDiagram.commitTransaction("add a new box");
		}
	}

		var myNodeTemplate =
			$( go.Node, "Auto",
			
				// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/orgChartEditor.html
				// EDITABLE FAMILY TREE
				
				{ doubleClick: nodeDoubleClick },


				{ locationSpot: go.Spot.Center,
					// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/incrementalTree.html 
					isTreeExpanded: false,
					isTreeLeaf: false
				},
			  
			  new go.Binding("text", "key", go.Binding.toString),  // for sorting
			 // FROM http://keracad.org/site/intro/connectionPoints.html	  
			  { fromSpot: go.Spot.RightSide, toSpot: go.Spot.LeftSide },   // coming out from right side  going into at left side
				    
			  
				//FROM https://forum.nwoods.com/t/centering-textblocks-in-panels/7941/9  -->	
	
				$(go.Panel, "Vertical",
			
					// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/orgChartEditor.html
					// EDITABLE FAMILY TREE									
					$(go.Picture,
					{
						name: "Picture",
						desiredSize: new go.Size(150, 150),
						margin: 1.5,
					} ),
			  
					// define the panel where the text will appear
					$(go.Panel, "Table",
						{
							minSize: new go.Size(130, NaN),
							maxSize: new go.Size(150, NaN),
							margin: new go.Margin(6, 10, 0, 6),
							defaultAlignment: go.Spot.Left
						},
					  
						$(go.RowColumnDefinition, { column: 2, width: 4 } ),
						
						$(go.TextBlock,  // the name
							{
							  row: 0, column: 0, columnSpan: 5,
							  font: "12pt Segoe UI,sans-serif",
							  editable: true, isMultiline: false,
							  minSize: new go.Size(10, 16)
							},
							new go.Binding("text", "name").makeTwoWay() ),
						
					  $(go.TextBlock, "Title: ",
						{ row: 1, column: 0 }  ),
						
						$(go.TextBlock, 
							{
								row: 1, column: 1, columnSpan: 4,
								editable: true, isMultiline: false,
								minSize: new go.Size(10, 14),
								margin: new go.Margin(0, 0, 0, 3)
							},
						new go.Binding("text", "title").makeTwoWay() ),
						
						$(go.TextBlock,
							{ row: 2, column: 0 },
							new go.Binding("text", "key", function(v) { return "ID: " + v; }) ),

						$(go.TextBlock,
							{ name: "boss", row: 2, column: 3, }, // we include a name so we can access this TextBlock when deleting Nodes/Links
							new go.Binding("text", "parent", function(v) { return "Boss: " + v; }) ),

						$(go.TextBlock,  // the comments
							{
								row: 3, column: 0, columnSpan: 5,
								font: "italic 9pt sans-serif",
								wrap: go.TextBlock.WrapFit,
								editable: true,  // by default newlines are allowed
								minSize: new go.Size(10, 14)
							},	
							new go.Binding("text", "comments").makeTwoWay() )
						
					),  // end Table Panel
													
			
					{ name: "PANEL" },
					//$(go.Panel, "Horizontal",
					new go.Binding("background", "background"),
					
					$(go.Picture,
						{ margin: 10, width: 100, height: 100, background: "red", alignment: go.Spot.Left },
						new go.Binding("source") ),
						
					$(go.TextBlock, { 
						text: "לבחיקה הקלק פעמיים",
						editable: true,
						margin: 5, width: 200, height: 150, 
						stroke:"blue", textAlign: "center", 
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
						
						new go.Binding("text", "color").makeTwoWay(),	
						new go.Binding("background", "background").makeTwoWay(),	
						new go.Binding("text", "grayed").makeTwoWay(),	
						new go.Binding("text", "hightlited").makeTwoWay() ),							
				
				),  // END VERTICAL PANEL
				
				// FROM https://gojs.net/latest/intro/buttons.html		
				$("TreeExpanderButton",   // EXPAND GRAPH WITH NEW NODES
					{ alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top,
						// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/incrementalTree.html
					name: 'TREEBUTTON' },
						
					$(go.TextBlock, "Click to open a new text box", { margin: 10 } ) )	// FROM https://gojs.net/latest/intro/buttons.html		
														
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
		hightlited: "false",
		
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
			myFullDiagram.model.setDataProperty(n.data, "hightlited", "false");
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