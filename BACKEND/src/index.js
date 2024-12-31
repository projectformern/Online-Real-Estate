import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";

const PORT = process.env.PORT || 5656;

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
