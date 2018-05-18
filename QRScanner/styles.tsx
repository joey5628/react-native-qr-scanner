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

    scanView: {
        opacity: 0
    }
})