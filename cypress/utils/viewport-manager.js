import resolution from "../fixtures/resolution.json";
import {getNumberRandom} from "./random-data";

/**
 * Devuelve una resolución de dispositivo aleatoria según el tipo solicitado.
 *
 * @param {string} type - Tipo de dispositivo ('mobile', 'tablet', 'fullscreen', etc.).
 * @returns {{device: string, type: string, width: number, height: number}} Una resolución aleatoria del tipo especificado, o una cualquiera si el tipo no tiene coincidencias.
 */
export function getDeviceResolution(type) {
    const listDevices = resolution.filter((device) => device.type === type);
    if (listDevices.length > 0) {
        return listDevices[getNumberRandom(listDevices.length)];
    } else {
        return resolution[getNumberRandom(resolution.length)];
    }
}