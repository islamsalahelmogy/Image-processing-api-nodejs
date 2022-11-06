import express,{Application} from "express"
import resize from "./router/resize"

const app: Application =express()
const port= 3000


app.get("/",(req,res) :void =>{
	res.send("Welcome to Image processing app ")
})


app.use("/api/images",resize)     //use router resize 

app.listen(port,() :void=>{
	console.log(`app listening at http://localhost:${port}`)
})

export default app