/**
 * @author zhangyi
 * @date 2018/5/18
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    sideView: {
        opacity: 0.7,
        backgroundColor: 'black'
    },
    center: {
        flexDirection: 'row'
    },

    scanWrap: {
        alignItems: 'center',
    },
    scanBar: {
        width: 239,
        height: 2,
    },

    cornerTopLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    cornerTopRight: {
        position: 'absolute',
        top: 0,
        right: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0
    },
    cornerBottomLeft: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        borderTopWidth: 0,
        borderRightWidth: 0
    },
    cornerBottomRight: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0
    }
})