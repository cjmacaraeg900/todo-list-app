import React, { useState } from "react";
// import { TasksCollection } from "../db/TasksCollection";

export const TaskForm = ({ user }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    Meteor.call("tasks.insert", text);

    // TasksCollection.insert({
    //   text: text.trim(),
    //   createdAt: new Date(),
    //   userId: user._id,
    // });

    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type to add new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};
