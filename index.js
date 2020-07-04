'use strict';

require('dotenv').config();
let ComfyJS = require('comfy.js');
let HwBot = require('./src/hw-bot');

let bot = new HwBot(ComfyJS);
ComfyJS.onCommand = bot.eventChatCommand.bind(bot);
ComfyJS.Init(process.env.USERNAME, process.env.PASSWORD, process.env.CHANNEL);
