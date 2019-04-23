## rn-qr-scanner
使用[react-native-camera](https://github.com/lwansbrough/react-native-camera)实现的简单扫码功能。
### 特性
* 支持Android和iOS系统
* 支持扫描二维码、条形码
* 支持开关灯
* 高度可自定义

### 入门
目前不支持npm直接安装。  
使用方法：  
1、拷贝 imgs和lib目录到直接的项目  
2、clone项目，publish到私有npm库中，然后在安装

### 例子
[App.tsx](https://github.com/zhangyi5628/react-native-qr-scanner/blob/master/App.tsx)

### 属性
|属性名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|width   |number   |250   |宽度   |
|height   |number   |250   |高度   |
|top   | number  |165   |顶部位置（不传着剧中）   |
|maskColor   |string   |rgba(0, 0, 0, .7)   |遮罩颜色   |
|borderColor   | string  |#24A8E8   |扫码边框颜色   |
|borderWidth   | number  |(hairlineWidth)   |边框宽度   |
|cornerSize   |number  |20   |转角大小   |
|cornerColor   |string   |#24A8E8   |转角颜色   |
|cornerBorderWidth   |number   |3   |转角线宽度   |
|isShowScanBar   |boolean   |true   |是否显示扫描条   |
|scanBar   |React.ReactNode  |细线图片   |扫描条元素（可自定义）   |
|scanBarAnimateTime   |number   |2500   |扫描线移动速度   |
|openLight   |boolean   |false   |是否开灯   |
|onBarCodeRead   |function   |   |扫描结果回调   |
|renderTopView   |ReactNode   |   |绘制扫码顶部内容   |
|renderBottomView   |ReactNode   |   |绘制扫码底部内容   |
