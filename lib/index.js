"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/5/18
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_camera_1 = require("react-native-camera");
const styles_1 = __importDefault(require("./styles"));
const { width: deviceWidth, height: deviceHeight } = react_native_1.Dimensions.get('window');
class QRScanner extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new react_native_1.Animated.Value(0),
        };
        this.onBarCodeRead = (event) => {
            const { onBarCodeRead } = this.props;
            onBarCodeRead && onBarCodeRead(event);
        };
    }
    componentDidMount() {
        this.scanBarMove();
    }
    componentWillUnmount() {
        this.state.animatedValue.stopAnimation(); //停止动画
    }
    // 扫码线移动
    scanBarMove() {
        const { height = 260, scanBarAnimateTime } = this.props;
        this.state.animatedValue.setValue(0);
        react_native_1.Animated.timing(this.state.animatedValue, {
            toValue: height,
            duration: scanBarAnimateTime,
            easing: react_native_1.Easing.linear,
            useNativeDriver: true,
        }).start(() => this.scanBarMove());
    }
    renderScanBar() {
        const { isShowScanBar, scanBar } = this.props;
        const animatedStyle = {
            transform: [
                { translateY: this.state.animatedValue }
            ]
        };
        if (isShowScanBar) {
            let scanBarDom = null;
            if (react_1.default.isValidElement(scanBar)) {
                scanBarDom = scanBar;
            }
            else {
                scanBarDom = (<react_native_1.Image style={styles_1.default.scanBar} source={require('./imgs/line.png')}/>);
            }
            return (<react_native_1.Animated.View style={animatedStyle}>
                    {scanBarDom}
                </react_native_1.Animated.View>);
        }
        return null;
    }
    render() {
        const { top, width = 250, height = 250, maskColor, borderColor, borderWidth, cornerSize, cornerColor, cornerBorderWidth, openLight, renderTopView, renderBottomView } = this.props;
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
        const flashMode = openLight ? react_native_camera_1.RNCamera.Constants.FlashMode.torch : react_native_camera_1.RNCamera.Constants.FlashMode.off;
        return (<react_native_1.View style={styles_1.default.container}>
                <react_native_camera_1.RNCamera style={styles_1.default.preview} type={react_native_camera_1.RNCamera.Constants.Type.back} flashMode={flashMode} onBarCodeRead={this.onBarCodeRead} permissionDialogTitle={'Permission to use camera'} permissionDialogMessage={'We need your permission to use your camera phone'}/>
                <react_native_1.View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <react_native_1.View style={[styles_1.default.sideView, maskSty, { height: scanTop }]}>
                        {renderTopView && renderTopView()}
                    </react_native_1.View>

                    <react_native_1.View style={styles_1.default.center}>
                        <react_native_1.View style={[styles_1.default.sideView, maskSty, { width: scanLeft }]}/>
                        <react_native_1.View style={[styles_1.default.scanWrap, { width, height }, scanBorderSty]}>
                            <react_native_1.View style={[cornerSty, styles_1.default.cornerTopLeft]}/>
                            <react_native_1.View style={[cornerSty, styles_1.default.cornerTopRight]}/>
                            <react_native_1.View style={[cornerSty, styles_1.default.cornerBottomLeft]}/>
                            <react_native_1.View style={[cornerSty, styles_1.default.cornerBottomRight]}/>

                            {this.renderScanBar()}
                        </react_native_1.View>
                        <react_native_1.View style={[styles_1.default.sideView, maskSty, { width: scanLeft }]}/>
                    </react_native_1.View>

                    <react_native_1.View style={[styles_1.default.sideView, maskSty, { height: scanBottom }]}>
                        {renderBottomView && renderBottomView()}
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_1.View>);
    }
}
QRScanner.defaultProps = {
    top: 165,
    width: 250,
    height: 250,
    borderColor: '#24A8E8',
    borderWidth: react_native_1.StyleSheet.hairlineWidth,
    cornerSize: 20,
    cornerColor: '#24A8E8',
    cornerBorderWidth: 3,
    isShowScanBar: true,
    scanBarAnimateTime: 2500,
    onBarCodeRead: () => { },
    openLight: false
};
exports.default = QRScanner;
//# sourceMappingURL=index.js.map