'use strict';

const Telegram = require("telegram-node-bot"),
        bot = new Telegram.Telegram("591670857:AAEa2tcQIsal7CcHSxvWqxn1raqsVpW99og", {
            workers: 1
        });

const PingController = require("./controllers/ping_controller"),
        OtherwiseController = require("./controllers/otherwise_controller");

bot.router.when(new Telegram.TextCommand('/ping', 'pingCommand'), 
                new PingController())
                .otherwise(new OtherwiseController());