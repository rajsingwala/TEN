import axios from "axios";

export const getData = async () =>
  await axios.get("https://json.extendsclass.com/bin/a272a98fb914");
