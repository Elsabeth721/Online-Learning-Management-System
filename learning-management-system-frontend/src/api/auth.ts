// src/api/auth.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
  role?: string;
  bio?: string;
  expertise?: string[];
  cv?: File;
}) => {
  const formData = new FormData();
  
  formData.append('username', userData.username);
  formData.append('email', userData.email);
  formData.append('password', userData.password);
  if (userData.role) formData.append('role', userData.role);
  if (userData.bio) formData.append('bio', userData.bio);
  if (userData.expertise) formData.append('expertise', userData.expertise.join(','));
  if (userData.cv) formData.append('cv', userData.cv);

  const response = await axios.post(`${API_URL}/api/auth/register`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};