/**
 * @author Mike Britton
 * 
 * @class StartupCommand
 * @link https://github.com/mbritton/puremvc-define-boilerplate.git
 * 
 * 
 */

puremvc.define
(
    // CLASS INFO
    {
        name: 'boilerplate.command.StartupCommand',
        parent: puremvc.MacroCommand
    },
    // INSTANCE MEMBERS 
    {
        /** @override */
        initializeMacroCommand: function ()
        {
            // Register Commands with the Facade
            this.addSubCommand(boilerplate.command.ViewPrepCommand);
            this.addSubCommand(boilerplate.command.ModelPrepCommand);  
        }
    }    
);
