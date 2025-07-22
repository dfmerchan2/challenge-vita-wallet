import {UserApi} from "../../../apis/user-api";
import {KEYS_JSON, STATUS_CODE, VALUE} from "../../../utils/constants-api";
import {DataGenerator} from "../../../utils/data-generator";
import {UserRequest} from "../../../builders/user/user-request";

describe('Search for a user by username in the application', () => {

    it('should see the user information - OK (200)', () => {
        const request = UserRequest.getRequest().build()
        UserApi.createUser(request)

        UserApi.getUserByUsername(request.username)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.id).to.eq(request.id)
                expect(response.body.username).to.eq(request.username)
                expect(response.body[KEYS_JSON.FIRST_NAME]).to.eq(request.firstName)
                expect(response.body[KEYS_JSON.LAST_NAME]).to.eq(request.lastName)
                expect(response.body.email).to.eq(request.email)
                expect(response.body.password).to.eq(request.password.toString())
                expect(response.body.phone).to.eq(request.phone.toString())
                expect(response.body[KEYS_JSON.USER_STATUS]).to.eq(request.userStatus)
            })
    })

    it('should see an error when consulting the user because the username is empty - Method Not Allowed (405)', () => {
        UserApi.getUserByUsername(VALUE.EMPTY, STATUS_CODE.NOT_ALLOWED)
            .then((response) => {
                expect(response.status).to.eq(405)
            })
    })

    it('should see an error when consulting the user because the username not exist - Not Found (404)', () => {
        UserApi.getUserByUsername(DataGenerator.randomId(), STATUS_CODE.NOT_FOUND)
            .then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body.code).to.eq(1)
                expect(response.body.type).to.eq('error')
                expect(response.body.message).to.eq('User not found')
            })
    });
})