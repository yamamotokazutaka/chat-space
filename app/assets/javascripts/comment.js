
$(document).on('turbolinks:load', function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="message" data-id="${message.id}">
                  <div class="upper-message">
                    <p class="user-name">
                      ${message.user_name}
                    </p>
                    <p class="date">
                      ${message.date}
                    </p>
                  </div>
                  <div class="lower-message">
                    <p>
                      ${message.content}
                    </p>
                    <p>
                      ${img}
                    </p>
                  </div>
                </div>`
  return html;
  }
  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = (window.location.href);
    $.ajax({  
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
      
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#message_content').val('');
      $('#message_image').val(''); //input内のメッセージを消す。
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast');
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
      $('.form__submit').prop('disabled',false);
    })
  })

    //自動更新実装
    var interval = setInterval(function(){
      if (location.pathname.match(/\/groups\/\d+\/messages/)) {
        var last_message_id = $('.message').last().data('id');
        $.ajax({
          url: location.pathname,
          type: 'GET',
          data: {id: last_message_id,},
          dataType: 'json'
        })
        .done(function(data){
          data.forEach(function(message){
          var html = buildHTML(message);
          $('.messages').append(html);
          });
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
        })
        .fail(function(data){
          alert('気にせず頑張れ！');
        });
    } else {
        clearInterval(interval);
      }
      }, 5000);
  });
