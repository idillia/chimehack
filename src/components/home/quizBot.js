window.$ = window.jQuery = require('jquery');


(function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template1').clone().html());
                $message.addClass(_this.message_side).find('.text1').html(_this.text);
                $('.messages1').append($message);
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
            $message_input = $('.message_input1');
            return $message_input.val();
        };
        botSendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input1').val('');
            $messages = $('.messages1');
            // message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: 'left'
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };

        userSendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input1').val('');
            $messages = $('.messages1');
            // message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: 'right'
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };

        var a = ["You’re so smart :) Spot on! The answer key says: Madagascar",
         "What is the salt concentration of marine habitats?",
          "Nice try! The answer key says: Marine habitats are aquatic habitats with salt concentrations of more than one percent."];

        var i=-1;
        $('.send_message1').click(function (e) {
            userSendMessage(getMessageText());
            
            setTimeout(function () {
               i++;
               return botSendMessage(a[i]);
            }, 1000);
            
            return setTimeout(function () {
               i++; 
               return botSendMessage(a[i]);
            }, 2000);
        });
        
        $('.message_input1').keyup(function (e) {
            if (e.which === 13) {
            userSendMessage(getMessageText());
            i++;
            return setTimeout(function () {
               return botSendMessage(a[i]);
            }, 1000);

            }
        });
        // botSendMessage("Here the questions:");
        setTimeout(function () {
            return botSendMessage('Where do Lemurs live?');
        }, 1000);

    });
}.call(this));