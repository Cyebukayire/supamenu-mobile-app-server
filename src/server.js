import express from "express";
import { DbConnection } from "./database";
import authMiddleware from "./middlewares/auth.middleware";
import authRouter from './routes/Auth.route';
import userRouter from './routes/User.route';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swaggerDoc.json';
import YAML from "yamljs";
import productRoute from './routes/Product.route';

DbConnection();

const app = express();
const port = process.env.PORT || 4000;
// const swaggerDoc = YAML.load('src/swagger.yaml');

app.use(express.json());
app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/api/v1', (req,res) => res.send("Welcome to Server!"));
app.use('/api/v1/auth', authRouter );
app.use('/api/v1/users', authMiddleware, userRouter);
app.use('/api/v1/products', productRoute);
app.listen(port, ()=> console.log(`The server is running on ${port}`));