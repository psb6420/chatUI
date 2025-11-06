function pad2(n){ return String(n).padStart(2,'0'); }

var 전송 = function() {
  var 문자 = $('.under-chat .chat-text').val();
  if ($.trim(문자) === "") return false;

  var d = new Date();
  var h = d.getHours();
  var ap = (h >= 12) ? '오후' : '오전';
  var h12 = (h % 12) || 12;
  var time = ap + ' ' + h12 + ':' + pad2(d.getMinutes()); // ← 분 두 자리

  var html = `
    <div class="mine">
      <div>${$('<div>').text(문자).html()}
        <div class="time">${time}</div>
      </div>
    </div>`;

  $('.chat-room .day').append(html);
  $('.under-chat .chat-text').val('');
  $('.chat-room .day .mine > div').css("margin-top","0.5rem");
    $('.chat-room .day .mine > div').css("border-radius","8px");

  var scrollArea = $('.chat-room .day');
  scrollArea.scrollTop(scrollArea[0].scrollHeight);
};

setInterval(function(){
            if ($('.under-chat .chat-text').val().length > 0 && $.trim($('.chat-text').val())!="" ) {
                $('.chat-room .submit > i:first-child').css("display","none");
                $('.chat-room .submit > i:last-child').css("display","block");
            }
            else {
                $('.chat-room .submit > i:first-child').css("display","block");
                $('.chat-room .submit > i:last-child').css("display","none");
            }
        },100); 
    
$('.chat-room .under-chat .chat-text').keydown(function(e) {
    if ( e.keyCode == 13 ) {
        전송();
    }
});

$('.chat-room .under-chat .submit').click(전송);
$('.chat-room .under-chat .submit').click();