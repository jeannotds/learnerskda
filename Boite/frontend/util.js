import axios from "axios";

export const getAllUser = async () => {
  const res = await axios.get("http://localhost:3000/api/learners/learners");
  if (res.status !== 200) {
    return new Error("Interval Server Error");
  } else {
    const data = await res.data.learners;
    return data;
  }
};
