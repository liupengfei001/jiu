$(function()
{
	/*图片列表1*/
	/*滑入显示*/
	$('#img_list1_r ul').mouseenter(function()
	{
		$('.com_style').css('display','block');
		
	})
	/*滑出隐藏*/
	$('#img_list1_r ul').mouseleave(function()
	{
		$('.com_style').css('display','none');
		
	})
	
	/*滑入显示*/
	$('.com_style').mouseenter(function()
	{
		$(this).css('display','block');
	})
	/*点击翻页*/
	var index=0;
	$('.com_style').click(function()
	{
		index++;
		index=parseInt(index%2);
		$('#img_list1_r ul').eq(index).stop().slideUp().siblings().stop().slideDown();
	})
	
	
	/*楼梯里的小轮播图*/
	/*一楼*/
	var $li=$('.stair1_r_u ul').children('li');
	var $span=$('.stair1_r_u p').children('span');
	var t4=setInterval(Minlunbo,3000);
	var index=0;
	function Minlunbo()	/*封装轮播函数*/
	{
		index++;
		index=parseInt(index%3);
		
		$li.eq(index).stop().fadeIn().siblings().stop().fadeOut();
		$span.css('background','');
		$span.eq(index).css('background','red');
	}
	
	/*点击事件*/
	$('.stair1_btn_com').click(function()
	{
		clearInterval(t4);
		Minlunbo();
		t4=setInterval(Minlunbo,3000);
	})
	/*划过事件*/
	$span.mouseenter(function()
	{
		clearInterval(t4);
		index=$(this).index();
		console.log(index)
		$li.eq(index).stop().fadeIn().siblings().stop().fadeOut();
		$span.css('background','');
		$span.eq(index).css('background','red');
		t4=setInterval(Minlunbo,3000);
	});
	
	
	/*二楼轮播*/
	var $li2=$('.stair2_r_u ul').children('li');
	var $span2=$('.stair2_r_u p').children('span');
	var t5=setInterval(Minlunbo2,3000);
	var index=0;
	function Minlunbo2()	/*封装轮播函数*/
	{
		index++;
		index=parseInt(index%$li2.length);
		
		$li2.eq(index).stop().fadeIn().siblings().stop().fadeOut();
		$span2.css('background','');
		$span2.eq(index).css('background','red');
	}
	
	/*点击事件*/
	$('.stair2_btn_com').click(function()
	{
		clearInterval(t5);
		Minlunbo2();
		t5=setInterval(Minlunbo2,3000);
	})
	/*划过事件*/
	$span2.mouseenter(function()
	{
		clearInterval(t5);
		index=$(this).index();
		console.log(index)
		$li2.eq(index).stop().fadeIn().siblings().stop().fadeOut();
		$span2.css('background','');
		$span2.eq(index).css('background','red');
		t5=setInterval(Minlunbo2,3000);
	});
	
	
	/*三楼轮播*/
	var $li3=$('.stair3_r_u ul').children('li');
	var $span3=$('.stair3_r_u p').children('span');
	var t6=setInterval(Minlunbo3,3000);
	var index=0;
	function Minlunbo3()	/*封装轮播函数*/
	{
		index++;
		index=parseInt(index%$li3.length);
		
		$li3.eq(index).stop().fadeIn().siblings().stop().fadeOut();
		$span3.css('background','');
		$span3.eq(index).css('background','red');
	}
	
	/*点击事件*/
	$('.stair3_btn_com').click(function()
	{
		clearInterval(t6);
		Minlunbo3();
		t6=setInterval(Minlunbo3,3000);
	})
	/*划过事件*/
	$span3.mouseenter(function()
	{
		clearInterval(t6);
		index=$(this).index();
		//console.log(index)
		$li3.eq(index).stop().fadeIn().siblings().stop().fadeOut();
		$span3.css('background','');
		$span3.eq(index).css('background','red');
		t6=setInterval(Minlunbo3,3000);
	});
	
	
	/*四楼轮播*/
	var $li4=$('.stair4_r_u ul').children('li');
	var $span4=$('.stair4_r_u p').children('span');
	var t7=setInterval(Minlunbo4,3000);
	var index=0;
	function Minlunbo4()	/*封装轮播函数*/
	{
		index++;
		index=parseInt(index%$li4.length);
		
		$li4.eq(index).stop().fadeIn().siblings().stop().fadeOut();
		$span4.css('background','');
		$span4.eq(index).css('background','red');
	}
	
	/*点击事件*/
	$('.stair4_btn_com').click(function()
	{
		clearInterval(t7);
		Minlunbo4();
		t7=setInterval(Minlunbo4,3000);
	})
	/*划过事件*/
	$span4.mouseenter(function()
	{
		clearInterval(t7);
		index=$(this).index();
		//console.log(index)
		$li4.eq(index).stop().fadeIn().siblings().stop().fadeOut();
		$span4.css('background','');
		$span4.eq(index).css('background','red');
		t7=setInterval(Minlunbo4,3000);
	});
		
	
	/*改变用户名*/
	
	var $name=$.cookie('name');
	change();//刷新页面时显示用户名
	function change(){
		if($name){
			$('#show_name').html($name);
			if($('#show_name').html()==$name){	//如果用户名存在显示退出功能
				$('.Esc').html('[退出]');
				$('.Esc').addClass('blue');	//动态添加class名
			}
		}
	};
	
	/*退出当前用户*/
	var $oldName='Hi,请<a href="login.html" class="blue">登录</a><span>/</span><a href="Registe.html" class="blue">注册</a>';
	$('body').on('click','.Esc',Esc);/*点击退出*/
	function Esc(){
		if($('#show_name').html()==$name){
			if(confirm('确定要退出当前用户？')== true){
				
				$('#show_name').html($oldName);	//变为原来的
				$(this).html('帮助');
				$.cookie('name',null);	//清除用户名;
				//$.cookie('goods',null);	//清除购物车
				//window.location.href='login.html';
				//window.history.back(-1); //返回前一页
				
				//window.location.href='index.html';
			};
		}
	};
	
	
//购物车;
//刷新页面更新购物车信息
sc_car();
sc_msg();

function sc_car(){
	var sc_str = $.cookie('goods');
	if(sc_str){//如果购物车cookie不为空。
		var sc_obj = eval(sc_str);
		var sc_num = 0 ; 
		for(var i in sc_obj){
			sc_num = Number(sc_obj[i].num) + sc_num;
		}
		$('.goods_num').html(sc_num);	//更新数量
	}
}

function sc_msg(){
	
	$.ajax({
		url:'js/com.json',
		type:'GET',
		success:function(res){
			var sc_str = $.cookie('goods');
			
			if(sc_str){
				var sc_obj = eval(sc_str);
				var sc_num = 0 ;
				var html = ''; 
				for(var i in sc_obj){					
				var $pri = res[sc_obj[i].id].pri/*价格*/
				html +='<dl id="'+sc_obj[i].id+'"><dt><img src="'+res[sc_obj[i].id].url+'"/></dt><dd><a>'+res[sc_obj[i].id].describe+'</a><strong class="Del" id="'+sc_obj[i].id+'">删除</strong><b class="prices">'+$pri+'×'+sc_obj[i].num+'</b></dd></dl>';
	
				}
				$('#add_goods').html(html);
				//$('#list_box').html(html);
			}
		}
	})
}	

/*删除购物车*/

	$('body').on('click','.Del',function(){
		
		id=$(this).parents('dl').attr('id');//获取当前商品的id值
		var str = $.cookie('goods');
		//console.log(str )
		var arr = eval(str);
				//遍历所有对象。如果id相同，让该商品数量递增 ;
			for(var attr in arr){
				if(arr[attr].id == id){	
					delete arr[attr];	//删除当前商品的cookie信息；	
					for(var k=0;k<arr.length;k++){
						for(var i=0;i<arr.length-1;i++){
						if(arr[i]==null){
							var m=arr[i+1];
								arr[i+1]=arr[i];
								arr[i]=m;
						}
					  }
					}
					arr.length=arr.length-1;	//原数组长度减一
					var cookieStr = JSON.stringify(arr);//将json对象转换成字符串
					$.cookie('goods',cookieStr);
					same = true;
				}
				//console.log(cookieStr)
			}
			$(this).parents('dl').remove();	//删除购物车里的该商品
		sc_car();//更新购物车商品信息
		sc_msg();
	});



	
	
	
})/*最外层*/
