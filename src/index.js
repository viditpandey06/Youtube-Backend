import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});
connectDB().then(() => {
   
    app.listen(process.env.PORT||8000, () => {
        console.log(`Server is running on port ${process.env.PORT||8000}`);
    });
    }).catch((error) => {
        console.error("Error:",error);
    });

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
