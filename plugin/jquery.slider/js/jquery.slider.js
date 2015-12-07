/*
 * 轮播
 * EDIT.ERIC.20150812
 * Version: 1.0.0.2
 * Author: SIMBA
 */

(function($){
	
	$.fn.slider = function(opts){
		
		opts = $.extend({
			autoPlay : true,     	//是否自动开始
			timeout  : 3000, 	 	//图片轮播时间间隔 ms
			sliderWidth : 1200,   	//容器的宽 **不是图片的宽高 ps：只能是数字类型 px
			sliderHeight: 600,		//容器的高 **同上
			scale    : .8,			//底层图片缩小的倍数  0~1
			offset   : "200",   	//底层图片的偏移长度
			opacity  : .7,     		//底层图片的透明度	0~1
			arrowShow: true,		//是否可点击左右切换图片
			btnW     : 100,         //按钮宽度
		},opts || {});

		//不可大于1
		if(opts.scale > 1){opts.scale = 1;}
		if(opts.opacity > 1){opts.opacity = 1;}
		
		var $slider = $("#slider"),
			$sliderBox = $slider.find(".sliderBox"),
			$sliderBoxFirst = $sliderBox.first(),
			$firstImg = $sliderBoxFirst.find("img"),
			$sliderBtnLeft = "",
			$sliderBtnRight = "",
			imgWidth = opts.sliderWidth,
			imgHeight = opts.sliderHeight;

		var i = [0,1,2,3];
		
		//前后按钮
		var btnStr = '<a class="sliderBtn sliderBtnLeft" href="javascript:"></a><a class="sliderBtn sliderBtnRight" href="javascript:"></a>';

		//初始样式 **避免开始偏移动画
		$sliderBox.css({"margin-left" : parseInt(imgWidth)/2*(-1),});

		//初始化
		var init = function(){
			//外容器的宽高
			$slider.css({
				"width" : opts.sliderWidth,
				"height" : opts.sliderHeight,
			});
			//图片容器的宽高
			$sliderBox.css({
				"width" : imgWidth,
				"height" : $("#slider").height(),
			});
			//初始值的设定
			$sliderBoxFirst.modifyCss({offset:opts.offset*(-1) + 'px',scale:opts.scale,opa:opts.opacity,});
			$sliderBoxFirst.next().modifyCss({offset:0,scale:1,opa:1,zIndex:13});
			$sliderBoxFirst.next().next().modifyCss({offset:opts.offset + 'px',scale:opts.scale,opa:opts.opacity,});
			//加入前后按钮
			$slider.append(btnStr);
			//按钮高度值
			$(".sliderBtn").css({
				"width" : opts.btnW,
				"height": $("#slider").height(),
			});
			if(opts.arrowShow == true){
				$sliderBtnLeft = $(".sliderBtnLeft");
				$sliderBtnRight = $(".sliderBtnRight");
				//事件绑定
				$sliderBtnLeft.on("click",function(){
					stop();
					imgTrans("left");
				});
				$sliderBtnRight.on("click",function(){
					stop();
					imgTrans("right");
				});
			}
			//开始轮播
			start();
		}

		//开始轮播
		var start = function(){
			if(opts.autoPlay == true){
				$slider.data('timeid', window.setTimeout(imgTrans, opts.timeout));
			}
		}

		//暂停轮播
		var stop = function(){
			window.clearTimeout($slider.data('timeid'));
		}


		//图片移动
		var imgTrans = function(direction){

			var boxSize = $sliderBox.size();

			if(direction == "left"){
				i[0]--;i[1]--;i[2]--;i[3]--;

				for(var j = 0; j < i.length; j ++){
					if(i[j] < 0){
						i[j] = boxSize - 1;
					}
				};

				$sliderBox.eq(i[0]).modifyCss({offset:opts.offset*(-1) + 'px',scale:opts.scale,opa:opts.opacity,});
				$sliderBox.eq(i[1]).modifyCss({offset:0,scale:1,opa:1,zIndex:13});
				$sliderBox.eq(i[2]).modifyCss({offset:opts.offset + 'px',scale:opts.scale,opa:opts.opacity,});
				$sliderBox.eq(i[3]).modifyCss();

			}else if(direction == "right" || direction == null || direction == undefined){
				for(var j = 0; j < i.length; j ++){
					if(i[j] >= boxSize){
						i[j] = 0
					}
				};

				$sliderBox.eq(i[0]).modifyCss();
				$sliderBox.eq(i[1]).modifyCss({offset:opts.offset*(-1) + 'px',scale:opts.scale,opa:opts.opacity,});
				$sliderBox.eq(i[2]).modifyCss({offset:0,scale:1,opa:1,zIndex:13});
				$sliderBox.eq(i[3]).modifyCss({offset:opts.offset + 'px',scale:opts.scale,opa:opts.opacity,});

				i[0]++;i[1]++;i[2]++;i[3]++;

			}

			//是否自动轮播
			if(opts.autoPlay == true){
				$slider.data('timeid', window.setTimeout(imgTrans, opts.timeout));
			}
		}

		//鼠标悬停
		$sliderBox.hover(function(){
			stop();
		},function(){
			if(opts.autoPlay == true){
				$slider.data('timeid', window.setTimeout(imgTrans, opts.timeout));
			}
		});


		//首张图片加载完毕后执行初始化
		var imgLoader = new Image();
		imgLoader.onload = function(){
			imgLoader.onload = null;
			init();
		}
		imgLoader.src = $firstImg.attr('src');
	};


	//修改样式
	$.fn.modifyCss = function(params){
		params = $.extend({
			offset : 0,
			scale  : 0,
			opa    : 0,
			zIndex : 10,
		},params || {});
		
		var ths = this;

		ths.css({
			"-webkit-transform" : "translate3d(" + params.offset + ",0,0) scale(" + params.scale + ")",
			"-moz-transform" : "translate3d(" + params.offset +",0,0) scale(" + params.scale + ")",
			"-ms-transform" : "{translate3d(" + params.offset + ",0,0) scale(" + params.scale + ")",
			"transform" : "translate3d(" + params.offset + ",0,0) scale(" + params.scale + ")",
			"opacity" : params.opa,
			"z-index" : params.zIndex,
		});
	}

	

	
})(jQuery); 