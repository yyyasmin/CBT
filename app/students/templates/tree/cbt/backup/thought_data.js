{% block t_data %}

	//{% for sts in statuss %}
		//{% if t.is_parent_of(sts) %}
			
			console.log("THOUGHT t", {{ t.id }} )
			
			nodeDataArray.push( {
				
			key: {{t.id}},
			parent: {{s.id}},

			fill_color: {{t.color}},
			gt_color: {{t.color}},
			source:  {{t.image_url}},
			h_name:  {{t.h_name}},
			
			name: {{t.title}},
			class_name:  {{t.class_name}},
			
			user_node: "false",
			in_user_path: "false",
					
			textEditable: false,
			editable: false,				
		
				//color: nodeDataArray[i].color,
				//source: "{{ url_for('static', filename='img/t3.PNG') }}",							

				//text_color: '{{ sts.color }}',
				//name: '{{ t.title }}',
				//status: 'סטאטוס: {{ sts.title }}',
			} );
																	
		//{% endif %}
	//{% endfor %}
				
{% endblock t_data %}
