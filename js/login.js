$(function()
{
	$('form').validate()/*验证*/
	
	$('#btn').click(function()	/*提交*/
	{
		var ID=$('input[name=username]').eq(0).val();/*获取用户名*/
		var password=$('input[type=password]').eq(0).val();/*获取密码*/
		$.ajax(
		{
			type:"POST",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:
			{
				status:"login",
				userID:ID,
				password:password
			},
			success:function(res)
			{
				console.log(res)
				switch(res)
				{
					case "0":alert("用户名不存在");break;
					case "2":alert("密码错误");break;
					default:window.location.href='index.html';$.cookie('name',ID);break
				}
			}
		});
		
	})

	/*自动添加用户名*/
	var autoName=$.cookie('username')
	if(autoName){
		$('input[name=username]').val(autoName);
	}
	
	
})