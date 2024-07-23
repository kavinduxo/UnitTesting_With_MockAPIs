const fetchUser = require('../src/userService');
const fetchUserFromApi = require('../src/api');

// Manual mock for the API call
const originalFetchUserFromApi = fetchUserFromApi;
fetchUserFromApi = (userId) => {
  return Promise.resolve({ id: userId, name: 'Mock User' });
};

// Basic test function
const runTests = () => {
  fetchUser(1)
    .then(user => {
      if (user.id === 1 && user.name === 'Mock User') {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
    })
    .catch(error => {
      console.error('Test failed with error:', error);
    })
    .finally(() => {
      // Restore the original function
      fetchUserFromApi = originalFetchUserFromApi;
    });
};

// Run the tests
runTests();
