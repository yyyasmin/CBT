
@std.route('/json_layer', methods=['GET', 'POST'])
@login_required
def json_layer( gts_layer_arr ):

    arr = []
    
    #for s in Situation.query.all():
    for gt in gts_layer_arr:
       
        print("")
        
        j_flat_tree =  {   
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
        
        for a in arr:
            a["BROTHERS"].append( j_flat_tree )
            
        arr.append( j_flat_tree )

    return arr
    
   
@std.route('/json_full_tree', methods=['GET', 'POST'])
@login_required
def json_full_tree():

    stds = json_layer( Student.query.filter(Student.hide == False).all() )
    situations = json_layer( Situation.query.filter(Situation.hide == False).all() )
    thoughts = json_layer( Thought.query.filter(Thought.hide == False).all() )
    emtions = json_layer( Emotion.query.filter(Emotion.hide == False).all() )
    behaviors = json_layer( Behavior.query.filter(Behavior.hide == False).all() )
    results = json_layer( Result.query.filter(Result.hide == False).all() )
    
    for std in stds:
        std["CHILDREN"].append( situations )

    for si in situations:
        si["CHILDREN"].append( thoughts )

    for th in thoughts:
        th["CHILDREN"].append( emtions )

    for em in emtions:
        em["CHILDREN"].append( behaviors )

    for be in stds:
        std["CHILDREN"].append( behaviors )

    for std in stds:
        be["CHILDREN"].append( results )

    return stds

