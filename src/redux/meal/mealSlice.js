import { createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
  name: 'meal',
  initialState: {
    loading: false,
    meal: [],
    meals: [],
    categories: [],
    area: [],
    ingredients: [],
    loading: false,
    error: undefined,
    clearErrorMessage: undefined,
  },

  reducers: {

    setAllMeals: (state, { payload }) => {
      state.meals = payload;
    },

    setListCategories: (state, { payload }) => {
      state.categories = payload;
    },

    setFetchCategories: (state, { payload }) => {
      return {
        ...state,
        meals: payload
      }
    },

    setListArea: (state, { payload }) => {
      state.area = payload;
    },

    setFetchArea: (state, { payload }) => {
      return {
        ...state,
        meals: payload
      }
    },


    setListIngredients: (state, { payload }) => {
      state.ingredients = payload
    },

    setFetchIngredients: (state, { payload }) => {
      return {
        ...state,
        meals: payload
      }
    },

    setMealDetail: (state, { payload }) => {
      state.meal = payload;
    },

    setSearchMeal: (state, { payload }) => {
      state.meals = payload;
    },

    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },

    error: (state) => {
      state.error
    }

  }
})

export const { setListArea, setFetchArea, setFetchIngredients, setListIngredients, setMealDetail, setAllMeals, setSearchMeal, setListCategories, setFetchCategories, clearErrorMessage, error } = mealSlice.actions;