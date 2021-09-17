const Router = require('express').Router();

const routes = [
    // Routes here 
    'student',
]

module.exports  = {
    init: () => {
        routes.forEach((route) => {
            const Defination = require(`./routes/${route}`);
            Router.use(Defination.basePath, Defination.router);
        });

        return Router;
    }
}