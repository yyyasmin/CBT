    

# FROM https://stackoverflow.com/questions/3093352/python-object-assignment-with-variable-argument-list
@std.route('/j_tree', methods=['GET', 'POST'])
@login_required
def json_tree(gt, method):
