import { METHOD, STATUS_CODE, WAITING_TIMES } from '../utils/constants-api';

export class PetApi {
  static createPet(petRequest, statusCode = STATUS_CODE.OK) {
    return cy
      .request({
        method: METHOD.POST,
        url: '/pet',
        body: petRequest,
        headers: { 'Content-Type': 'application/json' },
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).to.eq(statusCode);
      });
  }

  static updatePet(petRequest, statusCode = STATUS_CODE.OK) {
    return cy
      .request({
        method: METHOD.PUT,
        url: '/pet',
        body: petRequest,
        headers: { 'Content-Type': 'application/json' },
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).to.eq(statusCode);
      });
  }

  static getPetById(petId, statusCode = STATUS_CODE.OK) {
    return cy
      .retryRequest(
        {
          method: METHOD.GET,
          url: `/pet/${petId}`,
        },
        statusCode,
        WAITING_TIMES.MEDIUM
      )
      .then((response) => {
        expect(response.status).to.eq(statusCode);
      });
  }

  static deletePet(petId, statusCode = STATUS_CODE.OK) {
    return cy
      .retryRequest(
        {
          method: METHOD.DELETE,
          url: `/pet/${petId}`,
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
