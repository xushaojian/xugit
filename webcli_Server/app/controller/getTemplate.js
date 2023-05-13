'use strict';

const Controller = require('egg').Controller;
// 导入数据库连接工具
const mongodb = require('@pick-star/cli-mongodb');
// 数据库的远程连接地址，格式为 'mongodb://用户名:密码@远程IP:27017/数据库名称';
const dbUrl = 'mongodb://localhost:27017/webcli_server';

class getTemplateController extends Controller {
  async index() {
    const { ctx } = this;
    // 'template' 为数据库的表名
    const data = await new mongodb(dbUrl).query('testCollection');
    ctx.body = data;
  }
}

module.exports = getTemplateController;