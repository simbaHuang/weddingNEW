/*
 * wedding-new
 * EDIT.SIMBA.20151010
 * Version: 1.0.0.0
 * Author: SIMBA
 */
var headChoo = null;
var headJson = '<!--header top-->'+
				'<div class="head-top"></div>'+
				'<!--header main-->'+
				'<div class="head-main clear">'+
					'<a class="head-logo" href="index.html"><img height="104" src="./images/bg30.gif" alt="" /></a>'+
					'<ul class="head-list clear">'+
						'<li><a href="about.html">ABOUT<br/>关于我们'+
							'<span class="hl-bottom hl-left"></span>'+
							'<span class="hl-bottom hl-right"></span>'+
						'</a></li>'+
						'<li><a href="activity.html">ACTIVITY<br/>活动策划'+
							'<span class="hl-bottom hl-left"></span>'+
							'<span class="hl-bottom hl-right"></span>'+
						'</a></li>'+
						'<li><a href="baby.html">BABY<br/>baby'+
							'<span class="hl-bottom hl-left"></span>'+
							'<span class="hl-bottom hl-right"></span>'+
						'</a></li>'+
						'<li><a href="marry.html">MARRY<br/>求婚策划'+
							'<span class="hl-bottom hl-left"></span>'+
							'<span class="hl-bottom hl-right"></span>'+
						'</a></li>'+
						'<li><a href="collective.html">COLLECTIVE<br/>集体婚礼'+
							'<span class="hl-bottom hl-left"></span>'+
							'<span class="hl-bottom hl-right"></span>'+
						'</a></li>'+
						'<li><a href="plan.html">PLAN<br/>婚礼策划'+
							'<span class="hl-bottom hl-left"></span>'+
							'<span class="hl-bottom hl-right"></span>'+
						'</a></li>'+
					'</ul>'+
				'</div>';

var footJson = '<div class="foot-con">'+
					'<div class="foot-main">'+
						'<div class="foot-top clear">'+
							'<a class="foot-top-logo" href="javascript:"><img src="./images/bg30.gif" alt="" /></a>'+
							'<ul class="foot-top-main clear">'+
								'<li class="w65_">'+
									'<span class="ftm-tit">TEL</span>'+
									'<span class="ftm-txt">4006702260</span>'+
								'</li>'+
								'<li class="w35_">'+
									'<span class="ftm-tit">QQ</span>'+
									'<span class="ftm-txt">2795808239</span>'+
								'</li>'+
								'<li class="w65_">'+
									'<span class="ftm-tit">ADD</span>'+
									'<span class="ftm-txt">上海市黄浦区蒙自路169号智造局1号楼205室</span>'+
								'</li>'+
								'<li class="w35_">'+
									'<span class="ftm-tit">MAIL</span>'+
									'<span class="ftm-txt">info@tgnx.com</span>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<!--bottom-->'+
						'<div class="foot-bot clear">'+
							'<ul class="foot-bot-list clear">'+
								'<li><a href="index.html">首页</a></li>'+
								'<li><a href="plan.html">婚礼策划</a></li>'+
								'<li><a href="collective.html">集体婚礼</a></li>'+
								'<li><a href="marry.html">求婚策划</a></li>'+
								'<li><a href="baby.html">baby</a></li>'+
								'<li><a href="activity.html">活动策划</a></li>'+
								'<li><a href="news.html">新闻</a></li>'+
								'<li><a href="about.html">公司介绍</a></li>'+
								'<li><a href="contact.html">连系我们</a></li>'+
								'<li><a class="brNone" href="recruit.html">招聘</a></li>'+
							'</ul>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<!--copyright-->'+
				'<div class="foot-cr">Copyright 2015 RongXuan ge All Rights Reserved.京ICP号备 11033115号</div>';

var fixJson = '<ul class="container fix-list clear">'+
					'<li class="fix-phone-text">官网热线电话</li>'+
					'<li class="fix-phone">400-6720-2260</li>'+
					'<li class="fix-top">'+
						'<a href="javascript:">'+
							'<i class="fa fa-arrow-circle-up"></i>'+
							'<p>回到顶部</p>'+
						'</a>'+
					'</li>'+
					'<li class="fix-weixin">'+
						'<a href="javascript:">'+
							'<i class="fa fa-weixin"></i>'+
							'<p>微信</p>'+
							'<div class="fix-code"><img src="./images/imgs/code.png" alt="" /></div>'+
						'</a>'+
					'</li>'+
					'<li class="fix-contact">'+
						'<a href="contact.html">'+
							'<i class="fa fa-commenting"></i>'+
							'<p>连系我们</p>'+
						'</a>'+
					'</li>'+
					'<li class="fix-weibo">'+
						'<a href="javascript:">'+
							'<i class="fa fa-weibo"></i>'+
							'<p>官方微博</p>'+
						'</a>'+
					'</li>'+
					'<li class="fix-qq">'+
						'<a target="_blank" href="tencent://message/?uin=740949746&Site=yige.org&Menu=yes">'+
							'<i class="fa fa-qq"></i>'+
							'<p>在线咨询</p>'+
							'<div class="fix-qq-link">740949746</div>'+
						'</a>'+
					'</li>'+
				'</ul>';