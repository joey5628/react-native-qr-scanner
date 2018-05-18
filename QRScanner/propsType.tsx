/**
 * @author zhangyi
 * @date 2018/5/18
 */
import React from 'react'

export default interface IPropsType {
    width?: number;
    height?: number;
    top?: number;

    maskColor?: string;
    borderColor?: string;
    borderWidth?: number;

    cornerSize?: number;
    cornerColor?: string;
    cornerBorderWidth?: number;

    isShowScanBar?: boolean;
    scanBar?: React.ReactNode;
    scanBarColor?: string;
    scanBarAnimateTime?: number;

    onBarCodeRead?: (_x?: any) => void;
}