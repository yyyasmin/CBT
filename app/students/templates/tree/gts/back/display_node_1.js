
def display_node(i, gts, branch_color)  {
		
	let parent_idx = i			

    if ( gts==undefined || gts==Null ||  gts==[] )
        return

    if (gts.len <2)  {  // SINGLE GT
	
		let single_g = gts

    	console.log("single_g", parseData(single_g))

        let single_g = gts
        			
		nodeDataArray.push({
			key: i,
			color: branch_color,
			fill: "black",
			"id": single_g["GT"].id,
			"class_name": new_gt["GT"].class_name,
			"title": single_g["GT"].title,
			"body": single_g["GT"].body
		} );
		display_node( ++i, parseData(single_g["CHILDREN"]), branch_color )   		
		nodeDataArray[i].parent = nodeDataArray[parent_idx].key;   // ASSIGN I NODE t PARENRT_IDX PARENT
		branch_color = save_root_branch_color
	}
	
	for gt in gts:   #CHILDREN ARRAY                                   
		return display_node(++i, parseData(gt), go.Brush.randomColor() ) 
}
