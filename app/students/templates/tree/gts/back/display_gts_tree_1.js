
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

				//"textEditingTool.defaultTextEditor": window.TextEditorSelectBox, // defined in textEditorSelectBox.js
				//"undoManager.isEnabled": true, 
				
				// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/extensions/TextEditor.html
				"textEditingTool.defaultTextEditor": window.TextEditor,

				initialAutoScale: go.Diagram.UniformToFill,  // automatically scale down to show whole tree
				maxScale: 0.80,
				contentAlignment: go.Spot.Center,  // center the tree in the viewport
				isReadOnly: false,  // DO allow user to change the diagram
				"animationManager.isEnabled": true,
				
				layout: $( go.TreeLayout,
					  { angle: 90, sorting: go.TreeLayout.SortingAscending } ),
					  //{ angle: 180, sorting: go.TreeLayout.SortingAscending }),
				maxSelectionCount: 1,  // only one node may be selected at a time in each diagram
				//"ChangedSelection": switchNodeColor

			} );
			
			
			

		var myNodeTemplate =
			$( go.Node, "Auto",
			
			  { locationSpot: go.Spot.Center,
				// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/incrementalTree.html 
				selectionObjectName: "PANEL",
				isTreeExpanded: false,
				isTreeLeaf: false,
				background: "pink", 
				click: switchNodeColor, 
			  },
							  
			new go.Binding("text", "id").makeTwoWay(),
			new go.Binding("text", "method").makeTwoWay(),	
			new go.Binding("text", "h_name").makeTwoWay(),	
			new go.Binding("text", "e_name").makeTwoWay(),
			new go.Binding("text", "name").makeTwoWay(),	
			new go.Binding("text", "title").makeTwoWay(),	
			new go.Binding("text", "body").makeTwoWay(),
			
			new go.Binding("background", "gt_background").makeTwoWay(),	
			new go.Binding("text", "color").makeTwoWay(),	
			new go.Binding("text", "gray_color").makeTwoWay(),	
			new go.Binding("text", "grayed").makeTwoWay(),	
			new go.Binding("text", "highlited").makeTwoWay(),	
		  
			new go.Binding("text", "key", go.Binding.toString),  // for sorting
			 // FROM http://keracad.org/site/intro/connectionPoints.html	  
			  { fromSpot: go.Spot.RightSide, toSpot: go.Spot.LeftSide },   // coming out from right side  going into at left side
				    
			  
	            //FROM https://forum.nwoods.com/t/centering-textblocks-in-panels/7941/9  -->	
	
				$(go.Panel, "Vertical",
				//$(go.Panel, "Horizontal",
					{ name: "PANEL" },								
						
					$(go.Picture,
						{ margin: 10, width: 100, height: 100, background: "red", alignment: go.Spot.Left },
						new go.Binding("source") ),
						
					$(go.Panel, "Table",
					
						$(go.TextBlock, { 
								row: 0, column: 0,
								
								editable: true,
								margin: 3, 
								stroke:"black", textAlign: "center", 
								font: "bold 16pt Arial, Helvetica, sans-serif",
							} ,
							new go.Binding("text", "name").makeTwoWay(),	// ID							
							new go.Binding("text", "key").makeTwoWay() ),	// ID							

						$(go.TextBlock, { 
								row: 2, column: 0,

								editable: true,
								margin: 3, 
								stroke:"black", textAlign: "center", 
								font: "bold 16pt Arial, Helvetica, sans-serif",
							} ,
							new go.Binding("text", "h_name").makeTwoWay() ),   // H-NAME

									
						$(go.TextBlock, { 
								row: 3, column: 0,
								
								editable: true,
								margin: 3, 
								//width: 200, height: 50, 
								stroke:"black", textAlign: "center", 
								font: "bold 16pt Arial, Helvetica, sans-serif",
							} ,
							new go.Binding("text", "title").makeTwoWay() ),   // TITLE

							
						// FROM https://gojs.net/latest/intro/buttons.html		
						$("TreeExpanderButton",  {
							row: 6, column: 0,
							alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top,
							name: 'TREEBUTTON' },
							$(go.TextBlock, " Click to open a new text box ", { margin: 2 } ) ),	// FROM https://gojs.net/latest/intro/buttons.html		

					),
						
													
				),

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
		setupDiagram( {{ std | safe }}, {{ gts_arr |  safe}} , {{ num_of_nodes |  safe}} );
						
    }

	
	let nodeDataArray = [];  // NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNode Data Array
	
	
    function setupDiagram(std, gts_arr, num_of_nodes) { ///////////////////// SET DIAGRAM - ////////////////////////////////////
		set_nodes( std, gts_arr )  ///////////////////// SET DIAGRAM - ////////////////////////////////////
		
		console.log("NODEARRAY ", nodeDataArray)
		
		myFullDiagram.model = new go.TreeModel(nodeDataArray);

	}	

	   
	
function set_nodes( std, gts_arr )  { 

	let parent_key
	let count = 0
	
	parent_key = std.id
	
	console.log("COUNT GT.ID ", count++, std.id)	
	set_gt_node(std, 0)	
		
	//console.log( "GETS_ARR ", gts_arr )

	for ( let i=0; i<(gts_arr.length)-1; i++ )  {  
		gt_arr = gts_arr[i]	 // PARENT LEVEL ARRAY
		
		for (let j=0; j<gt_arr.length; j++) {  
			parent_gt = parseData(gt_arr[j])
   			
			console.log("")
			console.log( "parent_gt ", parent_gt.id )
			
			console.log("COUNT GT.ID ", count++, parent_gt.id)
			set_gt_node(parent_gt, parent_key)  // PARENT LEVEL NODE
			
			child_arr = gts_arr[i+1]  //CHILD LEVEL ARRAY
			parent_key = parent_gt.id
			
			for (let k=0; k<child_arr.length; k++)  {  				
				child_gt = parseData(child_arr[k])
				
				console.log("COUNT GT.ID ", count++, child_gt.id)				
				set_gt_node(child_gt, parent_key)  // CHILD LEVEL NODE
			}
		}
	}
}		



function set_gt_node(gt, parent_key)  {
			
		gt_node_struct = {
			
		key:      gt.id, 	
		parent:   parent_key,
		
		source:   gt.image_url,
		name:     gt.id,
		title:    gt.title,	

		category: gt.class_name,
		id:       gt.id,
		method:   gt.method,
		e_name:   gt.e_name,
		h_name:   gt.h_name,
		body:     gt.body,
		
		color:         gt.color,
		gt_background: "lightgray",
		grayed:        "true",
		highlited:     "false",	
	
	} 
	
	//console.log("CRETED NODE ", gt.id)
	
	nodeDataArray.push( gt_node_struct );

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
		
		source:   parent_gt.image_url,
		
		name:     parent_gt.id,
		id:     parent_gt.id,
		title:    parent_gt.title,	

		category: parent_gt.class_name,
		id:       parent_gt.id,
		method:   parent_gt.method,
		e_name:   parent_gt.e_name,
		h_name:   parent_gt.h_name,
		body:     parent_gt.body,
		
		color:         parent_gt.color,
		gt_background: "lightgray",
		grayed:        "true",
		highlited:     "false",	
		
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


// SWITCH NODE BETWEEN GRAY AND COLOR
function switchNodeColor() {
	
	//diagram.startTransaction("snc");
	
	let selected_node = myFullDiagram.selection.first();
	
	if (selected_node.data.gt_background == "lightgray")
		myFullDiagram.model.setDataProperty(selected_node.data, "gt_background", selected_node.data.color); //Retrieve the original dat	
	else	
		myFullDiagram.model.setDataProperty(selected_node.data, "gt_background", "lightgray"); //GRAY THE NODE	
	
	//diagram.commitTransaction("snc");
	
	return
	
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