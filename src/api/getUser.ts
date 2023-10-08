import axios from "axios";

export const getUsers = async () => {
  try {
    const users = await axios.get(`https://panorbit.in/api/users.json`);
    return users.data.users;
  } catch (error) {
    console.log(error);
  }
};
