require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || process.env.APP_PORT || 3000;

// dynamically load route modules from src/routes
const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, 'routes');
fs.readdirSync(routesDir).forEach(file => {
  if (file.endsWith('.js')) {
    const route = require(path.join(routesDir, file));
    const routeName = file.replace(/\.js$/, '');
    app.use(`/${routeName}`, route);
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.send('OneGuadalupeCebuStronghold API is running');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;
