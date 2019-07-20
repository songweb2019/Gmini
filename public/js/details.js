$(function(){
//放大镜
 $("#super-mask").hover(function() {
  $("#mask").toggleClass("imgLastDiv");
  $("#deImg").toggleClass("imgLastDiv");
}).mousemove(function(e) {
  var mask = 150; //遮罩层的大小
  var wai = 460; //外层的宽度
  var top = e.offsetY - mask / 2;
  var left = e.offsetX - mask / 2;
  if (top < 0) {
      top = 0;
  } else if (top > wai - mask) {
      top = wai - mask;
  }
  if (left < 0) {
      left = 0;
  } else if (left > wai - mask) {
      left = wai - mask;
  }
  $("#mask").css({
      top: top + "px",
      left: left + "px"
  });
  $("#deImg").css("background-position", `${-left*400/250}px ${-top*400/250}px`);
});

})