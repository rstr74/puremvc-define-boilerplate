/**
 * @author Mike Britton
 *
 * @class BasicProxy
 * @link https://github.com/mbritton/todopuremvc.git
 *
 *
 */

puremvc.define
(
    // CLASS INFO
    {
        name : 'boilerplate.model.proxy.BasicProxy',
        parent : puremvc.Proxy
    },
    
    // INSTANCE MEMBERS    
    {
        /** @override */
        onRegister:function() {
           // stub 
        },
        doSomething: function() {
            alert('BasicProxy::doSomething()');
            this.sendNotification(boilerplate.AppConstants.NOTE_DID_SOMETHING);
        }                                                                                                 
    },
    // CLASS MEMBERS
    {
        /**
         * @static
         * @type {string}
         */        
        NAME: 'BasicProxy' 
    }    
);
