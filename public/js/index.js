$(function(){
  //tabs 标签页切换
  //dom 四步
  //1.查找触发事件的元素
    // 查找有data-toggle属性的切属性值为tab的元素
    // var tabs=document.querySelectorAll("[data-toggle=tab]");
  //2.绑定事件处理函数
    // 遍历 tabs中的每个tab
    // for(var tab of tabs){
    //每遍历一个tab，就绑定单击事件
    // tab.onclick=function(){}
      //创建变量 tabi 用于递增zIndex的数值
      var tabi=1;
      $("[data-toggle=tab]").click(function(){
      //3.查找要修改的元素
        //给自己的爹+active    
      $(this).parent().addClass("active")
       //给爹的所有兄弟去掉active 
       .siblings().removeClass("active")
      //获得当前tab自己身上缓存的对应div的id
      var contid=this.getAttribute("data-id")
      //用id作为查询条件，查询对应的div
      var contdiv=document.getElementById(contid)
      //4.修改元素
      //修改div的zIndex属性值高于其他div
      contdiv.style.zIndex=tabi;
      //每次设置完都 tabi+1
      tabi++;
    })

    // content1 更改背景
    $("#cont1btn .cont1btn1").click(function(){
      $("#content1").css("background-image","repeating-linear-gradient(to right,#513357,#2d1c48,#2d1c48,#080635,#080635)")
    })
    $("#cont1btn .cont1btn2").click(function(){
      $("#content1").css("background-image","repeating-linear-gradient(to right,#43aff7,#20a6f3,#40cbe4,#24d1f0)")
    })
    $("#cont1btn .cont1btn3").click(function(){
      $("#content1").css("background-image","repeating-linear-gradient(to right,#d539f5,#9a529c,#c940c2,#bd2abd,#9d15af)")
    })
    $("#cont1btn .cont1btn4").click(function(){
      $("#content1").css("background-image","repeating-linear-gradient(to right,#33573b,#2d7044,#30b87f,#18c74d,#1b8b57)")
    })
    $("#cont1btn .cont1btn5").click(function(){
      $("#content1").css("background-image","repeating-linear-gradient(to right,#4f5733,#a7a04b,#c7bf4d,#bbdd22,#dacd1f)")
    })
    $("#cont1btn .cont1btn6").click(function(){
      $("#content1").css("background",`rgb( ${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)}`)
    })

   //content1 plane 战机
   //1.查找触发事件的元素
                      //2. 绑定处理事件函数
   $("#planelist>img").click(function(){
      //3.查找要修改的元素
             //4.修改元素
            //用当前选中的img克隆一份替换chosen下的img
      $(this).clone().replaceAll("#planechose>img");
   })

  //content2 tree型列表
  //DOM 4步:
  //1. 查找触发事件的元素
  var cont2top2 = document.getElementById("cont2top2")
  //2. 绑定事件处理函数
  cont2top2.onclick=function(){
	//3. 查找要修改的元素
	var cont2top1 =	document.getElementById("cont2top1")
 	//4. 修改元素
	  //如果d2的内容是<<
	if(cont2top2.textContent=="<<"){
	//--关门 隐藏d1
		//d1.style.display="none";
		cont2top1.style.width=0;
    //<div style="display:none"
  	//--修改d2的内容为>>
    cont2top2.textContent=">>";
	}else{//否则
	//--开门 显示d1
		//d1.style.display="block";
		cont2top1.style.width="65px";
	//--修改d2的内容为<<
		cont2top2.textContent="<<";
	}
}


})