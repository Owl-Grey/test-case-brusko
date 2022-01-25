$('body').on('click', '.password-control', function(){
  if ($('#InputPassword').attr('type') == 'password'){
    $('#InputPassword').attr('type', 'text');
  } else {
    $('#InputPassword').attr('type', 'password');
  }
  return false;
});

$('.phone').mask("+7(999)999-9999");


function PhoneValid(){
  let mask =/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g;
  phone = $('.phone').val();
  if((mask.test(phone)==true) && (phone.length>0)){
    if ($('.phone').hasClass('error')){ $('.phone').removeClass('error');}
    return true;
    }
  else{
    $('.phone').addClass('error')
    return false;
  }
}

function EmailValid(){
  let mask =/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  mail = $('.email').val();
  if((mask.test(mail)==true) && (mail.length>0)){
    if ($('.email').hasClass('error')){ $('.email').removeClass('error');}
    return mask.test(mail);
    }
  else{
    console.log(1)
    $('.email').addClass('error')
    return false;
  }
}

function PassValid(){
  pass = $('.password').val();
  if(pass.length>0){
    if ($('.password').hasClass('error')){ $('.password').removeClass('error');}
    return true;
    }
  else{
    console.log(2)
    $('.password').addClass('error')
    return false;
  }
}







$("#ajax_form").on('submit', function(e) {
  e.preventDefault()
  var email = $('#InputEmail').val();
  var phone = $('#InputPhone').val();
  var pass = $('#InputPassword').val();
  let ph = PhoneValid()
  let em = EmailValid()
  let ps = PassValid()
  if (ph && em && ps){
    sendAjaxForm(email, phone, pass);
  }
  else {
    return false;
  }
});

function sendAjaxForm(email, phone, pass) {
  $.ajax({
    url: "/smth.php",
    type: "post",
    dataType: "json",
    data: { "email": email, "phone": phone, "password": pass },
  }).done(function () {
    console.log("Отправлено!");
  }).fail(function () {
    console.log(data)
    console.log("Ошибка!");
  });
  return false;
}
