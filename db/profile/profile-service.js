const dao = require('./profile-dao')
module.exports = (app) => {
    const fetchCurrentProfile = (req, res) =>
        dao.fetchCurrentProfile()
            .then(profile => res.json(profile))

    const updateCurrentProfile = (req, res) => {
        const newProfile = req.body;
        return dao.updateCurrentProfile(newProfile)
            .then(status => res.send(status))
    }

    app.get('/a9/profile', fetchCurrentProfile);
    app.put("/a9/profile", updateCurrentProfile);
}