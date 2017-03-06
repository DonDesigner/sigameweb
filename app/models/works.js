//app/models/works.js

var workSchema = require('mongoose');

module.exports = function () {
    var schema = workSchema.Schema({

        mode: {
            type: workSchema.Schema.Types.ObjectId,
            ref: 'Mode'
        },
        type: {
            type: workSchema.Schema.Types.ObjectId,
            ref: 'Types'
        },
        ordernumber: {
            type: Number,
            required: true
        },
        estimate: {
            type: Number,
            required: true
        },
        client: {
            type: workSchema.Schema.Types.ObjectId,
            ref: 'Clients'
        },
        work: {
            type: String,
            require: true
        },
        amount: {
            type: Number,
            required: true
        },
        enddate: {
            type: Date
        },
        salesperson: {
            type: workSchema.Schema.Types.ObjectId,
            ref: 'Users'
        },
        assignment: {
            type: String
        },
        sector: {
            type: workSchema.Schema.Types.ObjectId,
            ref: 'Sector'
        }



    });

    return workSchema.model('Works', schema, 'OrderService');
};