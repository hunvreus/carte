---
category: Tutorial
url_path: '/tutorial'
title: 'PulseSensor'
type: 'Tutorial'

layout: null
---

# PulseSensor

1. 将ESP32 Sensor Kit使用USB数据线与电脑连接

2. 双击打开PulseSensor.ino文件

3. 在菜单栏中选择工具->开发板->esp32->ESP32 Dev Module

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221111111323066.png" width="100%">

4. 打开计算机设备管理器面板，查看ESP32 Sensor Kit占用的端口号

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221111111812035.png" width="100%">

5. 在菜单栏中选择工具->端口->对应端口号

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221111111939212.png" width="100%">

6. 在菜单栏中选择工具->Flash Frequency->40MHz

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221111112154895.png" width="100%">

7. 在左侧菜单栏中点击Libraries按钮，在搜索框中输入软件包名称，在下方搜索结果中找到图中框选的软件包，安装最新版本

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221111113050326.png" width="100%">

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221111113927467.png" width="100%">

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221111140507942.png" width="100%">

8. 点击上传按钮,开始编译并烧录程序

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221111115312228.png" width="100%">

9. 烧录完成后，可以在串口监视器中看到系统打印的开机信息

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221111115540101.png" width="100%">
   
9. 开发板上电后，OLED屏幕会显示出“ESP32 Sensor Kit”字样，PulseSensor模块发出绿光，进入工作状态

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/ESP32_PS_POWERON.jpg" width="100%">
   
9. 将手指紧贴于PulseSensor模块发光处，系统开始测量心率

9. 保持手指稳定贴合，几秒钟后，可以在OLED屏幕上看到系统测算出的心率数值

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/ESP32_PS.jpg" width="100%">
   
9. 此外，我们还可以通过按键选择是否存储数据。当第一次按动按键后，屏幕会出现”REC“字样，此时系统会将测算出的心率与血氧饱和度数据存入SD卡；当再次按动按键后，“REC”字样消失，数据将不再被记录

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/ESP32_PS_REC.jpg" width="100%">

## 源代码（[PulseSensor.ino](https://github.com/addison-CQ/webPages/tree/develop/doc/ESP32SensorKit/code)）
