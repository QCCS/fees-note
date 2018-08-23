/**
 * Created by zhouli on 18/8/23
 */
/*
* 费用
*
* id id
* 标题 title
* 描述 des
* 总共 total
* 时间 date_at
* 关联用户id u_id
* */
const query = require('../utils/query');

const sql = {
    insert: `
    INSERT INTO fee(title, des, total, date_at,u_id)
    VALUES(?, ?, ?, ?, ?)
  `,
    delete: `
    DELETE FROM fee
    WHERE id=?
  `,
    update: `
    UPDATE fee SET
      title=?,
      des=?,
      total=?,
      date_at=?,
      u_id=?
    WHERE id=?
  `,
    getList: `
    SELECT *
    FROM fee
  `,

    find: `
    SELECT *
    FROM fee
    WHERE id=?
  `,
    search: `
    SELECT *
    FROM fee
    WHERE title like ? or des like ?
  `
};

async function insertFeeDao(title, des, total, date_at, u_id) {
    console.log(title, des, total, date_at, u_id);
    return await query(sql.insert, [title, des, total, date_at, u_id]);
}

async function deleteFeeDao(id) {
    return await query(sql.delete, [id]);
}

async function updateFeeDao(title, des, total, date_at, u_id, id) {
    return await query(sql.update, [title, des, total, date_at, u_id, id]);
}

async function getFeeListDao() {
    return await query(sql.getList, []);
}

async function getFeeDao(id) {
    return await query(sql.find, [id]);
}

async function searchFeeDao(title, des) {
    return await query(sql.search, [title, des]);
}

//添加费用
exports.insertFeeDao = insertFeeDao;
//删除费用
exports.deleteFeeDao = deleteFeeDao;
//修改数据
exports.updateFeeDao = updateFeeDao;
//获取费用列表
exports.getFeeListDao = getFeeListDao;
//搜索费用
exports.seacrchFeeDao = searchFeeDao;
//查询费用通过ID
exports.getFeeDao = getFeeDao;


