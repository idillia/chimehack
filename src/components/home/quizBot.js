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
        var getMessageText, message_side, botSendMessage, userSendMessage, usrValue;
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
            usrValue = $('.message_input1').val('');

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

        var a = [
            ["You are so smart :) Spot on! The answer key says: Madagascar","Madagascar"],
            ["What is the salt concentration of marine habitats?", "1%"],
            ["Nice try! The answer key says: Marine habitats are aquatic habitats with salt concentrations of more than one percent.", "Lake, sea"],
            ["What are the two main types of freshwater habitat?"],
            ["Yup, lake is one of them! The answer key says: The two main types of freshwater habitat are rivers and lakes.", "Ocean"],
            ["What is the largest habitat in the world?"],
            ["Woop! Nice! The answer key says: Oceans create the largest habitat in the world."],
            ["What is the richest habitat on earth?"],
            ["Almost! The answer key says: Coral reefs are the richest habitats on the earth."],
            ["Where are swamps usually located?"],
            ["There’s a better answer. The answer key says: Swamps are usually located in forested areas."],
            ["Where can swamps be found?"],
            ["Keep it up! The answer key says: Swamps are usually located in forested areas."]];

        var iq=-1; var ia=0;
        $('.send_message1').click(function (e) {
          // botSendMessage("Here the questions:");
          // console.log(iq, ia)
            console.log(ia, iq);
            var userOutput = getMessageText();
            userSendMessage(userOutput);
            if(userOutput == "quit"){
                return botSendMessage("Would you like to see your progress?");
            } else if(ia >= 0 && userOutput == a[ia][1]){
                setTimeout(function () {
                   iq++;
                   return botSendMessage(a[iq][0]);
                }, 1000);
                
                   setTimeout(function () {
                   iq++; 
                   return botSendMessage(a[iq][0]);
                }, 2000);
                ia++;
            } else if(userOutput == "yes"){
                    window.location.replace("http://localhost:3000/progress");
                    console.log("redirect")
            }
            else {
                return botSendMessage("Sorry, I didn't understand");

            }
        });
        
        // $('.message_input1').keyup(function (e) {
        //     if (e.which === 13) {
        //     userSendMessage(getMessageText());
        //     i++;
        //     return setTimeout(function () {
        //        return botSendMessage(a[i]);
        //     }, 1000);

        //     }
        // });
        botSendMessage("Here the questions:");
        setTimeout(function () {
            return botSendMessage('Where do Lemurs live?');
        }, 1000);

    });
}.call(this));