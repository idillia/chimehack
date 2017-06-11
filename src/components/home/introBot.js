window.$ = window.jQuery = require('jquery');


(function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var getMessageText, message_side, botSendMessage, userSendMessage;
        message_side = 'right';
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        botSendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            // message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: "left"
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };

       

        userSendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            // message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: "right"
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };

        var a = ["Great!", "b"];
        var i=-1;
        
        $('.send_message').click(function (e) {
            userSendMessage(getMessageText());
            i++;
            setTimeout(function () {
               return botSendMessage(a[i]);
            }, 1000);
            
            if(i == 0){
                setTimeout(function () {
                  window.location.replace("http://localhost:3000/readText");
                }, 1200);
            }    
        });
        
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                userSendMessage(getMessageText());
                i++;
                return setTimeout(function () {
                   return botSendMessage(a[i]);
                }, 1000);
            }
        });
                
        setTimeout(function () {
            return botSendMessage('Hi Ayesha! Ready? Let’s start :)');
        }, 500);

        setTimeout(function () {
            return botSendMessage('Ms. Laura went over aquatic biomes today. Would you like to do that?');
        }, 500);
    });
}.call(this));