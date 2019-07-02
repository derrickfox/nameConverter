function addItems() {
    var cctx = SP.ClientContext.get_current()
    var web = cctx.get_web();
    var lists = web.get_lists()
    var list = lists.getByTitle(ctx.ListTitle)
    var q = SP.CamlQuery.createAllItemsQuery()
    var items = list.getItems(q)
    cctx.load(items)
    var bigSuccess = function() {
        var previousFoo = null;
        var foo;
        var total = items.get_count();
        for(var i = 0; i < items.get_count(); i++ ) {
            var item = items.getItemAtIndex(i); 
        
            function generateClosure(onSuccess, it, index) { 
                return function () { 
                    var done = "X".repeat((total - index)/total*100);
                    var left = "-".repeat(index/total*100);
                    console.log(done + left);
                    // console.log('Deleting ' + it.get_id()); 
                    it.deleteObject();
                    if (!onSuccess) { console.log('Done');}
                    cctx.executeQueryAsync(onSuccess);
                }
            }
        
            foo = generateClosure(previousFoo, item, i);
            previousFoo = foo;
        }
        foo();
    }
    cctx.executeQueryAsync(bigSuccess);
}
addItems();