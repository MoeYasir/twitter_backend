import  express, { json }  from "express";
import UserRoutes from "./routes/UserRoutes";
import TweetRoutes from "./routes/tweetRoutes"
const app = express();
const port = 3000;

app.use(express.json());
app.use("/user", UserRoutes );
app.use("/tweet", TweetRoutes );
app.get("/", (req, res)=>{
    res.send("The best Flutter and Node.js developer in the world!")
})

app.listen(port, ()=>{
    console.log(`Srever ready at port: ${port}`);
    
})