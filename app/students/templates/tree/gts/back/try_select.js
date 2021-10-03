
{% extends "layout.html" %}

	
{% block content %}


<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"/>
<meta name="description" content="Custom text editing using an HTML select box and some radio buttons."/> 
<link rel="stylesheet" href="../assets/css/style.css"/> 
<!-- Copyright 1998-2021 by Northwoods Software Corporation. -->
<title>Text Editing Examples</title>	
			
<!-- FROM https://gojs.net/latest/samples/customTextEditingTool.html -->
<!-- RadiButtons SELECT exrension -->
<script src="https://gojs.net/latest/extensions/TextEditorRadioButtons.js"></script>						
<script src="https://gojs.net/latest/extensions/TextEditorSelectBox.js"></script>						


{% include "std_title.html" %} 
 

    <script id="code">
    function init() {
      var $ = go.GraphObject.make;

      myDiagram = $(go.Diagram, "myDiagramDiv",  // must identify the DIV
        {
          // default text editor is now a SelectBox
          "textEditingTool.defaultTextEditor": window.TextEditorSelectBox, // defined in textEditorSelectBox.js
          "undoManager.isEnabled": true
        });

      var brush = new go.Brush(go.Brush.Linear);
      brush.addColorStop(0, "rgb(255, 211, 89)");
      brush.addColorStop(1, "rgb(255, 239, 113)");

      myDiagram.nodeTemplate =
        $(go.Node, "Vertical",
          {
            resizable: true,
            rotatable: true,
            locationSpot: go.Spot.Center
          },
          new go.Binding("location", "loc"),
          $(go.TextBlock,
            {
              text: "Alpha",
              editable: true,
              font: "32pt Georgia, serif",
              background: "lightblue"
            },
            new go.Binding("choices")),
          $(go.TextBlock,
            {
              text: "Beta",
              editable: true,
              font: "22pt Georgia, serif",
              background: "lightgreen",
              scale: 2
            },
            new go.Binding("choices")),
          $(go.TextBlock,
            {
              text: "Gamma",
              editable: true,
              font: "60pt Georgia, serif",
              background: "orangered",
              scale: 0.4
            },
            new go.Binding("choices")),
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
        );

      myDiagram.model = new go.GraphLinksModel(
        [
          { key: 1, choices: ['Alpha', 'Beta', 'Gamma', 'Theta'], loc: new go.Point(250, 150) },
          { key: 2, choices: ['Alpha', 'Beta', 'Gamma', 'Theta'], loc: new go.Point(50, 50) }
        ],
        [
          { from: 1, to: 2 }
        ]);
    }

    window.addEventListener('DOMContentLoaded', init);
  </script>

</head>


<body onload="init()">
<div id="sample">
  <div id="myDiagramDiv" style="height:1000px;width:100%;border:1px solid black;margin:2px"></div>

</div>
</body>
</html>

{% endblock %}