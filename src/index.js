import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});
connectDB();

/*
const app = express();
(async () => {
    try {
      await  mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`)
        console.log("Connected to MongoDB");
        app.on ("error", (error) => {
            console.log("Error:",error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Error:",error);
    }
})();
*/
