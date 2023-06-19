import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import { endpointNotFound } from "./middlewares/index.js";

const app = express();

// understand json
app.use(express.json());

app.use("/api", indexRoutes);
app.use("/api", employeesRoutes);

app.use(endpointNotFound);

export default app;
