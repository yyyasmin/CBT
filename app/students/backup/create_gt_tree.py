json_tree = []
child_arr = []
gt_done = []
# FROM https://stackoverflow.com/questions/3093352/python-object-assignment-with-variable-argument-list
@std.route('/json_tree', methods=['GET', 'POST'])
@login_required
def json_tree(gt):
        
    #DEBUG
    print("")
    print(gt.class_name, gt.id, gt.title)
    json_tree.append( {"gt": {"class_name": gt.class_name, 
                             "id": gt.id,
                             "title": gt.class_name,
                             "body": gt.body,
                             "children": []} } )
    global gt_done
    gt_done.append(gt.id)
    
    for c in gt.children:
        if c.id in gt_done:
            print("Not DOING gt number {0} it is in {1}".format(c.id, gt_done))
            break
        
        if c!=None and c!=[] and c.id not in gt_done:
            gt["children"].append( print_and_jsonify_gt(c) )
    
    return json_tree