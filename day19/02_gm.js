var gm = require('gm');


gm('./1.jpg')
//.flip()// 翻转
// .magnify()//扩大一倍
// .rotate('green', 45)//旋转45°，空白区域绿色填充
// .blur(7, 3)//近视眼效果
// .crop(300, 300, 150, 130)//剪切图片
//.edge(3)//锐化
.drawCircle(10, 10, 20, 10)//圆心坐标x,y.偏离图片原点距离x,y
.write('./2.jpg', function (err) {
  if (!err) console.log('crazytown has arrived');
})
