const Sequelize = require('sequelize');
const sequelize = new Sequelize({dialect: 'sqlite', storage: 'sqlite.db'});

sequelize.authenticate().then(() => {
    console.log('marche');
}).catch(() => {
    console.log("marche pas");
});


const User = sequelize.define('user', {
    'email': {
        type: Sequelize.Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    'name': {
        type: Sequelize.Sequelize.STRING,
        allowNull: true
    },
    'password': {
        type: Sequelize.Sequelize.STRING,
        allowNull: true
    }
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
    },
    'user_id': {
        type: Sequelize.Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id',
        }
    }
});


async function migrate(){
    // noinspection ES6ModulesDependencies
    await Promise.all([User.sync({force: true}), Task.sync({force: true})])
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
            res.send('done');
        }).catch((e) => {
            res.send(e, 500)
        })
    })
    .delete((req, res) => {
        // Task.destroy({
        //     where: {
        //
        //     }
        // })
    })
    .put((req, res) => {
        res.send('put');
    });


app.route('/tasks/:id')
    .put((req, res) => {
        res.send('put with id');
    });


app.listen(3000, () => {
    console.log('marche');
});