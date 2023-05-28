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
        selectMenu(state, val) {
            console.log('val', val)
            if (val.name !== '首页') {
                const index = state.tabList.findIndex(item => item.name === val.name)
                // 如果是-1
            }
        }
    }
}


