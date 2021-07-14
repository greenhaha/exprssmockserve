const Mock = require('mockjs');
const { Random } = require('mockjs');
Random.email()
let dataJson2 = Mock.mock({
    "object|2": {
        "310000": "上海市",
        "320000": "江苏省",
        "330000": "浙江省",
        "340000": "安徽省"
      }
})

module.exports = dataJson2;