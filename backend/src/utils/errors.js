const userError = (err) => {
  const errs = {
    email: "",
    password: "",
    username: "",
  };
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errs[properties.path] = properties.message;
    });
  }
  return errs;
};

module.exports = userError;
