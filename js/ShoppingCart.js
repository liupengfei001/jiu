$(function(){
		/*菜单——用户中心*/
	
		$('#top ul li').eq(3).mouseenter(function()	/*划入*/
		{
			$('#top_user').css('display',"block");
		});
		/*划出*/
		$('#top ul li').eq(3).mouseleave(function()
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
	
	/*购物车*/
	
	/*增加，减少*/
	var index;
	var k;
	$('body').on('click','.add_reduce span',function(){
		index=$(this).index();
		k=$(this).parent().children('b').html();/*获取该商品当前的数量*/
		if(index==0){
			k++;
		}else{
			k--;
			if(k<=1){
				alert('商品数量不能少于1');
				k=1;
			};
		}
		$(this).parent().children('b').html(k);/*改变后的数量添加进去*/
		
		var $price=$(this).parent().prevAll().children('.goods_price').html();/*获取商品单价*/
		
		$(this).parent().next().children('span').html(k*$price);/*改变小计里的价格*/
		Sum();
	});
	
	/*删除商品功能*/
	$('body').on('click','.del',function(){
		
		id=$(this).parents('table').attr('id');//获取当前商品的id值
		var str = $.cookie('goods');
		//console.log(str )
		var arr = eval(str);
				//遍历所有对象。如果id相同，让该商品数量递增 ;
			for(var attr in arr){
				if(arr[attr].id == id){	
					delete arr[attr];	//删除当前商品的cookie信息；	
					for(var k=0;k<arr.length;k++){	//两次循环便利所有，冒泡排序，把空的放最后
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
			$(this).parents('table').remove();	//删除购物车里的该商品
		sc_car();//更新购物车商品信息
		sc_msg();
		Sum();//重新计算总价
	});
	
	//删除选中项
	/*
	$('body').on('click','.check_goods',function(){
		if($('input[name=DX]').eq(i).is(':checked')){
				console.log(i)
				s +=parseInt($Money.eq(i).html());
			}
		
		
	})*/
	
	
	
	

	/*清空购物车*/
	$('body').on('click','.all_goods',function(){
		$('#list_box').find('table').remove();
		$.cookie('goods',null)
		Sum();
	});
	

	
	/*计算总价*/
	Sum();/*默认调用*/
	function Sum(){
		var $Money=$('.s_money');
		var s=0;
		for(var i=0;i<$Money.length;i++){
			//console.log($Money.eq(i).parents('tr').find('input'))
			if($('input[name=DX]').eq(i).is(':checked')){
				console.log(i)
				s +=parseInt($Money.eq(i).html());
			}
			
			
		}
		$('.money').html('￥'+s+'.00');
	};
	
	/*结算*/
	
	$('body').on('click','.Sum',function(){		/*选中当前*/
		$(this).attr('checked','checked')
		Sum();
	});
	
	$('body').on('click','.input_com',function(){/*点击去结算*/
		
		
		confirm('确定不再看看其他商品？');
		Sum();
		prompt('请输入密码：');
		confirm('恭喜你购物成功，欢迎下次再来！');
		$.cookie('goods',null);
		window.location.href='ListPages.html';
		
	});


//设置全选按钮
var flag=0;
$('input[name=QX]').click(function(){
	
	if(!flag){
		$('input[name=DX]').each(function(){
			$(this).prop('checked',true);

		})
		
		$('input[name=QX]').each(function(){
			$(this).prop('checked',true);

		})
		flag=1
	}else{
		$('input[name=DX]').each(function(){
			//$(this).prop('checked',true);
			$(this).removeAttr('checked')
		})
		
		$('input[name=QX]').each(function(){
			//$(this).prop('checked',true);
			$(this).removeAttr('checked')
		})
		flag=0

	}
	Sum();					
	
})




	
	
	/*购物车*/
	//页面刷新时自动更新
	
	sc_msg();
var id=$.cookie('num');
$('body').on('click','.shopping_tocar',function(){
 	
	//购物车数量增加;
	id= $(this).attr('num')-1;/*当前商品编号*/
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
})
//购物车;
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
				var $pri = res[sc_obj[i].id].pri.split('￥')[1];/*价格*/
					//html +='<dl id="'+sc_obj[i].id+'"><dt><img src="'+res[sc_obj[i].id].url+'"/></dt><dd><a>'+$describe+'</a><strong class="Num">数量:'+sc_obj[i].num+'</strong><b class="prices">'+$pri+'</b></dd></dl>';
				
				html +='<table id="'+sc_obj[i].id+'"><tr><td><input type="checkbox" checked="checked" name="DX" class="Sum"/></td><td class="gName"><img src="'+res[sc_obj[i].id].url+'"/><p class="goods_name">'+res[sc_obj[i].id].describe+'</p></td><td>￥<span class="goods_price">'+$pri+'</span></td><td>-</td><td class="add_reduce"><span>+</span><b>'+sc_obj[i].num+'</b><span>-</span></td><td class="red">￥<span class="all_price s_money">'+sc_obj[i].num*$pri+'</span></td><td class="operate"><span>收藏</span>&emsp;<span class="del">删除</span></td></tr></table>';
				
				//console.log($pri)
				}
				//$('#add_goods').html(html);
				$('#list_box').html(html);
			}
		}
	})


}

	
	
	
	/*动态加载购物车下列表*/
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
            	/*白酒*/
            	var html='<h3>你可能还需要</h3>';
          
            	for(var i=0;i<12;i++)
  				{
  					var $url = res[i].url;/*图片路径*/
  					var $pri = res[i].pri;/*价格*/
  					var $describe = res[i].describe;/*描述*/
  					var $activity = res[i].activity;/*活动*/
  					var $id=res[i].ID;/*记录商品存放位置*/
                        html +='<dl><dt><img src="'+$url+'"/></dt><dd>'+$describe +'</dd><dd class="red">'+$activity+'</dd><dd class="red">'+$pri+'</dd><li><a href="" class="add_car shopping_tocar" num="'+$id+'">加入购物车</a></li></dl>';
           		}
	  				/*白酒*/
	  				$('#other_goods').html(html);
  			}	
	  	})	
	}
	
	
	
})










