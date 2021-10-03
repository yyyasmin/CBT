<!--  FROM https://github.com/NorthwoodsSoftware/GoJS/blob/master/samples/decisionTree.html -->


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
	<script src="../assets/js/goSamples.js"></script>  <!-- this is only for the GoJS Samples framework -->


	<!-- FROM https://gojs.net/latest/learn/index.html -->
	<script src="go-debug.js"></script>
	<!-- FROM https://gojs.net/latest/learn/index.html -->


	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"/>
	<meta name="description" content="Interactive decision diagram with automatic expansion as the user makes choices."/> 
	<link rel="stylesheet" href="../assets/css/style.css"/> 
	<!-- Copyright 1998-2021 by Northwoods Software Corporation. -->
	<title>Decision Tree</title>



	{% include "std_title.html" %} 

</head>

<body>
  <!-- This top nav is not part of the sample code -->
  <nav id="navTop" class="w-full z-30 top-0 text-white bg-nwoods-primary">
    <div class="w-full container max-w-screen-lg mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between mt-0 py-2">
      <div class="md:pl-4">
        <a class="text-white hover:text-white no-underline hover:no-underline
        font-bold text-2xl lg:text-4xl rounded-lg hover:bg-nwoods-secondary " href="../">
          <h1 class="mb-0 p-1 ">GoJS</h1>
        </a>
      </div>
      <button id="topnavButton" class="rounded-lg sm:hidden focus:outline-none focus:ring" aria-label="Navigation">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path id="topnavOpen" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path id="topnavClosed" class="hidden" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <div id="topnavList" class="hidden sm:block items-center w-auto mt-0 text-white p-0 z-20">
        <ul class="list-reset list-none font-semibold flex justify-end flex-wrap sm:flex-nowrap items-center px-0 pb-0">
          <li class="p-1 sm:p-0"><a class="topnav-link" href="../learn/">Learn</a></li>
          <li class="p-1 sm:p-0"><a class="topnav-link" href="../samples/">Samples</a></li>
          <li class="p-1 sm:p-0"><a class="topnav-link" href="../intro/">Intro</a></li>
          <li class="p-1 sm:p-0"><a class="topnav-link" href="../api/">API</a></li>
          <li class="p-1 sm:p-0"><a class="topnav-link" href="https://www.nwoods.com/products/register.html">Register</a></li>
          <li class="p-1 sm:p-0"><a class="topnav-link" href="../download.html">Download</a></li>
          <li class="p-1 sm:p-0"><a class="topnav-link" href="https://forum.nwoods.com/c/gojs/11">Forum</a></li>
          <li class="p-1 sm:p-0"><a class="topnav-link" href="https://www.nwoods.com/contact.html"
           target="_blank" rel="noopener" onclick="getOutboundLink('https://www.nwoods.com/contact.html', 'contact');">Contact</a></li>
          <li class="p-1 sm:p-0"><a class="topnav-link" href="https://www.nwoods.com/sales/index.html"
           target="_blank" rel="noopener" onclick="getOutboundLink('https://www.nwoods.com/sales/index.html', 'buy');">Buy</a></li>
        </ul>
      </div>
    </div>
    <hr class="border-b border-gray-600 opacity-50 my-0 py-0" />
  </nav>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full max-w-screen-xl mx-auto">
    <div id="navSide" class="flex flex-col w-full md:w-48 text-gray-700 bg-white flex-shrink-0"></div>
    <!-- * * * * * * * * * * * * * -->
    <!-- Start of GoJS sample code -->
    
    <script src="../release/go.js"></script>
    <div class="p-4 w-full">
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,500' rel='stylesheet' type='text/css'>
    <script id="code">
	
				 	
    function init() {
      var $ = go.GraphObject.make;  // for conciseness in defining templates

      myDiagram = $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
        {
          initialContentAlignment: go.Spot.Left,
          allowSelect: false,  // the user cannot select any part
          // create a TreeLayout for the decision tree
          layout: $(go.TreeLayout)
        });

      // custom behavior for expanding/collapsing half of the subtree from a node
      function buttonExpandCollapse(e, port) {
        var node = port.part;
        node.diagram.startTransaction("expand/collapse");
        var portid = port.portId;
        node.findLinksOutOf(portid).each(function(l) {
          if (l.visible) {
            // collapse whole subtree recursively
            collapseTree(node, portid);
          } else {
            // only expands immediate children and their links
            l.visible = true;
            var n = l.getOtherNode(node);
            if (n !== null) {
              n.location = node.getDocumentPoint(go.Spot.TopRight);
              n.visible = true;
            }
          }
        });
        myDiagram.toolManager.hideToolTip();
        node.diagram.commitTransaction("expand/collapse");
      }

      // recursive function for collapsing complete subtree
      function collapseTree(node, portid) {
        node.findLinksOutOf(portid).each(function(l) {
          l.visible = false;
          var n = l.getOtherNode(node);
          if (n !== null) {
            n.visible = false;
            collapseTree(n, null);  // null means all links, not just for a particular portId
          }
        });
      }

      // get the text for the tooltip from the data on the object being hovered over
      function tooltipTextConverter(data) {
        var str = "";
        var e = myDiagram.lastInput;
        var currobj = e.targetObject;
        if (currobj !== null && (currobj.name === "ButtonA" ||
          (currobj.panel !== null && currobj.panel.name === "ButtonA"))) {
          str = data.aToolTip;
        } else {
          str = data.bToolTip;
        }
        return str;
      }

      // define tooltips for buttons
      var tooltipTemplate =
        $("ToolTip",
          { "Border.fill": "whitesmoke", "Border.stroke": "lightgray" },
          $(go.TextBlock,
            {
              font: "8pt sans-serif",
              wrap: go.TextBlock.WrapFit,
              desiredSize: new go.Size(200, NaN),
              alignment: go.Spot.Center,
              margin: 6
            },
            new go.Binding("text", "", tooltipTextConverter))
        );

      // define the Node template for non-leaf nodes
      myDiagram.nodeTemplateMap.add("decision",
        $(go.Node, "Auto",
          new go.Binding("text", "key"),
          // define the node's outer shape, which will surround the Horizontal Panel
          $(go.Shape, "Rectangle",
            { fill: "whitesmoke", stroke: "lightgray" }),
          // define a horizontal Panel to place the node's text alongside the buttons
          $(go.Panel, "Horizontal",
            $(go.TextBlock,
              { font: "30px Roboto, sans-serif", margin: 5 },
              new go.Binding("text", "key")),
            // define a vertical panel to place the node's two buttons one above the other
            $(go.Panel, "Vertical",
              { defaultStretch: go.GraphObject.Fill, margin: 3 },
              $("Button",  // button A
                {
                  name: "ButtonA",
                  click: buttonExpandCollapse,
                  toolTip: tooltipTemplate
                },
                new go.Binding("portId", "a"),
                $(go.TextBlock,
                  { font: '500 16px Roboto, sans-serif' },
                  new go.Binding("text", "aText"))
              ),  // end button A
              $("Button",  // button B
                {
                  name: "ButtonB",
                  click: buttonExpandCollapse,
                  toolTip: tooltipTemplate
                },
                new go.Binding("portId", "b"),
                $(go.TextBlock,
                  { font: '500 16px Roboto, sans-serif' },
                  new go.Binding("text", "bText"))
              )  // end button B
            )  // end Vertical Panel
          )  // end Horizontal Panel
        ));  // end Node and call to add

      // define the Node template for leaf nodes
      myDiagram.nodeTemplateMap.add("personality",
        $(go.Node, "Auto",
          new go.Binding("text", "key"),
          $(go.Shape, "Rectangle",
            { fill: "whitesmoke", stroke: "lightgray" }),
          $(go.TextBlock,
            {
              font: '13px Roboto, sans-serif',
              wrap: go.TextBlock.WrapFit, desiredSize: new go.Size(200, NaN), margin: 5
            },
            new go.Binding("text", "text"))
        ));

      // define the only Link template
      myDiagram.linkTemplate =
        $(go.Link, go.Link.Orthogonal,  // the whole link panel
          { fromPortId: "" },
          new go.Binding("fromPortId", "fromport"),
          $(go.Shape,  // the link shape
            { stroke: "lightblue", strokeWidth: 2 })
        );

      // create the model for the decision tree
      var model =
        $(go.GraphLinksModel,
          { linkFromPortIdProperty: "fromport" });
      // set up the model with the node and link data
      makeNodes(model, {{json_person|safe}} ); //##############################################################
      makeLinks(model);
      myDiagram.model = model;

      // make all but the start node invisible
      myDiagram.nodes.each(function(n) {
        if (n.text !== "Start") n.visible = false;
      });
      myDiagram.links.each(function(l) {
        l.visible = false;
      });
    }
	
	
    // Create the tree model containing TOTAL nodes, with each node having a variable number of children
	let nodeDataArray = [];
	
    function makeNodes(model, gt) { ///////////////////// SET DIAGRAM - ////////////////////////////////////

		display_node( model, i, gt, go.Brush.randomColor() )  ///////////////////// SET DIAGRAM - ////////////////////////////////////


      // Provide the same choice information for all of the nodes on each level.
      // The level is implicit in the number of characters in the Key, except for the root node.
      // In a different application, there might be different choices for each node, so the initialization would be above, where the Info's are created.
      // But for this application, it makes sense to share the initialization code based on tree level.
      for (var i = 0; i < nodeDataArray.length; i++) {
        var d = nodeDataArray[i];
        if (d.key === "Start") {
          d.category = "decision";
          d.a = "CBT";
          d.aText = "CBTntroversion";
          d.aToolTip = "The Introvert is “territorial” and desires space and solitude to recover energy.  Introverts enjoy solitary activities such as reading and meditating.  25% of the population.";
          d.b = "ABA";
          d.bText = "ABAxtraversion";
          d.bToolTip = "The Extravert is “sociable” and is energized by the presence of other people.  Extraverts experience loneliness when not in contact with others.  75% of the population.";
        } else {
          switch (d.key.length) {
            case 1:
              d.category = "decision";
              d.a = "N";
              d.aText = "CBTntuition";
              d.aToolTip = "The “intuitive” person bases their lives on predictions and ingenuity.  They consider the future and enjoy planning ahead.  25% of the population.";
              d.b = "S";
              d.bText = "Sensing";
              d.bToolTip = "The “sensing” person bases their life on facts, thinking primarily of their present situation.  They are realistic and practical.  75% of the population.";
              break;
            case 2:
              d.category = "decision";
              d.a = "T";
              d.aText = "Thinking";
              d.aToolTip = "The “thinking” person bases their decisions on facts and without personal bias.  They are more comfortable with making impersonal judgments.  50% of the population.";
              d.b = "F";
              d.bText = "Feeling";
              d.bToolTip = "The “feeling” person bases their decisions on personal experience and emotion.  They make their emotions very visible.  50% of the population.";
              break;
            case 3:
              d.category = "decision";
              d.a = "J";
              d.aText = "Judgment";
              d.aToolTip = "The “judging” person enjoys closure.  They establish deadlines and take them seriously.  They despise being late.  50% of the population.";
              d.b = "P";
              d.bText = "Perception";
              d.bToolTip = "The “perceiving” person likes to keep options open and fluid.  They have little regard for deadlines.  Dislikes making decisions unless they are completely sure they are right.  50% of the population.";
              break;
            default:
              d.category = "personality";
              break;
          }
        }
      }
	  
		console.log("nodeDataArray", nodeDataArray)

		model.nodeDataArray = nodeDataArray;
	  
	// myFullDiagram.model = new go.TreeModel(nodeDataArray);
		
    }

    // The key strings implicitly hold the relationship information, based on their spellings.
    // Other than the root node ("Start"), each node's key string minus its last letter is the
    // key to the "parent" node.
    function makeLinks(model) {
      var linkDataArray = [];
      var nda = model.nodeDataArray;
      for (var i = 0; i < nda.length; i++) {
        var key = nda[i].key;
        if (key === "Start" || key.length === 0) continue;
        // e.g., if key=="CBTNTJ", we want: prefix="CBTNT" and letter="J"
        var prefix = key.slice(0, key.length - 1);
        var letter = key.charAt(key.length - 1);
        if (prefix.length === 0) prefix = "Start";
        var obj = { from: prefix, fromport: letter, to: key };
        linkDataArray.push(obj);
      }
      model.linkDataArray = linkDataArray;
    }
	
 
function display_node(gt) {
	/******************************************
		nodeDataArray.push({
		key: i,
		color: branch_color,
		fill: "black",
		id:   gt.id,
		e_name: gt.e_name,
		h_name: gt.h_name,
		name: gt.title,
		body: gt.body
	} );
	*********************************************/	
	nodeDataArray.push ({		
		key: gt.e_name + '\n' + gt.title + '\n' + gt.body + '\n' },  // the root node
	);

	for (c in gt.CHILDREN)  {
		if (c!=[] && c!=Null) {
			makeNodes(c)	
		}
	}
}	

	
	
	
	
    window.addEventListener('DOMContentLoaded', init);
  </script>
  
  


	<div id="sample">
		<div id="myDiagramDiv" style="background-color: white; border: solid 1px black; width: 100%; height: 500px"></div> 
	</div>
   
</body>

<script src="../assets/js/goSamples.js"></script>

</html>









{% endblock %}