SET NAMES UTF8;
DROP DATABASE IF EXISTS gmn;
CREATE DATABASE gmn CHARSET=UTF8;
USE gmn;

/**用户信息**/
CREATE TABLE gmn_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),       
  upwd VARCHAR(32),        
  email VARCHAR(64),       
  phone VARCHAR(16),       
  avatar VARCHAR(128),      #头像图片路径 
  user_name VARCHAR(32),   
  gender INT               #性别  0-女  1-男
);

/**商品信息**/
CREATE TABLE gmn_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  lname VARCHAR(32),
  title VARCHAR(128),
  price DECIMAL
);


/*********************************************************************/
/**********************************数据导入***************************/
/*********************************************************************/

/**用户信息**/
INSERT INTO gmn_user VALUES
(NULL,'dingding','123456','ding@qq.com','13007669929','img/avatar/1.png','丁丁','1'),
(NULL,'dangdang','123456','dang@qq.com','13007669939','img/avatar/2.png','当当','1'),
(NULL,'huahua','123456','hua@qq.com','13007669949','img/avatar/3.png','花花','0'),
(NULL,'meimei','123456','mei@qq.com','13007669959','img/avatar/4.png','美美','0');

/**商品信息**/
INSERT INTO gmn_laptop VALUES
(NULL,'卫星03','银河太阳星域灰饵星',99999.00),
(NULL,'行星02','银河太阳星域水地星',99999.00),
(NULL,'行星04','银河太阳星域晶蓝星',99999.00),
(NULL,'卫星01','银河东方天河行星',99999.00);

