 
@std.route('/j_flat_tree', methods=['GET', 'POST'])
@login_required
def j_flat_tree():

    std = j_student_layer()
    si = j_situation_layer()
    th = j_thought_layer()
    em = j_emotion_layer()
    be = j_behavior_layer()
    re = j_result_layer()
    
    
    std.["CHILDREN"].append( si )
    si.["CHILDREN"].append( th )
    th.["CHILDREN"].append( em )
    em.["CHILDREN"].append( be )
    be.["CHILDREN"].append( re )
    
@std.route('/j_student_layer', methods=['GET', 'POST'])
@login_required
def j_student_layer():

    std = Student.query.filter(Student.id == std_id).first()
        
        j_flat_tree =  {   
                  "class_name": std.class_name, 
                  "gt_type":    std.gt_type, 
                  "method":     std.gt_type, 
                  "id":         std.id,
                  "title":      std.title,
                  "body":       std.body ,
                  "h_name":     std.h_name ,
                  "e_name":     std.e_name ,
                  "color":      std.color ,
                  "image_url":  std.image_url,

                  "CHILDREN" :  [],
                  "BROTHERS" :  [],
                  }
                  
    print(" J_FLAT-TREE" : ", j_flat_tree)
    print("")
    print("")
    return j_flat_tree

