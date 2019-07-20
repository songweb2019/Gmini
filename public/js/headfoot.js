$(document).ready(function(){
  //头部引入
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(result){
      $(result).replaceAll("header");
       //动态创建link元素，引入header.css,自动添加到<head>元素中
      $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    }
  }) 
  //页面脚引入
  $.ajax({
      url:"footer.html",
      type:"get",
      success:function(result){
        $(result).replaceAll("footer");
         //动态创建link元素，引入header.css,自动添加到<head>元素中
        $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
      }
  }) 
});
