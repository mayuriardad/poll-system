import "./dashboard.css";
import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { getTasks } from "../api";
function Dashboard() {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    let isSubscribed = true;
    getTasks().then((res) => {
      if (isSubscribed) {
        setTasks(res);
      }
      return () => (isSubscribed = false);
    });
  }, []);

  if (localStorage.getItem("pollDetails")) {
    return (
      <Redirect to={`/poll-link/${localStorage.getItem("pollDetails")}`} />
    );
  }

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
