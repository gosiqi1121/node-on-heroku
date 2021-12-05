const model = require('./profile-model');

const fetchCurrentProfile = () =>
    model.find();

const updateCurrentProfile = (profile) =>
  model.updateOne({_id: profile._id}, {$set: profile});

const findProfileById = (id) =>
    model.findById(id);

module.exports = {
    fetchCurrentProfile, updateCurrentProfile, findProfileById
};