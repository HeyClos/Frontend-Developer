import React from "react";
import { Link } from "react-router-dom";
// import MyWorkouts from "../trainer/MyWorkouts";
// import AvailableWorkouts from "../client/AvailableWorkouts";
// import CreateAWorkout from "./CreateAWorkout";

const TrainerApp = () => {
  return (
    <div>
      <ul className="navbar">
        <h1>Start Your Workout Here:</h1>
        <li>
          <Link to="/MyWorkouts">My Workouts</Link>
        </li>
        <li>
          <Link to="/CreateAWorkout">Create A Workout</Link>
        </li>
        <li>
          <Link to="/AvailableWorkouts">Available Workouts</Link>
        </li>
      </ul>
    </div>
  );
};

export default TrainerApp;
