@login_required
def json_tree(gt, family_tree):
                  }
                  
        global gt_done    

        gt_done.append(gt.id)


        if gt.id in gt_done:
            print("Not DOING gt number {0} it is in {1}".format(gt.id, gt_done))
            return json.dumps(j_tree)
            
        print("")
        
        if gt==None or gt==[] or gt.gt_type != 'family_tree':
            return json.dumps(j_tree)
 
    j_tree =  {   
                  "class_name": gt.class_name, 
                  "gt_type":    gt.gt_type, 
                  "id":         gt.id,
                  "title":      gt.title,
                  "body":       gt.body ,
                  "h_name":     gt.h_name ,
                  "e_name":     gt.e_name ,
                  "CHILDREN" :  []
       '''
        if c.id in gt_done:
            print("Not DOING gt number {0} it is in {1}".format(c.id, gt_done))
            break
        '''
        #if c!=None and c!=[] and c.id not in gt_done and gt.gt_type == 'family_tree':
        
        j_tree["CHILDREN"].append(json_tree(c, family_tree))
            
    print_tree(j_tree)
    return json.dumps(j_tree)
    