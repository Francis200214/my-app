<template>
    <div>
        <el-container>
        <el-aside width="200px">
            <common-aside/>
        </el-aside>
        <el-container>
            <el-header>
                
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>
<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'

export default {
    data() {
        return {}
    },
    components: {
        CommonAside,
        CommonHeader
    }
}
</script>