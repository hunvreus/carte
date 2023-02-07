---
category: Product
url_path: '/product'
title: 'ESP32 Sensor Kit'
type: 'Board'

layout: null
---

# ESP32 Sensor Kit

## ESP32 Sensor Kit是一款具有超高性价比的传感器应用开发套件

- 主控选用乐鑫ESP32-WROOM-32E模组，集成了Wi-Fi、传统蓝牙和低功耗蓝牙功能。模组内部自带4MB SPI FLASH，可以进行大容量程序存储

- 适配本公司多款生理信号传感器模块：Pulse Sensor心率模块、MAX30102血氧心率模块以及MAX30100血氧心率模块

- 支持通过蓝牙将心率血氧值上传手机APP端

- 支持通过WIFI将心率血氧值上传手机APP端

- 带有0.96寸OLED屏幕显示

- 板载TF卡槽，支持心率血氧值保存在TF卡

- 带有锂电池充放电功能，方便制作可穿戴设备原型

- 采用micro USB口完成供电/下载/调试功能

### 外观
  <img src="https://addison-cq.github.io/webPages/images/ESP32_LAYOUT.JPG" style="zoom: 50%;" />

  <img src="https://addison-cq.github.io/webPages/images/ESP32_back.jpg" style="zoom:15%;" />

### 原理图（[Schematic_ESP32_HUB_2023-02-05.pdf](https://github.com/addison-CQ/webPages/tree/develop/doc/ESP32SensorKit)）

  <img src="https://addison-cq.github.io/webPages/images/Schematic_ESP32_HUB.png" style="zoom:50%;" />

------


## 适配传感器模块概览

- ## Pulse Sensor（[有配件](https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.3bc13d0dJniMxi&ft=t&id=36688885742)）（[无配件](https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-5180712001.7.23184ebaXpwi0t&id=40354425711)）

    ![](https://addison-cq.github.io/webPages/images/image-20221026214424539.png)
* 通过绿光LED检测手指脉搏信号
* 通过单片机编程可计算人体心率数值
* 体积小巧，成本低廉

- ## [MAX30102](https://item.taobao.com/item.htm?spm=a21dvs.23580594.0.0.3bc13d0dJniMxi&ft=t&id=700319321804)

  <img src="https://addison-cq.github.io/webPages/images/ADS-30102_front.jpg" style="zoom:15%;" /><img src="https://addison-cq.github.io/webPages/images/ADS-30102_back.jpg" style="zoom:14%;" />
* 通过红光和红外光检测手指脉搏信号
* 板载MCU（内置血氧和心率算法），无需编程可以直接通过串口读取人体血氧和心率数值
* 预留I2C接口，用户可以外接其他MCU进行开发
- ## MAX30100（即将推出）
  
  ------
