
var projectName = '校友社交系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

]


var indexNav = [

{
	name: '校友信息',
	url: './pages/xiaoyouxinxi/list.html'
}, 
{
	name: '校友会信息',
	url: './pages/xiaoyouhuixinxi/list.html'
}, 
{
	name: '校友活动',
	url: './pages/xiaoyouhuodong/list.html'
}, 
{
	name: '招聘信息',
	url: './pages/zhaopinxinxi/list.html'
}, 
{
	name: '校园捐赠',
	url: './pages/xiaoyuanjuanzeng/list.html'
}, 
{
	name: '校友相亲',
	url: './pages/xiaoyouxiangqin/list.html'
}, 

{
	name: '论坛中心',
	url: './pages/forum/list.html'
}, 
{
	name: '新闻资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot55415/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["新增","查看","修改","删除"],"menu":"校友信息","menuJump":"列表","tableName":"xiaoyouxinxi"}],"menu":"校友信息管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"校友会信息","menuJump":"列表","tableName":"xiaoyouhuixinxi"}],"menu":"校友会信息管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除"],"menu":"加入校友会","menuJump":"列表","tableName":"jiaruxiaoyouhui"}],"menu":"加入校友会管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"活动类型","menuJump":"列表","tableName":"huodongleixing"}],"menu":"活动类型管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"校友活动","menuJump":"列表","tableName":"xiaoyouhuodong"}],"menu":"校友活动管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","修改","删除","审核"],"menu":"报名申请","menuJump":"列表","tableName":"baomingshenqing"}],"menu":"报名申请管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"岗位","menuJump":"列表","tableName":"gangwei"}],"menu":"岗位管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除"],"menu":"招聘信息","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"项目","menuJump":"列表","tableName":"xiangmu"}],"menu":"项目管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["新增","查看","修改","删除"],"menu":"校园捐赠","menuJump":"列表","tableName":"xiaoyuanjuanzeng"}],"menu":"校园捐赠管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除"],"menu":"我的捐赠","menuJump":"列表","tableName":"wodejuanzeng"}],"menu":"我的捐赠管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除"],"menu":"校友相亲","menuJump":"列表","tableName":"xiaoyouxiangqin"}],"menu":"校友相亲管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["新增","查看","修改","删除"],"menu":"论坛中心","tableName":"forum"}],"menu":"论坛中心"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"新闻资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"校友信息列表","menuJump":"列表","tableName":"xiaoyouxinxi"}],"menu":"校友信息模块"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看","加入"],"menu":"校友会信息列表","menuJump":"列表","tableName":"xiaoyouhuixinxi"}],"menu":"校友会信息模块"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","申请报名"],"menu":"校友活动列表","menuJump":"列表","tableName":"xiaoyouhuodong"}],"menu":"校友活动模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"招聘信息列表","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息模块"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","捐赠"],"menu":"校园捐赠列表","menuJump":"列表","tableName":"xiaoyuanjuanzeng"}],"menu":"校园捐赠模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"校友相亲列表","menuJump":"列表","tableName":"xiaoyouxiangqin"}],"menu":"校友相亲模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看"],"menu":"加入校友会","menuJump":"列表","tableName":"jiaruxiaoyouhui"}],"menu":"加入校友会管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"报名申请","menuJump":"列表","tableName":"baomingshenqing"}],"menu":"报名申请管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","支付"],"menu":"我的捐赠","menuJump":"列表","tableName":"wodejuanzeng"}],"menu":"我的捐赠管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除"],"menu":"校友相亲","menuJump":"列表","tableName":"xiaoyouxiangqin"}],"menu":"校友相亲管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"校友信息列表","menuJump":"列表","tableName":"xiaoyouxinxi"}],"menu":"校友信息模块"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看","加入"],"menu":"校友会信息列表","menuJump":"列表","tableName":"xiaoyouhuixinxi"}],"menu":"校友会信息模块"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","申请报名"],"menu":"校友活动列表","menuJump":"列表","tableName":"xiaoyouhuodong"}],"menu":"校友活动模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"招聘信息列表","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息模块"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","捐赠"],"menu":"校园捐赠列表","menuJump":"列表","tableName":"xiaoyuanjuanzeng"}],"menu":"校园捐赠模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"校友相亲列表","menuJump":"列表","tableName":"xiaoyouxiangqin"}],"menu":"校友相亲模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
