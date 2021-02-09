'use strict';

let AbstractCommand = require('./abstract-command');

/**
 * Command to say "Practice, practice, practice!".
 */
class PracticeCommand extends AbstractCommand {
    constructor(comfyJs) {
        super();
        this.comfyJs = comfyJs;
        this.commandName = 'practice';
    }

    execute(message) {
        super.execute();

        this.comfyJs.Say('Practice, practice, practice!')
    }
}

module.exports = PracticeCommand;
