/**
 * @author zhangyi
 * @date 2018/5/18
 */
import React from 'react'
import {
    View,
    Dimensions,
    StyleSheet,
    Animated,
    Image,
    Easing,
} from "react-native";
import { RNCamera } from 'react-native-camera';
import IPropsType from './propsType'
import styles from './styles'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

export default class QRScanner extends React.Component<IPropsType, any> {
    static defaultProps = {
        top: 165,
        width: 250,
        height: 250,

        borderColor: '#24A8E8',
        borderWidth: StyleSheet.hairlineWidth,

        cornerSize: 20,
        cornerColor: '#24A8E8',
        cornerBorderWidth: 3,

        isShowScanBar: true,
        scanBarAnimateTime: 2500,
        onBarCodeRead: ()=>{},

        openLight: false
    };

    constructor(props:any) {
        super(props);
    }

    state = {
        animatedValue: new Animated.Value(0),
    };

    componentDidMount() {
        this.scanBarMove()
    }

    componentWillUnmount() {
        this.state.animatedValue.stopAnimation() //停止动画
    }

    // 扫码线移动
    scanBarMove() {
        const { height = 260, scanBarAnimateTime } = this.props;

        this.state.animatedValue.setValue(0);
        Animated.timing(this.state.animatedValue, {
            toValue: height,
            duration: scanBarAnimateTime,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => this.scanBarMove());
    }

    onBarCodeRead = (event: any) => {
        const { onBarCodeRead } = this.props;
        onBarCodeRead && onBarCodeRead(event)
    };

    renderScanBar() {
        const { isShowScanBar, scanBar } = this.props;

        const animatedStyle = {
            transform: [
                {translateY: this.state.animatedValue}
            ]
        };
        if (isShowScanBar) {
            let scanBarDom: React.ReactNode = null;
            if (React.isValidElement(scanBar)) {
                scanBarDom = scanBar;
            } else {
                scanBarDom = (
                    <Image style={styles.scanBar} source={require('../imgs/line.png')}/>
                )
            }
            return (
                <Animated.View style={animatedStyle}>
                    { scanBarDom }
                </Animated.View>
            )
        }
        return null
    }

    render() {
        const {
            top, width = 250, height = 250, maskColor, borderColor, borderWidth,
            cornerSize, cornerColor, cornerBorderWidth, openLight,
            renderTopView, renderBottomView
        } = this.props;

        const scanTop = top ? top : (deviceHeight - height) / 2;
        const scanBottom = deviceHeight - scanTop - height;
        const scanLeft = (deviceWidth - width) / 2;

        const maskSty = maskColor ? { backgroundColor: maskColor } : null;
        const scanBorderSty = {
            borderColor,
            borderWidth
        };

        const cornerSty = {
            width: cornerSize,
            height: cornerSize,
            borderColor: cornerColor,
            borderWidth: cornerBorderWidth
        };

        const flashMode = openLight ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off;

        return (
            <View style={styles.container}>
                <RNCamera
                    style = {styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={flashMode}
                    onBarCodeRead={this.onBarCodeRead}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                    <View style={[styles.sideView, maskSty, {height: scanTop}]}>
                        { renderTopView && renderTopView() }
                    </View>

                    <View style={styles.center}>
                        <View style={[styles.sideView, maskSty, {width: scanLeft}]}/>
                        <View style={[styles.scanWrap, { width, height }, scanBorderSty]}>
                            <View style={[cornerSty, styles.cornerTopLeft]}/>
                            <View style={[cornerSty, styles.cornerTopRight]}/>
                            <View style={[cornerSty, styles.cornerBottomLeft]}/>
                            <View style={[cornerSty, styles.cornerBottomRight]}/>

                            { this.renderScanBar() }
                        </View>
                        <View style={[styles.sideView, maskSty, {width: scanLeft}]}/>
                    </View>

                    <View style={[styles.sideView, maskSty, {height: scanBottom}]}>
                        { renderBottomView && renderBottomView() }
                    </View>
                </View>
            </View>
        )
    }
}