import express from "express";
import cors from "cors";
// import autorizacao from "./middleware/valida-header.js";
import {
  TransactionsController,
  SuppliersController,
  MenuController,
  ClientController,
  StorageController,
  StaffController,
} from "./controller/controller.js";

const app = express();

app.use(cors());
app.use(express.json());
// autorizacao.auth(app);

StaffController.routes(app);
TransactionsController.routes(app);
MenuController.routes(app);
SuppliersController.routes(app);
StorageController.routes(app);
ClientController.routes(app);
export default app;