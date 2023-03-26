const Homepage = (req, res) => {
    res.sendFile('../../client-side/public/index.html');
}

export default Homepage;