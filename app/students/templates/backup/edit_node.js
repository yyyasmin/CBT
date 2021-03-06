<script>
var jq = $.noConflict(); // let go have the $ symbol, use jq for jquery.

  var $ = go.GraphObject.make;
  var myDiagram = $(go.Diagram, "myDiagram",
       { initialContentAlignment: go.Spot.Center } // Center Diagram contents
	)

  // Custom text edit element & functions - hooked up to textBlock at ln 52.
  // Works by placing a pre-existing html element over the gojs textBlock then
  // saving the text when the edit end event is triggered.
	var customText = document.getElementById("customTextEditor"); 


customText.select=function(e) {
  // by default gojs will select all current text in the textBlock - adding this function to eat the select event stops that happening.
}



    // Listen for the end of a text edit and put text back into textBlock when received.
  myDiagram.addDiagramListener('TextEdited', function(e){
    var ta=jq('#customTextEditor')
    e.subject.text = ta.val()  
  }) 
 
function theButtonProcessor(e, obj) {

  var nodeData =  {key: 777, category: 'note', loc: new go.Point(50,50), text: 'Initial text',
                   width: 300, height:80}

  myDiagram.model.addNodeData(nodeData);
  
  var oNode = myDiagram.findPartForKey(nodeData.key) // get the node we just added to the diagram
  var txtNode = oNode.findObject('cmntText') // get a handle for the textBlock
  
  if (txtNode instanceof go.TextBlock && myDiagram.commandHandler.canEditTextBlock(txtNode)) {
    
    /* We are ok to start the editor, but gojs needs a split sec to position the new node on the diagram so use a timeout to achieve that.  */
    setTimeout(function() {
      txtNode.isSelected = true
      doEdit(oNode, txtNode)
      //myDiagram.commandHandler.editTextBlock(txtNode);
    }, 100)
    
  }
  
}
var btnBrush=$(go.Brush, go.Brush.Linear,{ 0.0: "white", 1.0: "silver" })
var btnBrush1=$(go.Brush, go.Brush.Linear,{ 0.0: "#3cb0fd", 1.0: "#3498db" })

  var noteTemplate =
    $(go.Node, "Auto", 
      { resizable: true
      , selectionChanged: function (node) {
                doEdit(node);
            }}
      , new go.Binding("location", "loc")
      , new go.Binding("width", "width") 
      , new go.Binding("height", "height", function(h) { return h + 60}) 
			// Define node shape & fill
      , $(go.Shape
           , "RoundedRectangle"
           , {strokeWidth: 0, fill: 'gold'}
          )    
			
      // The text display textBlock and surrounding panel for padding.      
      , $(go.Panel, "Auto", 
          { padding: 5, areaBackground: "#f0f0f0"}, // off-white so we can see it
          $(go.TextBlock, 
            { 
            	 name: 'cmntText'
             , editable: true 				// Better make it editable !
    				 , font: "11pt Arial"
             , areaBackground: "white"
            // , textEditor: customText  // hook up the custom text edit function 
            }
            // make size slightly smaller than panel to give padding to textBlock
           , new go.Binding("width", "width", function(w) { return w - 20}) 
           , new go.Binding("height", "height", function(h) { return h - 20}) 
           , new go.Binding("text", "text").makeTwoWay()  // couple text to model
          )

        , $(go.Panel, "Horizontal", { margin: 2, row: 3, width: 250, column: 0, position: new go.Point(0, 0), background: null }
          , $(go.Panel,  "Auto", {   mouseEnter: btnMouseEnter, mouseLeave: btnMouseLeave, height: 26 }
              , $(go.Shape, "RoundedRectangle", { name: "SHAPE", parameter1: 3, stroke: "silver", strokeWidth: 1, fill: btnBrush })
               , $(go.TextBlock, "Cancel", { name: "TEXT", font: "normal 8.5pt arial", margin: 3} )
                )
        )          
          
      )
      )
  
  var btnTemplate =
    $(go.Node, "Auto",
 			$("Button"
        , { click: theButtonProcessor }
        , $(go.TextBlock, "Add Node") 
  		 )
    );

  function btnMouseEnter(e, obj) {
    var shape = obj.findObject("SHAPE");
    shape.fill = btnBrush1;
  };


function btnMouseLeave(e, obj) {
    var shape = obj.findObject("SHAPE");
    // Return the Shape's fill and stroke to the defaults
    shape.fill =  btnBrush;
    // Return the TextBlock's stroke to its default
  };

		// Set up a node map list
    var templmap = new go.Map("string", go.Node);
    templmap.add("note", noteTemplate); 
    templmap.add("button", btnTemplate); 

    myDiagram.nodeTemplateMap = templmap    // link the map to the diagram
    
  myDiagram.model = new go.GraphLinksModel(
    [
      {category: 'button', loc: new go.Point(10,10)} // the button !
    ],
    []);

function doEdit(node, txtBlk){  // param is the text block !
	
	if (txtBlk instanceof go.TextBlock && myDiagram.commandHandler.canEditTextBlock(txtBlk)) {
       
  	var borderW = 4 // fixed border width
    var color = 'lime'
  
   // get the co-ords at which to place the html element
    var loc = node.getDocumentPoint(go.Spot.TopLeft);
    var pos = myDiagram.transformDocToView(loc);
  //alert(node.padding)
  	pos.x = pos.x + node.margin.left + node.padding.left
    pos.y = pos.y + node.margin.top

    
  	// Using jquery notation....(could all be combined but keep separate for clarity)
    var editDiv = jq('#editDiv')

    // reduce bling additions on html element
    editDiv.css({position: 'absolute', margin: 10, padding: 0, border: borderW + 'px solid ' + color, borderRadius: borderW, backgroundColor: color, zIndex: 10, overflow: 'visible', height: 'auto'})  // 
		
    // set the dimensions to match
    editDiv.css({width: node.width - (2 * borderW), height: node.height -  (2 * borderW)})
    
    // set the position to top left of the textBlock, and expose the textarea element
    editDiv.css({left: pos.x, top: pos.y, visibility: ''})
    
    // match the editor font to the textBlock 
    var txt = jq('#customTextEditor')
    var txtParent = txt.parent()
    txtParent.css({ border: 0, height: node.height - jq('#btns').outerHeight(true) - 10 })
    
    txt.css({margin: 5, 
             padding: 5, 
             border: 0, 
             width: txtParent.innerWidth() - 20, 
             height: txtParent.innerHeight() - 20, 
             font: txtBlk.font, 
             'outline': 'none', 
             'autocapitalize': 'on' })
    
    // put the current text into the text editor for editing.
    jq('#customTextEditor').val(txtBlk.text)
    
  }
}

</script>