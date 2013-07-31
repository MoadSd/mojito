/*
 * This is a basic func test for a Routing application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
    var suite = new Y.Test.Suite("Routing: BasicRouting11Pos");
    
    suite.add(new Y.Test.Case({
        _should: {
            ignore: {
            }
        },
	     "test BasicRouting11Pos": function(){   
             Y.Assert.areEqual('/you/found/a/good/path', Y.one('#url').get('innerHTML').match(/\/you\/found\/a\/good\/path/gi));
             // This was changed so that the "route.name" property that is returned
             // is set to the "route.call" property, for backward compatiblity.
             // Y.Assert.areEqual('testing-ac-url-find', Y.one('#name').get('innerHTML'));
             Y.Assert.areEqual('/you/found/a/good/path.goodaction.goodindex', Y.one('#name').get('innerHTML'));
             Y.Assert.areEqual('goodaction.goodindex', Y.one('#call').get('innerHTML'));
             // Use case no longer supported.
             // Y.Assert.areEqual('garden', Y.one('#params').get('innerHTML'));
             Y.Assert.areEqual('true', Y.one('#verbs').get('innerHTML'));
         }
   }));    

   Y.Test.Runner.add(suite);
});