import { createContext, useReducer, useState } from "react";

export const HabitContext = createContext();

const initialState = { name: "", repeat: "", goal: "", time: null, date: null };

export const habitReducer = (state, action) => {
  switch (action.type) {
    case "Name_Of_Habit": {
      return { ...state, name: action.payload };
    }
    case "Repeat": {
      return { ...state, repeat: action.payload };
    }
    case "Goal": {
      return { ...state, goal: action.payload };
    }
    case "Time": {
      return { ...state, time: action.payload };
    }
    case "Date": {
      return { ...state, date: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const HabitContextProvider = ({ children }) => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [visible, setVisible] = useState(false);
  const [itm, setItem] = useState(null);
  const [habit, setHabit] = useState([]);
  console.log(habit);

  const [habitInfoState, dispatch] = useReducer(habitReducer, initialState);
  const [archive, setArchive] = useState([]);

  const viewHabitHandler = (selectedItem) => {
    setVisible(true);
    setItem(selectedItem);
  };
  return (
    <div>
      <HabitContext.Provider
        value={{
          habit,
          setHabit,
          isPopUp,
          setIsPopUp,
          habitInfoState,
          dispatch,
          visible,
          setVisible,
          setArchive,
          archive,
          viewHabitHandler,
          itm, setItem
        }}
      >
        {children}
      </HabitContext.Provider>
    </div>
  );
};
