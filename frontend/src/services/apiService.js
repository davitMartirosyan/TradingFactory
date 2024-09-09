import axios from 'axios';

const API_URL = '/api'; // This will proxy to http://localhost:5000/api

export const getChampionships = async () => {
  try {
    const response = await axios.get(`${API_URL}/championships`);
    return response.data;
  } catch (error) {
    console.error('Error fetching championships:', error);
    throw error;
  }
};