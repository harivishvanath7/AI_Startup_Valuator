const register = async (data) => {
  // User creation in DB

  return {
    message: "User Registered.",
    data,
  };
};

const login = async (data) => {
  // Verify User + Generate JWT

  return "fake-jwt-token";
};

module.exports = { register, login };
