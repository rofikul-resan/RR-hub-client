import { io } from "socket.io-client";
export const serverUrl = "http://127.0.0.1:5000";
export const socket = io(serverUrl, { autoConnect: true });

export const nameShorter = (name) => {
  const nameArr = name.split(" ");
  const arrOfFirstLetter = nameArr.map((nm) => nm.slice(0, 1).toUpperCase());
  return arrOfFirstLetter.join("");
};
