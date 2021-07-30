import axios from "axios";

export const getBlog = async () =>
  await axios.get("https://json.extendsclass.com/bin/60f812f0cbf9");
