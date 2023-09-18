import catchedErrorAsync from "../utils/catchedErrorAsync.js";

import listData from "./listData/listData.controller.js";
import getDataById from "./getDataByID/getDataById.controller.js";

const controller = {
  listData: catchedErrorAsync(listData),
  getDataById: catchedErrorAsync(getDataById),
};

export default controller;
