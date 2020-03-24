function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function makeHalfPrice(price) {
    return price / 2;
}

function countBooks(bookArray) {
    return bookArray.length;
}

function isInStock(book) {
    if (book.quantity > 1) {
        return true;
    } else {
        return false;
    }
}

function getTotalOrderPrice(price, quantity) {
    let total = price * quantity;
    return total * 1.2;
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};