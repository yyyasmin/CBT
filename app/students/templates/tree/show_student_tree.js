
{% extends "layout.html" %}

	
{% block content %}

<!-- from http://gojs.net/latest/samples/localView.html  -->
<!-- add a textbox for status from https://gojs.net/latest/intro/groups.html -->

<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Local View</title>
  <meta name="description" content="In one diagram show the whole tree and in a second diagram show a subset that is logically near a selected node." />
  <!-- Copyright 1998-2017 by Northwoods Software Corporation. -->
  <meta charset="UTF-8">
  <script src="../release/go.js"></script>
  <script src="../assets/js/goSamples.js"></script>   <!-- this is only for the GoJS Samples framework -->
  
  
  <!-- FROM https://gojs.net/latest/learn/index.html -->
  <script src="go-debug.js"></script>
  <!-- FROM https://gojs.net/latest/learn/index.html -->
  
{% include "std_title.html" %} 
 
 <script id="code">
 
    function init() {
      if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
      var $ = go.GraphObject.make;  // for conciseness in defining templates
      myFullDiagram =
        $(go.Diagram, "fullDiagram",  // each diagram refers to its DIV HTML element by id
          {
            initialAutoScale: go.Diagram.UniformToFill,  // automatically scale down to show whole tree
            maxScale: 0.25,
            contentAlignment: go.Spot.Center,  // center the tree in the viewport
            isReadOnly: true,  // don't allow user to change the diagram
            "animationManager.isEnabled": false,
            layout: $(go.TreeLayout,
                      { angle: 90, sorting: go.TreeLayout.SortingAscending }),
            maxSelectionCount: 1,  // only one node may be selected at a time in each diagram
            // when the selection changes, update the myLocalDiagram view
            "ChangedSelection": showLocalOnFullClick
          });
      myLocalDiagram =  // this is very similar to the full Diagram
        $(go.Diagram, "localDiagram",
          {
            autoScale: go.Diagram.UniformToFill,
            contentAlignment: go.Spot.Center,
            isReadOnly: true,
            layout: $(go.TreeLayout,
                      { angle: 90, sorting: go.TreeLayout.SortingAscending }),
            "LayoutCompleted": function(e) {
              var sel = e.diagram.selection.first();
              if (sel !== null) myLocalDiagram.scrollToRect(sel.actualBounds);
            },
            maxSelectionCount: 1,
            // when the selection changes, update the contents of the myLocalDiagram
            "ChangedSelection": showLocalOnLocalClick
          });
      // Define a node template that is shared by both diagrams
      var myNodeTemplate =
			$(go.Node, "Auto",
			  { locationSpot: go.Spot.Center, },
			  new go.Binding("text", "key", go.Binding.toString),  // for sorting
			  
	// <!-- FROM https://forum.nwoods.com/t/centering-textblocks-in-panels/7941/9  -->	
	
			$(go.Panel, "Vertical",
				new go.Binding("background", "color"),

						
					$(go.Picture,
						{ margin: 10, width: 50, height: 50, background: "red", alignment: go.Spot.Left, },
						new go.Binding("source")),
								
					$(go.TextBlock, {  margin: 5, stroke:"black", textAlign: "center", font: "12pt sans-serif" }, 
						new go.Binding("text", "name")),
						
					$(go.TextBlock, {  margin: 5, stroke:"black", textAlign: "center", font: "12pt sans-serif" }, 
						new go.Binding("text", "status"),
						new go.Binding("fill", "color2"),
						new go.Binding("stroke", "text_color")),
						
						
						
			)
		
	// <!-- FROM https://forum.nwoods.com/t/centering-textblocks-in-panels/7941/9  -->			
		
        );

      myFullDiagram.nodeTemplate = myNodeTemplate;
      myLocalDiagram.nodeTemplate = myNodeTemplate;
      // Define a basic link template, not selectable, shared by both diagrams

      var myLinkTemplate =
        $(go.Link,
          { routing: go.Link.Normal, selectable: false },
          $(go.Shape,
            { strokeWidth: 2 })
        );
		

      myFullDiagram.linkTemplate = myLinkTemplate;
      myLocalDiagram.linkTemplate = myLinkTemplate;
      // Create the full tree diagram
      setupDiagram();
	  
      // Create a part in the background of the full diagram to highlight the selected node
      highlighter =
        $(go.Part, "Auto",
          {
            layerName: "Background",
            selectable: false,
            isInDocumentBounds: false,
            locationSpot: go.Spot.Center
          },
          $(go.Shape, "Ellipse",
            {
              fill: $(go.Brush, "Radial", { 0.0: "yellow", 1.0: "white" }),
              stroke: null,
              desiredSize: new go.Size(400, 400)
            })
          );
		  
      myFullDiagram.add(highlighter);
 
      // Start by focusing the diagrams on the node at the top of the tree.
      // Wait until the tree has been laid out before selecting the root node.
      myFullDiagram.addDiagramListener("InitialLayoutCompleted", function(e) {
        var node0 = myFullDiagram.findPartForKey(0);
        if (node0 !== null) node0.isSelected = true;
        showLocalOnFullClick();
      });
    }
	
    // Make the corresponding node in the full diagram to that selected in the local diagram selected,
    // then call showLocalOnFullClick to update the local diagram.
    function showLocalOnLocalClick() {
      var selectedLocal = myLocalDiagram.selection.first();
      if (selectedLocal !== null) {
        // there are two separate Nodes, one for each Diagram, but they share the same key value
        myFullDiagram.select(myFullDiagram.findPartForKey(selectedLocal.data.key));
      }
    }
	
    function showLocalOnFullClick() {
      var node = myFullDiagram.selection.first();

      if (node !== null) {
        // make sure the selected node is in the viewport
        myFullDiagram.scrollToRect(node.actualBounds);
        // move the large yellow node behind the selected node to highlight it
        highlighter.location = node.location;
        // create a new model for the local Diagram
        var model = new go.TreeModel();
        // add the selected node and its children and grandchildren to the local diagram
        var nearby = node.findTreeParts(3);  // three levels of the (sub)tree
        // add parent and grandparent
        var parent = node.findTreeParentNode();
        if (parent !== null) {
          nearby.add(parent);
          var grandparent = parent.findTreeParentNode();
          if (grandparent !== null) {
            nearby.add(grandparent);
          }
        }
        // create the model using the same node data as in myFullDiagram's model
        nearby.each(function(n) {
            if (n instanceof go.Node) model.addNodeData(n.data);
          });
        myLocalDiagram.model = model;
        // select the node at the diagram's focus
        var selectedLocal = myLocalDiagram.findPartForKey(node.data.key);
        if (selectedLocal !== null) selectedLocal.isSelected = true;
      }
    }
	
	{% with std = std, student=std %}
		{% include ./gts/set_diagram.js %}
	{% endwith %}
			
			
  </script>
</head>


<body onload="init()">
<div id="sample">
  <div id="fullDiagram" style="height:250px;width:100%;border:1px solid black;margin:2px"></div>
  <div id="localDiagram" style="height:350px;width:100%;border:1px solid black;margin:2px"></div>

</div>
</body>
</html>
{% endblock %}