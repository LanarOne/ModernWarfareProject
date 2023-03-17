import cors from "cors";
import helmet from "helmet";
import express from "express";
import bodyParser from "body-parser";

const initMiddlewares = (app) => {
  const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
  const corsOptions = {
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Origine non autorisée par CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };
  app
    .use(bodyParser.json())
    .use(helmet())
    .use(cors(corsOptions))
    .use(express.urlencoded({ extended: true }));
};

export default initMiddlewares;
