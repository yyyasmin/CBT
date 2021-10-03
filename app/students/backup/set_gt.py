            
    results = []
    results_new_nodes = []
    tmp_results = Emotion.query.filter(Emotion.hide == False).filter(Emotion.used == True).all()
    for s in tmp_results:
        ts = set_gt_node(s, tmp_thoughts, "false")
        if ts != 0:
            results.append( ts )
            results_new_nodes.append( set_new_emty_gt_node(s, "true") )
            gts_arr.append( results )
            gts_arr.append( results_new_nodes )
        