import axios from "axios";

const API_URL = "http://localhost:5000/api"; //  Corrected Base API URL

// **Add Recipe API**
export const addRecipe = async (recipeData, token) => {
  try {
    const response = await axios.post(`${API_URL}/recipes/add`, recipeData, {
      headers: {
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding recipe:", error?.response?.data || error);
    throw error;
  }
};

// **Get All Recipes API**
export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

// **Save Recipe API**
export const saveRecipe = async (recipeId, token) => {
  try {
    const response = await axios.post(`${API_URL}/recipes/${recipeId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error saving recipe:", error);
    throw error;
  }
};
