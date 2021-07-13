import React, { useEffect, useState } from "react";
import { getTaskApi } from "../api";
export default function TaskDetails({ id }) {
  const [task, setTask] = useState({});

  useEffect(() => {
    const getTask = async () => {
      const task = await getTaskApi(id);
      setTask(task);
    };
    getTask();
  }, [id]);

  return (
    <div className="task-section">
      <h4>
        Task: <a href="/dashboard">{task.name}</a>
      </h4>
    </div>
  );
}
