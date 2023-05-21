export default{
    state: {
        isCollapse: false // 用于控制菜单的展开或收起
    },
    mutations: {
        // 修改菜单展开或者收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}


