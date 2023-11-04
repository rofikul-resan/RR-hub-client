export const serverUrl = "http://127.0.0.1:5000";

export const nameShorter = (name) => {
  const nameArr = name.trim().split(" ");
  const arrOfFirstLetter = nameArr.map((nm) => nm.slice(0, 1).toUpperCase());
  return arrOfFirstLetter.join("");
};
