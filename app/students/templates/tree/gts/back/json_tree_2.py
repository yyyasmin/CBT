@login_required
def json_tree(gt, family_tree):

    j_tree =  {   
                  "class_name": gt.class_name, 
                  "gt_type":    gt.gt_type, 
                  "id":         gt.id,
                  "title":      gt.title,
                  "body":       gt.body ,
                  "h_name":     gt.h_name ,
                  "e_name":     gt.e_name ,
                  "CHILDREN" :  []
                  }
                  
    global gt_done    

    gt_done.append(gt.id)

    for c in gt.children:

        if c.id in gt_done:
            print("Not DOING gt number {0} it is in {1}".format(c.id, gt_done))
            return json.dumps(j_tree)
            
        print("")
        
        if c==None or c==[] and c.gt_type != 'family_tree':
            return json.dumps(j_tree)

        j_tree["CHILDREN"].append(json_tree(c, family_tree))
            
    return json.dumps(j_tree)  # WITHOUT THIS JS CAN NOT READ IT
    return j_tree
    