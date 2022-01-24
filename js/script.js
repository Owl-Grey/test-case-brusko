$('body').on('click', '.password-control', function(){
  if ($('#InputPassword').attr('type') == 'password'){
		$('#InputPassword').attr('type', 'text');    
	} else {
		$('#InputPassword').attr('type', 'password');
	}
  return false;
});
