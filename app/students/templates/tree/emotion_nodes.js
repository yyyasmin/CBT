{% block emotions_data_3 %}

	console.log("emotion.parent_id", thought.id, emotion.parent_id)
	
	nodeDataArray.push( {
		key: emotion.id,
		parent: emotion.paren_id,

		fill_color: emotion.color,
		gt_color: emotion.color,
		source:  emotion.image_url,
		h_name:  emotion.h_name,
		
		name: emotion.title,
		class_name:  emotion.class_name,
		
		user_node: "false",
		in_user_path: "false",
				
		textEditable: false,
		editable: false,
		
		} );
												
		
{% endblock emotions_data_3 %}

