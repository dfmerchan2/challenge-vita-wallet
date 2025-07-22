import {PetApi} from "../../../apis/pet-api";
import {PetRequest} from "../../../builders/pet/pet-request";
import {STATUS_CODE} from "../../../utils/constants-api";

describe('PUT Pet - Update an existing pet', () => {
    it('should update a pet - OK (200)', () => {
        let request = PetRequest.getRequest().build()

        PetApi.createPet(request)
        PetApi.getPetById(request.id)

        request.name = 'new name'
        request.status = 'new success'

        PetApi.updatePet(request)
            .then((putResponse) => {
                expect(putResponse.status).to.eq(200)
                expect(putResponse.body.id).to.eq(request.id)
                expect(putResponse.body.category.id).to.eq(request.category.id)
                expect(putResponse.body.category.name).to.eq(request.category.name)
                expect(putResponse.body.name).to.eq(request.name)
                expect(putResponse.body.status).to.eq(request.status)
            })
    })

    it('should see an error when update a pet - Server Error (500)', () => {
        PetApi.updatePet(PetRequest.getRequestInvalid().build(), STATUS_CODE.INTERNAL_SERVER_ERROR)
            .then((apiResponse) => {
                expect(apiResponse.status).to.eq(500)
                expect(apiResponse.body.code).to.eq(500)
                expect(apiResponse.body.type).to.eq('unknown')
                expect(apiResponse.body.message).to.eq('something bad happened')
            })
    });
})