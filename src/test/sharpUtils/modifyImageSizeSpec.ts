import { modifyImageSize } from "../../utils/sharpUtils"
import path from "path";

//const filename: string[] = ["encenadaport", "kkjkjk"]
const filename= "encenadaport" 
const imageAssets = path.resolve("./assets")
const targetFileNameValid =
  path.join(imageAssets, "images", filename) + ".jpg"
const resizedImageValid =
  path.join(imageAssets, "thumbnails", filename) + "_thumb.jpg"

describe("Testing sharp utils", () => {
  it("testing modify image size function", async () => {
    const resizedImage = await modifyImageSize(targetFileNameValid, resizedImageValid, 400, 300);
    expect(resizedImage).not.toThrow;
  })
})
