//加载Express模块 
const express = require("express"); 
//创建Express应用 
const server = express(); 
// 解决跨域问题
const cors = require("cors"); 
server.use(cors({ origin:[
  'http://localhost:8080',
  'http://127.0.0.1:8080'] }));
//指定WEB服务器的监听端口 
server.listen(3000,()=>{
   console.log('服务器启动......'); 
  });
server.get('/baojia',(req,res)=>{
   res.send('OK'); 
  });