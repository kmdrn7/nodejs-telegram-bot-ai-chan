"use strict";

const Telegram = require("telegram-node-bot");

class TodoController extends Telegram.TelegramBaseController {
    addHandler($){

        let todo = $.message.text.split(' ').slice(1).join(' ');
        if ( !todo ) {
            return $.sendMessage("Sorry, I dont understand");
        }

        $.getUserSession('todos')
        .then(todos => {
            if(!Array.isArray(todos)) return $.setUserSession('todos', [todo]);
            else $.setUserSession('todos', todos.concat([todo]));
            $.sendMessage("Added new todo");
        });
                
    }

    getHandler($){
        $.getUserSession('todos')
        .then(todos => {
            $.sendMessage(this._serializeList(todos), {
                parse_mode: 'Markdown'
            });
        });
    }

    get routes(){
        return {
            'addCommand': 'addHandler',
            'getCommand': 'getHandler',
        };
    }

    _serializeList(todoList){
        let serialized = '*Your Todos:* \n';
        todoList.forEach((t, i) => {
            serialized += `*${i+1}.* ${t}\n`;
        });

        return serialized;
    }
}

module.exports = TodoController;