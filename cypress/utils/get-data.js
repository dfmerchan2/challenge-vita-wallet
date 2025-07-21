import {USER_TYPES} from "./constants";
import {getUsers} from "../support/base-test";

export function getUserValid() {
    return getUsers().find(user => user.status === USER_TYPES.VALID);
}

export function getUsersInvalid() {
    return getUsers().filter(user => user.status === USER_TYPES.INVALID);
}