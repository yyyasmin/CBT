{% block dst_data_3 %}

	let situation_already_in_diagram = false
	
	console.log ("IN EMOTION NODE situation:", situation)
	
	for (let nkp_idx=0; nkp_idx<=nodesKeyPushed.length; nkp_idx++) {
		console.log ( "nodesKeyPushed-i", nkp_idx, nodesKeyPushed[nkp_idx] )
		if (nodesKeyPushed[nkp_idx] == situation.id )  {
			situation_already_in_diagram = true
			console.log ("This NODE ALLREADY IN DIAGRAM situation.id", situation.id, nodesKeyPushed)
			break;
		}
	}	
		
	nodeDataArray.push( {
		key: situation.id,
		//parent: 0, 
		parent: situation.prnt_id,

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
			
{% endblock dst_data_3 %}
