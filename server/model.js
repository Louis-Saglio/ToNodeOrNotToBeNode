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
        allowNull: true,
        validate: {
        }
    },
    'password': {
        type: Sequelize.Sequelize.STRING,
        allowNull: true
    }
});


const Task = sequelize.define('task', {
    'name' : {
        type: Sequelize.Sequelize.STRING,
        validate: {
            isNull: false
        }
    },
    'priority': {
        type: Sequelize.Sequelize.INTEGER,
        validate: {
            min: 0,
            max: 5,
            isNull: true
        }
    },
    'content': {
        type: Sequelize.Sequelize.TEXT,
        validate: {
            isNull: true
        }
    },
    'stop_date': {
        type: Sequelize.Sequelize.INTEGER,
        validate: {
            isNull: true
        }
    },
    'is_done': {
        type: Sequelize.Sequelize.BOOLEAN,
        validate: {
            isNull: true
        }
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

console.log(migrate());

// main().then(() => {
//     const user = User.create({
//         email: 'louis.saglio@sfr.fr',
//         name: 'Louis-Saglio',
//         password: 'erty'
//     });
// }).catch((err) => {
//     console.log(err.toString());
// });