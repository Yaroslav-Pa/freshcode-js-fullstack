import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import themeReducer from "./themeReducer";

/*
  combineReducers приймає об'єкт властивостями якого є усі
  спеціалізовані редюсери в додатку і повертає сгенерований на їх
  основі кореневий редюсер

*/
const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});

/*
  стейт в сторі в такому випадку
  state = {
    counter: {
      count: 0,
      step: 1,
    },
    theme: {
      currentTheme: 'light'
    },
  }
*/

export default rootReducer;
