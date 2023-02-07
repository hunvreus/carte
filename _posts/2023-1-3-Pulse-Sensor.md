---
category: Product
url_path: '/product/:id'
title: 'Pulse Sensor'
type: 'Sensor'

layout: null
---

# Pulse Sensor

Pulse Sensor是一款用于心率测量、脉搏波形测量和HRV分析的光电反射式**模拟传感器**。将其佩戴于手指、耳垂等处，通过导线连接可将采集到的模拟信号传输给Arduino、ESP32、STM32和STC12C5A等具有模拟采集功能的单片机并转换为数字信号，再通过单片机的简单计算后就可以得到心率数值，此外还可将脉搏波形和心率数值通过串口上传到电脑进行显示。Pulse Sensor是一款开源硬件，目前国外官网上已有其对应的arduino程序和上位机Processing程序，其适用于心率方面的科学研究和教学演示，也非常方便二次开发。本公司制作的传感器实物如下图：

![](https://addison-cq.github.io/webPages/images/image-20221026214424539.png)

引脚说明：

S ： **脉搏信号输出（要接单片机AD接口）**

\+ ：**5v(或3.3v)电源输入**

\- ：**GND地**

## 传感器参数

电路板直径：16mm

电路板厚度：1.2mm

LED峰值波长：515nm（绿光）

供电电压：3.3~5v 

检测信号类型：光反射信号(PPG)

输出信号类型：模拟信号

信号放大倍数：330倍

输出信号范围：0~VCC

电流大小：~4ma(5v下)

分辨率：1 bpm

采样率：500Hz(由程序设定)

## 使用方法

目前基于Pulse Sensor传感器搭建心率脉搏测量系统主要有两种方法：

一、有线传输方式

![](https://addison-cq.github.io/webPages/images/pulsesensor_arduino.JPG)

此方法可以通过Arduino UNO或其他类似开发板，采集人体脉搏信号，并计算心率数值。具体操作方法和程序可以参考[这里](https://github.com/WorldFamousElectronics/PulseSensor_Amped_Arduino)。

二、无线传输方式

![](https://addison-cq.github.io/webPages/images/pulsesensor_esp32.JPG)

此方法通过本公司出的ESP32 Sensor Kit开发板，采集人体脉搏信号，并计算心率数值，最终使用低功耗蓝牙BLE或者WIFI传输到电脑或手机终端查看。具体操作方法和程序可以参考[这里](https://addison-cq.github.io/webPages/Board/ESP32SensorKit/)。
