export const URL = process.env.REACT_APP_API_URL;

export const login = (data) => {
  console.log(URL, "URL");
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

export const assignVote = (data) => {
  return fetch(`${URL}/vote`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getVotes = (polls_id) => {
  return fetch(`${URL}/votes?polls_id=${polls_id}`).then((res) => res.json());
};
