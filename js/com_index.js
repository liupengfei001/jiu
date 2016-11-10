$(function()
{
	/*头部导航*/
	
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
	})/*end购物车*/
	

	
	
	/*主题图-大轮播*/
	var index=0;
		
	var $li=$('#banner .banner_lunbo').children('li');
	var $span=$('#banner p').children('span');
	var t3=setInterval(Maxlunbo,3000);
	
	function Maxlunbo()	//封装函数
	{
		index++;
		index=parseInt(index%$li.length);	//无限循环
		$li.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$span.css('background','');	//下标样式
		$span.eq(index).css('background','#C40000');
	}
	/*划过事件*/
	
	$span.mouseenter(function()
	{
		clearInterval(t3);	//清定时器
		index=$(this).index();
		$span.css('background','');
		$span.eq(index).css('background','#C40000');
		$li.eq(index).fadeIn().siblings().fadeOut();
		t3=setInterval(Maxlunbo,3000);
	});/*end大轮播*/
		
/*左侧栏菜单*/	
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
			//$('#grape_mune').css('display','none');
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
	$('#grape_mune').mouseenter(function()	
	{
		$(this).css('display','block');
	});
	$('#grape_mune').mouseleave(function()	
	{
		$(this).css('display','none');
	});/*end葡萄酒*/
	
	
	/*洋酒*/
	$('.mune_yang').mouseenter(function()	
	{
		$('#froeign_mune').css('display','block');
	});
	$('.mune_yang').mouseleave(function()	
	{
		$('#froeign_mune').css('display','none');
	});
	$('#froeign_mune').mouseenter(function()	
	{
		$(this).css('display','block');
	});
	$('#froeign_mune').mouseleave(function()	
	{
		$(this).css('display','none');
	});/*end洋酒*/
	
	
	/*黄酒*/
	$('.mune_yellow').mouseenter(function()		/*划过侧栏菜单显示*/
	{
		$('#yellow_mune').css('display','block');
	});
	$('.mune_yellow').mouseleave(function()		/*划出侧栏菜单隐藏*/
	{
		$('#yellow_mune').css('display','none');
	});
	$('#yellow_mune').mouseenter(function()	/*划过自身显示*/
	{
		$(this).css('display','block');
	});
	$('#yellow_mune').mouseleave(function()	/*划出自身隐藏*/
	{
		$(this).css('display','none');
	});

/*动态加载侧栏子菜单*/
	
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
                        html_white += "<li><a href='ListPages.html'>"+$white+"</a></li>";
	  				};
	  				if($odor)	//判断是否到达最后一张，	香型
            		{
                        html_odor += "<li><a href='ListPages.html'>"+$odor+"</a></li>";
	  				};
	  				if($whiteNation)	//判断是否到达最后一张，	产地
            		{
                        html_whiteNation += "<li><a href='ListPages.html'>"+$whiteNation+"</a></li>";
	  				};
                    
  					/*葡萄酒*/
  					if($grape)	//判断是否到达最后一张,	品牌
            		{
                        html += "<li><a href='ListPages.html'>"+$grape+"</a></li>";
	  				};
	  				if($grapeNation)	//判断是否到达最后一张，	产地
            		{
                        html2 += "<li><a href=''>"+$grapeNation+"</a></li>";
	  				};
	  				if($grapeType)	//判断是否到达最后一张，	类型
            		{
                        html3 += "<li><a href='ListPages.html'>"+$grapeType+"</a></li>";
	  				};
	  				if($grapeVariety)	//判断是否到达最后一张，	类型
            		{
                        html4 += "<li><a href='ListPages.html'>"+$grapeVariety+"</a></li>";
	  				};
	  				 /*洋酒*/
                    
	  				if($froeign)	//判断是否到达最后一张，	品牌
            		{
                        html5 += "<li><a href='ListPages.html'>"+$froeign+"</a></li>";
	  				};
	  				if($froeignVariety)	//判断是否到达最后一张，	品种
            		{
                        html6 += "<li><a href='ListPages.html'>"+$froeignVariety+"</a></li>";
	  				};
	  				if($price)	//判断是否到达最后一张，	价格区间
            		{
                        html7 += "<li><a href='ListPages.html'>"+$price+"</a></li>";
	  				};
	  				/*黄酒*/
                    if($yellow)	//判断是否到达最后一张，	品牌
            		{
                        html8 += "<li><a href='ListPages.html'>"+$yellow+"</a></li>";
	  				};
	  				if($health)	//判断是否到达最后一张，	品种
            		{
                        html9 += "<li><a href='ListPages.html'>"+$health+"</a></li>";
	  				};
	  				if($beer)	//判断是否到达最后一张，	品种
            		{
                        html_beer += "<li><a href='ListPages.html'>"+$beer+"</a></li>";
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















var index;
		/*划入*/
		$('#right_mune').mouseenter(function()
		{
			$('#right_mune_childrn').css({'display':'block'});
		});
		
		$('#right_mune ul').children('li').mouseenter(function()
		{
			index=$(this).index();
			//$('#right_mune_childrn').children('li').eq(index).css({'z-index':'7'});
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








/*吸顶菜单*/

$(window).scroll(function()/*鼠标滚动*/
{
	var $top= document.body.scrollTop ||document.documentElement.scrollTop;/*滚动距离*/
	//console.log(parseInt($top))
	if($top>=500)	/*判断滚动距离大于500，则出现*/
	{
		$('#set_top').stop().slideDown(100);/*显示菜单*/
		$('#floor').css('display','block');
		$('#floor').find('li').css('background','');
		$('#floor').find('li').eq(0).css('background','red');
	}
	else{
		$('#set_top').stop().slideUp(100);	/*隐藏菜单*/
		$('#floor').css('display','none');
	};
	
	if($top>=1400){
		$('#floor').find('li').css('background','');
		$('#floor').find('li').eq(1).css('background','red');
	};
	if($top>=2200){
		$('#floor').find('li').css('background','');
		$('#floor').find('li').eq(2).css('background','red');
	};
	if($top>=2950){
		$('#floor').find('li').css('background','');
		$('#floor').find('li').eq(3).css('background','red');
	};
	if($top>=3680){
		$('#floor').find('li').css('background','');
		$('#floor').find('li').eq(4).css('background','red');
	};
   if($top>=4500){
		$('#floor').find('li').css('background','');
		$('#floor').find('li').eq(5).css('background','red');
	};
   if($top>=4900){
		$('#floor').find('li').css('background','');
		$('#floor').find('li').eq(6).css('background','red');
		$('#floor').css('display','none');
	}
});/*end吸顶菜单*/

	
})