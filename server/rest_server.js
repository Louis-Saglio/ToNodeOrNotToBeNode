const Sequelize = require('sequelize');
const sequelize = new Sequelize({dialect: 'sqlite', storage: 'sqlite.db'});

sequelize.authenticate().then(() => {
    console.log('connecté à la base');
}).catch(() => {
    console.log('erreur de connection à la base');
});


const Task = sequelize.define('task', {
    'name' : {
        type: Sequelize.Sequelize.STRING,
        allowNull: false
    },
    'priority': {
        type: Sequelize.Sequelize.INTEGER,
        allowNull: true,
        validate: {
            min: 0,
            max: 5
        }
    },
    'content': {
        type: Sequelize.Sequelize.TEXT,
        allowNull: true
    },
    'stop_date': {
        type: Sequelize.Sequelize.INTEGER,
        allowNull: true
    },
    'is_done': {
        type: Sequelize.Sequelize.BOOLEAN,
        allowNull: true
    }
});


async function migrate(){
    await Task.sync({force: true})
}



const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented: true}));


app.route('/tasks')
    .get((req, res) => {
        Task.findAll().then(users => {
            res.send(users)
        })
    })
    .post((req, res) => {
        const promises = [];
        for (task of req.body.tasks) {
            console.log(task);
            promises.push(Task.create(task));
        }
        Promise.all(promises).then(() => {
            res.send(201);
        }).catch((e) => {
            res.send(500)
        })
    })
    .delete((req, res) => {
        Task.destroy({truncate: true}).then(() => {res.send(204)}).catch(() => {res.send(500)})
    });


app.route('/tasks/:id')
    .delete((req, res) => {
        Task.destroy({
            where: {id: req.params.id}
        }).then(() => {
            res.send(204)
        }).catch(() => {
            res.send(500)
        })
    });


app.listen(3000, () => {'listening on port 3000 : http://127.0.0.1:3000/tasks'});