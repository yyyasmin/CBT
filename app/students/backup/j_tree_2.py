	
gt_not_in_gt_type = []
sts_color_set = False
gt_done = []
num_of_nodes = 0 

   
# FROM https://stackoverflow.com/questions/3093352/python-object-assignment-with-variable-argument-list
@std.route('/json_tree_by_loop', methods=['GET', 'POST'])
@login_required
def json_tree_by_loop(gt, family_tree):
    
    return tree_node(gt, family_tree)


# FROM https://stackoverflow.com/questions/3093352/python-object-assignment-with-variable-argument-list
@std.route('/tree_node', methods=['GET', 'POST'])
@login_required
def tree_node(parent_gt, family_tree):

	
    global gt_not_in_gt_type
    global sts_color_set
    global gt_done
    global num_of_nodes

    print("PARENT ROOT - GT ",  parent_gt)

    j_tree =  {   
              "class_name": parent_gt.class_name, 
              "gt_type":    parent_gt.gt_type, 
              "id":         parent_gt.id,
              "title":      parent_gt.title,
              "body":       parent_gt.body ,
              "h_name":     parent_gt.h_name ,
              "e_name":     parent_gt.e_name ,
              "color":      parent_gt.color ,
              "image_url":  parent_gt.image_url,
              #"sts_color":  parent_gt.sts_color,
              #"sts_title":  parent_gt.sts_title,

              "CHILDREN" :  []
              }
              
    gt_done.append(parent_gt.id)
    db.session.commit()
    num_of_nodes = num_of_nodes+1       
    print("N ", num_of_nodes)
    print("")

    if parent_gt.children==None or parent_gt.children==[]:
        print(" GT {0} HS NO CHILDREN".format(parent_gt))
        print("")
      
    for child_gt in parent_gt.children:
            
        if child_gt==None or child_gt==[]: 
            print("")
            continue
   
        if child_gt.class_name == 'Status':
            sts_color = child_gt.color
            sts_title = child_gt.title
            sts_color_set = 1
            print("CHILD IS STATUS TYPE ")
            print("")
            continue

        if child_gt.id in gt_done:
            print("NOT DOING {0} IT IS ALREADY DONE AND IT IS IN {1}".format(child_gt, gt_done) )
            print("")
            continue
                                
        if child_gt.class_name == 'Person' or child_gt.class_name == 'Situation' or child_gt.class_name == 'Thought' or child_gt.class_name == 'Emotion' or child_gt.class_name == 'Behavior' or child_gt.class_name == 'Result':
            child_gt.gt_type = 'CBT'
            path_base = 'CBT'
        else:
            child_gt.gt_type = child_gt.class_name
            gt_not_in_gt_type.append(child_gt.id)
            continue
            
        db.session.commit()
                                    
        if child_gt.gt_type != family_tree or child_gt.id in gt_not_in_gt_type:
            print("Not DOING gt  {0}  it is NOT IN FAMILY TYPE {1} and it is in {2}: ".format(child_gt, family_tree, gt_not_in_gt_type ))
            print("")
            continue
            
        print("DOING CHILD - GT IS   ", child_gt)

        j_tree["CHILDREN"].append(    {   
                  "class_name": child_gt.class_name, 
                  "gt_type":    child_gt.gt_type, 
                  "id":         child_gt.id,
                  "title":      child_gt.title,
                  "body":       child_gt.body ,
                  "h_name":     child_gt.h_name ,
                  "e_name":     child_gt.e_name ,
                  "color":      child_gt.color ,
                  "image_url":  child_gt.image_url,
                  #"sts_color":  child_gt.sts_color,
                  #"sts_title":  child_gt.sts_title,

                  "CHILDREN" :  []
                  } )
                  
        if sts_color_set:
            j_tree.append( {"sts_color": sts_color, "sts_title": sts_title} )
            sts_color_set = 0

        gt_done.append(child_gt.id)
        db.session.commit()
        num_of_nodes = num_of_nodes+1
        
        

    print("N ", num_of_nodes)
    print("")    
    return j_tree
	

