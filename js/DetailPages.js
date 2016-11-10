$(function()
{
	$('#Box_top').load('index.html #wrap',function()	/*主页调用的回调函数*/
	{
		/*头部*/
		$('.top_l').find('p').mouseenter(function()	/*划入*/
		{
			$(this).next().css('display','block')
		});
		
		$('.top_l').find('p').mouseleave(function()	/*划出*/
		{
			$(this).next().css('display','none')
		});
		
		$('.top_l').find('img').mouseenter(function()	/*划入*/
		{
			$(this).css('display','block')
		});
		
		$('.top_l').find('img').mouseleave(function()	/*划出*/
		{
			$(this).css('display','none')
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
			if(confirm('确定要退出当前用户？')== true){	//判断点击确定就是退出
				
				$('#show_name').html($oldName);	//变为原来的
				$(this).html('帮助');
				$.cookie('name',null);	//清除用户名;
				//$('#add_goods').html('<span></span> 哎呦，来都来了，不买点什么吗？');//清除购物车
				window.history.back(-1); //返回前面一页
				//window.location.href='ListPages.html';
				//window.location.href='index.html';
			};
		}
	};
		
	
	/*菜单——用户中心*/
	
	$('#top ul li').eq(2).mouseenter(function()	/*划入*/
	{
		$('#top_user').css('display',"block");
	});
	/*划出*/
	$('#top ul li').eq(2).mouseleave(function()
	{
		$('#top_user').css('display',"none");
	});
	/*划入*/
	$('#top_user').mouseenter(function()
	{
		$(this).css('display',"block");
	});
	/*划出*/
	$('#top_user').mouseleave(function()
	{
		$(this).css('display',"none");
	});
	
	/*头部图片*/
	
	var Height=document.getElementById('top_img');
	$('.top_img_btn').click(function()
	{
		
		if($(this).html()=='收起'){	//改变按钮内容
			$(this).html('展开');
		}else{
			$(this).html('收起');
		}
		
		if(Height.offsetHeight==270)
		{
			getIn();	
		}
		else{
			getOut();
		}
		
	});
	/*正常情况下若图片展开，则自动收起*/
	var t2=setInterval(function()	//增加一个定时器，每隔5秒钟判断一次，若是展开，则收起
	{
		if(Height.offsetHeight==270)
		{
			getIn();
		}
	},5000);
	
	/*封装函数*/
	/*展开运动*/
	function getOut()
	{
		$('#top_img').children('a').find('img').eq(1).stop().animate({'top':'270px'});	//改变top值使当前图片向下运动
		var t1=setTimeout(function()	//加定时器延缓展开
			{
				$('#top_img').animate({'height':'270px'},200);//展开	
			},300);
	};
	/*收起运动*/
	function getIn()
	{
		$('#top_img').animate({'height':'80px'});//收缩
		$('#top_img').children('a').find('img').eq(1).stop().animate({'top':'0px'},1000);	//改变top让其向上运动出现
	};
	
	/*头部提示框*/
	$('.top_tip_btn').click(function(){	//点击事件   隐藏
		$('#top_tip').css('display','none');
	});
	
	/*购物车*/
	
	$('.shopping_car').mouseenter(function()
	{
		sc_msg();
		$('.shopping_tip').css('display','block');
	});
	
	$('.shopping_tip').mouseenter(function()
	{
		$(this).css('display','block');
		$('.shopping_car').css('background','#fff')
	})
	/*划出隐藏*/
	$('.shopping_car').mouseleave(function()
	{
		$('.shopping_tip').css('display','none');
	});
	
	$('.shopping_tip').mouseleave(function()
	{
		$(this).css('display','none');
		$('.shopping_car').css('background','');
	})
	
	sc_car();	//加载商品信息
	/*end购物车*/
	
	
	/*左侧栏菜单*/	
	$('#All_mune').mouseenter(function()	/*划过主菜单显示*/
	{
		$('#mune').css('display','block');
	});
	
	$('#All_mune').mouseleave(function()	/*划过主菜单显示*/
	{
		$('#mune').css('display','none');
	});
	
	
	/*mouseenter事件*/
	$('#mune').mouseenter(function()	/*划过主菜单显示*/
	{
		$(this).css('display','block');
		getRes();/*动态加载列表数据*/
	});
	
	$('#mune').children('ul').mouseenter(function() /*划过增加一个class名*/
	{
		$(this).addClass('mune_com');
		
		if($(this).index()==1){
			$('#white_mune').css('display','block');/*划过主菜单，子菜单出现*/
		}
		else{
			$('#white_mune').css('display','none');
		}	
	});
	
	$('#mune').children('ul').mouseleave(function() /*划出删除一个class名*/
	{
		$(this).removeClass('mune_com');
		
	});/*end左侧栏菜单*/
	
	/*白酒*/
	$('#white_mune').mouseenter(function()		/*划入子菜单*/
	{
		$(this).css('display','block');
	});
	$('#white_mune').mouseleave(function()		/*划出子菜单*/
	{
		$(this).css('display','none');
		$('#mune').css('display','none');
	});
	
	/*葡萄酒*/
	$('.mune_grape').mouseenter(function()	/*划过主菜单显示*/
	{
		$('#grape_mune').css('display','block');
	});
	$('.mune_grape').mouseleave(function()	/*划过主菜单显示*/
	{
		$('#grape_mune').css('display','none');
	});
	$('#grape_mune').mouseenter(function()		/*划入子菜单*/
	{
		$(this).css('display','block');
	});
	$('#grape_mune').mouseleave(function()		/*划出子菜单*/
	{
		$(this).css('display','none');
		$('#mune').css('display','none');
	});/*end葡萄酒*/
	
	
	/*洋酒*/
	$('.mune_yang').mouseenter(function()	/*划入主菜单*/
	{
		$('#froeign_mune').css('display','block');
	});
	$('.mune_yang').mouseleave(function()	
	{
		$('#froeign_mune').css('display','none');
	});
	$('#froeign_mune').mouseenter(function()	/*划入子菜单*/
	{
		$(this).css('display','block');
	});
	$('#froeign_mune').mouseleave(function()	
	{
		$(this).css('display','none');
		$('#mune').css('display','none');
	});/*end洋酒*/
	
	
	/*黄酒*/
	$('.mune_yellow').mouseenter(function()		/*划过侧栏主菜单显示*/
	{
		$('#yellow_mune').css('display','block');
	});
	$('.mune_yellow').mouseleave(function()		/*划出侧栏主菜单隐藏*/
	{
		$('#yellow_mune').css('display','none');
	});
	$('#yellow_mune').mouseenter(function()	/*划过自身（子菜单）显示*/
	{
		$(this).css('display','block');
	});
	$('#yellow_mune').mouseleave(function()	/*划出自身（子菜单）隐藏*/
	{
		$(this).css('display','none');
		$('#mune').css('display','none');
	});

/*封装动态加载侧栏子菜单函数*/
	
	function getRes()
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',
  			type:'GET',
  			dataType:'json',
  			success:function(res)
  			{ 
            	/*白酒*/
            	var html_white='<h4>品牌</h4>';
            	var html_odor='<h4>香型</h4>';
            	var html_whiteNation='<h4>产地</h4>';
            	/*葡萄酒*/
            	var html='<h3>品牌</h3>';
            	var html2='<h3>产地</h3>';
            	var html3='<h3>类型</h3>';
            	var html4='<h3>品种</h3>';
            	/*洋酒*/
            	var html5='<h4>品牌</h4>';
            	var html6='<h4>品种</h4>';
            	var html7='<h4>价格区间</h4>';
            	/*黄酒*/
            	var html8='<h4>黄酒</h4>';
            	var html9='<h4>养生酒</h4>';
            	var html_beer='<h4>啤酒</h4>';
            	
            	for(var i=0;i<res.length;i++)
  				{
  					/*白酒*/
  					var $white = res[i].white;
                    var $odor = res[i].odor;
                    var $whiteNation = res[i].whiteNation;
  					
  					/*葡萄酒*/
  					var $grape = res[i].grape;
                    var $grapeNation = res[i].grapeNation;
                    var $grapeVariety = res[i].grapeVariety;
                    var $grapeType = res[i].grapeType;
                    var $price = res[i].price;
                    /*洋酒*/
                   	var $froeign = res[i].froeign;
                    var $froeignVariety = res[i].froeignVariety;
                    /*黄酒*/
  					var $yellow = res[i].yellow;
                    var $health = res[i].health;
                    var $beer = res[i].beer;
                    
                    /*白酒*/
                    if($white)	//判断是否到达最后一张，	品牌
            		{
                        html_white += "<li><a href=''>"+$white+"</a></li>";
	  				};
	  				if($odor)	//判断是否到达最后一张，	香型
            		{
                        html_odor += "<li><a href=''>"+$odor+"</a></li>";
	  				};
	  				if($whiteNation)	//判断是否到达最后一张，	产地
            		{
                        html_whiteNation += "<li><a href=''>"+$whiteNation+"</a></li>";
	  				};
                    
  					/*葡萄酒*/
  					if($grape)	//判断是否到达最后一张,	品牌
            		{
                        html += "<li><a href=''>"+$grape+"</a></li>";
	  				};
	  				if($grapeNation)	//判断是否到达最后一张，	产地
            		{
                        html2 += "<li><a href=''>"+$grapeNation+"</a></li>";
	  				};
	  				if($grapeType)	//判断是否到达最后一张，	类型
            		{
                        html3 += "<li><a href=''>"+$grapeType+"</a></li>";
	  				};
	  				if($grapeVariety)	//判断是否到达最后一张，	类型
            		{
                        html4 += "<li><a href=''>"+$grapeVariety+"</a></li>";
	  				};
	  				 /*洋酒*/
                    
	  				if($froeign)	//判断是否到达最后一张，	品牌
            		{
                        html5 += "<li><a href=''>"+$froeign+"</a></li>";
	  				};
	  				if($froeignVariety)	//判断是否到达最后一张，	品种
            		{
                        html6 += "<li><a href=''>"+$froeignVariety+"</a></li>";
	  				};
	  				if($price)	//判断是否到达最后一张，	价格区间
            		{
                        html7 += "<li><a href=''>"+$price+"</a></li>";
	  				};
	  				/*黄酒*/
                    if($yellow)	//判断是否到达最后一张，	品牌
            		{
                        html8 += "<li><a href=''>"+$yellow+"</a></li>";
	  				};
	  				if($health)	//判断是否到达最后一张，	品种
            		{
                        html9 += "<li><a href=''>"+$health+"</a></li>";
	  				};
	  				if($beer)	//判断是否到达最后一张，	品种
            		{
                        html_beer += "<li><a href=''>"+$beer+"</a></li>";
	  				};
           		}
	  				/*白酒*/
	  				$('#white_brand').html(html_white);
	  				$('#white_odor').html(html_odor);
	  				$('#white_nation').html(html_whiteNation);
	  				/*葡萄酒*/
	  				$('#grape_brand'). html(html);
	  				$('#grape_nation').html(html2);
	  				$('#grape_type').html(html3);
	  				$('#grape_Variety').html(html4);
	  				/*洋酒*/
	  				$('#froeign_brand').html(html5);
	  				$('#froeign_nation').html(html6);
	  				$('#froeign_type').html(html7);
	  				/*黄酒*/
	  				$('#yellow_brand').html(html8);
	  				$('#health_brand').html(html9);
	  				$('#beer_brand').html(html_beer);
	  				$('.price').html(html7);
  			}	
	  	})	
	}

	});/*end从主页调用完毕完毕完毕----------------------------完毕完毕完毕*/
	

	/*右侧菜单*/
	$('#Box_up').load('index.html #right_mune',function()
	{
		/*回调函数*/
		var index;
		/*划入*/
		$('#right_mune').mouseenter(function()
		{
			$('#right_mune_childrn').css({'display':'block'});
		});
		
		$('#right_mune ul').children('li').mouseenter(function()
		{
			index=$(this).index();
			$('#right_mune_childrn').children('li').eq(index).stop().animate({'opacity':'1','left':'95px'});
		});
		
		/*划出*/
		$('#right_mune').mouseleave(function()
		{
			$('#right_mune_childrn').css({'display':'none'});
		});
		$('#right_mune ul').children('li').mouseleave(function()
		{
			index=$(this).index();
			$('#right_mune_childrn').children('li').eq(index).stop().animate({'left':'0px','opacity':'0'});
		});
		
		/*返回顶部*/
		
		$('.back_top').click(function()
		{
			document.body.scrollTop =document.documentElement.scrollTop=0;
		});/*end右侧菜单*/
				
		//购物车信息更新
		sc_car();//调用下边的购物车函数，页面加载时显示商品数量信息
		});/*从主页调用右侧菜单完毕----------------------------------------完毕*/
	
	
	/*加载商品信息*/
	//var id;
	var id=$.cookie('buyId');
	getList();
	function getList()
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',
  			type:'GET',
  			dataType:'json',
  			success:function(res)
  			{ 
				var $url = res[id].url;/*图片路径*/
				var $pri = res[id].pri;/*价格*/
				var $describe = res[id].describe;/*描述*/
				var $activity = res[id].activity;/*活动*/
				var $attention=res[id].attention;/*关注度*/
				var $comment =res[id].comment;/*评价*/
                //html +='<dl><dt><img src="'+$url+'"/></dt><dd>'+$describe +'</dd><dd class="red">'+$activity+'</dd><dd class="red">'+$pri+'</dd><li><a href="">加入购物车</a></li></dl>';
           		
           		
           		$('.goods_name').html($describe);/*商品名*/
           		$('#activity').html($activity);/*活动信息*/
	  			$('#pric').html($pri);/*价格*/
	  			$('#attention').html($attention);/*关注度*/
	  			$('#commodity').html($comment);/*评论*/
	  			
	  			$('.change_img').attr('src',$url);/*改变图片路径*/
	  			$('.change_img1').attr('src',res[id].url1);
	  			$('.change_img2').attr('src',res[id].url2);
	  			$('.change_img3').attr('src',res[id].url3);
	  			$('.change_img4').attr('src',res[id].url4);
	  			$('.change_img5').attr('src',res[id].url5);
	  			$('.change_img6').attr('src',res[id].url6);
	  			$('.change_img7').attr('src',res[id].url7);
	  			$('.change_img8').attr('src',res[id].url8);
	  			$('.change_img9').attr('src',res[id].url9);
	  			
	  			$('.shopping_tocar').attr('num',id);/*存储商品id*/
	  			$('.shopping_now').attr('num',id);/*存储商品id*/
  			}	
	  	})	
	}
	



function AG(){
	//购物车数量增加;
	//id= $(this).attr('num');/*当前商品编号*/
	var first = $.cookie('goods')==null?true:false;//判断是否有cookie进行添加
	var same = false;//判断时候已经追加
	//是否是第一次添加
	if(first){
		//第一次添加,建立json结构。
		$.cookie('goods','[{id:'+id+',num:1}]');
		$.cookie('first','false');
	}else{
		var str = $.cookie('goods');
		var arr = eval(str);
		//遍历所有对象。如果id相同，让该商品数量递增 ;
		for(var attr in arr){
			if(arr[attr].id == id){		
				arr[attr].num = arr[attr].num + 1;  //让json结构中num自增。
				var cookieStr = JSON.stringify(arr);//将json对象转换成字符串.
				$.cookie('goods',cookieStr);
				same = true;
			}
		}
		//如果id不同，重新建立商品对象;
		
		if(!same){
			var obj  = {id:id,num:1};
			arr.push(obj);
			var cookieStr = JSON.stringify(arr);
			$.cookie('goods',cookieStr);
		}
	}
};
	


//购物车;
//改变数量信息

function sc_car()
{
	var sc_str = $.cookie('goods');
	if(sc_str){//如果购物车cookie不为空。
		var sc_obj = eval(sc_str);
		var sc_num = 0 ; 
		for(var i in sc_obj){
			sc_num = Number(sc_obj[i].num) + sc_num;
		}
		$('.goods_num').html(sc_num);
	}
}

/*改变购物车信息*/
function sc_msg()
{
	$.ajax({
		url:'js/com.json',
		type:'GET',
		success:function(res){
			var sc_str = $.cookie('goods');	/*获取cookie里的商品*/
			
			if(sc_str){
				var sc_obj = eval(sc_str);	/*字符串转为数组*/
				var sc_num = 0 ;
				var html = ''; 
				for(var i in sc_obj){	
					var $pri=res[sc_obj[i].id].pri;
					html +='<dl id="'+sc_obj[i].id+'"><dt><img src="'+res[sc_obj[i].id].url+'"/></dt><dd><a>'+res[sc_obj[i].id].describe+'</a><strong class="Del" id="'+sc_obj[i].id+'">删除</strong><b class="prices">'+$pri+'×'+sc_obj[i].num+'</b></dd></dl>';
				}
				$('#add_goods').html(html);
			}
		}
	})
}



	/*立即购买*/
$('body').on('click','.shopping_now',function(){
	id= $(this).attr('num');/*当前商品编号*/
 	AG();
	//sc_car();
	//sc_msg();
	window.location.href='ShoppingCart.html';	//跳转到结算页	
});
	
	
/*购物车*/
		
$('body').on('click','.shopping_tocar',function(){
	id= $(this).attr('num');/*当前商品编号*/
	 AG();
	 sc_car();
	sc_msg();
	alert('哈哈！你太有眼光了！恭喜你添加购物车成功！')
	
});


	
	
/*放大镜*/
	
	$('.m_l_u_box').mousemove(function(){
		var left=event.clientX-$('.m_l_u_box').width()/2;
	    var top=event.clientY-$('.m_l_u_box').height()/2;
		
		//判断边界	三目运算符（减少赋值，提高性能）
		left=left<0?0:left;
		left=left>$('#box_cover').width()-$('.m_l_u_box').width()?$('#box_cover').width()-$('.m_l_u_box').width():left;
		
		top=top<0?0:top;
		top=top>$('#box_cover').height()-$('.m_l_u_box').height()?$('#box_cover').height()-$('.m_l_u_box').height():top;
	
		//改变坐标，使其移动
		$('.m_l_u_box').css({'left':left+'px','top':top+'px'});
		
		//改变比例
		propLeft=left/($('#box_cover').width()-$('.m_l_u_box').width());
		propTop=top/($('#box_cover').height()-$('.m_l_u_box').height());
		//改变大图位移
		$('.right_box_img').css({'left':-propLeft*($('.right_box_img').width()-$('.right_box').width())+'px',
		'top':-propTop*($('.right_box_img').height()-$('.right_box').height())+'px'})
	
	});
	
	/*划入出现*/
	$('#magnifying').on('mouseenter','#box_cover',function(){
		$('.m_l_u_box').css('display','block');
		$('.right_box').css('display','block');
	
	});
	/*划出隐藏*/
	$('#magnifying').on('mouseleave','#box_cover',function(){
		$('.m_l_u_box').css('display','none');
		$('.right_box').css('display','none');
	
	});
	
	
	/*小图片列表划过切换*/
	
	$('.m_l_c').children('img').mouseenter(function(){	//划入改变

		$(this).css('border-color','#f10');//改变当前样式
		src=$(this).attr('src');//取出当前的图片路径
		$('#m_l_u').find('img').eq(0).attr('src',src);//改变大图里的图片路径
		$('.right_box_img').attr('src',src);	
	});
	$('.m_l_c').children('img').mouseleave(function(){	//划出复原
		$(this).css('border-color','');
	});
	
/*购物数量改变*/
var index;
var k=1;
	$('.mith').find('li').click(function()
	{
		index=$(this).index();
		if(index==0){
			k++;
		}
		else if(index==1){
			k--;
		};
		if(k<1){
			k=1;
		}
		$('.mith').children('span').html(k);
		
	});
	
/*tab页*/
	
	//$('.tab_top p').children('a').click()
	$('.tab_top').on('click','a',function()
	{
		$('.tab_top p').children('a').removeClass();
		$(this).addClass('active');
	})
		

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






	
	
	
	
	
	
	/*网页底部*/
	$('#Box_footer').load('index.html #footer');
	/*从主页调用网页底部完毕----------------------------------------完毕*/
			

	
	
	
	
})