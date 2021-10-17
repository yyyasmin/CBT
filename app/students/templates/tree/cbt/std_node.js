{% block std_data_3 %}

	let std_already_in_diagram = false
	
	console.log ("IN STD NODE std:", std)
	
	for (let nkp_idx=0; nkp_idx<=nodesKeyPushed.length; nkp_idx++) {
		console.log ( "nodesKeyPushed-i", nkp_idx, nodesKeyPushed[nkp_idx] )
		if (nodesKeyPushed[nkp_idx] == std.id )  {
			std_already_in_diagram = true
			console.log ("This NODE ALLREADY IN DIAGRAM std.id", std.id, nodesKeyPushed)
			break;
		}
	}	
	
	if (!std_already_in_diagram )  {
		
		nodesKeyPushed[nodesKeyPushed.length] = std.id 
	
		nodeDataArray.push( {
			key: std.id,
			parent: 0, 
			//parent: std.prnt_id,

			fill_color:  std.color,
			gt_color:    std.color,
			source:      std.image_url,
			h_name:      std.h_name,
			
			name:        std.title,
			class_name:  std.class_name,
			
			user_node: "false",
			in_user_path: "false",
					
			textEditable: false,
			editable: false,
			
		} );			
	}
	
{% endblock std_data_3 %}
