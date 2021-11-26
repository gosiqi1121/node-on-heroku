let profile = require('../data/information.json');
module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        console.log(req)
        res.json(profile);
    }
    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        console.log("************** req. body *************",req.body);
        const newProfile = { ...profile, ...req.body }
        profile = newProfile;
        return res.json(profile);
    }
    app.post('/api/profile', updateCurrentProfile);
};
