'use strict';

let AbstractCommand = require('./abstract-command');

/**
 * Command to shoutout another streamer.
 *
 * Only works for the broadcaster and mods.
 */
class ShoutoutCommand extends AbstractCommand {
    constructor(comfyJs) {
        super();
        this.comfyJs = comfyJs;
        this.commandName = 'so';
        this.flags = {
            'broadcaster': true,
            'mod': true
        }
    }

    execute(message) {
        super.execute();

        let username = message.match(/[a-z0-9_]+/);
        if (!username) {
            return;
        }
        username = username[0];

        this.comfyJs.Say('Check out ' + username + ' at https://twitch.tv/' + username + '  They\'re awesome!')
    }
}

module.exports = ShoutoutCommand;
