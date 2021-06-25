import "./dashboard.css";
import React, { useEffect } from "react";
import { getTasks } from "../api";
function Dashboard() {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    getTasks().then((res) => {
      setTasks(res);
    });
  }, []);

  return (
    <div>
      <header className="dashboard-header">
        <h1>Tasks</h1>
      </header>
      <section className="section">
        <div className="task-header">
          <h3>Assigned to you</h3>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <a key={task.id} href={`/poll/${task.id}`}>
              <li className="list-item">{task.name}</li>
            </a>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
