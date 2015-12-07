/*
 * 网站常用效果插件
 * EDIT.ERIC.20150806
 * Version: 1.2.0.0
 * Author: SIMBA
 */

(function($){
	//配置参数
	$.mergeObjs = function(){
		var obj1 = arguments[0];
		for (var i = 1; i < arguments.length; i++) {
			for(var j in arguments[i]){
				obj1[j] = arguments[i][j];
			};
		};
	};

	//截取字符串 //EDIT.ERIC.20150114
	$.fn.limit = function(num){
		var objString = $(this).text();
		var objSize = objString.length;

		if(objSize > num){
			$(this).attr("title",objString);
			objString = $(this).text(objString.substring(0,num) + "...");
		};
	};
	//-------html
	$.each($("*[e-fun = limit]"),function(i){
		$("*[e-fun = limit]").eq(i).limit($("*[e-fun = limit]").eq(i).attr("e-num"));
	});

	//获取系统时间	 EDIT.ERIC.20150120
	$.fn.getTime = function(format,putType,isTime){
		var _this = $(this);
		var nowDate = new Date;
		var year = nowDate.getFullYear(),
			month = nowDate.getMonth() + 1,
			day = nowDate.getDate(),
			week = nowDate.getDay(),
			hour = nowDate.getHours(),
			minute = nowDate.getMinutes(),
			second = nowDate.getSeconds(),
			week_ch = "";
		switch(week){
			case 0 : week_ch = "日";   break;
			case 1 : week_ch = "一";   break;
			case 2 : week_ch = "二";   break;
			case 3 : week_ch = "三";   break;
			case 4 : week_ch = "四";   break;
			case 5 : week_ch = "五";   break;
			case 6 : week_ch = "六";   break;
		}
		//时钟、分钟、秒钟少于10时加0
		if(hour < 10){hour = "0" + hour}
		if(minute < 10){minute = "0" + minute}
		if(second < 10){second = "0" + second}
 	
		//参数分析  format：时间显示格式（0、1、2、3）  putType：是否是input框   isTime：是否显示时间 （true、false）
		if(!format){format = 1;}
		if(!isTime){isTime = "true";}
		if(!putType){
			if(isTime == "true"){
				switch(parseInt(format)){
					case 0 : _this.html(year + "." + month + "." + day + " " + hour + ":" + minute + ":" + second);  break;
					case 1 : _this.html(year + "年" + month + "月" + day + "日" + " " + hour + ":" + minute + ":" + second); break;
					case 2 : _this.html(year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second );  break;
					case 3 : _this.html(year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second );  break;
				}
			}else if(isTime == "false"){
				switch(parseInt(format)){
					case 0 : _this.html(year + "." + month + "." + day);  break;
					case 1 : _this.html(year + "年" + month + "月" + day + "日"); break;
					case 2 : _this.html(year + "-" + month + "-" + day);  break;
					case 3 : _this.html(year + "/" + month + "/" + day);  break;
				}
			}
		}else{
			if(isTime == "true"){
				switch(parseInt(format)){
					case 0 : _this.val(year + "." + month + "." + day + " " + hour + ":" + minute + ":" + second);  break;
					case 1 : _this.val(year + "年" + month + "月" + day + "日" + " " + hour + ":" + minute + ":" + second); break;
					case 2 : _this.val(year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second );  break;
					case 3 : _this.val(year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second );  break;
				}
			}else if(isTime == "false"){
				switch(parseInt(format)){
					case 0 : _this.val(year + "." + month + "." + day);  break;
					case 1 : _this.val(year + "年" + month + "月" + day + "日"); break;
					case 2 : _this.val(year + "-" + month + "-" + day);  break;
					case 3 : _this.val(year + "/" + month + "/" + day);  break;
				}
			}
		}
	};
	//-------html
	$.each($("*[e-fun = time]"),function(i){
		var format = $("*[e-fun = time]").eq(i).attr("e-format"),
			isTime = $("*[e-fun = time]").eq(i).attr("e-isTime");
		if($("*[e-fun = time]").eq(i).is("input")){
			$("*[e-fun = time]").eq(i).getTime(format,"input",isTime);
		}else{
			$("*[e-fun = time]").eq(i).getTime(format,"",isTime);
		}
	});

	//Tab菜单切换  EDIT.ERIC.20150806
	$.fn.tab = function(options) {

		//num:默认显示第几个nav,ent:事件：click/mouseover/touchend,choo:导航选中时的class

		options = $.extend({  
            num  : 0,       //默认显示  
            ent  : "click", //默认响应事件  
            choo : "choo",  //选中的类名   
        },options || {});  
		
		var ths = this;//解决this指向问题

		//初始化
		ths.find("*[e-tab-nav]").hide();
		ths.find("*[e-tab-nav]").eq(options.num).show();
		ths.find("*[e-tab-for]").eq(options.num).addClass(options.choo);

		//事件绑定
		ths.on(options.ent,"*[e-tab-for]",function(){
			var thisFor = $(this).attr("e-tab-for");
			ths.find("*[e-tab-for]").removeClass(options.choo);
			$(this).addClass(options.choo);
			ths.find("*[e-tab-nav]").hide();
			$("*[e-tab-nav =" + thisFor + "]").show();
		});
	};

	//-------html
	$.each($("*[e-fun = tab]"),function(i){
		var num = $("*[e-fun = tab]").eq(i).attr("e-index"),
			ent = $("*[e-fun = tab]").eq(i).attr("e-event"),
			choo = $("*[e-fun = tab]").eq(i).attr("e-class");
		$("*[e-fun = tab]").eq(i).tab({num:num,ent:ent,choo:choo});
	})  

	//获取URL中的参数值		EDIT.ERIC.20150203 
	$.GetRequest = function(){
		var url = location.search; //是从当前URL的?号开始的字符串
	    var theRequest = new Object();
		if (url.indexOf("?") != -1) {
	    	var str = url.substr(1);
	    	strs = str.split("&");
			for(var i = 0; i < strs.length; i ++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
	    }
	    return theRequest;
	};
	//----------Html
	var RequestQueryString = new Object();
	RequestQueryString = $.GetRequest();


	//关闭浏览器窗口	EDIT.ERIC.20150204
	$.colsewindow = function(){
		window.opener = null;
	    window.open("","_self");
	    window.close(); 
	};
	//----------Html
	$.each($('*[e-fun = closeWin]'),function(i){
		$('*[e-fun = closeWin]').eq(i).click(function(){$.colsewindow()});
	});

	//下拉选择   EDIT.SIMBA.20150806
	$.fn.dropBox = function(options){

		options = $.extend({  
			tapType: "click", //默认的点击方式---click,touchend
                n  : 0,       //默认value初始值  
            ntype  : "name",  //提交的input值得value值    
            speed  : 200,     //下拉框下拉或收起的速度
        },options || {});  

		var ths = this;//解决this指向问题

		//每个选项赋值value
		for(var i = 0, len = ths.find("ul li").length; i < len; i ++){
			ths.find("ul li").eq(i).prop("value",options.n);
			options.n ++;
		};
		//绑定事件---下拉收起事件
		ths.on(options.tapType,function(){
			$('*[e-fun = dropBox]').find("ul").stop().slideUp(50);
			ths.find("ul").stop().slideToggle(options.speed);
		})//下拉项选择
		.on("click","li",function(){
			var _this = $(this),
				thsText = _this.text(),
				thsVal = _this.prop("value");
			ths.find("input").val(thsText).prop("name",thsVal);
		});

		//点击页面其他地方下拉框收起
		$(document).on(options.tapType,function(event){
	        var eo = $(event.target);
	        if(ths.find("ul").is(":visible") && eo.parents("[e-fun]").attr("e-fun")!="dropBox"){
	        	ths.find("ul").stop().slideUp(options.speed);  
	        };
	                                            
	    });

	};
	//----------Html
	$.each($('*[e-fun = dropBox]'),function(i){
		var n = $('*[e-fun = dropBox]').eq(i).attr("e-val");
		var type = $('*[e-fun = dropBox]').eq(i).attr("e-type");
		var speed = $('*[e-fun = dropBox]').eq(i).attr("e-speed");
		var tapType = $('*[e-fun = dropBox]').eq(i).attr("e-tap-type");
		$('*[e-fun = dropBox]').eq(i).dropBox({n:n,ntype:type,speed:speed,tapType:tapType});
	});

	//弹出框  EDIT.SIMBA.2015.8.07
	$.fn.pop = function(opts){
		opts = $.extend({
			tapType    : "click",     		 //默认的点击方式---click,touchend
			popFor     : "e-pop",   		 //弹出框的e-pop-box值
		},opts || {});

		var ths = this;//解决this指向问题

		//弹出
		ths.on("click",function(){
			$("*[e-pop-box="+ opts.popFor + "],*[e-pop-bg]").show();
		});

		//关闭
		$('*[e-pop-close]').on("click",function(){
			var thisFor = $(this).attr("e-pop-close");
			$("*[e-pop-box=" + thisFor + "],*[e-pop-bg]").hide();
		});

	};
	//----------Html
	$.each($('*[e-pop-for]'),function(i){
		var popFor = $('*[e-pop-for]').eq(i).attr("e-pop-for");
		var tapType = $('*[e-pop-for]').eq(i).attr("e-tap-type");
		$('*[e-pop-for]').eq(i).pop({popFor:popFor,tapType:tapType});
	});


	//多选  EDIT.SIMBA.2015.08.10
	$.fn.check = function(opts){
		opts = $.extend({
			tapType    :  "click",     				  //默认的点击方式---click,touchend
			checkSrc   :  "./images/e-check.png",     //显示的默认图片
			checkedSrc :  "./images/e-checked.png",	  //选中后显示的图片
		},opts || {});

		var ths = this;//解决this指向问题


		var $checkAll = ths.find("*[e-check-all]");
		var $checkOne = ths.find("*[e-check-one]");

		//全选
		$checkAll.on(opts.tapType,function(){
			//自身check改变
			var thischeck = $(this).attr("e-check") == 0 ? 1 : 0;
			$(this).attr("e-check",thischeck);
			//所有单选check改变
			$checkOne.attr("e-check",thischeck);

			//图片链接替换
			checkSrcChange(thischeck,ths.find("*[e-check]"));
		});

		//单选
		$checkOne.on(opts.tapType,function(){
			//自身check改变
			var thischeck = $(this).attr("e-check") == 0 ? 1 : 0;
			$(this).attr("e-check",thischeck);

			//图片链接替换
			checkSrcChange(thischeck,$(this));
			
			//遍历所有单选 判断是否全选
			var checkOne = $checkOne.size();
			var checkedOne = ths.find("*[e-check-one][e-check=1]").size();

			if(checkOne == checkedOne){
				$checkAll.attr("e-check",1);
				checkSrcChange(1,$checkAll);
			}else{
				$checkAll.attr("e-check",0);
				checkSrcChange(0,$checkAll);
			}

		});

		//替换图片
		var checkSrcChange = function(check,obj){
			if(check == 1){
				obj.find("img").attr("src",opts.checkedSrc);
			}else{
				obj.find("img").attr("src",opts.checkSrc);
			}
		};

	}
	//----------Html
	$.each($('*[e-fun = check]'),function(i){
		var checkSrc = $('*[e-fun = check]').eq(i).attr("e-check-src");
		var checkedSrc = $('*[e-fun = check]').eq(i).attr("e-checked-src");
		var tapType = $('*[e-fun = check]').eq(i).attr("e-tap-type");
		$('*[e-fun = check]').eq(i).check({checkSrc:checkSrc,checkedSrc:checkedSrc,tapType:tapType});
	});


	//单选  EDIT.SIMBA.2015.08.10
	$.fn.radius = function(opts){
		opts = $.extend({
			tapType     :  "click",     			  //默认的点击方式---click,touchend
			radiusSrc   :  "./images/e-radius.png",	  //显示的默认图片
			radiusedSrc :  "./images/e-radiused.png", //选中后显示的图片
		},opts || {});
		
		var ths = this;//解决this指向问题

		var $radius = ths.find("*[e-radius]");

		$radius.on(opts.tapType,function(){
			ths.find("*[e-check]").attr("e-check",0);
			//自身check改变
			var thischeck = $(this).attr("e-check") == 0 ? 1 : 0;
			$(this).attr("e-check",thischeck);
			//替换所有的图片
			radiusSrcChange(0,ths.find("*[e-check]"));
			//替换当前点击图片
			radiusSrcChange(thischeck,$(this));
		});

		//替换图片
		var radiusSrcChange = function(check,obj){
			if(check == 1){
				obj.find("img").attr("src",opts.radiusedSrc);
			}else{
				obj.find("img").attr("src",opts.radiusSrc);
			}
		};
	}
	//----------Html
	$.each($('*[e-fun = radius]'),function(i){
		var radiusSrc = $('*[e-fun = radius]').eq(i).attr("e-radius-src");
		var radiusedSrc = $('*[e-fun = radius]').eq(i).attr("e-radius-src");
		var tapType = $('*[e-fun = radius]').eq(i).attr("e-tap-type");
		$('*[e-fun = radius]').eq(i).radius({radiusSrc:radiusSrc,radiusedSrc:radiusedSrc,tapType:tapType});
	});
	
	//类锚点  回到顶部  EDIT.SIMBA.2015.08.14
	$.fn.anchor = function(opts){
		opts = $.extend({
			tapType   	     :  "click",     	//默认的点击方式---click,touchend
			speed     	     :  500, 			//回到顶部的速度
			minHeight 	     :  0,			    //回到顶部按钮出现的最小高度
			forID            :  null,
		},opts || {});

		var ths = this;//解决this指向问题

		ths.on(opts.tapType,function(){
			var h = 0;
			if(opts.forID != null){
				h = getTop($("#" + opts.forID)[0]);
			}else{
				h = 0;
			}

			$(this).siblings().removeClass("choo");
			$(this).addClass("choo");
			
			$('html,body').animate({scrollTop:h},opts.speed);
		});

	    //为窗口的scroll事件绑定处理函数
	    $(window).scroll(function(){
	        //获取窗口的滚动条的垂直位置
	        var s = $(window).scrollTop();
	        //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
	        if( s >= opts.minHeight){
	            ths.fadeIn(100);
	        }else{
	            ths.fadeOut(200);
	        };
	    });
	}
	//参数转换
	$.fn.styleConversion = function(){
		var ths = $(this);
		var date = ths.attr("e-style");
		var dateJosn =  eval('(' + date + ')');
		return dateJosn;
	}
	//----------Html
	$.each($('*[e-fun = anchor]'),function(i){
		var date = $('*[e-fun = anchor]').eq(i).styleConversion();
		$('*[e-fun = anchor]').eq(i).anchor(date);
	});
	
	//获取元素的纵坐标（相对于窗口）
	function getTop(e){
		var ths = this;
		var offset = e.offsetTop;
		if(e.offsetParent != null){
			offset += getTop(e.offsetParent)
		};
		return offset;
	}
	//----------Html

	/*
    $.Preload = {
        loadImg: function(array_img, callback) {
            function c() {
                d++;
                d >= e && setTimeout(function() {
                    callback(f);
                }, 100);
            }
            var d = 0,
            	e = 0,
                f = array_img instanceof Array ? [] : {};
            for (var g in array_img){
                e++,
                f[g] = new Image,
                f[g].onload = c,
                f[g].onerror = c,
                f[g].onabort = c,
                f[g].src = array_img[g];
            }
    	}
	}
 	
 	var imgs = [
 		'1.png',
 		'2.png',
 		'3.png',
 		'4.png'
 	]
 	Preload.loadImg(imgs,function(){
 		console.log("OK");
 	})*/
	
})(jQuery); 