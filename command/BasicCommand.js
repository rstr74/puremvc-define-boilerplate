/**
 * @author Mike Britton
 * 
 * @class BasicCommand
 * @link https://github.com/mbritton/puremvc-define-boilerplate.git
 * 
 * 
 */

puremvc.define
(
    // CLASS INFO
    {
        name:'boilerplate.command.BasicCommand',
        parent:puremvc.SimpleCommand
    },
    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note)
        {
            var proxy = this.facade.retrieveProxy(boilerplate.model.proxy.BasicProxy.NAME);
            // Perform model operations
            proxy.doSomething();
        }
    }    
);
