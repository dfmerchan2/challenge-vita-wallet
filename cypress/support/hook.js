import { DEVICE_TYPES } from '../utils/constants';

let users = [];

before(() => {
    cy.fixture('users').then((data) => {
        users = data;
    });
});

beforeEach(() => {
    cy.openPage(DEVICE_TYPES.FULLSCREEN);
});

export function getUsers() {
    return users;
}

export function getUserValid(type) {
    return users.find(user => user.status === type);
}