## FROM https://stackoverflow.com/questions/15524902/recursive-function-for-trees-in-python
def processNode(bp, space=''):
    if ('name' in bp[0].keys() ):
        print( space + bp[0]['name'])
    if ('subNodesTitle' in bp[0].keys()):
        print( bp[0]['subNodesTitle'])
        processNode( bp[0]['subNodes'],space=space+' ')
    if (len(bp) > 1):
        processNode( bp[1:],space=space )
processNode(root)