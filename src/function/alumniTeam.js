import axios from "axios";

export const getData = async () =>
  await axios.get("https://json.extendsclass.com/bin/d0d5239f15b4");
