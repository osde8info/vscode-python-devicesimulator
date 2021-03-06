import * as React from "react";
import { ISensorProps, ISliderProps } from "../../../viewUtils";
import { ThreeDimensionSlider } from "./threeDimensionSlider/ThreeDimensionSlider";

const MOTION_SLIDER_PROPS_X: ISliderProps = {
    axisLabel: "X",
    maxLabel: "Right",
    maxValue: 1023,
    minLabel: "Left",
    minValue: -1023,
    type: "motion_x",
};
const MOTION_SLIDER_PROPS_Y: ISliderProps = {
    axisLabel: "Y",
    maxLabel: "Front",
    maxValue: 1023,
    minLabel: "Back",
    minValue: -1023,
    type: "motion_y",
};
const MOTION_SLIDER_PROPS_Z: ISliderProps = {
    axisLabel: "Z",
    maxLabel: "Down",
    maxValue: 1023,
    minLabel: "Up",
    minValue: -1023,
    type: "motion_z",
};

const MOTION_SENSOR_PROPERTIES: ISensorProps = {
    LABEL: "Motion sensor",
    sliderProps: [
        MOTION_SLIDER_PROPS_X,
        MOTION_SLIDER_PROPS_Y,
        MOTION_SLIDER_PROPS_Z,
    ],
    unitLabel: "Lux",
};
export const Accelerometer: React.FC<{}> = () => {
    return (
        <div className="AccelerometerBar">
            <br />
            {/* Implement Gestures Here */}
            <ThreeDimensionSlider axisProperties={MOTION_SENSOR_PROPERTIES} />
        </div>
    );
};
