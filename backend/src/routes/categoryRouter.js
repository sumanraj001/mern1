import express from 'express';

const categoryRouter = express.Router();




categoryRouter.get('/', (req, res)=>{
   
    res.send('this is from categoryRouter(categoryRouter)');
});

export default categoryRouter;