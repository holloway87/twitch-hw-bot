'use strict';

/**
 * Command registry with all registered commands.
 */
class CommandRegistry {
    constructor() {
        this.commands = {};
        this.timedCommands = {};
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
     * Returns the given command if it exists.
     *
     * @param {string} name
     * @return {null|AbstractCommand}
     */
    getCommand(name) {
        if (!this.commands.hasOwnProperty(name)) {
            return null;
        }

        return this.commands[name];
    }

    /**
     * Registers a command.
     *
     * @param {AbstractCommand} command
     */
    registerCommand(command) {
        this.commands[command.getCommandName()] = command;
    }

    /**
     * Registers a timed command.
     *
     * @param {AbstractCommand} command
     */
    registerTimedCommand(command) {
        this.timedCommands[command.getCommandName()] = command;
        setInterval(command.execute.bind(command), command.getCooldown() * 1000);
    }
}

module.exports = CommandRegistry;
