<template>
    <div>
        <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>
<script>
importCommonAside from '../c'
export default {
    data() {
        return {}
    }
}
</script>