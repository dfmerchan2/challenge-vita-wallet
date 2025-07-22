import { PetApi } from '../../../apis/pet-api';
import { STATUS_CODE, VALUE } from '../../../utils/constants-api';
import { DataGenerator } from '../../../utils/data-generator';
import { PetRequest } from '../../../builders/pet/pet-request';

describe('Delete a pet in the application', () => {
  it('should delete a pet - OK (200)', () => {
    const request = PetRequest.getRequest().build();
    PetApi.createPet(request);
    PetApi.getPetById(request.id);

    PetApi.deletePet(request.id).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.code).to.eq(200);
      expect(response.body.type).to.eq('unknown');
      expect(response.body.message).to.eq(request.id.toString());
    });

    PetApi.getPetById(request.id, STATUS_CODE.NOT_FOUND);
  });

  it('should see an error when deleting the pet because the petId is empty - Method Not Allowed (405)', () => {
    PetApi.deletePet(VALUE.EMPTY, STATUS_CODE.NOT_ALLOWED).then((response) => {
      expect(response.status).to.eq(405);
    });
  });

  it('should see an error when deleting the pet because the petId not exist - Not Found (404)', () => {
    PetApi.deletePet(DataGenerator.randomId(), STATUS_CODE.NOT_FOUND).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('should see an error when deleting the pet because the petId is invalid - Not Found (404)', () => {
    const petId = DataGenerator.randomIdIdAlphaNumeric();
    PetApi.deletePet(petId, STATUS_CODE.NOT_FOUND).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.code).to.eq(404);
      expect(response.body.type).to.eq('unknown');
      expect(response.body.message).to.eq(
        `java.lang.NumberFormatException: For input string: "${petId}"`
      );
    });
  });
});
