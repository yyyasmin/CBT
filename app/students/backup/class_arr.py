


# FROM https://stackoverflow.com/questions/3093352/python-object-assignment-with-variable-argument-list
@std.route('/class_list', methods=['GET', 'POST'])
@login_required
def class_list(class_name):
    
    class_objs = eval(class_name).query.filter(eval(class_name).all()
    eval(class_name) = []
    
    for gt in class_objs:
        ft =  {   
              "class_name": gt.class_name, 
              "gt_type":    gt.gt_type, 
              "id":         gt.id,
              "title":      gt.title,
              "body":       gt.body ,
              "h_name":     gt.h_name ,
              "e_name":     gt.e_name ,
              "color":      gt.color ,
              "image_url":  gt.image_url }
        
        eval(class_name).append(ft)

    flat_tree_arr["eval(class_name)"].append(ft)
        
    return eval(class_name)
    
    
