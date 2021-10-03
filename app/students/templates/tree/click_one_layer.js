// FROM https://gojs.net/latest/intro/itemArrays.html

		$(go.Panel, "Table",

		new go.Binding("itemArray", "buttons"),  {
		
			defaultAlignment: go.Spot.Left,
			itemTemplate:
			$(go.Panel, "TableRow",
			
				new go.Binding("background", "row",
						   function(i) { return i%2 === 0 ? "lightgreen" : "transparent" }).ofObject(),
				
				$(go.TextBlock, new go.Binding("text", "name"),
				{ column: 0, margin: 2, font: "bold 10pt sans-serif" } ),
				
				$(go.TextBlock, new go.Binding("text", "id"),
				{ column: 1, margin: 2 } ),
			

				// FROM https://gojs.net/latest/intro/buttons.html		
				$("TreeExpanderButton",  {
					column: 4,
					margin: new go.Margin(0, 1, 0, 0),															
					alignment: go.Spot.Bottom,
					alignmentFocus: go.Spot.Top,
					name: 'TREEBUTTON' },
					
					$(go.Shape, "FivePointedStar",
					{ desiredSize: new go.Size(8, 8) } ),
					
					$(go.TextBlock, "פתח רמה הבאה", {  margin: 3 } ) ),	// FROM https://gojs.net/latest/intro/buttons.html
		
			)   // END TableRow
		
		} 	// END new go.Binding("itemArray", "buttons"),  {
			
	)   // END $(go.Panel, "Table",


diagram.model =
  $(go.GraphLinksModel,
    {
      nodeDataArray: [
        { key: "group1",
          buttons: [
            { name: "Alice", id: "2345" },
            { name: "Bob", id: "9876" },
            { name: "Carol", id: "1111" },
            { name: "Ted", id: "2222" },
            { name: "Robert", id: "5656" },
            { name: "Natalie", id: "5698" }
          ] }
      ]
    }
  );