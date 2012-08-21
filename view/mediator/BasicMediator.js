/**
 * @author Mike Britton
 * 
 * @class BasicMediator
 * @link https://github.com/mbritton/todopuremvc.git
 * 
 * 
 */

puremvc.define
(
    {
        name:'boilerplate.view.mediator.BasicMediator',
        parent:puremvc.Mediator
    },
    // INSTANCE MEMBERS
    {
        /** @override */
        listNotificationInterests: function() {
            return [boilerplate.AppConstants.NOTE_DID_SOMETHING];
        },
        /** @override */
        onRegister: function() {
            this.setViewComponent( new boilerplate.view.component.BasicComponent );
            
            this.viewComponent.addEventListener( boilerplate.view.component.BasicComponent.SOME_EVENT, this );
        },
        /** @override */
        handleNotification: function(note) {
            switch ( note.getName() ) {
                case boilerplate.AppConstants.NOTE_DID_SOMETHING:
                    this.viewComponent.update();
                    break;
            }
        },        
        handleEvent: function (event) {
            
            switch(event.type) {
                case boilerplate.view.component.BasicComponent.SOME_EVENT:
                    this.sendNotification( boilerplate.AppConstants.NOTE_DO_SOMETHING );
                    break;
                default:
                    alert('BasicMediator received an unsupported event from its viewComponent.');
                    break;
            }
            
        }
    },
    // STATIC MEMBERS
    {
        /**
         * @static
         * @type {string}
         */
        NAME: 'BasicMediator'
    }    
);
