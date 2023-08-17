const { db } = require('../db');
const { DataTypes } = require('sequelize');

const Todo = db.define("todos", {
    task: DataTypes.STRING,
    done: DataTypes.STRING
});

module.exports = { Todo };