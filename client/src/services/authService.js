import api from '../utils/api';

export const authService = {
  login: async (credentials) => {
    return api.post('/auth/login', credentials);
  },

  register: async (userData) => {
    return api.post('/auth/register', userData);
  },

  getProfile: async () => {
    return api.get('/auth/profile');
  },
}; 