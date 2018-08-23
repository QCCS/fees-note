1.注册

http://localhost:5000/register

post
{
    "name":"",
    "phone":"",
    "password":"",
}

2.登陆

http://localhost:5000/login

post
{
    "phone":"",
    "password":"",
}

3.添加费用

post
http://localhost:5000/fee
{
	"title":"费用1",
	"des":"费用1描述",
	"total":11,
	"userId":"1535024514393"
}

4.删除费用

http://localhost:5000/fee

delete
{
	"title":"费用1",
	"des":"费用1描述",
	"total":11,
	"userId":"1535024514393"
}

5.获取费用列表

http://localhost:5000/feeList

6.id获取费用 

http://localhost:5000/fee/:id

7.关键字查询费用

http://localhost:5000/fee?title=1&des=11
