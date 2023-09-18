import server from "../server.cfg.js";

const startServer = () => {
  return new Promise((resolve, reject) => {
    try {
      server.listen(server.get("port"), () => {
        console.log(`~DATABASE on port ---> ${server.get("port")}`);
        resolve();
      });
    } catch (error) {
      console.log("EROR!!");
      reject(error);
    }
    return true;
  });
};

export default startServer;
