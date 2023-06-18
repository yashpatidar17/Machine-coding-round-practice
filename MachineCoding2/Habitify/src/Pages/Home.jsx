import { useContext } from "react";
import "./home.css";
import { HabitContext } from "../Context/HabitContextProvider";
import Modal from "react-modal";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parse, format } from "date-fns";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const {
    isPopUp,
    setIsPopUp,
    habitInfoState,
    dispatch,
    setHabit,
    habit,
    visible,
    setVisible,
    setArchive,
    viewHabitHandler,
    itm,
  } = useContext(HabitContext);

  console.log(itm,"asf")

  const navigate = useNavigate();

  const createHabitHandler = () => {
    setIsPopUp(true);
    console.log("click", isPopUp);
  };
  const modalCloseHandler = () => {
    setIsPopUp(false);
  };

  const handleTimeChange = (event) => {
    const { value } = event.target;
    const parsedTime = parse(value, "HH:mm", new Date());

    dispatch({
      type: "Time",
      payload: parsedTime,
    });
  };

  const nameHandler = (e) => {
    dispatch({
      type: "Name_Of_Habit",
      payload: e.target.value,
    });
  };

  const repeatHandler = (e) => {
    dispatch({
      type: "Repeat",
      payload: e.target.value,
    });
  };

  const goalHandler = (e) => {
    dispatch({
      type: "Goal",
      payload: e.target.value,
    });
  };
  const dateHandler = (date) => {
    dispatch({
      type: "Date",
      payload: date,
    });
  };

  const saveHandler = () => {
    setHabit([
      ...habit,
      {
        id: uuid(),
        name: habitInfoState.name,
        repeat: habitInfoState.repeat,
        goal: habitInfoState.goal,
        timeOfDay: habitInfoState.time,
        startDate: habitInfoState.date,
      },
    ]);
  };

  const deleteHandler = (selectedItem) => {
    setHabit((prev) => prev.filter((item) => item.id !== selectedItem.id));
  };

  const archiveHandler = (selectedItem) => {
    setHabit((prev) => prev.filter((item) => item.id !== selectedItem.id));
    setArchive((prev) => [...prev, selectedItem]);
  };

  return (
    <div className="container">
      <h1>Habitify</h1>
      <button onClick={() => navigate("/archive")}>Archives</button>
      <button className="createHabit" onClick={createHabitHandler}>
        Create Your Habit
      </button>

      {habit.length === 0 ? (
        <p>Please add a Habit</p>
      ) : (
        habit.map((item) => (
          <div key={item.id} className="habits">
            <button
              className="habit-first"
              onClick={() => viewHabitHandler({ item })}
            >
              {item.name}
            </button>
            <div className="buttonDiv">
              <button onClick={() => deleteHandler(item)}>Delete</button>
              <button onClick={() => archiveHandler(item)}>Archive</button>
            </div>
          </div>
        ))
      )}
      <Modal
        isOpen={isPopUp}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h3>New Habit</h3>

          <label>
            Name
            <input
              placeholder="Enter Your Name"
              onChange={nameHandler}
              required
            />
          </label>
          <label>
            Repeat
            <select onChange={repeatHandler} required>
              <option value="Daily">Daily</option>
              <option value="Twice a Week">Twice a Week</option>
              <option value="Thrice a Week">Thrice a Week</option>
            </select>
          </label>
          <label>
            Goal
            <select onChange={goalHandler} required>
              <option value="1 Time Daily">1 Time Daily</option>
              <option value="2 Time Daily">2 Time Daily</option>
              <option value="3 Time Daily">3 Time Daily</option>
            </select>
          </label>
          <label>
            Time of Day
            <input
              type="time"
              value={
                habitInfoState.time ? format(habitInfoState.time, "HH:mm") : ""
              }
              onChange={handleTimeChange}
              required
            />
          </label>
          <label>
            Start Date
            <div>
              <DatePicker
                selected={habitInfoState.date}
                onChange={(date) => dateHandler(date)}
                required
              />
            </div>
          </label>
          <button onClick={saveHandler}>Save</button>
          <button onClick={modalCloseHandler}>Discard</button>
        </div>
      </Modal>
      <Modal
        isOpen={visible}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div>
          <p>Name : {itm?.item.name}</p>
          <p>Repeat : {itm?.item.repeat}</p>
          <p>Goal : {itm?.item.goal}</p>
          
          <button onClick={()=>setVisible(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};
