'use strict';

let AbstractCommand = require('./abstract-command');
let DropTrollCommand = require('./drop-troll-command');

class TimedDropCommand extends AbstractCommand {
    constructor(comfyJs, commandRegistry) {
        super();
        this.comfyJs = comfyJs;
        this.commandName = 'timed-drop';
        this.commandRegistry = commandRegistry;
        this.cooldown = 10;
    }

    execute(message) {
        let dropCommand = this.commandRegistry.getCommand('drop');
        if (!(dropCommand instanceof DropTrollCommand)) {
            return;
        }

        // 15 minutes after the last drop the bot will drop
        if (!dropCommand.getLastDropTime() || 900 > ((new Date()).getTime() / 1000) - dropCommand.getLastDropTime()) {
            return;
        }

        this.comfyJs.Say('!drop');
        dropCommand.setLastDropTime();
    }
}

module.exports = TimedDropCommand;
