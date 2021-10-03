			
        
@new_gt.route('/duplicate_gt', methods=['GET', 'POST'])
@login_required
def set_new_empy_gt(gt_to_copy):
   
    new_gt = eval(class_name)("Enter your title", "Enter your description", get_author_id() )	
   
    new_gt.title = "Enter your title"
    new_gt.body =  "Enter your body"     
    new_gt.image_url = gt_to_copy.image_url          
    new_gt.used = False 
    
    db.session.add(new_gt)    
    db.session.commit()       
    return new_gt   
	