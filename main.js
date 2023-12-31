console.log("test");

let kamal = "Kamal";

console.log(kamal[-1]);
console.log(kamal[0]);
console.log(kamal[5]);
console.log(kamal.charAt(-1));
console.log(kamal.charAt(0));
console.log(kamal.charAt(5));
console.log(kamal.at(-1));
console.log(kamal.at(0));
console.log(kamal.at(5));
console.log(kamal[kamal.length - 1]);

//! /////////////////////////////////////
console.clear();

console.log(null && false);
console.log(null === false);
console.log(null === false);
console.log(null === false);

//! /////////////////////////////////////
console.clear();

let test0 = 2 ^ 0;
let test1 = 2 ^ 1;
let test2 = 2 ^ 2;
let test3 = 2 ^ 3;
let test4 = 2 ^ 4;
let test5 = 2 ^ 5;
let test6 = 2 ^ 6;
let test7 = 2 ^ 7;
let test8 = 2 ^ 8;

console.log(Math.pow(2, 4));
console.log(42 % 1);
console.log(42 % 2);
console.log(42 % 4);
console.log(42 % 8);
console.log(42 % 16);
console.log(42 % 32);
console.log(42 % 64);

console.log(test0);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);
console.log(test8);

// let binary = [];
// let sum = 0;
// const countBits = (n) => {
//   // Program Me
//   if (n === 0) {
//     binary = [];
//     sum = 0;
//     return 0;
//   }

//   if (n === 1) {
//     binary.unshift(1);
//     sum++;
//     let finalAnswer = sum;
//     binary = [];
//     sum = 0;
//     return finalAnswer;
//   }
//   if (n % 2 === 0) {
//     binary.unshift(0);
//   } else {
//     binary.unshift(1);
//     sum++;
//     --n;
//   }
//   return countBits(n / 2);
// };

countBits = (n) => {
  console.log(typeof n);
  console.log(typeof Number(42));
  console.log(n.toString(2));
  console.log(parseInt(42).toString(2));
  return n.toString(2).split("0").join("").length;
};

// console.log(countBits(0));
// console.log(countBits(1));
// console.log(countBits(2));
// console.log(countBits(3));
// console.log(countBits(4)); //  00100
// console.log(countBits(7)); //  00111
// console.log(countBits(9)); //  01001
// console.log(countBits(10)); // 01010
// console.log(countBits(10));
// console.log(countBits(11));
// console.log(countBits(15));
// console.log(countBits(42));
console.log(countBits(43));
// console.log(countBits(64));

//! /////////////////////////////////////
console.clear();

function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  for (let index = 0; index < array1.length; index++) {
    const check = array2.some((ele, i) => {
      const matchCase = array1[index] * array1[index] === ele;
      if (matchCase) {
        array1.splice(index, 1);
        array2.splice(i, 1);
        index--;
      }
      return matchCase;
    });
    if (!check) return false;
  }
  return true;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2));
console.log(a2);

//! /////////////////////////////////////
console.clear();

/* 
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

const toHex = (x) => {
  x > 255 ? (x = 255) : x < 0 ? (x = 0) : (x = x);

  const hex =
    x.toString(16) < 10 || Number.isNaN(x.toString(16))
      ? 0 + x.toString(16)
      : x.toString(16).length > 1
      ? x.toString(16).toUpperCase()
      : 0 + x.toString(16).toUpperCase();

  return hex;
};

console.log(rgb(0, 0, -20));
console.log(rgb(0, 0, 0));
console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(173, 255, 47)); // 'ADFF2F'
console.log(rgb(12, 252, 69)); // '0CFC45'

const a = 12;
// const red =a.toString(16) < 10 || Number.isNaN(a.toString(16))? 0 + a.toString(16): a.toString(16).toUpperCase();
const red = a.toString(16).length;
const b = 16;
const c = b ** 1;
const d = b ** 2;
const e = b ** 3;

console.log(a / b);
console.log(c);
console.log(d);
console.log(e);
console.log(red.toString(b));

//! /////////////////////////////////////
console.clear();

/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

function pigIt(str) {
  let regex = /^[a-zA-Z]+$/;

  return str
    .split(" ")
    .map(
      (elem) =>
        regex.test(elem) ? (elem = elem.slice(1) + elem.at(0) + "ay") : elem
      /*  regex.test(elem) ? (elem = elem.substr(1) + elem.at(0) + "ay") : elem */
    )
    .join(" ");
}

console.log(pigIt("Pig latin is cool")); //igPay atinlay siay oolcay
console.log(pigIt("This is my string !")); //hisTay siay ymay tringsay

let t = "This is my string !";
console.log(t.substr(5));
console.log(t.substring(5));

//! /////////////////////////////////////
console.clear();
/* 
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

*/
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page

    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range

    return pageIndex < this.pageCount() - 1 && pageIndex >= 0
      ? this.itemsPerPage
      : pageIndex === this.pageCount() - 1 && pageIndex >= 0
      ? this.pageCount() % this.itemsPerPage === 0
        ? this.itemCount() - pageIndex * this.itemsPerPage
        : this.pageCount() < this.itemsPerPage
        ? this.itemCount() % this.itemsPerPage === 0
          ? this.itemsPerPage
          : this.itemCount() % this.itemsPerPage
        : this.itemsPerPage
      : -1;
  }

  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    return itemIndex >= 0 && itemIndex < this.itemCount()
      ? Math.floor(itemIndex / this.itemsPerPage)
      : -1;
  }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(0)); // should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// helper.pageItemCount(2);  for itemCount = 3 itemsPerPage = 1 equal 1
// helper.pageItemCount(2);  for itemCount = 24 itemsPerPage = 10 equal 4

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1


//! /////////////////////////////////////
console.clear();

