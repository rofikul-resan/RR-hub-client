import axios from "axios";
import { io } from "socket.io-client";
export const serverUrl = import.meta.env.VITE_SERVER_URL;
console.log(serverUrl);
export const socket = io(serverUrl, { transports: ["websocket"] });

export const nameShorter = (name) => {
  if (name) {
    const nameArr = name.split(" ");
    const arrOfFirstLetter = nameArr.map((nm) => nm.slice(0, 1).toUpperCase());
    return arrOfFirstLetter.join("");
  } else {
    return "";
  }
};

export const getToken = (info) => {
  axios.post(`${serverUrl}/jwt`, info).then((res) => {
    const token = res.data.token;
    localStorage.setItem("auth-token", token);
    return token;
  });
};

export const clearToken = () => {
  localStorage.removeItem("auth-token");
};
