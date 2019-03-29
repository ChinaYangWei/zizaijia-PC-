SET NAMES UTF8;
DROP DATABASE IF EXISTS myProject;
CREATE DATABASE myject CHARSET=UTF8;
USE myject;

#创建一个用户列表
CREATE TABLE store_user(
  user_id INT PRIMARY KEY AUTO_INCREMENT comment '用户的id值',
  user_phone CHAR(11) comment '用户的手机号',
  user_upwd VARCHAR(28) comment '用户的密码'
);

#创建一个家具的列表
CREATE TABLE product_jiaju(
  jiaju_id INT  PRIMARY KEY AUTO_INCREMENT comment '家具的id',
  classify VARCHAR(25) comment '家具中的房间分类',
  product_ify VARCHAR(50) comment '房间中的商品分类',
  title_ify VARCHAR(25) comment '商品的标题分类',
  jiaju_spec VARCHAR(50) comment '商品的规格',
  spec_id INT comment '规格属于哪个商品id',
  jiaju_score INT comment '商品的评分',
  jiaju_ln VARCHAR(255) comment '商品的介绍',
  jiaju_img VARCHAR(150) comment '商品的图片地址',
  jiaju_title VARCHAR(225) comment '商品名称',
  jiaju_color VARCHAR(35) comment '商品的十六进制颜色值',
  jiaju_price DECIMAL(8,2) comment '当前价格',
  jiaju_old DECIMAL(8,2) comment '打折后的价格',
  jiaju_isSales CHAR(1) comment '是否为促销商品',
  jiaju_isOverflow CHAR(1) comment '是否为超值爆款',
  jiaju_newProduct CHAR(1) comment '是否为新品',
  jiaju_stock INT comment '商品的库存数量',
  jiaju_newTime DATETIME NOT NULL DEFAULT NOW() comment '新品的状态修改判断',
  jiaju_caizhi VARCHAR(25) NOT NULL comment '商品的材质分类'
);

#往数据库中插入测试的数据  
INSERT INTO product_jiaju VALUES
(NULL, '卧室', '床', '弧光圆舞','1.5米',1,76,'弧光曼舞，梦里梦外的优雅治愈。', 'http://127.0.0.1:3000/images/Z26BD11_LP_001.jpg', '1.2-1.8米软包床', '#e4ddca', '7999.00', '3499.00', '0', '0', '0', 110, '2019-01-07 10:32:16', '皮艺'),
(NULL, '客厅', '单人沙发', '蓝色风铃','1.2米',1,52,'理想中的好睡眠，除了柔软舒适的床品，你还需要一张好床。', 'http://127.0.0.1:3000/images/Z37BD11_LP_001 (1).jpg', '1.2-1.8米软包床', '#e4ddca', '7999.00', '0.00', '1', '0', '0',89, '2019-01-07 10:35:02', '布艺'),
(NULL, '卧室', '梳妆台', 'Zest One','1.4米',1,43,'极简设计，浅木色的自然温度。', 'http://127.0.0.1:3000/images/Z37EC01_LP_001.jpg', '1.2-1.8米软包床', '#e4ddca', '7999.00', '0.00', '0', '0', '1',76, '2019-01-07 10:35:43', '花木'),
(NULL, '卧室', '床', '蓝色笔记','1.8米',1,76,'极简设计，浅木色的自然温度。', 'http://127.0.0.1:3000/images/Z37AM01_LP_001.jpg', '1.8米软包床', '#e4ddca', '7999.00', '0.00', '0', '0', '1',84, '2019-01-07 10:32:16', '实木');

#商品详情的图片地址
CREATE TABLE productImgUrl(
  img_id INT PRIMARY KEY AUTO_INCREMENT comment '商品图片的id',
  productImgId INT comment '商品的id',
  img_big VARCHAR(125) comment '商品的大图片',
  img_sm VARCHAR(125) comment '商品的小图片'
);

INSERT INTO productImgUrl VALUES
(NULL,1,'http://127.0.0.1:3000/images/Z26BD11_LP_001.jpg','http://127.0.0.1:3000/images/Z26BD11_LP_001 (1).jpg'),
(NULL,1,'http://127.0.0.1:3000/images/Z26BD11_LP_002.jpg','http://127.0.0.1:3000/images/Z26BD11_LP_002 (1).jpg'),
(NULL,1,'http://127.0.0.1:3000/images/Z26BD11_LP_003.jpg','http://127.0.0.1:3000/images/Z26BD11_LP_003 (1).jpg'),
(NULL,1,'http://127.0.0.1:3000/images/Z26BD11_LP_004.jpg','http://127.0.0.1:3000/images/Z26BD11_LP_004 (1).jpg'),
(NULL,1,'http://127.0.0.1:3000/images/Z26BD11_LP_005.jpg','http://127.0.0.1:3000/images/Z26BD11_LP_005 (1).jpg'),
(NULL,1,'http://127.0.0.1:3000/images/Z26BD11_LP_006.jpg','http://127.0.0.1:3000/images/Z26BD11_LP_006 (1).jpg'),
(NULL,2,'http://127.0.0.1:3000/images/Z37BD11_LP_001 (1).jpg','http://127.0.0.1:3000/images/Z37BD11_LP_001.jpg'),
(NULL,2,'http://127.0.0.1:3000/images/Z37BD11_LP_002 (1).jpg','http://127.0.0.1:3000/images/Z37BD11_LP_002.jpg'),
(NULL,2,'http://127.0.0.1:3000/images/Z37BD11_LP_003 (1).jpg','http://127.0.0.1:3000/images/Z37BD11_LP_003.jpg'),
(NULL,2,'http://127.0.0.1:3000/images/Z37BD11_LP_004 (1).jpg','http://127.0.0.1:3000/images/Z37BD11_LP_004.jpg'),
(NULL,2,'http://127.0.0.1:3000/images/Z37BD11_LP_005 (1).jpg','http://127.0.0.1:3000/images/Z37BD11_LP_005.jpg'),
(NULL,2,'http://127.0.0.1:3000/images/Z37BD11_LP_006 (1).jpg','http://127.0.0.1:3000/images/Z37BD11_LP_006.jpg'),
(NULL,3,'http://127.0.0.1:3000/images/Z37EC01_LP_001.jpg','http://127.0.0.1:3000/images/Z37EC01_LP_001 (1).jpg'),
(NULL,3,'http://127.0.0.1:3000/images/Z37EC01_LP_002.jpg','http://127.0.0.1:3000/images/Z37EC01_LP_002 (1).jpg'),
(NULL,3,'http://127.0.0.1:3000/images/Z37EC01_LP_003.jpg','http://127.0.0.1:3000/images/Z37EC01_LP_003 (1).jpg'),
(NULL,3,'http://127.0.0.1:3000/images/Z37EC01_LP_004.jpg','http://127.0.0.1:3000/images/Z37EC01_LP_004 (1).jpg'),
(NULL,3,'http://127.0.0.1:3000/images/Z37EC01_LP_005.jpg','http://127.0.0.1:3000/images/Z37EC01_LP_005 (1).jpg'),
(NULL,3,'http://127.0.0.1:3000/images/Z37EC01_LP_006.jpg','http://127.0.0.1:3000/images/Z37EC01_LP_006 (1).jpg'),
(NULL,4,'http://127.0.0.1:3000/images/Z37AM01_LP_001.jpg','http://127.0.0.1:3000/images/Z37AM01_LP_001 (1).jpg'),
(NULL,4,'http://127.0.0.1:3000/images/Z37AM01_LP_002.jpg','http://127.0.0.1:3000/images/Z37AM01_LP_002 (1).jpg'),
(NULL,4,'http://127.0.0.1:3000/images/Z37AM01_LP_003.jpg','http://127.0.0.1:3000/images/Z37AM01_LP_003 (1).jpg'),
(NULL,4,'http://127.0.0.1:3000/images/Z37AM01_LP_004.jpg','http://127.0.0.1:3000/images/Z37AM01_LP_004 (1).jpg'),
(NULL,4,'http://127.0.0.1:3000/images/Z37AM01_LP_005.jpg','http://127.0.0.1:3000/images/Z37AM01_LP_005 (1).jpg'),
(NULL,4,'http://127.0.0.1:3000/images/Z37AM01_LP_006.jpg','http://127.0.0.1:3000/images/Z37AM01_LP_006 (1).jpg');

#公告的显示
CREATE TABLE notice(
  no_id INT PRIMARY KEY AUTO_INCREMENT comment '公告的id值',
  notice VARCHAR(45) comment '公告的内容'
);
INSERT INTO notice VALUES
(NULL,'This is my first announcement NICE ！！！'),
(NULL,'今日起，本场商品全部5折起！！！');