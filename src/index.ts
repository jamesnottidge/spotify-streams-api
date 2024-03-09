import app from "./server";
import * as dotenv from "dotenv";
import config from "./config";

dotenv.config();
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
