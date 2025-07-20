export function calculateTax(amount, taxRate) {
    return (parseFloat(amount) * taxRate).toFixed(2);
}

export function calculateTotal(amount, tax) {
    return (parseFloat(amount) + parseFloat(tax)).toFixed(2);
}