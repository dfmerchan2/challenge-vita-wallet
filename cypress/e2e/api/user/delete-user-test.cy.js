import { UserRequest } from '../../../builders/user/user-request';
import { UserApi } from '../../../apis/user-api';
import { STATUS_CODE, VALUE } from '../../../utils/constants-api';
import { DataGenerator } from '../../../utils/data-generator';

describe('Delete a user in the application', () => {
  it('should delete a user - OK (200)', () => {
    const request = UserRequest.getRequest().build();
    UserApi.createUser(request);
    UserApi.getUserByUsername(request.username);

    UserApi.deleteUser(request.username).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.code).to.eq(200);
      expect(response.body.type).to.eq('unknown');
      expect(response.body.message).to.eq(request.username.toString());
    });

    UserApi.getUserByUsername(request.username, STATUS_CODE.NOT_FOUND);
  });

  it('should see an error when deleting the user because the username is empty - Method Not Allowed (405)', () => {
    UserApi.deleteUser(VALUE.EMPTY, STATUS_CODE.NOT_ALLOWED).then((response) => {
      expect(response.status).to.eq(405);
    });
  });

  it('should see an error when deleting the user because the username not exist - Not Found (404)', () => {
    UserApi.deleteUser(DataGenerator.randomId(), STATUS_CODE.NOT_FOUND).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
