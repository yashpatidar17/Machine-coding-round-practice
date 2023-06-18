import { useContext } from "react";
import { HabitContext } from "../Context/HabitContextProvider";
import "./home.css";

export const Archive = () => {
  const { archive,viewHabitHandler } = useContext(HabitContext);
  return (
    <div>
      <h2>Archives</h2>
      {archive.length === 0 ? (
        <p>No Habit In Archive</p>
      ) : (
        archive.map((item) => (
          <div key={item.id}>
            <p className="archive-first" onClick={()=>viewHabitHandler({item})}>{item.name}</p>
          </div>
        ))
      )}
    </div>
  );
};
