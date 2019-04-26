/**
 * @author zhangyi
 * @date 2018/5/18
 */
import * as React from 'react'

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
    // scanBarColor?: string;
    scanBarAnimateTime?: number;

    openLight?: boolean;

    onBarCodeRead?: (_x?: any) => void;
    onCameraReady?: (_x?: any) => void;
    onMountError?: (_x?: any) => void;
    onStatusChange?: (_x?: any) => void;

    renderTopView?: () => React.ReactNode;
    renderBottomView?: () => React.ReactNode;
}
