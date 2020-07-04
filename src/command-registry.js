'use strict';

/**
 * Command registry with all registered commands.
 */
class CommandRegistry {
    constructor() {
        this.commands = {};
    }

    /**
     * Executes the given command.
     *
     * @param {string} name
     * @param {string} [message]
     * @param {object} [flags]
     */
    executeCommand(name, message, flags) {
        message = message || '';
        flags = flags || {};
        for (let c in this.commands) {
            if (!this.commands.hasOwnProperty(c) || !this.commands[c].isCommandName(name) ||
                !this.commands[c].canExecuteCommand(flags) || this.commands[c].isOnCooldown()
            ) {
                continue;
            }

            this.commands[c].execute(message);
            break;
        }
    }

    /**
     * Registers a command.
     *
     * @param {AbstractCommand} command
     */
    registerCommand(command) {
        this.commands[command.getCommandName()] = command;
    }
}

module.exports = CommandRegistry;
