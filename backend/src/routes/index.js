import express from 'express';
import newsRouter from './newsRouter.js';
import userRoute from './userRouter.js';
import categoryRouter from './categoryRouter.js';
const router=express.Router();



router.get('/', (req, res)=>{
   
    res.send('this is comming from router index');
});
router.use('/user', userRoute);
router.use('/category',categoryRouter);
router.use('/news',newsRouter);

export default router;