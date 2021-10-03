
# FROM https://stackoverflow.com/questions/3093352/python-object-assignment-with-variable-argument-list
@std.route('/j_tree', methods=['GET', 'POST'])
@login_required
def json_tree(gt, method):

    print("")
    #print("DOING GT ", gt)
    print("")
    print("") 
    
    global sts_color_set
    
    #print("DOING GT: ", gt)
    print("")
    
    j_tree =  {   
              "class_name": gt.class_name, 
              "gt_type":    gt.gt_type, 
              "method":     gt.gt_type, 
              "id":         gt.id,
              "title":      gt.title,
              "body":       gt.body ,
              "h_name":     gt.h_name ,
              "e_name":     gt.e_name ,
              "color":      gt.color ,
              "image_url":  gt.image_url,

              "CHILDREN" :  [],
              "BROTHERS" :  [],
              }

    global situations
    global thoughts
    global emotions
    global behaviors
    global results   

        
    if gt.class_name == 'Situation':
        situations.append( {"title": gt.title} )
        j_tree['BROTHERS'].append( ( {'situations': situations} ) )
        
    if gt.class_name == 'Thought':
        thoughts.append( {"title": gt.title} )
        j_tree['BROTHERS'].append( ( {'thoughts': thoughts} ) )
        
    if gt.class_name == 'Emotion':
        emotions.append( {"title": gt.title} )
        j_tree['BROTHERS'].append( ( {'emotions': emotions} ) )
        
    if gt.class_name == 'Behavior':
        behaviors.append( {"title": gt.title} )
        j_tree['BROTHERS'].append( ( {'behaviors': behaviors} ) )
        
    if gt.class_name == 'Result':
        results.append( {"title": gt.title} )
        j_tree['BROTHERS'].append( ( {'results': results} ) )

    print("J+TRE-B  ", j_tree['BROTHERS'])
    print("")
                    
    if sts_color_set:
        print("JSON-TREE BEFORE STS ", j_tree)
        j_tree.append( { "sts_color": sts_color, "sts_title": sts_title } )
        print("JSON-TREE AFTER STS ", j_tree)
        sts_color_set = False
                  
    global num_of_nodes
    global gt_done
    
    gt_done.append(gt.id)
    db.session.commit()
    
    num_of_nodes = num_of_nodes + 1 

    for c in gt.children:
    
        print("")

        if c==None or c==[]: 
            print("")
            continue


        if c.id in gt_done:
            #print("Not DOING gt number {0} it is ALREADY DONE and it is in: {1}".format(c, gt_done))
            print("")
            continue
          
        db.session.commit()
                                    
        if c.class_name == 'Status':
            sts_color = c.color
            sts_title = c.title
            sts_color_set = 1
            #print("NOT DOING {0} IT IS  STATUS TYPE ".format(c))
            print("")
            continue

        if c.gt_type != method:
            if c.gt_type == None:
                print("C TYPE is", c.gt_type)
                continue
            else:
                print("NOT DOING   ", c ) 
                print("it is NOT IN FAMILY TYPE  ", method ) 
                print("")
                continue
            
        j_tree["CHILDREN"].append(json_tree(c, method))
        gt_done.append(gt.id)
        db.session.commit()


    return j_tree  # WITHOUT THIS JS CAN NOT READ IT
    