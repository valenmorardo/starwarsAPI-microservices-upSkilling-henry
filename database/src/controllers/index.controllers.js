import catchedErrorAsync from "../utils/catchedErrorAsync.js";

import listData from "./listData/listData.controller.js";
import getDataById from "./getDataByID/getDataById.controller.js";
import insertNewRegister from "./insertNewRegister/insertNewRegister.js";

const controller = {
  listData: catchedErrorAsync(listData),
  getDataById: catchedErrorAsync(getDataById),
  insertNewRegister: catchedErrorAsync(insertNewRegister),
};

export default controller;
