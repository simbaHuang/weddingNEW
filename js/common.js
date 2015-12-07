/*
 * wedding-new
 * EDIT.SIMBA.20151010
 * Version: 1.0.0.0
 * Author: SIMBA
 */

(function($){

    //计算显示屏的宽高
    var win_w = document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth;
    var win_h = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;



    /**
	 *  头部 加载
	 * 	2015.10.11
	 *  SIMBA
	**/

	function loadHead(){
		var $head = $(".JS_head");
		$head.append(headJson);
		$head.find(".head-list").find("a").removeClass("choo");
		if(headChoo != null){
			$head.find(".head-list").find("a").eq(headChoo).addClass("choo");
		}
	}
	loadHead(headChoo);

	/**
	 *  尾部 加载
	 * 	2015.10.12
	 *  SIMBA
	**/

	function loadFoot(){
		var $foot = $(".JS_foot");
		$foot.append(footJson);
	}
	loadFoot();


	/**
	 *  fix 加载
	 * 	2015.10.13
	 *  SIMBA
	**/
	function loadFix(){
		var $foot = $(".JS_fix");
		$foot.append(fixJson);
		//绑定回到顶部
		$foot.find(".fix-top").anchor();
	}
	loadFix();

	/**
	 *  fix 固定
	 * 	2015.10.13
	 *  SIMBA
	**/

	var fix_top = getTop($(".JS_foot")[0]) - win_h - $(".JS_fix").height();
	function fixWarp(){
		//head  背景大图根据页面滚动而滚动
		var scroll = $(document).scrollTop();

		if(scroll >= fix_top){
			$(".JS_fix").css({"position":"relative"});
		}else{
			$(".JS_fix").css({"position":"fixed"});
		}
	}
	fixWarp();
	$(window).scroll(function(){
		fixWarp();
	});

	/**
	 *  获取元素的纵坐标（相对于窗口）
	 * 	2015.10.13
	 *  SIMBA
	**/
	function getTop(e){
		var offset = e.offsetTop;
		if(e.offsetParent!=null){offset+=getTop(e.offsetParent)};
		return offset;
	}

    /**
	 *  头部
	 * 	2015.10.11
	 *  SIMBA
	**/
	for(var i = 0; i < $(".header li").size(); i ++){
		var liWidth = $(".header").find("li").eq(i).width()/2;
		$(".header").find(".hl-left").eq(i).css({
			"left" : liWidth + "px",
		});
		$(".header").find(".hl-right").eq(i).css({
			"right" : liWidth + "px",
		});
	}
	function headMouseover(){
		var ths = $(this),
			thsWidth = ths.width()/2 + 20,
			$thsLeft = ths.find(".hl-left"),
			$thsRight = ths.find(".hl-right");
		if(!ths.hasClass("choo")){
			$thsLeft.stop().animate({
				"left" : 0,
				"width" : thsWidth + "px",
			},500);
			$thsRight.stop().animate({
				"right" : 0,
				"width" : thsWidth + "px",
			},500);
		}
	}
	function headMouseout(){
		var ths = $(this),
			thsWidth = ths.width()/2 + 20,
			$thsLeft = ths.find(".hl-left"),
			$thsRight = ths.find(".hl-right");
		if(!ths.hasClass("choo")){
			$thsLeft.stop().animate({
				"left" : thsWidth + "px",
				"width" : 0,
			},500);
			$thsRight.stop().animate({
				"right" : thsWidth + "px",
				"width" : 0,
			},500);
		}
	}
	$(".header").on("mouseover",".head-list a",headMouseover);
	$(".header").on("mouseout",".head-list a",headMouseout);

    /**
	 *  banner
	 * 	2015.10.11
	 *  SIMBA
	
	var imgBg = new Image(),
		bgImgWidth = "",
		bgImgHeight = "";
    imgBg.onload = function(){
    	bgImgWidth = imgBg.width;
		bgImgHeight = imgBg.height;
		$(".banner-max").css({
			"height" : bgImgHeight,
		});
    };
    imgBg.src = "./images/imgs/banner_0.jpg";
	**/

	$.fn.banner = function(opts){

		opts = $.extend({  
            num  : 0,       //默认显示  
            speed  : 4000,  //时间间隔   
        },opts || {});  

		var ths = this,
			$thsMax = ths.find(".banner-max"),
			$thsMaxImg = $thsMax.find("img"),
			maxImgSize = $thsMaxImg.size(),
			$thsMin = ths.find(".banner-min"),
			$thsMinLi = $thsMin.find("li"),
			count = 0,
			loop = "";

		var init = function(){
			var imgW = $thsMaxImg.eq(0).height();
			$thsMax.height(imgW);
			//初始化
			showImg(opts.num);
			//开始循环
			start();
		},
		showImg = function(i){
			$thsMaxImg.stop().hide(0);
			$thsMaxImg.eq(i).stop().fadeIn(1000); 
			$thsMinLi.removeClass("choo");
			$thsMinLi.eq(i).addClass("choo");
		},
		start = function(){
			if(count > (maxImgSize-1)){
				count = 0;
			}
			showImg(count);
			count ++;
			//循环
			loop = setTimeout(start,opts.speed);
		},
		stop = function(){
			clearTimeout(loop);
		}

		init();

		//鼠标悬停
		ths.on("mouseover",".JS_imgBg",function(){
			stop();
		});
		ths.on("mouseout",".JS_imgBg",function(){
			loop = setTimeout(start,opts.speed);
		});

		//点击切换
		ths.on("click",".JS_imgBg",function(){
			var $ths = $(this),
				thsIndex = ths.find(".JS_imgBg").index($ths);
			count = thsIndex;
			showImg(thsIndex);
		});
	}
	$(".JS_banner").banner();

	/**
	 *  图片背景
	 * 	2015.10.11
	 *  SIMBA
	**/
    for(i = 0; i < $(".JS_imgBg").size(); i ++){
    	var $imgBg = $(".JS_imgBg").eq(i);
    	var imgBgWin = $imgBg.width(),
    		imgBgHei = $imgBg.height();
    	$imgBg.find(".img-bg").css({
    		"width" : imgBgWin*3.4 + "px",
    		"height" : imgBgHei*2.6 + "px",
    		"right" : 0,
			"bottom" : (-2.6)*imgBgHei + "px",
    	});
    }

	function imgMouseover(){
		var ths = $(this),
			$thsImg = ths.find(".img-bg"),
			imgBgWin = ths.width(),
    		imgBgHei = ths.height(),
    		$thsCon = ths.find(".img-main");
		$thsImg.stop().animate({
			"right" : (-2.4)*imgBgWin + "px",
			"bottom" : 0,
		},800);
		if($thsCon.size() > 0){
			$thsCon.stop().animate({
				"top" : 0,
			},800);
		}
	}
	function imgMouseout(){
		var ths = $(this),
			$thsImg = ths.find(".img-bg"),
			imgBgWin = ths.width(),
    		imgBgHei = ths.height(),
    		$thsCon = ths.find(".img-main");
		$thsImg.stop().animate({
			"right" : 0,
			"bottom" : (-2.6)*imgBgHei + "px",
		},800);
		if($thsCon.size() > 0){
			$thsCon.stop().animate({
				"top" :"-100%",
			},800);
		}
	}
	$(".JS_imgBg").on("mouseover",imgMouseover);
	$(".JS_imgBg").on("mouseout",imgMouseout);


	/**
	 *  集体婚礼 两侧图片
	 * 	2015.10.12
	 *  SIMBA
	**/
	function sliderImg(win_w){
		var $sliderImg = $(".JS_sliderImg"),
			minConW = $(".JS_sliderImg").eq(0).siblings(".JS_minCon").width(),
			sliderW = (win_w - minConW)/2;
		$sliderImg.width(sliderW);
	}
	if($(".JS_sliderImg").size() > 0){
		sliderImg(win_w);
	}


	/**
	 *  屏幕缩放
	 * 	2015.10.12
	 *  SIMBA
	**/
	$(window).resize(function(){
		//计算显示屏的宽高
	    var win_w = document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth;
	    var win_h = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;

		/**
		 *  集体婚礼 两侧图片 
		 * 	2015.10.12
		 *  SIMBA
		**/
		if($(".JS_sliderImg").size() > 0){
			sliderImg(win_w);
		}

		/**
		 *  banner 
		 * 	2015.10.12
		 *  SIMBA
		**/
		var $bannerMax = $(".JS_banner").find(".banner-max"),
			$bannerImg = $bannerMax.find("img").eq(0);
		var imgW = $bannerImg.height();
			$bannerMax.height(imgW);
	});


	/**
	 *  相册
	 * 	2015.10.12
	 *  SIMBA
	**/
	$.fn.album = function(opts){

		opts = $.extend({  
            num  : 0,       //默认显示  
            speed  : 400,  //时间间隔   
        },opts || {});  

        var ths = this,
        	$leftBtn = ths.find(".ba-list-left"),
        	$rightBtn = ths.find(".ba-list-right"),
        	$imgLi = ths.find("li"),
        	imgLiSize = $imgLi.size() - 1,
        	imgW = $imgLi.eq(0).width() + 1,
        	imgH = $imgLi.eq(0).height(),
        	count = 0;
        var init = function(){
        	ths.height(imgH);
        	ths.find("span").height(imgH);
        	imgSet();
        },
        imgSet = function(){
        	for(var i = 0; i < $imgLi.size(); i ++){
        		var offsetW = i*imgW;
        		$imgLi.eq(i).css({
        			"left" : offsetW + "px",
        		});
        	}
        },
        moveImg = function(s){
        	for(var i = 0; i < $imgLi.size(); i ++){
        		var offsetW = (count)*imgW;
        		count ++;
        		count = count > imgLiSize ? 0 : count;


        		if(s == "left"){
        			if(count == 0){
		        		moveif(opts.speed,0);
	        		}else{
		        		move();
	        		}
        		}else if(s == "right"){
        			if(count == 1){
		        		moveif(0,opts.speed);
	        		}else{
		        		move();
	        		}
        		}
        	}
        	function move(){
        		$imgLi.eq(i).stop(false,true).animate({
        			"left" : offsetW + "px",
        		},opts.speed);
        	}
        	function moveif(time1,time2){
        		$imgLi.eq(i).stop(false,true).animate({
        			"left" : imgW*(-1) + "px",
        		},time1).animate({
        			"left" : offsetW + "px",
        		},time2);
        	}
        }

        $rightBtn.on("click",function(){
        	count --;
        	count = count < 0 ? ($imgLi.size()-1) : count;
        	moveImg("left");
        });
        $leftBtn.on("click",function(){
        	count ++;
        	count = count > ($imgLi.size()-1) ? 0 : count;
        	moveImg("right");
        });

        init();
	}
	$.each($(".JS_baList"),function(i){
		$(".JS_baList").eq(i).album();
	});

})(jQuery); 
