export default {
    state: {
        isCollapse: false, // 用于控制菜单的展开或收起
        tabList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }
        ]// 面包屑数据
    },
    mutations: {
        // 修改菜单展开或者收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑
        selectMenu
    }
}


