import { METHOD, STATUS_CODE, WAITING_TIMES } from '../utils/constants-api';

export class UserApi {
  static createUser(userRequest, statusCode = STATUS_CODE.OK) {
    return cy
      .request({
        method: METHOD.POST,
        url: '/user',
        body: userRequest,
        headers: { 'Content-Type': 'application/json' },
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).to.eq(statusCode);
      });
  }

  static getUserByUsername(username, statusCode = STATUS_CODE.OK) {
    return cy
      .retryRequest(
        {
          method: 'GET',
          url: `/user/${username}`,
          failOnStatusCode: false,
        },
        statusCode,
        WAITING_TIMES.MEDIUM
      )
      .then((response) => {
        expect(response.status).to.eq(statusCode);
      });
  }

  static updateUser(username, userRequest, statusCode = STATUS_CODE.OK) {
    return cy
      .retryRequest(
        {
          method: 'PUT',
          url: `/user/${username}`,
          body: userRequest,
          headers: { 'Content-Type': 'application/json' },
          failOnStatusCode: false,
        },
        statusCode,
        WAITING_TIMES.MEDIUM
      )
      .then((response) => {
        expect(response.status).to.eq(statusCode);
      });
  }

  static deleteUser(username, statusCode = STATUS_CODE.OK) {
    return cy
      .retryRequest(
        {
          method: 'DELETE',
          url: `/user/${username}`,
          failOnStatusCode: false,
        },
        statusCode,
        WAITING_TIMES.MEDIUM
      )
      .then((response) => {
        expect(response.status).to.eq(statusCode);
      });
  }
}
