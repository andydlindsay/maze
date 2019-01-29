const express = require('express');
const serveStatic = require('serve-static');
const port = process.env.PORT || 8080;
const app = express();

app.use(serveStatic(__dirname + "/dist"));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
