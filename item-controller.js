const axios = require('axios'); 

exports.getWorld = function (req, res) {
    res.json({ result: 'Hello World from Controller' });
}

exports.getWorldParams = function (req, res) {
    res.json({
        message: 'Hello BScBest!', data: [
            req.params.foo,
            req.params.bar
        ]
    });
};

exports.postWorld = function (req, res) {
    res.json({ result: 'Post was sent', data: req.body });
};

exports.getCharacters = async function (req, res) {

    let characteres = [];
    (async function getCharacteres() {
        try {
            const { data } = await axios.get("https://swapi.dev/api/people");

            // one approach using for loop
            for (let i = 0; i < data.results.length; i++) {
                characteres.push(data.results[i].name);
            }
            res.json({ result: characteres });

            console.log(data.results.name);
            console.log(characteres);
        } catch (error) {
            console.log(error)
        }

    })();
    
};