'use strict';

const Telegram = require("telegram-node-bot"),
        bot = new Telegram.Telegram("591670857:AAEa2tcQIsal7CcHSxvWqxn1raqsVpW99og", {
            workers: 1
        });

const PingController = require("./controllers/ping_controller"),
        OtherwiseController = require("./controllers/otherwise_controller"),
        TodoController = require("./controllers/todo_controller");

const todoCtrl = new TodoController();

bot.router.when(new Telegram.TextCommand('/add', 'addCommand'), todoCtrl)
        .when(new Telegram.TextCommand('/get', 'getCommand'), todoCtrl)
        .otherwise(new OtherwiseController());