'use strict';

let AbstractCommand = require('./abstract-command');

/**
 * Command to write the instagram link.
 */
class InstagramCommand extends AbstractCommand {
    constructor(comfyJs, url) {
        super();
        this.comfyJs = comfyJs;
        this.commandName = 'instagram';
        this.commandNameAliases = ['insta'];
        this.cooldown = 30;
        this.url = url;
    }

    execute() {
        if (!this.url) {
            return;
        }
        super.execute();

        this.comfyJs.Say('Instagram: ' + this.url);
    }
}

module.exports = InstagramCommand;
