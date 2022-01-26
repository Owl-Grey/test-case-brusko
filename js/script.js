$('.password-control').on('click', function(){
  if ($('#InputPassword').attr('type') == 'password'){
    $('#InputPassword').attr('type', 'text');
  } else {
    $('#InputPassword').attr('type', 'password');
  }
  return false;
});

$('.phone').mask("+79999999999")



function PhoneValid(){
  let mask =/\+\d{1}\d{3}\d{3}\d{4}/g;
  phone = $('.phone').val();
  if((mask.test(phone)==true) && (phone.length>0)){
    if ($('.phone').hasClass('error')){ $('.phone').removeClass('error');}
    if(!$('.phone_input .error_input').hasClass('hidden_block')){ $('.phone_input .error_input').addClass('hidden_block')}
    return true;
    }
  else{
    $('.phone').addClass('error')
    if(phone.length==0){
      $('.phone_input .error_input').text("Поле не должно быть пустым");
      if($('.phone_input .error_input').hasClass('hidden_block')){console.log(1); $('.phone_input .error_input').removeClass('hidden_block');}
    }
    else if(!mask.test(phone)){
      $('.phone_input .error_input').text("Номер должен быть в формате +79999999999");
      if($('.phone_input .error_input').hasClass('hidden_block')){$('.phone_input .error_input').removeClass('hidden_block');}
    }
    return false;
  }
}

function EmailValid(){
  let mask =/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  mail = $('.email').val();
  if((mask.test(mail)==true) && (mail.length>0)){
    if ($('.email').hasClass('error')){ $('.email').removeClass('error');}
    if(!$('.mail_input .error_input').hasClass('hidden_block')){ $('.mail_input .error_input').addClass('hidden_block')}
    return mask.test(mail);
    }
  else{
    $('.email').addClass('error')
    if(mail.length==0){
      $('.mail_input .error_input').text("Поле не должно быть пустым");
      if($('.mail_input .error_input').hasClass('hidden_block')){$('.mail_input .error_input').removeClass('hidden_block');}
    }
    else if(!mask.test(mail)){
      $('.mail_input .error_input').text("Email должен быть в формате example@domen.ru");
      if($('.mail_input .error_input').hasClass('hidden_block')){$('.mail_input .error_input').removeClass('hidden_block');}
    }
    return false;
  }
}

function PassValid(){
  pass = $('.password').val();
  if(pass.length>8){
    if ($('.password').hasClass('error')){ $('.password').removeClass('error');}
    if(!$('.password_input .error_input').hasClass('hidden_block')){ $('.password_input .error_input').addClass('hidden_block')}
    return true;
    }
  else{
    $('.password').addClass('error')
    $('.password_input .error_input').text("Поле не должно быть пустым");
    if($('.password_input .error_input').hasClass('hidden_block')){$('.password_input .error_input').removeClass('hidden_block');}
    return false;
  }
}







$("#ajax_form").on('submit', function(e) {
  e.preventDefault()
  var email = $('#InputEmail').val();
  var phone = $('#InputPhone').val();
  var pass = $('#InputPassword').val();
  var cont = $('#ContactSelect').val();
  let ph = PhoneValid()
  let em = EmailValid()
  let ps = PassValid()
  if (ph && em && ps){
    sendAjaxForm(email, phone, pass, cont);
  }
  else {
    return false;
  }
});

function sendAjaxForm(email, phone, pass,cont) {
  $.ajax({
    url: "/smth.php",
    type: "post",
    dataType: "json",
    data: { "email": email, "phone": phone, "password": pass, "contact": cont },
  }).done(function () {
    console.log("Отправлено!");
  }).fail(function () {
    console.log(data)
    console.log("Ошибка!");
  });
  return false;
}
