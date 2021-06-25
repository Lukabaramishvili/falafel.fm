const setToken = (value) => {
  localStorage.setItem("token", value);
};

const getToken = () => {
  return localStorage.getItem("token");
};

const checkToken = () => {
  return getToken() !== null && getToken().length !== 0;
};

export { setToken, getToken, checkToken };
