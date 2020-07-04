'use strict';

/**
 * Abstract command with common logic.
 */
class AbstractCommand {
    /**
     * Creates the instance with all defaults.
     */
    constructor() {
        this.commandName = '';
        this.commandNameAliases = [];
        this.cooldown = 0;
        this.lastExecuteTime = null;
        this.flags = {};
    }

    /**
     * Checks if the flags from this command match the users flags.
     *
     * Only one flag is needed to grant access.
     *
     * @param {object} flags
     * @return {boolean}
     */
    canExecuteCommand(flags) {
        if (0 === Object.keys(this.flags).length) {
            return true;
        }

        for (let f in this.flags) {
            if (!this.flags.hasOwnProperty(f) || !flags.hasOwnProperty(f)) {
                continue;
            }

            if (this.flags[f]) {
                return true;
            }
        }

        return false;
    }

    /**
     * Return the command name.
     *
     * @return {string}
     */
    getCommandName() {
        return this.commandName;
    }

    /**
     * Executes the command.
     *
     * Sets the last execution time for cooldowns.
     */
    execute(message) {
        this.setLastExecutionTime();
    }

    /**
     * Return if the given name belongs to this command.
     *
     * Checks for the name and all aliases.
     *
     * @param {string} command
     * @return {boolean}
     */
    isCommandName(command) {
        if (command === this.commandName) {
            return true;
        }

        for (let c = 0; c < this.commandNameAliases.length; c++) {
            if (command === this.commandNameAliases[c]) {
                return true;
            }
        }

        return false;
    }

    /**
     * Returns whether the command is currently on cooldown or not.
     *
     * @return {boolean}
     */
    isOnCooldown() {
        if (null === this.lastExecuteTime || 0 === this.cooldown) {
            return false;
        }

        return this.cooldown > this.lastExecuteTime - ((new Date()).getTime() * 1000);
    }

    /**
     * Sets the last execution time for cooldowns.
     */
    setLastExecutionTime() {
        this.lastExecuteTime = (new Date()).getTime() / 1000;
    }
}

module.exports = AbstractCommand;
