'use strict';

let CommandRegistry = require('./command-registry');
let DropTrollCommand = require('./command/drop-troll-command');
let InstagramCommand = require('./command/instagram-command');
let ShoutoutCommand = require('./command/shoutout-command');
let SocialsCommand = require('./command/socials-command');
let TwitterCommand = require('./command/twitter-command');

/**
 * Bot logic.
 */
class HwBot {
    /**
     * Creates an instance with all needed services.
     */
    constructor(comfyJs) {
        /**
         * Comfy.JS
         */
        this.comfyJs = comfyJs;

        /**
         * Command registry.
         *
         * @type {CommandRegistry}
         */
        this.commandRegistry = new CommandRegistry();

        this.initCommands();
    }

    /**
     * Executes a command, if it is registered.
     *
     * @param {string} user
     * @param {string} command
     * @param {string} message
     * @param {object} flags
     * @param {object} extra
     */
    eventChatCommand(user, command, message, flags, extra) {
        this.commandRegistry.executeCommand(command, message, flags);
    }

    /**
     * Registers all needed commands.
     */
    initCommands() {
        this.commandRegistry.registerCommand(new InstagramCommand(this.comfyJs, process.env.INSTAGRAM));
        this.commandRegistry.registerCommand(new DropTrollCommand(this.comfyJs, process.env.DROP_TROLL_EMOTE));
        this.commandRegistry.registerCommand(new ShoutoutCommand(this.comfyJs));
        this.commandRegistry.registerCommand(new SocialsCommand(this.commandRegistry));
        this.commandRegistry.registerCommand(new TwitterCommand(this.comfyJs, process.env.TWITTER));
    }
}

module.exports = HwBot;
