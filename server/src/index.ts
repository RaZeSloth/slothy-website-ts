import express from "express";
import path from "path";
const app = express();
console.log(path.resolve(__dirname, "../../.././client/build/index.html"));
app.use(express.static(path.resolve(__dirname, "../.././client/build")))
app.use((req, res) => res.sendFile(path.resolve(__dirname + '../../.././client/build/index.html')))
app.get('/sus', (req, res) => {
    res.send('sus')
  })
  
app.listen(process.env.PORT || 8000, () => console.log(`server is running on port ${process.env.PORT || 8000}`));