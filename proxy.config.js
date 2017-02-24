
// var isRemote = false; //是否forward到远程服务器 , false使用mock数据,true则forward到后台服务器

// var rnd = function (length) {
//   length = length || 10;
//   var x   = "0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//   var tmp = "";
//   for (var i = 0; i < length; i++) {
//     tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
//   }
//   return tmp;
// };


// resSuccess = function (data) {
//   return {
//     code: 'AAAAAA',
//     msg: 'success',
//     response: data
//   }
// }


// resFailed = function () {
//   return {
//     msg :'出错了!!!!!',
//     code: 'failed'
//   }
// }

// var local = {
//   'POST /PageInitQry' : function (req, res) {
//     res.json(resSuccess({}))
//   },
//   'POST /Test': function(req, res) {
//     res.json(resSuccess({
//       data: 'hello'
//     }));
//   },
//   'POST /QueryCheckingAccount' : function (req, res) {
//     var list = [];
//     for (var i =0; i<6;i++) {
//       list.push({
//         currency: 'HKD',
//         balance: 100000,
//         usableBalance: 90000000
//       })
//     }
//     res.json(resSuccess({
//       currentInfoLIst: list,
//       name: '活期多币种',
//       number: '10000333',
//       username: 'Ray'
//     }))
//   },
//   'POST /QueryDepositAccount' : function (req, res) {
//     var data = [];
//     for (var i = 0; i < 5; i++) {
//       data.push({
//         no: 999999+ i,
//         currency: 'HKD',
//         capital: 1000000,
//         duration: 3,
//         interestDate: '2016-12-01',
//         dueDate: '2017-12-01',
//         interestRate: 3.12,
//         interest: 3000,
//         present: 99999999
//       });
//     };
//     // setTimeout(function () {
//     //   res.json(resSuccess({
//     //     list: data,
//     //     recordNumber: 200
//     //   }))
//     // },1500);
//     res.json(resSuccess({
//       list: data,
//       recordNumber: 200
//     }))
//   },
//   'POST /TrsListQry': function (req, res) {
//     var data = [];
//     for (var i = 0; i < 10; i++) {
//       data.push({
//         trsDate: '2016-12-2',
//         remark: '手机支付',
//         amount: 1000,
//         balanceAmt: '1000000',
//         channel: '网络银行',
//         otherInfo: 'IBS XXXX',
//         trsReferenceNo: 'ddddd22ddd2dsdfasf' + i,
//         currency: 'HKD',
//         inOutFlag: i%2===0 ?'CR' : 'out',
//         key: i
//       });
//     };
//     // res.json(resSuccess({
//     //   list:data,
//     //   recordNumber: 200
//     // }));
//     setTimeout(function () {
//       res.json(resSuccess({
//         list:data,
//         recordNumber: 200
//       }));
//     },1500);
//   }
// };

// var localReq = '/*.do'; //页面请求
// var forward = 'http://197.3.187.2:8004/'; //转发服务器路径


// //个性化配置
// var remoteExt = {};

// var remote = function() {
//   var result = {};
//   result[localReq] = forward;
//   return Object.assign({}, result, remoteExt);
// }


// module.exports = isRemote?remote():local;
