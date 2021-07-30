import axios from "axios";

export const getPages = async () =>
  await axios.get("https://json.extendsclass.com/bin/712fd1aa29e3");
