const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 5 when passed 10", () => {
    expect(utils.makeHalfPrice(10)).toBe(5);
  });
});

describe("utils.countBooks", () => {
  test("returns total number of books in array", () => {
    expect(utils.countBooks(["Book1", "Book2", "Book3", "Book4"])).toBe(4);
  });
});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
      expect(utils.isInStock(book)).toBe(true);
  });
});

describe("utils.isInStock", () => {
  test("returns false if the title is out of stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 0
    };
      expect(utils.isInStock(book)).toBe(false);
  });
});

describe("utils.getTotalOrderPrice", () => {
  test("returns total price with VAT added", () => {
    expect(utils.getTotalOrderPrice(8, 10)).toBe(96);
  });
});




