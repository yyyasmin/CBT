
{% extends "layout.html" %}

	
{% block content %}

<!DOCTYPE html>
<html>
<head>

	<script src="https://gojs.net/latest//release/go.js"></script>
	<script src="https://gojs.net/latest/extensions/TextEditorRadioButtons.js"></script>
	<script src="https://gojs.net/latest/extensions/TextEditorSelectBox.js"></script>

	<meta charset="UTF-8">

  
{% include "std_title.html" %} 
 
 <script id="code">
 
    function init() {
		
      if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
	  
      var $ = go.GraphObject.make;  // for conciseness in defining templates
	  
	  
      myFullDiagram =
        $(go.Diagram, "fullDiagram",  // each diagram refers to its DIV HTML element by id
          {
			
			// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/customTextEditingTool.html 
			// FOR EDITABLE SELECT
			// default text editor is now a SelectBox
			"textEditingTool.defaultTextEditor": window.TextEditorSelectBox, // defined in textEditorSelectBox.js
			"undoManager.isEnabled": true,			  
			  
            initialAutoScale: go.Diagram.UniformToFill,  // automatically scale down to show whole tree
            maxScale: 0.8,
            contentAlignment: go.Spot.Center,  // center the tree in the viewport
            isReadOnly: false,                 // allow user to change the diagram
            "animationManager.isEnabled": true,
            layout: $(go.TreeLayout,
                      { angle: 90, sorting: go.TreeLayout.SortingAscending }),
                      //{ angle: 180, sorting: go.TreeLayout.SortingAscending }),
            maxSelectionCount: 1,  
          });
		  
		// FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/customTextEditingTool.html
		// FROM https://gojs.net/latest/samples/customTextEditingTool.html
		var brush = new go.Brush(go.Brush.Linear);
		brush.addColorStop(0, "rgb(255, 211, 89)");
		brush.addColorStop(1, "rgb(255, 239, 113)");
		
      // Define a node template that is shared by both diagrams
      var myNodeTemplate =
			$
			(go.Node, "Auto",
			  { locationSpot: go.Spot.Center, },
			  new go.Binding("text", "key", go.Binding.toString),  // for sorting
			 // FROM http://keracad.org/site/intro/connectionPoints.html	  
			  { fromSpot: go.Spot.RightSide, toSpot: go.Spot.LeftSide },   // coming out from right side  going into at left side
				
    
			  
	<!-- FROM https://forum.nwoods.com/t/centering-textblocks-in-panels/7941/9  -->	
	
			$(go.Panel, "Vertical",
			//$(go.Panel, "Horizontal",
				new go.Binding("background", "color"),

						
					$(go.Picture,
						{ margin: 10, width: 90, height: 90, background: "red", alignment: go.Spot.Left, },
						new go.Binding("source") ),
						
					$(go.TextBlock,
						{
						  text: "One",
						  editable: true,
						  font: "bold 16pt Arial, Helvetica, sans-serif",
						  background: brush,
						  scale: 2,
						  // this specific TextBlock uses a RadioButtons for editing text
						  textEditor: window.TextEditorRadioButtons, // defined in textEditorRadioButtons.js
						  // this specific TextBlock has its own choices:
						  choices: ['One', 'Two', 'Three', 'Four']
						})
											
			) 					
				
        );

      myFullDiagram.nodeTemplate = myNodeTemplate;
	  
      // Define a basic link template

      var myLinkTemplate =
        $(go.Link,
          { routing: go.Link.Normal, selectable: true },
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

	
    // Create the tree model containing TOTAL nodes, with each node having a variable number of children
	let nodeDataArray = [];
	
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
	
	if ( parent_gt==[] || parent_gt==undefined ) {
		return
	}
		

	console.log( parent_gt.id, save_parent_id)
	
	parent_gt_node_struct = {
		key:    parent_gt.id,
		color:  parent_gt.color,
		id:     parent_gt.id,
		parent: save_parent_id,
	} 
		
	nodeDataArray.push( parent_gt_node_struct );

	if (parent_gt["CHILDREN"] == undefined || parent_gt["CHILDREN"] == [] )  {  	
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


function parseData(data) {
	if (!data) return {};
	if (typeof data === 'object') return data;
	if (typeof data === 'string') return JSON.parse(data);
}

	window.addEventListener('DOMContentLoaded', init);
	
  </script>
</head>


<body onload="init()">
<div id="sample">
  <div id="fullDiagram" style="height:1000px;width:100%;border:1px solid black;margin:2px"></div>

</div>
</body>
</html>
{% endblock %}