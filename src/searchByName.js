/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
  let low = 0;
  let high = customers.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let currentCustomer = customers[mid];

    if (
      currentCustomer.lastName === lastName &&
      currentCustomer.firstName === firstName
    ) {
      return mid; // Customer found, return the index
    } else if (currentCustomer.lastName === lastName) {
      // If last names match but first names don't, we need to search within the range of customers with the same last name
      let start = mid;
      let end = mid;

      // Find the range of customers with the same last name
      while (start >= low && customers[start].lastName === lastName) {
        if (customers[start].firstName === firstName) {
          return start; // Customer found, return the index
        }
        start--;
      }

      while (end <= high && customers[end].lastName === lastName) {
        if (customers[end].firstName === firstName) {
          return end; // Customer found, return the index
        }
        end++;
      }

      // Customer not found within the range of customers with the same last name
      return -1;
    } else if (currentCustomer.lastName < lastName) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // Customer not found
  return -1;
}

module.exports = searchByName;
