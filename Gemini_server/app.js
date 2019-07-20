const express=require('express');
//引入body-parser
const bodyParser=require('body-parser');
//引入路由器
const userRouter=require('./routes/user.js');  //nodejs
const proRouter=require('./routes/pro.js');   //ajax

//const index=require("./routes/index");
const details=require("./routes/details");

//跨域
const cors=require("cors");
//创建web服务器
//var server=express();
//server.listen(8080);
var app = express();
var server = app.listen(3000);
app.use(cors({
  origin:"http://127.0.0.1:5500"
}))

//托管静态资源到public下
//server.use( express.static('public') );
app.use(express.static('public'));

//使用body-parser中间件，将post请求的数据格式化为对象
//server.use( bodyParser.urlencoded( { extended:false } ) );
app.use(bodyParser.urlencoded( { extended:false } ) );

//使用路由器
//使用(挂载)的url: /user
// /user/reg
//server.use('/user',userRouter);
//server.use('/pro',proRouter);
app.use('/user',userRouter);
app.use('/pro',proRouter);

/*使用路由器来管理路由*/
//app.use("/index",index);
app.use("/details",details);