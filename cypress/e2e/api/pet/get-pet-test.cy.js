import {PetApi} from "../../../apis/pet-api";
import {DataGenerator} from "../../../utils/data-generator";
import {PetRequest} from "../../../builders/pet/pet-request";
import {STATUS_CODE} from "../../../utils/constants-api";

describe('Search a pet by petId in the application', () => {

    it('should see the pet information - OK (200)', () => {
        const request = PetRequest.getRequest().build()
        PetApi.createPet(request)
        PetApi.getPetById(request.id)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.id).to.eq(request.id)
                expect(response.body.name).to.eq(request.name)
                expect(response.body.status).to.eq(request.status)
            })
    });

    it('should see an error when consulting the pet because the petId not exist - Not Found (404)', () => {
        PetApi.getPetById(DataGenerator.randomId(), STATUS_CODE.NOT_FOUND)
            .then((response) => {
                expect(response.body.code).to.eq(1)
                expect(response.body.type).to.eq('error')
                expect(response.body.message).to.eq('Pet not found')
            })
    });

    it('should see an error when consulting the pet because the petId is invalid - Not Found (404)', () => {
        const petId = DataGenerator.randomIdIdAlphaNumeric()
        PetApi.getPetById(petId, STATUS_CODE.NOT_FOUND)
            .then((apiResponse) => {
                expect(apiResponse.status).to.eq(404)
                expect(apiResponse.body.code).to.eq(404)
                expect(apiResponse.body.type).to.eq('unknown')
                expect(apiResponse.body.message).to.eq(`java.lang.NumberFormatException: For input string: "${petId}"`)
            })
    });
})