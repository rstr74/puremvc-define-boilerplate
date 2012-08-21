/**
 * @author Mike Britton
 * 
 * @class ModelPrepCommand
 * @link https://github.com/mbritton/puremvc-define-boilerplate.git
 * 
 * 
 */

puremvc.define
(
    {
        name:'boilerplate.command.ModelPrepCommand',
        parent:puremvc.SimpleCommand
    },
  
    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note)
        {
            this.facade.registerProxy( new boilerplate.model.proxy.BasicProxy );
        }
    }    
);
