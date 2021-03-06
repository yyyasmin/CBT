{% extends "layout.html" %} 

{% block content %}

<style type="text/css">
ul.tabs {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul.tabs>li.tab {
  flex: 1;
  text-align: center;
  /* just adding visibility to the tabs */
  border: 1px solid rgba(0,0,0,.12); 
  padding: 10px;
}


input {
	width: 100%;
}

#submit_button {
	display: block;
	margin: 0 auto;
	width:fit-content;
}

</style>

<div class="container" id="container_dst_add_id">	

	<!-- FROM https://www.tutorialspoint.com/flask/flask_wtf.htm -->		
	<!-- <div style = "font-size:20px; font-weight:bold;  float:right; text-align:center; width:100%"> -->
	<div style = "text-align:center; width:100%">
		<fieldset>
			<form method="post" action="{{ url_for('destinations.dsply_dst_form', from_dst_sort_order=from_dst_sort_order) }}">
				
				<div>
					<legend>הוסף מטרה חדשה:</legend>
					{{ form.hidden_tag() }}
				</div>
					
				{{ form.csrf_token }}


				<ul class="tabs">
					<li class="tab " id="tab-2"><span class="tab-title"> 
						<div id="ar_div">
							<div> {{form.ar.label}}: {{form.ar}} </div>
							{% if form.ar.errors %}
								<ul class=errors>
									{% for error in form.ar.errors %}
										<li>{{ error }}</li>
									{% endfor %}
								</ul>
							{% endif %}
						</div>   <!-- ar_div -->
					</li>
				
				
					<li class="tab " id="tab-3"><span class="tab-title">
						<div id="tag_div">
							<div> {{form.tag.label}}: {{form.tag}} </div>
							{% if form.tag.errors %}
								<ul class=errors>
									{% for error in form.tag.errors %}
										<li>{{ error }}</li>
									{% endfor %}
								</ul>
							{% endif %}
						</div>   <!-- tag_div -->
					</li>
				
				
					<li class="tab " id="tab-4"><span class="tab-title">
						<div id="tag_div">
							<div> {{form.scrt.label}}: {{form.scrt}} </div>
							{% if form.scrt.errors %}
								<ul class=errors>
									{% for error in form.scrt.errors %}
										<li>{{ error }}</li>
									{% endfor %}
								</ul>
							{% endif %}
						</div>   <!-- scrt_div -->
					</li>
				</ul>

				<br><br>
				
				<div id="dst_title_div">
					<div> {{form.dst_title.label}}: {{form.dst_title}}  </div>
					{% if form.dst_title.errors %}
						<ul class=errors>
							{% for error in form.dst_title.errors %}
								<li>{{ error }}</li>
							{% endfor %}
						</ul>
					{% endif %}
				</div>

				<br><br>
				
				<div id="dst_body_div">
					<div> {{form.dst_body.label}}: {{form.dst_body}} </div>
					{% if form.dst_body.errors %}
						<ul class=errors>
							{% for error in form.dst_body.errors %}
								<li>{{ error }}</li>
							{% endfor %}
						</ul>
					{% endif %}
				</div>
				
				<br><br>
				
				<div id="submit_button"> {{form.submit}} </div>
				
				<br>
				
			</form>
		</fieldset>
	</div>
	<!-- FROM https://www.tutorialspoint.com/flask/flask_wtf.htm -->					

</div>  <!-- class="container -->


<!-- FROM https://github.com/PrettyPrinted/dynamic_select_flask_wtf_javascript -->
<script>
	var ar_select = document.getElementById("ar");
	var tag_select = document.getElementById("tag");

	ar_select.onchange = function()  {
		 
		ar = ar_select.value;
		
		fetch('/tag/' + ar).then(function(response) {

			response.json().then(function(data) {
				var optionHTML = '';

				for (var tag of data.tags) {
					optionHTML += '<option value="' + tag.id + '">' + tag.title + '</option>';
				}

				tag_select.innerHTML = optionHTML;
			})
			
		});
	}
</script>

<script>
	vtag tag_select = document.getElementById("tag");
	vtag scrt_select = document.getElementById("scrt");

	tag_select.onchange = function()  {
		 
		tag = tag_select.value;
		
		fetch('/scrt/' + tag).then(function(response) {

			response.json().then(function(data) {
				vtag optionHTML = '';

				for (vtag scrt of data.scrts) {
					optionHTML += '<option value="' + scrt.id + '">' + scrt.title + '</option>';
				}

				scrt_select.innerHTML = optionHTML;
			})
			
		});
	}
</script>
<!-- FROM https://github.com/PrettyPrinted/dynamic_select_flask_wtf_javascript -->


{% endblock %}