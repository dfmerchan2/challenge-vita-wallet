import {DataGenerator} from "../../utils/data-generator";

export class UserRequest {
    user = {
        id: null,
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        userStatus: ''
    }

    withId(id) {
        this.user.id = id;
        return this;
    }

    withUsername(username) {
        this.user.username = username;
        return this;
    }

    withFirstName(firstName) {
        this.user.firstName = firstName;
        return this;
    }

    withLastName(lastName) {
        this.user.lastName = lastName;
        return this;
    }

    withEmail(email) {
        this.user.email = email;
        return this;
    }

    withPassword(password) {
        this.user.password = password;
        return this;
    }

    withPhone(phone) {
        this.user.phone = phone;
        return this;
    }

    withUserStatus(userStatus) {
        this.user.userStatus = userStatus;
        return this;
    }

    build() {
        return this.user;
    }

    static getRequest() {
        return new UserRequest()
            .withId(1)
            .withUsername(`Test${DataGenerator.randomDigits(4)}`)
            .withFirstName(DataGenerator.randomFirstName())
            .withLastName(DataGenerator.randomLastName())
            .withEmail(DataGenerator.randomEmail())
            .withPassword(DataGenerator.randomNumber())
            .withPhone(DataGenerator.randomDigits(10))
            .withUserStatus(0);
    }

    static getRequestInvalid() {
        return new UserRequest()
            .withId('invalid_id')
            .withUsername(`Test${DataGenerator.randomDigits(4)}`)
            .withFirstName(DataGenerator.randomFirstName())
            .withLastName(DataGenerator.randomLastName())
            .withEmail(DataGenerator.randomEmail())
            .withPassword(DataGenerator.randomNumber())
            .withPhone(DataGenerator.randomDigits(10))
            .withUserStatus('active');
    }
}