const fetchNode = require('node-fetch');
require('env2')('.env');

// All requests made with the client will be authenticated
const getData = (req, res) => {
    fetchNode(`https://pixabay.com/api/?key=${process.env.API_KEY}`)
    .then(data => data.json())
    .then(result => res.json(result))
    .catch(err => res.status(404).send(err))
}


const serachData = (req, res) => {
    const imgData = req.body.data;
    console.log(imgData, "Image Data")
    fetchNode(`https://pixabay.com/api/?key=${process.env.API_KEY}&q=${imgData}`)
    .then(data => {
        console.log(data)
        return data.json();
    })
    // .then(console.log)
    .then(result => res.json(result))
    .catch(err => res.status(404).send(err))
}

module.exports = {
    getData,
    serachData
};