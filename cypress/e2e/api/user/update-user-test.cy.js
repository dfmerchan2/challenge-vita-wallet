import { STATUS_CODE, VALUE } from '../../../utils/constants-api';
import { UserApi } from '../../../apis/user-api';
import { UserRequest } from '../../../builders/user/user-request';

describe('Update a user in the application', () => {
  it('should update a pet - OK (200)', () => {
    let request = UserRequest.getRequest().build();
    UserApi.createUser(request);
    UserApi.getUserByUsername(request.username);

    request.firstName = 'new firstName';
    request.lastName = 'new lastName';

    UserApi.updateUser(request.username, request).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.code).to.eq(200);
      expect(response.body.type).to.eq('unknown');
      expect(response.body.message).to.eq('1');
    });
  });

  it('should see an error when update a user - Server Error (500)', () => {
    let request = UserRequest.getRequestInvalid().build();

    UserApi.updateUser(request.username, request, STATUS_CODE.INTERNAL_SERVER_ERROR).then(
      (response) => {
        expect(response.status).to.eq(500);
        expect(response.body.code).to.eq(500);
        expect(response.body.type).to.eq('unknown');
        expect(response.body.message).to.eq('something bad happened');
      }
    );
  });

  it('should see an error when update the user because the username is empty - Method Not Allowed (405)', () => {
    let request = UserRequest.getRequest().build();

    UserApi.updateUser(VALUE.EMPTY, request, STATUS_CODE.NOT_ALLOWED).then((response) => {
      expect(response.status).to.eq(405);
    });
  });
});
