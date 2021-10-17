{% block solution_data %}

	let situation_already_in_diagram = false
	
	console.log ("IN SITUATION NODE situation:", std)
	
	for (let nkp_idx=0; nkp_idx<=nodesKeyPushed.length; nkp_idx++) {
		console.log ( "nodesKeyPushed-i", nkp_idx, nodesKeyPushed[nkp_idx] )
		if (nodesKeyPushed[nkp_idx] == situation.id )  {
			situation_already_in_diagram = true
			console.log ("This NODE ALLREADY IN DIAGRAM situation.id", situation.id, nodesKeyPushed)
			break;
		}
	}	
	
	
	if (!situation_already_in_diagram )  {
		
		nodesKeyPushed[nodesKeyPushed.length] = situation.id 
		
		nodeDataArray.push( {
			key: situation.id,
			//parent: situation.prnt_id,
			parent: std.id,

			fill_color:  situation.color,
			gt_color:    situation.color,
			source:      situation.image_url,
			h_name:      situation.h_name,
			
			name:        situation.title,
			class_name:  situation.class_name,
			
			user_node: "false",
			in_user_path: "false",
					
			textEditable: false,
			editable: false,
			
		} );
	
	}	
			
{% endblock solution_data %}
