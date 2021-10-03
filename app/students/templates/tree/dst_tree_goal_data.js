{% block thought_data_3 %}
		
	nodeDataArray.push( {
		key: thought.id,
		parent: dest.id,

		fill_color: thought.color,
		gt_color: thought.color,
		source:  thought.image_url,
		h_name:  thought.h_name,
		
		name: thought.title,
		class_name:  thought.class_name,
		
		user_node: "false",
		in_user_path: "false",

		//text_color: sts.color,
		//status: sts.title,
	} );
																	
				
{% endblock thought_data_3 %}
