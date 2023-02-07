---
category: Tutorial
url_path: '/tutorial'
title: 'ESP32-Arduino Environment'
type: 'Tutorial'

layout: null
---


# ESP32-Arduino Environment

## 一、安装Arduino IDE

1. 使用浏览器访问Arduino官网，转到IDE下载页面

   [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)

2. 单击右侧 "Windows Win10 and newer, 64 bit" 字样，下载软件安装包

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221026133357614.png" width="50%">

3. 运行安装包，安装期间所有选项均保持默认即可（注意：当系统提示安装Arduino USB驱动时一定要选择安装）

4. 安装完毕后运行IDE

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221026134401687.png" width="50%">

5. 单击左上角菜单中的 File 选项，接着找到 Preferences 选项，单击选择

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221026134654625.png" width="50%">

6. 将Theme属性值由Light(Arduino)切换为Dark(Arduino),将Language属性值由English切换为中文(简体)
   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221026142848187.png" width="50%">

7. 点击OK按钮，手动将IDE关闭重启

## 二、添加ESP32开发板

1. 单击左上角菜单中的“文件”选项，接着找到“首选项”选项，单击选择

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221026143337830.png" width="50%">

2. 在“其他开发板管理器地址”中添加ESP32的软件包地址   https://dl.espressif.com/dl/package_esp32_index.json

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221026143618541.png" width="50%">

3. 单击左上角菜单中的“工具”选项，鼠标移至“开发板”选项上方，在右侧弹出的菜单中找到“开发板管理器”，单击打开

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221026135129833.png" width="50%">

4. 此时IDE左侧会弹出”开发板管理器“窗口，在搜索框内输入ESP32，找到esp32 by ESpressif Systems软件包，安装1.0.6版本

   <img decoding="async" src="https://addison-cq.github.io/webPages/images/image-20221026135233639.png" width="50%">    

   > 注：如果因为网络原因造成软件包下载失败，请尝试以下两种方法
   >
   > 1.在切换网络(该网络需能正常访问GitHub)后按以上方法重新下载
   >
   > 2.手动下载软件包解压至本地文件夹指定目录，参考文章：[https://blog.csdn.net/Naisu_kun/article/details/114582503](https://blog.csdn.net/Naisu_kun/article/details/114582503)

5. 至此，ESP32基于Arduino集成开发环境的配置流程结束
