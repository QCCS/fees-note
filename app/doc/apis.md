##接口前缀 "api"

###1.注册
http://localhost:5000/register

请求方式:
post

{
    "name":"",
    "phone":"",
    "password":""
}

###2.登陆
http://localhost:5000/login

请求方式:
post

{
    "phone":"",
    "password":""
}

###3.添加费用
http://localhost:5000/fee

请求方式:
post

{
	"title":"费用1",
	"des":"费用1描述",
	"total":11,
	"userId":"1535024514393"
}

###4.删除费用
http://localhost:5000/fee/:id

请求方式:
delete


###5.获取费用列表
http://localhost:5000/feeList

请求方式:get

###6.id获取费用 
http://localhost:5000/fee/:id

请求方式:get

###7.关键字查询费用
http://localhost:5000/fee?title=1&des=11

请求方式:get

###8.更新费用
http://localhost:5000/fee

请求方式:
put

{
	"title":"费用1",
	"des":"费用1描述",
	"total":11,
	"id":"费用id"
	"userId":"1535024514393"
}

###8.更新用户
http://localhost:5000/user

请求方式:
put

{
	"name":"费用1",
	"password":"费用1描述",
	"phone":11,
	"userId":"1535024514393"
}
