const axios = require('axios');

const shorten = (req, res) => {
    const url = req.params['url'];
    return axios.get('https://api.shrtco.de/v2/shorten?url')
    .then((response) => {
        const short = response.result.full_short_link;
        res.send(short);
    }).catch((err) => {
        res.status(500).send('could not shorten for some reason');
    })
}

export default shorten;