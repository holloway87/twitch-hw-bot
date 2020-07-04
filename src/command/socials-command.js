'use strict';

let AbstractCommand = require('./abstract-command');

/**
 * Command to write all social links.
 *
 * * Instagram
 * * Twitter
 */
class SocialsCommand extends AbstractCommand {
    constructor(commandRegistry) {
        super();
        this.commandName = 'socials';
        this.commandRegistry = commandRegistry;
        this.cooldown = 30;
    }

    execute() {
        super.execute();

        this.commandRegistry.executeCommand('instagram');
        this.commandRegistry.executeCommand('twitter');
    }
}

module.exports = SocialsCommand;
