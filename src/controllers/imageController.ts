import  express  from "express"
import path from "path"
import { existsSync} from "fs"
import {modifyImageSize ,metaData} from "../utils/sharpUtils"

const imageProcessing = async (req : express.Request , res : express.Response ) :Promise<express.Response | void> =>{
	const {filename ,width , height}=req.query
	const imageAssets=path.resolve("./assets")
	const targetFileName = path.join(imageAssets,"images",String(filename)) +".jpg"   
	const resizedImage =path.join(imageAssets,"thumbnails",String(filename)) +"_thumb.jpg"
	
	if(!existsSync(resizedImage)){
		return res.status(404).send("File not found")
	}

	//using cashed image if the requested image founded and has the same width and height
	if(existsSync(resizedImage)){            
		const metadata= await metaData(resizedImage)    
		if(width==metadata.width && height == metadata.height){
			return res.sendFile(resizedImage)
		}
	}
    
	try{
		//modifyImageSize function make resizing for image requsted in query string put output in assets/thumbnails
		await modifyImageSize( targetFileName, resizedImage, Number(width) , Number(height) )
		return res.sendFile(resizedImage)
	}catch(error) {
		return res.status(400).send(error)
	}
}

export   {imageProcessing}