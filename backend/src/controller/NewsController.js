class NewsController{
    async index(req, res){
        res.send("hello new controller");
    }


    async show(req, res){
        res.send("hello new  show controller");
    }

    async store(req, res){
        res.send("hello new store controller");
    }

    async update(req, res){
        res.send("hello new update controller");
    }

    async destroy(req, res){
        res.send("hello new  ye destroy controller");
    }




}

export default NewsController;