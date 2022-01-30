const db = require("../../../database")
const dataObjectify = require("../../runners/dataObjectify.runner")
const Item = db.items
const fs = require("fs")

exports.create = (data) => {
    // Validate request
    if (!data) {
        return
    }

    const dT = dataObjectify.CSVToObject(data)

    Item.bulkCreate(dT)
}