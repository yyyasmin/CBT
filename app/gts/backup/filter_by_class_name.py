																		

@gt.route('/filter_by_class_name', methods=['GET', 'POST'])
@login_required
def filter_by_class_name(class_name):

    #DEBUG ONLY

    #DEBUG ONLY
    
    gts = General_txt.query.filter(General_txt.class_name like class_name).order_by(General_txt.title).all() 
    
    #FROM https://stackoverflow.com/questions/403421/how-to-sort-a-list-of-objects-based-on-an-attribute-of-the-objects
    
    
    '''
    print("")
    for g in gts:
        print("g g.class_name", g, g.class_name)
        print("")
    
    i=0
    for g in gts:
        g.odd = (i%2 == 1)
    '''
    
    #################import pdb; pdb.set_trace()
    return render_template('edit_gts.html', gts=gts)							
		