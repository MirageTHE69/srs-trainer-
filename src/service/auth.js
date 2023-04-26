const isBrowser = () => typeof window !== 'undefined';

const getUser = () =>
  isBrowser() &&
  window.localStorage.getItem('user') &&
  window.localStorage.getItem('user');

const setUser = user =>
  user
    ? window.localStorage.setItem('user', user)
    : window.localStorage.removeItem('user');

const login = user => setUser(user);

const isLoggedIn = () => Boolean(getUser());

const logout = callback => {
  setUser();
  callback?.();
};

export default isLoggedIn;
export { isBrowser, getUser, login, logout };
