const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */
function sortByName(customers) {
  function compareNames(a, b) {
    // Compare last names first
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;

    // If last names are the same, compare first names
    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;

    return 0;
  }

  // Sort the customers array using the sort function defined in Task 1
  return sort(compareNames, customers);
}

module.exports = sortByName;
