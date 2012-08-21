/**
 * @author Mike Britton
 *
 * @class BasicComponent
 * @link https://github.com/mbritton/todopuremvc.git
 *
 *
 */

puremvc.define(
    // CLASS INFO
    {
        name : 'boilerplate.view.component.BasicComponent',
        constructor : function(event) {
            // Identify component element
            this.component = document.querySelector('#content');
    
            // Create event listeners
            this.component.addEventListener('click', this, false);
        }
    },
    // INSTANCE MEMBERS
    {
            // EVENT HANDLING
            addEventListener: function ( type, listener, useCapture )
            {
                // delegate to #BasicComponent
                this.component.addEventListener( type, listener, useCapture );
            },            
            handleEvent: function(event) {
                switch(event.type) {
                    case 'click':
                        this.dispatchClick();                     
                        break;
                    default:
                        alert('BasicComponent\'s event handler received an unsupported event.');
                        break;
                    
                }
            },
            dispatchClick: function() {
                alert('Click!');
                var someEvent = document.createEvent( 'Events' ); // TODO: createEventObject for IE??
                someEvent.initEvent(this.constructor.SOME_EVENT, false, false);
                
                this.component.dispatchEvent( someEvent );                
            },
            // UTILITY FUNCTIONS  
            update: function() {
                alert('update');
            }                      
                   
    },
    // STATIC MEMBERS   
    {
        /**
         * @static
         * @type {string}
         */
        NAME: 'BasicComponent',
        SOME_EVENT: 'some_event'
    });
