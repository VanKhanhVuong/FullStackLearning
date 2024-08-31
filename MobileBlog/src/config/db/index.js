const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/vk_course_dev');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
}
module.exports = { connect };