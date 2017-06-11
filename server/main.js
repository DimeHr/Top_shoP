const
    express       = require('express'),
    path            = require('path'),
    webpack         = require('webpack'),
    logger          = require('../build/lib/logger'),
    webpackConfig   = require('../build/webpack.config'),
    project         = require('../project.config'),
    compress        = require('compression'),
    routes          = require('./routes'),
    bodyParser      = require('body-parser'),
    config          = require('./config/development'),
    mongoose        = require('mongoose'),
    app             = express();

app.use(compress())



// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig)
  let db = {};
  logger.info('Enabling webpack development and HMR middleware')
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : path.resolve(project.basePath, project.srcDir),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : 'normal',
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))
    //connection to db
  db.mongodb = mongoose.connect(config.mongodb.uri, config.mongodb.options, function(err) {
    if (err) {
        console.error('Could not connect to MongoDB!');
        console.log(err);
    } else {
        console.log('Successfully connected to DB');
    }
  });

    db.mongodb.connection.on('error', function(err) {
        console.error('MongoDB connection error: ' + err);
        throw 'MongoDB connection error';
    });
  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(path.resolve(project.basePath, 'public')))

  app.use('/', routes);
} else {
  logger.warn(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(path.resolve(project.basePath, project.outDir)))
}

module.exports = app
