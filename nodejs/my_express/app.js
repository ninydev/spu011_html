require('dotenv').config()

// Создание экземпляра сервера
let express = require('express');
let app = express();

// Соединение с базой данных
require('./config/mongo').connect()


// Cors
let cors = require('cors')
app.use(cors())

// Работа с лог файлами
let logger = require('morgan');
app.use(logger('dev'));


// Работа с JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Работа с куками
let cookieParser = require('cookie-parser');
app.use(cookieParser());


// Статические файлы
let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// Маршруты
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let postsRouter = require('./posts/postRouter');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/posts', postsRouter)


// передача на запуск сконфигурированного сервера
module.exports = app;
