import { app } from "./controller/app";
import express from "express";
import cors from "cors";



app.use(express.json());
app.use(cors());


