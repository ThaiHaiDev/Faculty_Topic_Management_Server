const authRouter = require('./auth.route');
const userRouter = require('./user.route');
const typeTopicRouter = require('./typetopic.route');
const specializedRouter = require('./specialized.route');

function route(app) {
    app.use('/api/v1/', authRouter)
    app.use('/api/v1/user/', userRouter)
    app.use('/api/v1/typetopic', typeTopicRouter)
    app.use('/api/v1/specialized', specializedRouter)
}

module.exports = route