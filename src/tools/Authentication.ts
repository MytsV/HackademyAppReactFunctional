const emailKey = 'email';
const passwordKey = 'password';

let isAuthenticated = (): boolean => {
    return localStorage.getItem(emailKey) != null && localStorage.getItem(passwordKey) != null;
};

export let authenticate = (email: string, password: string): void => {
    localStorage.setItem(emailKey, email);
    localStorage.setItem(passwordKey, password);
};

export default isAuthenticated;
