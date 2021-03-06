
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorinstSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    locationid: {
        type: String,
        required: true
    },
    sensorid: {
        type: String,
        required: true
    },
    alert_users:{
        type: Array
    }
},{
    timestamps: true
});

var Sensor = mongoose.model('SensorInstance',sensorinstSchema);

module.exports = Sensor;

