const Homepage = (req, res) => {
    res.send(JSON.stringify({status: "ok"}));
}

module.exports = Homepage;