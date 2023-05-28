<template>
    <el-row>
        <el-col :span="8" style="padding-right: 10px">
            <el-card class="box-card">
                <div class="user">
                    <img src="../assets/images/user.png" alt="">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>

                <div class="login-info">
                    <p>上次登录时间：<span>2023-09-17</span></p>
                    <p>上次登录地点：<span>济南</span></p>
                </div>
            </el-card>

            <el-card style="margin-top: 20px;height: 460px;">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column v-for="(key, val) in tableLabel" :key="key" :prop="val" :label="key" />
                </el-table>
            </el-card>
        </el-col>

        <el-col :span="16" style="padding-left: 10px">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="price">￥{{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>

            <el-card style="height: 280px">
                <!-- 折线图 -->
                <div ref="echarts1" style="height: 280px"></div>
            </el-card>

            <div class="graph">
                <el-card>
                    <div ref="echarts2" style="height: 260px"></div>
                </el-card>
                <el-card></el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { getData } from '../api'
import * as echarts from 'echarts'

export default {
    data() {
        return {
            tableData: [],
            tableLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买'
            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ],
        }
    },
    mounted() {
        getData().then(({ data }) => {
            const { tableData } = data.data
            this.tableData = tableData


            // echarts折线图
            const { orderData } = data.data
            this.lineChart(orderData)

            // echarts折线图
            const { userData } = data.data
            this.barChart(userData)
        })

    },
    methods: {
        // 折线图
        lineChart(orderData) {
            // echarts折线图
            var ecahrts1Option = {}

            const xAxis = Object.keys(orderData.data[0])
            const xAxisData = {
                data: xAxis
            }
            ecahrts1Option.xAxis = xAxisData
            ecahrts1Option.yAxis = {}
            ecahrts1Option.legend = xAxisData

            ecahrts1Option.series = []
            xAxis.forEach(key => {
                ecahrts1Option.series.push({
                    name: key,
                    data: orderData.data.map(item => item[key]),
                    type: 'line'
                })
            })

            // 基于准备好的dom，初始化echarts实例
            const echarts1 = echarts.init(this.$refs.echarts1)
            // 根据配置显示图表
            echarts1.setOption(ecahrts1Option);
        },
        // 柱状图
        barChart(userData) {
            console.log('userData', userData)
            const ecahrtsOption = {
                legend: {
                    // 图例文字颜色
                    textStyle: {
                        color: "#333",
                    },
                },
                grid: {
                    left: "20%",
                },
                // 提示框
                tooltip: {
                    trigger: "axis",
                },
                xAxis: {
                    type: "category", // 类目轴
                    data: userData.map(item => e),
                    axisLine: {
                        lineStyle: {
                            color: "#17b3a3",
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        color: "#333",
                    },
                },
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#17b3a3",
                            },
                        },
                    },
                ],
                color: ["#2ec7c9", "#b6a2de"],
                series: [
                    {
                        name: '新增用户'
                    },
                    {
                        name: '活跃用户'
                    }
                ],
            }
        }
    }
}
</script>

<style lang="less" scoped>
.user {
    display: flex;
    // flex 布局中 主轴垂直居中
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }

    .userinfo {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #999999;
        }
    }
}

.login-info {
    line-height: 28px;
    font-size: 14px;
    color: #999999;

    span {
        color: #666666;
        margin-left: 60px;
    }
}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .icon {
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
    }

    .detail {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .price {
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
        }

        .desc {
            font-size: 14px;
            color: #999;
            text-align: center;
        }
    }

    .el-card {
        width: 32%;
        margin-bottom: 20px;
    }
}

.graph {
    display: flex;
    justify-content: space-between;

    .el-card {
        height: 260px;
        width: 48%;
        margin-top: 20px;
    }
}
</style>

