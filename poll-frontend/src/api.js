export const API_URL = process.env.REACT_APP_API_URL;
export const APP_URL = window.location.origin;

export const login = (data) => {
  console.log(API_URL, "API_URL");
  return fetch(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getTasks = () => {
  return fetch(`${API_URL}/tasks`).then((res) => res.json());
};

export const getTaskApi = (id) => {
  return fetch(`${API_URL}/tasks/${id}`).then((res) => res.json());
};

export const startPoll = (data) => {
  return fetch(`${API_URL}/polls`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const assignVote = (data) => {
  return fetch(`${API_URL}/vote`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getVotes = (polls_id) => {
  return fetch(`${API_URL}/votes?polls_id=${polls_id}`).then((res) =>
    res.json()
  );
};
