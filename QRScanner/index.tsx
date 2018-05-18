/**
 * @author zhangyi
 * @date 2018/5/18
 */
import React from 'react'
import {
    View,
    Dimensions
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

        isShowScanBar: true,
        scanBarAnimateTime: 3000,
        onBarCodeRead: ()=>{}
    };

    constructor(props:any) {
        super(props);
    }

    render() {
        const {
            top, width, height, maskColor,
        } = this.props;

        let scanTop = top ? top : (deviceHeight - height) / 2;
        let scanBottom = deviceHeight - scanTop - height;
        let scanLeft = (deviceWidth - width) / 2;

        let maskSty = maskColor ? { backgroundColor: maskColor } : null;


        return (
            <View style={styles.container}>
                <RNCamera
                    style = {styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                    <View style={[styles.sideView, maskSty, {height: scanTop}]}/>
                    <View style={styles.center}>
                        <View style={[styles.sideView, maskSty, {width: scanLeft}]}/>
                        <View style={[styles.scanView, { width, height }]}>

                        </View>
                        <View style={[styles.sideView, maskSty, {width: scanLeft}]}/>
                    </View>
                    <View style={[styles.sideView, maskSty, {height: scanBottom}]}></View>
                </View>
            </View>
        )
    }
}