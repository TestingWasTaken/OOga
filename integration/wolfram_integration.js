const axios = require('axios');

app.get('/api/suggested-content', (req, res) => {
    axios.get(`https://api.wolframalpha.com/v2/query`, {
        params: {
            input: "Mathematics resources",
            appid: "YOUR_APP_ID",
            output: "JSON"
        }
    }).then(response => {
        res.json(response.data.queryresult.pods);
    }).catch(error => {
        res.status(500).send(error);
    });
});
