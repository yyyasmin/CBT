        
@gt.route('/add_parent_to_gt<int:gt_id>/<int:parent_gt>', methods=['GET', 'POST'])
@login_required
def add_parent_to_gt(gt_id, parent_gt):

    #################import pdb; pdb.set_trace() 	
    author_id = current_user._get_current_object().id
    
    gt = General_txt.query.filter(General_txt.id == gt_id).first()
			
    if request.method == 'GET':
        return render_template('add_parent_to_gt.html', gt=gt)
        
    parent_gt = General_txt.query.filter(General_txt.id == parent_id).first()
    parent_gt.set_parent(gt)
    
    db.session.commit() 
        
    flash ("Parent {0} add to gt {1} successfully ".format(parent_gt.title, gt.title))
    
    return redirect(url_for('gts.edit_gts'))   

	        
@gt.route('/add_parent_to_gt2/<int:gt_id>', methods=['GET', 'POST'])
@login_required
def add_parent_to_gt2(gt_id):

    gt = general_txt_select2(gt.id)    
    return add_parent_to_gt(gt.id, 0)
    
    
	