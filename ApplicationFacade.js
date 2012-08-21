/**
 * @author Mike Britton
 *
 * @class ApplicationFacade
 * @link https://github.com/mbritton/puremvc-define-boilerplate.git
 *
 * PureMVC JavaScript boilerplate for puremvc.define() approach
 *
 * https://github.com/PureMVC/puremvc-js-multicore-framework
 *
 *
 */

/**
 * @class boilerplate.ApplicationFacade
 * @extends puremvc.Facade
 */
puremvc.define(
    // CLASS INFO
    {
        name : 'boilerplate.ApplicationFacade',
        parent : puremvc.Facade
    },
    
    // INSTANCE MEMBERS
    {
        /**
         * A convenience method to start the PureMVC apparatus
         *
         * @return {void}
         */
        startup : function() {
            if (!this.initialized) {
                this.initialized = true;
                // associate the SetupCommand with the STARTUP notification
                this.registerCommand(boilerplate.AppConstants.NOTE_STARTUP, boilerplate.command.StartupCommand);
                this.registerCommand(boilerplate.AppConstants.NOTE_DO_SOMETHING, boilerplate.command.BasicCommand);
    
                this.sendNotification(boilerplate.AppConstants.NOTE_STARTUP);
            }
        }
    }, {
        /**
         * Retrieve an instance of ApplicationFacade. If one has not yet been
         * instantiated, one will be created for you.
         *
         * @static
         * @param {string} multitonKey
         * @return boilerplate.ApplicationFacade
         */
        getInstance : function(multitonKey) {
            // all Facade instances, including Facade subclass instances, are stored
            // on Facade.instanceMap. When implementing you own #getInstance factory
            // method, ensure that follow the general pattern implemented here or else
            // puremvc.Facade#hasCore and puremvc.Facade#removeCore will not work if
            // you ever need to use them.
            var instanceMap = puremvc.Facade.instanceMap;
            instance = instanceMap[multitonKey];
            // read from the instance map
    
            if (instance)// if there is an instance...
                return instance;
            // return it
    
            // otherwise create a new instance and cache it on Facade.instanceMap;
            return instanceMap[multitonKey] = new boilerplate.ApplicationFacade(multitonKey);
        },
    
        /**
         * @static
         * @type {string}
         */
        NAME : 'boilerplate'
    }
);
