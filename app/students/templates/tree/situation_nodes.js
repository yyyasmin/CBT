{% block dst_data_3 %}

	nodeDataArray.push( {
		key: situation.id,
		parent: 0, 

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
