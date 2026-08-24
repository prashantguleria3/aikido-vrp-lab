'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(routes);

app.use((req, res) => {
  res.status(404).json({ error: 'not found' });
});

if (require.main === module) {
  app.listen(config.port, () => {
    console.log(`${config.appName} listening on port ${config.port} (${config.env})`);
  });
}

module.exports = app;
