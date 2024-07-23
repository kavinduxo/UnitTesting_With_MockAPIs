const fetchUser = (fetchUserFromApi) => (userId) => {
  return fetchUserFromApi(userId)
    .then(user => ({ id: user.id, name: user.name }))
    .catch(error => {
      console.error('Error fetching user:', error);
      return { id: userId, name: 'Unknown User' };
    });
};

module.exports = fetchUser;
