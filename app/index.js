const express = require('express');
const app = express();

app.get('/health', (_, res) => res.send('OK'));
app.get('/', (_, res) => res.send('Hello from ECS!'));

app.listen(3000, () => {
  console.log('App running on port 3000');
});
