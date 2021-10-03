{% block behaviors_data_3 %}

	console.log("behavior.parent_id", emotion.id, behavior.parent_id)
	
	nodeDataArray.push( {
		key: behavior.id,
		parent: behavior.parent_id,

		fill_color: behavior.color,
		gt_color: behavior.color,
		source:  behavior.image_url,
		h_name:  behavior.h_name,
		
		name: behavior.title,
		class_name:  behavior.class_name,
			
		textEditable: "false",
		editable: "false",
		
		user_node: false,
		in_user_path: false,
	

	} );
	
	console.log("BEHAVIOR-ID", behavior.id, behavior.title,)
												
		
{% endblock behaviors_data_3 %}

