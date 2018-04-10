const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = Mock.mock({
    'list|5-30': [{
        'title': Random.ctitle(),
        'addTime': Random.date('yyyy-MM-dd')
    }]
});