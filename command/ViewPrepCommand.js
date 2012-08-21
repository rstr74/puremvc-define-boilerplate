/**
 * @author Mike Britton
 * 
 * @class ViewPrepCommand
 * @link https://github.com/mbritton/todopuremvc.git
 * 
 * 
 */

puremvc.define 
(
    // CLASS INFO
    {
        name:'boilerplate.command.ViewPrepCommand',
        parent:puremvc.SimpleCommand
    },
    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note) {
            this.facade.registerMediator( new boilerplate.view.mediator.BasicMediator );
        }
    }     
);
