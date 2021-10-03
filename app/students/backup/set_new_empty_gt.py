			
        
@gt.route('/set_new_empty_gt', methods=['GET', 'POST'])
@login_required
def set_new_empty_gt(gt_to_copy):
   
    gt = eval(class_name)("Enter your title", "Enter your description", get_author_id() )	
    gt.used = False    
    db.session.add(gt)    
    db.session.commit()       
    return redirect(gt)   
	