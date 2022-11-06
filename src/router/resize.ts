import express from "express"
import helmet from "helmet"
import cors from "cors"
//import validator from "../middleware/validator"
import {imageProcessing} from "../controllers/imageController"
import getLogging from "../middleware/logging"

const resize= express.Router()
resize.use(
	cors(),   
	helmet(),
	getLogging
)
resize.get("/",imageProcessing) 

export default resize