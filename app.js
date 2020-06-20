const express = require('express');
const app = express();

const PORT = process.env.port || 3000;

app.get('/', (req,res) =>{
    res.send('Wecome to the home page darling');

});

app.listen(PORT, () => {
    console.log(`App server is running on port: ${PORT}`);
});
