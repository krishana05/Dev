const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req, res)=>
	res.send('Hello wolrd')
);

app.listen(process.env.PORT || port);
console.log('App is running on '+ port);
