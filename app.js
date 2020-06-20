const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.send('Update this simple page');

});

app.listen(PORT, () => {
    console.log(`App server is running on port: ${PORT}`);
});
