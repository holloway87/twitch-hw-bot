'use strict';

let AbstractCommand = require('./abstract-command');

/**
 * Command to write the twitter link.
 */
class TwitterCommand extends AbstractCommand {
    constructor(comfyJs, url) {
        super();
        this.comfyJs = comfyJs;
        this.commandName = 'twitter';
        this.cooldown = 30;
        this.url = url;
    }

    execute() {
        if (!this.url) {
            return;
        }
        super.execute();

        this.comfyJs.Say('Twitter: https://twitter.com/me_hw');
    }
}

module.exports = TwitterCommand;
