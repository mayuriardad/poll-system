const URL = "http://127.0.0.1:3000";

export const login = (data) => {
  return fetch(`${URL}/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getTasks = () => {
  return fetch(`${URL}/tasks`).then((res) => res.json());
};

export const startPoll = (data) => {
  return fetch(`${URL}/polls`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
