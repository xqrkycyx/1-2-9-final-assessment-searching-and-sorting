/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */
function searchByEmail(email, customers) {
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].email === email) {
      return i; // Return the index if the email is found
    }
  }
  return -1; // Return -1 if the email is not found
}

module.exports = searchByEmail;
