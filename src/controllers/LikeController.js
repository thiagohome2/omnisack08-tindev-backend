const Dev = require('../models/Dev');

module.exports = {
  async store(req, res){
    const { user } = req.headers;
    const { devId } = req.params;
    const loggedDev = await Dev.findById(user);
    const targetdDev = await Dev.findById(devId);

    if(!targetdDev){
      return res.status(400).json({error: 'Dev not exists'});
    }

    if(targetdDev.likes.includes(loggedDev._id)){
      console.log('DEU MATCH');
    }

    loggedDev.likes.push(targetdDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
} ;  