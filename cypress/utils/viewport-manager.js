import resolution from "../fixtures/resolution.json";
import {getNumberRandom} from "./random-data";

export function getDeviceResolution(type) {
    const listDevices = resolution.filter((device) => device.type === type);
    if (listDevices.length > 0) {
        return listDevices[getNumberRandom(listDevices.length)];
    } else {
        return resolution[getNumberRandom(resolution.length)];
    }
}