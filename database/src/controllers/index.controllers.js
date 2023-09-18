import catchedErrorAsync from "../utils/catchedErrorAsync.js";

import listData from "./listData/listData.controller.js";
import getDataById from "./getDataByID/getDataById.controller.js";

export default {
  listData: catchedErrorAsync(listData),
  getDataById: catchedErrorAsync(getDataById),
};
