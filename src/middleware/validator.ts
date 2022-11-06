/*import express from "express";
import { isInteger } from "lodash";

//validator middleware check if url contains query string to logging in in 4 steps
const validator = (
  req: express.Request,
  res: express.Response,
  next: () => void
): express.Response | void => {
  const { filename, width, height } = req.query;
  if (!req.query) {
    //if no query string return response with no params
    return res.status(400).send("no parameters found");
  }
  if (!filename) {
    return res.status(400).send("filename paramter not found"); //if image name not found in asset/images return response 404 not found
  }
  if (!width || isNaN((width as unknown) as number)) {
    return res.status(400).send("width paramter not found or not number"); //check if no width or width contains string or not a number
  }
  if (!height || isNaN((width as unknown) as number)) {
    return res.status(400).send("height paramter not found or not number"); //check if no height or width contains string or not a number
  }
  if (!isInteger(+width) || +width <= 0) {
    return res.status(400).send("width is not positive integer"); //check if width is a positive integer or not
  }
  if (!isInteger(+height) || +height <= 0) {
    return res.status(400).send("height is not positive integer"); //check if height is a positive integer or not
  }

  next();
};
export default validator;
*/