import { UserApi } from '../../../apis/user-api';
import { UserRequest } from '../../../builders/user/user-request';
import { STATUS_CODE } from '../../../utils/constants-api';

describe('Create a user in the application', () => {
  it('should create a new user - OK (200)', () => {
    const request = UserRequest.getRequest().build();
    UserApi.createUser(request).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.code).to.eq(200);
      expect(response.body.type).to.eq('unknown');
      expect(response.body.message).to.contain(request.id);
    });
  });

  it('should see an error when create a new user - Server Error (500)', () => {
    UserApi.createUser(
      UserRequest.getRequestInvalid().build(),
      STATUS_CODE.INTERNAL_SERVER_ERROR
    ).then((response) => {
      expect(response.status).to.eq(500);
      expect(response.body.code).to.eq(500);
      expect(response.body.type).to.eq('unknown');
      expect(response.body.message).to.contain('something bad happened');
    });
  });
});
