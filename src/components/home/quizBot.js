console.log("hello")
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
    console.log(Message)
    $(function () {
        var getMessageText, message_side, sendMessage;
        message_side = 'right';
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input1');
            return $message_input.val();
        };
        sendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input1').val('');
            $messages = $('.messages1');
            message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: message_side
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
        
        $('.send_message1').click(function (e) {
            return sendMessage(getMessageText());
        });
        
        $('.message_input1').keyup(function (e) {
            if (e.which === 13) {
                return sendMessage(getMessageText());
            }
        });
        sendMessage("Let's start with questions:");
        
        setTimeout(function () {
            return sendMessage('Where do Lemurs live?');
        }, 1000);

        //Hello TAAI, I'm fine, thank you!
        
        setTimeout(function () {
            return sendMessage('Madagascar?');
        }, 2000);

        setTimeout(function () {
            return sendMessage('You’re so smart :) Spot on! The answer key says: Madagascar');
        }, 3000); 

        setTimeout(function () {
            return sendMessage('Ready for the next question? What is the salt concentration of marine habitats?');
        }, 3000);
        
        return setTimeout(function () {
            return sendMessage('Ready for the next question? What is the salt concentration of marine habitats?');
        }, 2000);
    });
}.call(this));