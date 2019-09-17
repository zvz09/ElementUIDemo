import Mock from 'mockjs'
// 将所有的mock文件引入
import listAPI from './listmock'


/**
 * 拦截ajax请求主要可以使用Mock中的两个方法：
    1. Mock.mock( rurl, rtype, template )
    2. Mock.mock( rurl, rtype, function( options ) )

 rurl：表示需要拦截的 URL，可以是 URL 字符串或 URL 正则
 rtype：表示需要拦截的 Ajax 请求类型。例如 GET、POST等。
 template：表示数据模板，可以是对象(obj)或字符串(string)。如果需要要把数据写死，可以直接写一个普通的对象。如果要让Mock随机生成，可以根据Mock模板的规则自定义。例如：
 { ‘data|1-10’:[{}] } 表示生成生成包含 1到10个空对象的数据
 ‘@EMAIL’ 表示随机生成一个email地址
 ‘@CNAME’ 表示随机生成一个中文人名
 */
export default {
  startMock() {
    // 设置所有ajax请求的超时时间，模拟网络传输耗时
    Mock.setup({
      timeout: 0 - 300
    })
    //在index.js中引入数据
    Mock.mock('/list/index', 'get', listAPI.listData);
  }
}
