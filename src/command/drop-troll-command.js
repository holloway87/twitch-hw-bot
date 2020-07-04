'use strict';

let AbstractCommand = require('./abstract-command');

/**
 * Command to troll someone when they drop the parachute.
 *
 * Has a 10% chance to get activated and also has a 5 minute cooldown.
 *
 * @see https://www.pixelplush.dev/twitch.html Game: Pixel Parachute by PixelPlush
 */
class DropTrollCommand extends AbstractCommand {
    constructor(comfyJs, trollEmote) {
        super();
        this.comfyJs = comfyJs;
        this.commandName = 'drop';
        this.cooldown = 300;
        this.trollEmote = trollEmote || '';
    }

    execute() {
        let chance = Math.floor(Math.random() * 100);
        let message = '!drop';
        if (this.trollEmote) {
            message += ' ' + this.trollEmote;
        }

        // 10% chance
        if (0 === chance % 10) {
            this.setLastExecutionTime();

            this.comfyJs.Say(message);
            this.comfyJs.Say(message);
            this.comfyJs.Say(message);
            this.comfyJs.Say(message);
            this.comfyJs.Say(message);
        }
    }
}

module.exports = DropTrollCommand;
