const fetchUserFromApi = (userId) => {
    // Simulate a real API call
    return new Promise((resolve, reject) => {
      // Simulating network delay
      setTimeout(() => {
        resolve({ id: userId, name: "Real User" });
      }, 100);
    });
  };
  
  module.exports = fetchUserFromApi;
  