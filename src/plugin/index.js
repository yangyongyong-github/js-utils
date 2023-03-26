const type = require('./type')
const array = require('./Array')
const date = require('./Date')
const object = require('./Object')
const math = require('./Math')

module.exports = {
    ...type,
    ...array,
    ...date,
    ...object,
    ...math
}