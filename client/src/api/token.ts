const AUTH_TOKEN = 'auth-dashboard-token';

export const getToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return token ?? '';
};

export const setToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};