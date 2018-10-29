/* 移动端轮播
  1.自动轮播( 定时器 + C3-位移+过渡，无缝衔接 - 过渡结束 + 定位)
  2.点要跟随轮播改变样式
  3.可以滑动轮播图  (touch事件)
*/
window.onload = function () {
  mySwiper(); //页面加载时就调用这个函数
  search();
}
//1.自动轮播
function mySwiper() {
  //获取轮播的盒子
  var banner = document.querySelector('.jd_banner');
  //图片的宽度
  var baWith = banner.offsetWidth;
  //图片的盒子
  var imageBox = banner.children[0];
  //点的集合
  var pointBox = banner.children[1];
  //获取所有的点 集合
  var points = pointBox.querySelectorAll('li');


  //定义过渡方法
  var addTransition = function () {
    imageBox.style.transition = 'all .3s ease-out';
    // 兼容写法
    imageBox.style.webkitTransition = 'all .3s ease-out';
  };
  // 定义位移方法
  var addTranslate = function (x) {
    imageBox.style.transform = 'translateX(' + x + 'px)';
    imageBox.style.webkitTransform = 'translateX(' + x + 'px)';
  }
  //定义清除过渡方法
  var clearTranstion = function () {
    imageBox.style.transition = 'none';
    imageBox.style.webkitTransition = 'none';
  }
  var index = 1;
  // 定义定时器，实现自动轮播 setInterval()
  var timer = setInterval(function () {
    index++;
    addTransition();
    addTranslate(-baWith * index);
    console.log('11111-' + index);
  }, 3000);
  //绑定过渡结束事件，重新定位到第一张图片
  imageBox.addEventListener('webkitTransitionEnd', function () {
    //出路过渡事件结束的逻辑
    if (index >= 9) {
      index = 1;
      //清除过渡
      clearTranstion();
      //调用 位移方法
      addTranslate(-baWith * index);
    } else if (index <= 0) {
      index = 8;
      clearTranstion();
      addTranslate(-baWith * index);
    }
    //调用setPoint()
    setPoint();
  });
  //点的跟随滚动 改变当前li的样式
  function setPoint() {
    for (var i = 0; i < points.length; i++) {
      points[i].className = '';
    };
    points[index - 1].className = "now";
  };
  /* 绑定touch事件 滑动图片功能
     需要初始化的变量：
     startX,moveX,isMove,distancex
  */
  var startX = 0, //记录开始触摸的x轴坐标
    moveX = 0, //记录滑动的x轴坐标
    distancex = 0, //记录滑动的距离
    ISMOVE = false; //表示是否滑动过
  //绑定 touchstart 事件
  imageBox.addEventListener('touchstart', function (e) {
    e.preventDefault();
    //停止轮播 关闭定时器
    clearInterval(timer);
    timer = null;//定时器值设为null 
    //记录 startX
    startX = e.touches[0].pageX;
    //console.log(startX);
  });
  //绑定 touchmove 事件
  imageBox.addEventListener('touchmove', function (e) {
    e.preventDefault();
    ISMOVE = true; //表示滑动
    moveX = e.touches[0].pageX;
    //console.log(moveX);
    //记录滑动距离
    distanceX = moveX - startX;
    //重新定位
    clearTranstion(); //清除过渡
    addTranslate(-index * baWith + distanceX);
  });
  // 绑定 touchend 事件 
  /* 当滑动的距离不超过图片的三分之一时，当前滑动无效，吸附回去。
     滑动超过三分之一时，当前滑动生效，切换下一张或上一张 
   */
  imageBox.addEventListener('touchend', function (e) {
    e.preventDefault();
    if (!ISMOVE) { //判断  是否滑动过
      return;
    }
    //Math.abs() 去绝对值
    if (Math.abs(distanceX) > baWith / 3) { //表示滑动有效
      //判断右划(上一张)还是左划(下一张)
      if (distanceX > 0) { //上一张
        index--;
      } else { //下一张
        index++;
      }
      //调用位移和过渡方法
      addTransition();
      addTranslate(-index * baWith);
    }else{
      addTransition();
      addTranslate(-index * baWith);
    }
    //重新初始化全局参数，防止对下一次滑动有影响
    startX = 0,
    moveX = 0,
    distanceX = 0,
    ISMOVE = false;
    //启动定时器
    timer = setInterval(function () {
      index++;
      addTransition();
      addTranslate(-index * baWith);
    }, 3000);
  });
}

//搜索区域滚动效果
function search(){
  /* 1.颜色随着页面滚动 逐渐加深(变得不透明)
     2.当滚动的激励长轮播图的高度时，颜色保持不变
     浏览器滚动事件 widow.onscroll
     监听 滚动高度 document.body.scrollTop
 */
//获取盒子宽度
var searchBox = document.querySelector('.jd_header_box')
//获取轮播图的高度
var bannerh = document.querySelector('.jd_banner').offsetHeight;
//监听scroll 滚动事件
window.onscroll = function(){
  //获取页面滚动的高度
  var top = document.body.scrollTop;
  //var top = document.documentElement.scrollTop;
  var opacity = 0;
  if(top <= bannerh){
    //设置 透明度
    opacity = top / bannerh;
  }else{
    opacity = 1;
  };
  searchBox.style.background =' rgba(201,21,35,'+opacity+')';
}
}
/* 设置倒计时  */
function downTime(){
  var today = new Date();

  var p_obj = document.querySelector('.sk_time');
	var p1_obj =p_obj.children[0];
  var p2_obj =p_obj.children[1];
  var p3_obj =p_obj.children[3];
  var p4_obj =p_obj.children[4];
  var p5_obj =p_obj.children[6];
  var p6_obj =p_obj.children[7];
 

//获取当前的时间 毫秒数
	var time = new Date().getTime();
	console.log(time); 
//2018/11/11距离1970年1月1日 有多少毫秒
	var endTime = new Date("2018/11/11").getTime();
	console.log(endTime);

//差值 今天距离双11有多少毫秒
	var offTime=(endTime-time)/1000;//多少秒
	console.log(offTime); 
//换算？天？时？分？秒
	var D=Math.floor(offTime/60/60/24);

	var H=Math.floor((offTime-(D*24*3600))/3600);  
	console.log(H);
	if(H>10){
  p1_obj.innerHTML=Math.floor(H/10);
  p2_obj.innerHTML=H%10;
  }else{
  p1_obj.innerHTML=0;
  p2_obj.innerHTML=H;
  }
	

	var M=Math.floor((offTime-(D*24*3600)-(H*3600))/60);
	console.log(M);
  M<10?M='0'+M:M;
  p3_obj.innerHTML=Math.floor(M/10);
  p4_obj.innerHTML=M%10;
	
	var S=Math.floor(offTime-(D*24*3600)-(H*3600)-(M*60));
	console.log(S);
  S<10?S='0'+S:S;
  p5_obj.innerHTML=Math.floor(S/10);
  p6_obj.innerHTML=S%10;
	
}
downTime();
//2）设置计时器，间隔1秒，重新获取时间
setInterval(downTime, 1000);
