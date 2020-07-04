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
        this.lastDropTime = null;
    }

    execute() {
        this.lastDropTime = (new Date()).getTime() / 1000;

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

    /**
     * Return the last time someone dropped.
     *
     * @return {null|Number}
     */
    getLastDropTime() {
        return this.lastDropTime;
    }

    /**
     * Set the last drop time to the current time.
     */
    setLastDropTime() {
        this.lastDropTime = (new Date()).getTime() / 1000;
    }
}

module.exports = DropTrollCommand;
