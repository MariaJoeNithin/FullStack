$((function(){var a=0;function t(t,s){var e="";e+="<div id='cm-msg-"+ ++a+"' class=\"chat-msg "+s+'">',e+='          <div class="d-flex align-items-center justify-content-end">',e+='          <div class="mx-10">',e+='          <a href="#" class="text-dark hover-primary font-weight-bold">You',e+="          </a>",e+='          <p class="text-muted font-size-12 mb-0">Just now',e+="          </p>",e+="          </div>",e+='          <span class="msg-avatar">',e+='            <img src="../images/avatar/3.jpg"  class="avatar avatar-lg">',e+="          </span>",e+="          </div>",e+='          <div class="cm-msg-text">',e+=t,e+="          </div>",e+="        </div>",$(".chat-logs").append(e),$("#cm-msg-"+a).hide().fadeIn(300),"self"==s&&$("#chat-input").val(""),$(".chat-logs").stop().animate({scrollTop:$(".chat-logs")[0].scrollHeight},1e3)}$("#chat-submit").click((function(s){s.preventDefault();var e=$("#chat-input").val();if(""==e.trim())return!1;t(e,"self");setTimeout((function(){!function(t,s){a++;var e="";e+="<div id='cm-msg-"+a+'\' class="chat-msg user">',e+='          <div class="d-flex align-items-center">',e+='          <span class="msg-avatar">',e+='            <img src="../images/avatar/2.jpg"  class="avatar avatar-lg">',e+="          </span>",e+='          <div class="mx-10">',e+='          <a href="#" class="text-dark hover-primary font-weight-bold">Mayra Sibley',e+="          </a>",e+='          <p class="text-muted font-size-12 mb-0">Just now',e+="          </p>",e+="          </div>",e+="          </div>",e+='          <div class="cm-msg-text">',e+=t,e+="          </div>",e+="        </div>",$(".chat-logs").append(e),$("#cm-msg-"+a).hide().fadeIn(300),"user"==type&&$("#chat-input").val("");$(".chat-logs").stop().animate({scrollTop:$(".chat-logs")[0].scrollHeight},1e3)}(["Did you purchase the template?"])}),1e3)})),$(document).delegate(".chat-btn","click",(function(){$(this).attr("chat-value");var a=$(this).html();$("#chat-input").attr("disabled",!1),t(a,"self")}))}));