const Mock = require('mockjs');
const { Random } = require('mockjs');
Random.email()
let dataJson = Mock.mock({
    'people|10' : [{
        name : "@cname",
        'age|10-40' : 0,
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'email': "@email"
    }]
})

module.exports = dataJson;