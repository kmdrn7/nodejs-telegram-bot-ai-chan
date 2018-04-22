"use strict";

const Telegram = require("telegram-node-bot");

class OtherWiseController extends Telegram.TelegramBaseController {
    handle($){
        $.sendMessage("Sorry, I don't understand");        
    }
}

module.exports = OtherWiseController;