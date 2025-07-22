import { PetApi } from '../../../apis/pet-api';
import { PetRequest } from '../../../builders/pet/pet-request';
import { STATUS_CODE } from '../../../utils/constants-api';

describe('Create a pet in the application', () => {
  it('should create a new pet - OK (200)', () => {
    const request = PetRequest.getRequest().build();
    PetApi.createPet(request).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(request.id);
      expect(response.body.category.id).to.eq(request.category.id);
      expect(response.body.category.name).to.eq(request.category.name);
      expect(response.body.name).to.eq(request.name);
      expect(response.body.status).to.eq(request.status);
    });
  });

  it('should create a new pet without id - OK (200)', () => {
    const requestWithoutId = PetRequest.getRequestWithoutId().build();
    PetApi.createPet(requestWithoutId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.not.null;
      expect(response.body.category.id).to.eq(requestWithoutId.category.id);
      expect(response.body.category.name).to.eq(requestWithoutId.category.name);
      expect(response.body.name).to.eq(requestWithoutId.name);
      expect(response.body.status).to.eq(requestWithoutId.status);
    });
  });

  it('should see an error when create a new pet - Server Error (500)', () => {
    PetApi.createPet(
      PetRequest.getRequestInvalid().build(),
      STATUS_CODE.INTERNAL_SERVER_ERROR
    ).then((response) => {
      expect(response.status).to.eq(500);
      expect(response.body.code).to.eq(500);
      expect(response.body.type).to.eq('unknown');
      expect(response.body.message).to.eq('something bad happened');
    });
  });
});
