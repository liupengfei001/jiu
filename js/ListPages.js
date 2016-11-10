$(function()
{
	/*吸顶菜单*/
	$('#Box_set_top').load('com_index.html #set_top',function()
	{
		$(window).scroll(function()/*鼠标滚动*/
		{
			var $top= document.body.scrollTop ||document.documentElement.scrollTop;/*滚动距离*/
			//console.log(parseInt($top))
			if($top>=500)	/*判断滚动距离大于500，则出现*/
			{
				$('#set_top').stop().slideDown(100);/*显示菜单*/
				$('#floor').css('display','block');
			}
			else{
				$('#set_top').stop().slideUp(100);	/*隐藏菜单*/
				$('#floor').css('display','block');
			}
});
		
	});/*end吸顶菜单*/
	
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
			if(confirm('确定要退出当前用户？')== true){
				
				$('#show_name').html($oldName);	//变为原来的
				$(this).html('帮助');
				$.cookie('name',null);	//清除用户名;
				//$.cookie('goods',null);	//清除购物车
				//window.location.href='login.html';
				window.history.back(-1); 
				
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
	});
	//加载页面时通调用下面的函数来动态更新购物车信息
	sc_car();
	sc_msg();
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
		/*右侧菜单*/

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
		});
		
		//刷新页面动态更新右侧栏购物车信息
		sc_car();
		
		/*end右侧菜单*/
				
				
		});/*从主页调用右侧菜单完毕----------------------------------------完毕*/
	
	
	
	
	
	
	/*列表名加载*/
	getRes0();
	var index;
	$('.Box_brand_c p').children('a').mouseenter(function()
	{
		index=$(this).index();
		$('.Box_brand_c p').children('a').css({'background':'','color':''})
		$(this).css({
			'background':'#D00D0F',
			'color':'#fff'
		})
		if(index==0){
			$('#Box_brand_c_conten').html();
			getRes0();
		}
		if(index==1){
			$('#Box_brand_c_conten').html();
			getRes1();
		}
		if(index==2){
			$('#Box_brand_c_conten').html();
			getRes2();
		}
		if(index==3){
			$('#Box_brand_c_conten').html();
			getRes3();
		}
		if(index==4){
			$('#Box_brand_c_conten').html();
			getRes4();
		}
		if(index==5){
			$('#Box_brand_c_conten').html();
			getRes5();
		}
		if(index==6){
			$('#Box_brand_c_conten').html();
			getRes6();
		}
		if(index==7){
			$('#Box_brand_c_conten').html();
			getRes7();
		}
		if(index==8){
			$('#Box_brand_c_conten').html();
			getRes8();
		}
	});
	

	
	
	/*列表点击开关*/
	$('.Box_brand_r').click(function()
	{
		if($(this).html()=='更多'){	//改变按钮内容
			$(this).html('收起');
		}else{
			$(this).html('更多');
		};
		
		var height=$(this).parent('div').height();
		//console.log($(this).parent('div').height())
		if(height==32){
			$(this).parent().css('height','85px')
		}
		else if(height==85){
			$(this).parent().css('height','32px')
		}
		else if(height==90){
			$(this).parent().css('height','210px')
		}else{
			$(this).parent().css('height','90px')
		}
		//alert(height)
	});
	
	/*封装加载函数*/
	function getRes0()
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',type:'GET',dataType:'json',
  			success:function(res)
  			{ 
            	var html='';
            	for(var i=0;i<res.length;i++)
  				{
                    if(res[i].white)	//判断是否到达最后一张，	品牌
            		{
                        html += "<li><a href=''>"+res[i].white+"</a></li>";
	  				};
           		}
	  				$('#Box_brand_c_conten').html(html);
  			}	
	  	})	
	};
	
	function getRes1()	/*ABCD*/
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',type:'GET',dataType:'json',
  			success:function(res)
  			{ 
            	var html='';
            	for(var i=0;i<res.length;i++)
  				{
                    if(res[i].ABCD)	//判断是否到达最后一张，	
            		{
                        html += "<li><a href=''>"+res[i].ABCD+"</a></li>";
	  				};
           		}
	  				$('#Box_brand_c_conten').html(html);
  			}	
	  	})	
	}
	function getRes2()	/*EFG*/
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',type:'GET',dataType:'json',
  			success:function(res)
  			{ 
            	var html='';
            	for(var i=0;i<res.length;i++)
  				{
                    if(res[i].EFG)	//判断是否到达最后一张，	
            		{
                        html += "<li><a href=''>"+res[i].EFG+"</a></li>";
	  				};
           		}
	  				$('#Box_brand_c_conten').html(html);
  			}	
	  	})	
	}
	function getRes3()	/*HIJK*/
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',type:'GET',dataType:'json',
  			success:function(res)
  			{ 
            	var html='';
            	for(var i=0;i<res.length;i++)
  				{
                    if(res[i].HIJK)	//判断是否到达最后一张，	
            		{
                        html += "<li><a href=''>"+res[i].HIJK+"</a></li>";
	  				};
           		}
	  				$('#Box_brand_c_conten').html(html);
  			}	
	  	})	
	}
	function getRes4()	/*LMN*/
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',type:'GET',dataType:'json',
  			success:function(res)
  			{ 
            	var html='';
            	for(var i=0;i<res.length;i++)
  				{
                    if(res[i].LMN)	//判断是否到达最后一张，	
            		{
                        html += "<li><a href=''>"+res[i].LMN+"</a></li>";
	  				};
           		}
	  				$('#Box_brand_c_conten').html(html);
  			}	
	  	})	
	}
	function getRes5()	/*OPQ*/
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',type:'GET',dataType:'json',
  			success:function(res)
  			{ 
            	var html='';
            	for(var i=0;i<res.length;i++)
  				{
                    if(res[i].OPQ)	//判断是否到达最后一张，	
            		{
                        html += "<li><a href=''>"+res[i].OPQ+"</a></li>";
	  				};
           		}
	  				$('#Box_brand_c_conten').html(html);
  			}	
	  	})	
	}
	function getRes6()	/*RST*/
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',type:'GET',dataType:'json',
  			success:function(res)
  			{ 
            	var html='';
            	for(var i=0;i<res.length;i++)
  				{
                    if(res[i].RST)	//判断是否到达最后一张，	
            		{
                        html += "<li><a href=''>"+res[i].RST+"</a></li>";
	  				};
           		}
	  				$('#Box_brand_c_conten').html(html);
  			}	
	  	})	
	}
	function getRes7()	/*UVW*/
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',type:'GET',dataType:'json',
  			success:function(res)
  			{ 
            	var html='';
            	for(var i=0;i<res.length;i++)
  				{
                    if(res[i].UVW)	//判断是否到达最后一张，	
            		{
                        html += "<li><a href=''>"+res[i].UVW+"</a></li>";
	  				};
           		}
	  				$('#Box_brand_c_conten').html(html);
  			}	
	  	})	
	}
	function getRes8()	/*XYZ*/
	{
	  	$.ajax(
	  	{
  			url:'js/com.json',type:'GET',dataType:'json',
  			success:function(res)
  			{ 
            	var html='';
            	for(var i=0;i<res.length;i++)
  				{
                    if(res[i].XYZ)	//判断是否到达最后一张，	
            		{
                        html += "<li><a href=''>"+res[i].XYZ+"</a></li>";
	  				};
           		}
	  				$('#Box_brand_c_conten').html(html);
  			}	
	  	})	
	}
	
	/*加载列表*/
	getRes9();
	function getRes9()
	{
		$.ajax(
	  	{
  			url:'js/com.json',
  			type:'GET',
  			dataType:'json',
  			success:function(res)
  			{ 
            	/*白酒*/
            	var html_hate='';/*选购热点*/
            	var html_price='';/*价格*/
            	var html_odor='';/*香型*/
            	var html_degrees='';/*度数*/
            	var html_net='';/*净含量*/
            	var html_nation='';/*商品产地*/
            	var html_occasion='';/*适用场合*/
            	 
            	for(var i=0;i<res.length;i++)
  				{
  					/*白酒*/
  					var $hate = res[i].hate;/*选购热点*/
  					var $price = res[i].price;/*价格*/
  					var $odor = res[i].odor;/*香型*/
  					var $degrees = res[i].degrees;/*度数*/
  					var $net = res[i].net;/*净含量*/
  					var $nation = res[i].whiteNation;/*产地*/
  					var $occasion = res[i].occasion;/*适用场合*/
  					 /*白酒*/
                   if($hate)	//判断是否到达最后一张，	选购热点
            		{
                        html_hate += "<li><a href=''>"+$hate+"</a></li>";
	  				};
	  				 if($price)	//判断是否到达最后一张，	价格
            		{
                        html_price += "<li><a href=''>"+$price+"</a></li>";
	  				};
               
	  				if($odor)	//判断是否到达最后一张，	香型
            		{
                        html_odor += "<li><a href=''>"+$odor+"</a></li>";
	  				};
	  				if($nation)	//判断是否到达最后一张，	产地
            		{
                        html_nation += "<li><a href=''>"+$nation+"</a></li>";
	  				};
	  				if($degrees)	//判断是否到达最后一张，	度数
            		{
                        html_degrees += "<li><a href=''>"+$degrees+"</a></li>";
	  				};
	  				if($occasion)	//判断是否到达最后一张，	适用场合
            		{
                        html_occasion += "<li><a href=''>"+$occasion+"</a></li>";
	  				};
	  				if($net)	//判断是否到达最后一张，	净含量
            		{
                        html_net += "<li><a href=''>"+$net+"</a></li>";
	  				};
           		}
	  				/*白酒*/
	  				$('#hate_c_conten').html(html_hate);/*选购热点*/
	  				$('#Price_c_conten').html(html_price);/*价格*/
	  				$('#Odor_c_conten').html(html_odor);/*香型*/
	  				$('#Net_c_conten').html(html_net);/*净含量*/
	  				$('#Degrees_c_conten').html(html_degrees);/*度数*/
	  				$('#Commodity_c_conten').html(html_nation);/*产地*/
	  				$('#Occasion_c_conten').html(html_occasion);/*适用场合*/	  			
  			}	
	  	})		
	}
	
	/*加载图片列表*/
	getlist();
	function getlist()
	{
		$.ajax({
			url:'js/com.json',
  			type:'GET',
  			dataType:'json',
  			success:function(res)
  			{
  				/*计算分页*/
  				var showNum=40;
                var dataL=res.length;
                var pageNum=Math.ceil(dataL/showNum);
                $('#Pagination').pagination(pageNum,
                {
                    num_edge_entries: 1, //边缘页数
                    num_display_entries: 4, //主体页数
                    items_per_page: 1, //每页显示1项
                    prev_text: "上一页",
                    next_text: "下一页",
  					callback:function(index)
  					{
  						var html='';
		  				for(var i = showNum*index; i < showNum*index+showNum;i++)
		  				{
		  					if(i<dataL)
		  					{
			  					var $url = res[i].url;/*图片路径*/
			  					var $pri = res[i].pri;/*价格*/
			  					var $attention = res[i].attention;/*关注度*/
			  					var $describe = res[i].describe;/*描述*/
			  					var $activity = res[i].activity;/*活动*/
			  					var $comment = res[i].comment;/*评价*/
			  					var $id=res[i].ID;/*记录商品存放位置*/
			  					if($url){
			  						html +='<dl><a href=""></a><dt><img class="lianjie" buyId='+$id+' src="'+$url+'"/></dt><dd><strong>'+$pri+'</strong><span>'+$attention+'</span></dd><dd><a class="lianjie" buyId='+$id+'>'+$describe+'</a><br /><b>'+$activity+'</b></dd><dd><li class="list_box_l">'+$comment+'</li><li class="list_box_c">收藏</li><li class="list_box_r"><a class="shopping_tocar" buyId='+$id+'>加入购物车</a></li></dd></dl>';
			  					}	
		  					}
		  				}
		  				$('#list_content').html(html);
                    }
	  				
  				})
  			}
		});	
	}
	
	/*网页底部*/
	$('#Box_footer').load('index.html #footer');
	/*从主页调用网页底部完毕----------------------------------------完毕*/
			
	
	
	/*点击跳转*/
	var id;
	$('#list_content').on('click','.lianjie',function(){
		id=$(this).attr('buyId')-1;
		//alert(id);
		$.cookie('buyId',id);
		window.location.href='DetailPages.html';
	});
	
	
/*封装购物车函数*/	
	
//购物车数量;
function sc_car(){
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
/*更新购物车信息*/
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
				var $pri = res[sc_obj[i].id].pri;/*价格*/
				html +='<dl id="'+sc_obj[i].id+'"><dt><img src="'+res[sc_obj[i].id].url+'"/></dt><dd><a>'+res[sc_obj[i].id].describe+'</a><strong class="Del" id="'+sc_obj[i].id+'">删除</strong><b class="prices">'+$pri+'×'+sc_obj[i].num+'</b></dd></dl>';
				//html +='<table id="'+sc_obj[i].id+'"><tr><td><input type="checkbox" checked="" name="all" class="Sum"/></td><td class="gName"><img src="'+res[sc_obj[i].id].url+'"/><p class="goods_name">'+res[sc_obj[i].id].describe+'</p></td><td>￥<span class="goods_price">'+$pri+'</span></td><td>-</td><td class="add_reduce"><span>+</span><b>'+sc_obj[i].num+'</b><span>-</span></td><td class="red">￥<span class="all_price s_money">'+sc_obj[i].num*$pri+'</span></td><td class="operate"><span>收藏</span>&emsp;<span class="del">删除</span></td></tr></table>';
				
				//console.log($pri)
				}
				$('#add_goods').html(html);
				//$('#list_box').html(html);
			}
		}
	})
}	

//添加购物车

$('body').on('click','.shopping_tocar',function(){

	//购物车数量增加;
	id= $(this).attr('buyId')-1;/*当前商品编号*/
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
	sc_car();
	sc_msg();
	alert('哈哈！你太有眼光了！恭喜你添加购物车成功！')
});

/*删除主页购物车*/

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






})