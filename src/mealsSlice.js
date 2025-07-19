// mealsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
  name: "meal",
  initialState: [
    {
      name: "Breakfast",
      cost: 50,
      selected: false,
      type: "mealForPeople",
      numberOfPeople: 0,
    },
    {
      name: "High Tea",
      cost: 25,
      selected: false,
      type: "flat",
      numberOfPeople: 0,
    },
    {
      name: "Lunch",
      cost: 65,
      selected: false,
      type: "mealForPeople",
      numberOfPeople: 0,
    },
    {
      name: "Dinner",
      cost: 70,
      selected: false,
      type: "mealForPeople",
      numberOfPeople: 0,
    },
  ],
  reducers: {
    toggleMealSelection(state, action) {
      const { index } = action.payload;
      state[index].selected = !state[index].selected;
    },
    updateNumberOfPeople(state, action) {
      const { numberOfPeople } = action.payload;
      state.forEach((meal) => {
        if (meal.type === "mealForPeople") {
          meal.numberOfPeople = numberOfPeople;
        }
        else{
          meal.numberOfPeople=numberOfPeople==0?numberOfPeople:1;
        }
      });
    },
  },
});

export const { toggleMealSelection, updateNumberOfPeople } = mealsSlice.actions;
export default mealsSlice.reducer;
