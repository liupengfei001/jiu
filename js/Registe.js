$(function()
{
	/*点击手机*/
	$('.a_phone').click(function()	/*点击改变大盒子的left来实现切换*/
	{
		$('.max_l_d').stop().animate({'left':'0'});//
	});
	/*点击邮箱*/
	$('.a_email').click(function()	/*点击改变大盒子的left来实现切换*/
	{
		$('.max_l_d').stop().animate({'left':'-600px'});
	});
	
	
	
	/*注册验证*/
	$('.max_d_pone').validate();
	$('.max_d_email').validate();
	
	
	
	/*手机注册*/
	
	
	$('.zhuce_phone').click(function()
	{
		var ID=$('input[name=username_phone]').eq(0).val();
		var password=$('input[name=password_phone]').eq(0).val();
		validate ();/*验证码*/
		$.ajax(
		{
			type:"POST",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:
			{
				status:"register",
				userID:ID,
				password:password
			},
			success:function(res)
			{
				console.log(res)
				switch(res)
				{
					case "0":alert("此号已注册");break;
					case "1":alert("恭喜你注册成功！");window.location.href='login.html';AutoName();break;//自动保存用户名
					case "2":alert("系统故障");break;
				}
			}
		});
		
	})

/*验证码*/

$('.change').click(function(){	/*换一张*/
	
	createCode();
});

/*输入后判断*/
$('input[name=yanzheng]').blur(function(){
	
	validate ();/*验证码*/
});




createCode();
var code ; //在全局 定义验证码
function createCode(){ 
	code = new Array();
	
	var selectChar = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F',
	'G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
	var color='#'+random()+random()+random();
	
	for(var i=0;i<4;i++) {
	   var charIndex = Math.floor(Math.random()*32);
	   code +=selectChar[charIndex];
	}
	if(code.length != 4)
	{
	   createCode();
	}
	$('.yanzheng_show').html(code);
	$('.yanzheng_show').css('color',color)
}
	
function validate () {
  var inputCode = $('.auth_code').val();
	//console.log('验证码'+$('.auth_code').val())
	  if(inputCode.length <=0)
	 {
	   alert("请输入验证码！");
	   return false;
	 }
	else if(inputCode != code )
	{
	   alert("验证码输入错误！");
	   createCode();
	   return false;
	}
	else {
	  // alert("成功！");
	   return true;
	}
}

//十六进制随机数
  function random()
  {
	 return parseInt(Math.random()*256).toString(16);
  }

	/*邮箱注册*/
	
	$('.zhuce_email').click(function()
	{
		
		var ID=$('input[name=email]').eq(0).val();
		var password=$('input[name=password_email]').eq(0).val();
		$.ajax(
		{
			type:"POST",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:
			{
				status:"register",
				userID:ID,
				password:password
			},
			success:function(res)
			{
				console.log(res)
				switch(res)
				{
					case "0":alert("重名了");break;
					case "1":window.location.href='login.html';break;
					case "2":alert("系统故障");break;
				}
			}
		});
		
	})
	
/*注册成功后跳转时自动保存用户名*/	
function AutoName(){
	
var $phoneName=$('.phone_name').val();
	$ .cookie('username',$phoneName);
}



})