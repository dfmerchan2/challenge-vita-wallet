export function getUsersByStatus(type) {
    return cy.fixture('users').then(users =>
        users.find(user => user.status === type)
    );
}