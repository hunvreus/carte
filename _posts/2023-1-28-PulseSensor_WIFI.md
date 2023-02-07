---
category: Tutorial
url_path: '/tutorial'
title: 'PulseSensor_WIFI'
type: 'Tutorial'

layout: null
---

# PulseSensor_WIFI

```
本程序相较于PulseSensor.ino增加了WIFI-STA接入功能
此前操作步骤请参考PulseSensor文档
```

1. 使用手机创建热点，名称”ESP32 Sensor Kit“，密码“12345678”

2. 重启开发板，在串口监视器中查看连接状态，并记录下开发板IP地址

    <img decoding="async" src="https://addison-cq.github.io/webPages/images/Snipaste_2022-11-11_13-48-55.png" width="100%">

3. 打开ESP32 Sensor Kit应用，点击WIFI接入

    <img decoding="async" src="https://addison-cq.github.io/webPages/images/Screenshot_20221111_123302_com.example.esp32sensorkit_f.jpg" width="50%">

4. 在IP地址栏内填入开发板IP地址

5. 点击连接，上方窗口将出现ESP32 Sensor Kit字样

6. APP会每两秒自动同步一次开发板数据

    <img decoding="async" src="https://addison-cq.github.io/webPages/images/Screenshot_20221111_143601_com.example.esp32sensorkit_f.jpg" width="50%">

## 源代码（[PulseSensor_WLAN_STA.ino](https://github.com/addison-CQ/webPages/tree/develop/doc/ESP32SensorKit/code)）

