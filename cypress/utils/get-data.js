import { USER_TYPES } from './constants';
import { getUsers } from '../support/base-web-test';
import { getNumberInRange } from './math';

export function getUserValid() {
  return getUsers().find((user) => user.status === USER_TYPES.VALID);
}

export function getUsersInvalid() {
  return getUsers().filter((user) => user.status === USER_TYPES.INVALID);
}
