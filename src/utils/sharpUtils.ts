import sharp from "sharp"
import fs from "fs"

//metadata retrieve meta data and we use meta data to check image width and height
const metaData= async(resizedImage:string ):Promise<sharp.Metadata>=>{
	const image_thumb =fs.readFileSync(resizedImage)
	const image = await sharp(image_thumb)
	const metadata =await image.metadata()
	return metadata
}
//using this function to resize image that image name come from query string and put output in assets/thumbnails
const modifyImageSize= 
async(image_path:string,thumbnails_path:string, width:number,height:number):Promise<void> =>{	
		console.log(width, height)
		if (!width || !height) {
			throw new Error("Width or Height paramter not found or not a number");
		}
		if (width < 0 || height < 0) {
			throw new Error("Width or Height is not positive number");
		}
		if (isNaN((width) ) || isNaN((height))) {
			throw new Error("Width or Height is not a number");
		}
		try {
			await sharp(image_path).resize(width,height).toFile(thumbnails_path);
		} catch (error) {
			throw new Error("unable to resize image");
		}
}
export  {modifyImageSize ,metaData}