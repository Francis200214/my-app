<template>
    <div class="header-container">
        <div class="l-content">
            <el-button icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <div class="r-content">

        </div>
    </div>
</template>
<style lang="less" scope>
.header-container {
    padding: 0px 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
        color: #fff;
        
    }
}
</style>
<script>
export default {
    data() {
        return {}
    }
}
</script>