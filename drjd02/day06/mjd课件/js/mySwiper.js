/* 面向对象的方式重构代码 */
//单例模式
var mySwiper = {
  banner : null,
  baWith : null,
  imageBox : null,
  pointBox :null,
  points : null,
  timer : null,
  index : 1,
  startX : 0, //记录开始触摸的x轴坐标
  moveX : 0, //记录滑动的x轴坐标
  distancex : 0, //记录滑动的距离
  ISMOVE : false, //表示是否滑动过
  initSwiper: function(){
    this.banner = document.querySelector('.jd_banner');
    this.baWith = this.banner.offsetWidth;
    this.imageBox = this.banner.children[0];
    this.pointBox = this.banner.children[1];
    this.points = this.pointBox.querySelectorAll('li');
    // 调用 setTimer 启动定时器
    this.setTimer();
    //添加页面可见事件 visiblitychange
    document.addEventListener('visibilitychange',function(e){
      if(document.hidden){
        clearInterval(self.timer);
        self.timer=null;
      }else{
       self.setTimer();
      }
    })
    var self = this;
     //绑定过渡结束事件
     this.imageBox.addEventListener('webkitTransitionEnd', function () {
      //出路过渡事件结束的逻辑
      if (self.index >= 9) {
        self.index = 1;
        //清除过渡
        self.clearTranstion();
        //调用 位移方法
        self.addTranslate(-self.baWith * self.index);
      } else if (self.index <= 0) {
        self.index = 8;
        self.clearTranstion();
        self.addTranslate(-self.baWith * self.index);
      }
      //调用setPoint()
      self.setPoint();
    }),
    //绑定 touchstart 事件
    this.imageBox.addEventListener('touchstart', function (e) {
      e.preventDefault();
      //停止轮播 关闭定时器
      clearInterval(self.timer);
      self.timer = null;//定时器值设为null 
      //记录 startX
      self.startX = e.touches[0].pageX;
      //console.log(startX);
    }),
    //绑定 touchmove 事件
    this.imageBox.addEventListener('touchmove', function (e) {
    e.preventDefault();
    self.ISMOVE = true; //表示滑动
    self.moveX = e.touches[0].pageX;
    //console.log(moveX);
    //记录滑动距离
    self.distanceX = self.moveX - self.startX;
    //重新定位
    self.clearTranstion(); //清除过渡
    self.addTranslate(-self.index * self.baWith + self.distanceX);
  }),
   // 绑定 touchend 事件 
   this.imageBox.addEventListener('touchend', function (e) {
    e.preventDefault();
    if (!self.ISMOVE) { //判断  是否滑动过
      return;
    }
    //Math.abs() 去绝对值
    if (Math.abs(self.distanceX) > self.baWith / 3) { //表示滑动有效
      //判断右划(上一张)还是左划(下一张)
      if (self.distanceX > 0) { //上一张
        self.index--;
      } else { //下一张
        self.index++;
      }
      //调用位移和过渡方法
      self.addTransition();
      self.addTranslate(-self.index * self.baWith);
    }else{
      self.addTransition();
      self.addTranslate(-self.index * self.baWith);
    }
    //重新初始化全局参数，防止对下一次滑动有影响
    self.startX = 0,
    self.moveX = 0,
    self.distanceX = 0,
    self.ISMOVE = false;
    //启动定时器
    self.setTimer();
  })
  },
  addTransition : function () {
    this.imageBox.style.transition = 'all .3s ease-out';
    // 兼容写法
    this.imageBox.style.webkitTransition = 'all .3s ease-out';
  },
  addTranslate : function (x) {
    this.imageBox.style.transform = 'translateX(' + x + 'px)';
    this.imageBox.style.webkitTransform = 'translateX(' + x + 'px)';
  },
  clearTranstion : function () {
    this.imageBox.style.transition = 'none';
    this.imageBox.style.webkitTransition = 'none';
  },
  setTimer :function(){
    var self=this;
    self.timer=setInterval(function () {
      self.index++;
      self.addTransition();
      self.addTranslate(-self.baWith * self.index);
  }, 3000);
  },
  setPoint:function() {
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].className = '';
    };
    this.points[this.index - 1].className = "now";
  },
};
window.onload = function(){
  mySwiper.initSwiper();
}