const express = require('express');

const app = express();
const port = process.env.PORT || 3004;

app.use(express.static('public'));
app.use('/scripts', express.static('node_modules'));
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
