def print_and_jsonify_gt_2(gts, json_g):
  
    #DEBUG
    print("")

    if gt==None and gt==[]:
        return
        
    for gt in gts:
        json_g.append( {"GT": gt.set_json_obj(), "CHILDREN": child_arr} )    

        if gt.id in gt_done:
            print("Not DOING gt number {0} it is in {1}".format(gt.id, gt_done))
            break
            
            child_arr.append( print_and_jsonify_gt(gt.children, json_g ) )
         
    print("")
    print("")
    json_g = json.dumps(json_g, indent=5)

    gt_done.append(gt.id)

    print("")
    gt.json = json_g
    db.session.commit()

    return json_g