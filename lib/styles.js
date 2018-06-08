"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/5/18
 */
const react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
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
        backgroundColor: 'rgba(0, 0, 0, .7)'
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
});
//# sourceMappingURL=styles.js.map