const createFetchUser = require("../src/userService");

// Manual mock for the API call
const fetchUserFromMockApi = (userId) => {
  return Promise.resolve({ id: userId, name: "Mock User" });
};

// Inject the mock function into the fetchUser function
const fetchUser = createFetchUser(fetchUserFromMockApi);

// Test function
const runTests = () => {
  fetchUser(1)
    .then((user) => {
      if (user.id === 1 && user.name === "Mock User") {
        console.log("Test passed");
      } else {
        console.log("Test failed");
      }
    })
    .catch((error) => {
      console.error("Test failed with error:", error);
    });
};

// Run the tests
runTests();
