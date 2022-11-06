import express from "express";

const getLogging = (req: express.Request, res: express.Response, next: () => void): void => {
console.log("logging Done");
next();
};

export default getLogging;