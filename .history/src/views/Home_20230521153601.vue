<template>
    <el-row>
        <el-col :span="8">
            <el-card class="box-card">
                <div class="user">
                    <img src="../assets/images/user.png" alt="">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info"></div>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="grid-content bg-purple-light"></div>
        </el-col>
    </el-row>
</template>
<style lang="less" scoped>
.user {
    display: flex;
    // flex 布局中 主轴垂直居中
    align-items: center;


    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }

    .userinfo {
        .name {
            font-size: 32px;
            
        }
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