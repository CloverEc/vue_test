<template>
    <!-- <div style="height:600px" class="reserveOverview"> -->
        <!-- <vuescroll> -->
            <div style="height:1000px">
                <div class="vx-row">
                    <div class="vx-col w-full lg:w-1/3 lg:mt-0 mt-base">
                        <vx-card>
                            <div class="chart_tit">
                                <div class="tit">固定利率 vs 变动利率 年利率</div>
                                <div class="chart_tip">
                                    <span class="fix_tip">固定利率</span>
                                    <span class="no_fix">浮动利率</span>
                                </div>
                            </div>
                            <div class="chart_box" ref="allChart"></div>
                        </vx-card>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 lg:mt-0 mt-base">
                        <vx-card>
                            <div class="chart_tit">
                                <div class="tit">存款年化</div>
                            </div>
                            <div class="chart_box" ref="yearChart"></div>
                        </vx-card>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 lg:mt-0 mt-base">
                        <vx-card>
                            <div class="chart_tit">
                                <div class="tit">利用率</div>
                            </div>
                            <div class="chart_box" ref="useChart"></div>
                        </vx-card>
                    </div>
                </div>
                <div class="vx-row configShow">
                    <div class="vx-col w-full lg:w-2/3 mt-base">
                        <h5 class="configTit">储备状态&配置</h5>
                        <vx-card>
                            <div class="status_config">
                                <div class="config_tit">
                                    <span>储备金总览</span>
                                    <span>$ 35,644,754.66</span>
                                </div>
                                <div class="statusConfig" ref="statusConfig"></div>
                                <!-- <div class="config_table">
                                    <div class="deposit item">
                                        <div class="c_header">存款</div>
                                        <div class="line">
                                            <span>存款年化</span>
                                            <span><strong>5.57</strong>%</span>                                            
                                        </div>
                                        <div class="line">
                                            <span>存款年化</span>
                                            <span><strong>5.57</strong>%</span> 
                                        </div>
                                    </div>
                                    <div class="borrow item">
                                        <div class="c_header">固定利率借款</div>
                                        <div class="line">
                                            <span>贷款年化</span>
                                            <span><strong>5.57</strong>%</span>                                            
                                        </div>
                                        <div class="line">
                                            <span>占总数的百分比</span>
                                            <span><strong>5.57</strong>%</span> 
                                        </div>
                                    </div>
                                    <div class="float_borrow item">
                                        <div class="c_header">浮动利率借款</div>
                                        <div class="line">
                                            <span>贷款年化</span>
                                            <span><strong>5.57</strong>%</span>                                            
                                        </div>
                                        <div class="line">
                                            <span>占总数的百分比</span>
                                            <span><strong>5.57</strong>%</span> 
                                        </div>
                                        <div class="line">
                                            <span>占总数的百分比</span>
                                            <span><strong>5.57</strong>%</span> 
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </vx-card>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 mt-base info_card">
                        <h5 class="configTit">您的资料</h5>
                        <vx-card>
                            <div class="info_card_con">
                                <h5>借贷</h5>
                                <div class="line">
                                    <p class="subtit">已借贷</p>
                                    <p class="num">
                                        <strong>0.00</strong>DAI</p>
                                </div>
                                <div class="line">
                                    <p class="subtit">健康系数</p>
                                    <p class="num"> — </p>
                                </div>
                                <div class="line">
                                    <p class="subtit">贷款价值</p>
                                    <p class="num">
                                        <strong>0.00</strong>%</p>
                                </div>
                                <div class="line">
                                    <p class="subtit">提供给您</p>
                                    <p class="num">
                                        <strong>0.00</strong>DAI</p>
                                </div>
                                <h5>存款</h5>
                                <div class="line">
                                    <p>您的钱包余额</p>
                                    <p>
                                        <strong>0.00</strong>DAI</p>
                                </div>
                                <div class="line">
                                    <p>您已经存入</p>
                                    <p>
                                        <strong>0.00</strong>DAI</p>
                                </div>
                                <div class="btn-group">
                                    <vs-button color="primary" type="filled" class="deposit">存 款</vs-button>
                                    <vs-button color="primary" type="filled" class="deposit" disabled>借 贷</vs-button>
                                    <vs-button color="primary" type="border" class="deposit" disabled>取 款</vs-button>
                                    <vs-button color="primary" type="border" class="deposit" disabled>偿 还</vs-button>
                                    <!-- <vs-button color="primary" type="filled">Primary</vs-button>
                                                            <vs-button color="primary" type="filled">Primary</vs-button>
                                                            <vs-button color="primary" type="filled">Primary</vs-button>    -->
                                </div>
                            </div>
                        </vx-card>
                    </div>
                </div>
            <!-- </div>
        </vuescroll> -->
    </div>
</template>
<script>
    import lineOptions from './../ui-elements/card/analyticsData.js';
    import VueApexCharts from 'vue-apexcharts'
    import vuescroll from './../../components/vue-scroll/VueScroll.vue'
    export default {
        data() {
            return {
                lineOptions,
                winHeight: `0px`
            }
        },
        components: {
            VueApexCharts,
            vuescroll
        },
        methods: {
            initCharts() {
                let series = [{
                    name: '固定利率',
                    data: [220, 232, 201, 234, 290, 230, 220],
                    symbol: 'none',
                    type: 'line',               // 类型为折线图
                    lineStyle: {                // 线条样式 => 必须使用normal属性
                        normal: {
                            color: '#7367F0',
                        }
                    },
                }, {
                    name: '浮动利率',
                    data: [120, 200, 150, 80, 70, 110, 130],
                    symbol: 'none',
                    type: 'line',
                    lineStyle: {
                        normal: {
                            color: '#28C76F',
                        }
                    },
                }]
                let xAxis = {
                    data: ['8/21', '8/22', '8/23', '8/24', '8/25', '8/26', '8/29',]
                }
                let myChart = this.$echarts.init(this.$refs.allChart);
                let options = {
                    ...this.lineOptions.lineOptions, series, xAxis
                }
                myChart.setOption({ ...options })
            },
            yearChart() {
                let series = [{
                    name: '存款年化',
                    data: [220, 232, 201, 234, 290, 30, 220],
                    type: 'line',
                    symbol: 'none',
                    lineStyle: {                // 线条样式 => 必须使用normal属性
                        normal: {
                            color: '#B6509E',
                        }
                    },
                }]
                let myChart = this.$echarts.init(this.$refs.yearChart)
                let options = {
                    ...this.lineOptions.lineOptions, series
                }
                myChart.setOption({ ...options })
            },
            useChart() {
                let series = [{
                    name: '利用率',
                    data: [220, 232, 201, 234, 290, 30, 220],
                    symbol: 'none',
                    type: 'line',               // 类型为折线图
                    lineStyle: {                // 线条样式 => 必须使用normal属性
                        normal: {
                            color: '#2EBAC6',
                        }
                    },
                }]
                let myChart = this.$echarts.init(this.$refs.useChart)
                let options = {
                    ...this.lineOptions.lineOptions, series
                }
                myChart.setOption({ ...options })
            },
            reserveConfig() { // 储备状态&配置
                let myChart = this.$echarts.init(this.$refs.statusConfig);
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}: {c} ({d}%)'
                    },
                    color: ['#707070', '#A2A2A2'],
                    series: [
                        {
                            // name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            labelLine: {
                                show: false
                            },
                            data: [
                                { value: 335, name: '总借入额' },
                                { value: 310, name: '可用流动资金' },
                            ]
                        }
                    ]
                };
                myChart.setOption(option);
            },
            reqChartData() {
                this.initCharts();
                this.yearChart();
                this.useChart();
                this.reserveConfig();
            },
            chartResize() {
                this.$echarts.init(this.$refs.allChart).resize();
                this.$echarts.init(this.$refs.yearChart).resize();
                this.$echarts.init(this.$refs.useChart).resize();
                this.$echarts.init(this.$refs.statusConfig).resize();
            },
        },
        mounted() {
            this.reqChartData();

            this.winHeight = document.documentElement.clientHeight;
            window.onresize = () => {
                this.winHeight = document.documentElement.clientHeight;
                this.chartResize();
            }
        },
    }
</script>
<style lang="scss" scope>
    @import '@/assets/scss/vuexy/_variables.scss';
    .reserveOverview {
        padding-bottom: $pb_8_2rem;
        overflow: hidden;
    }

    .chart_box {
        height: 160px;
    }
    .status_config {
        .statusConfig {
            width: 200px;
            height: 200px;
            margin: 0px auto;
        }
        .config_table {
            box-sizing: border-box;
            /* overflow: hidden; */
            /* display: flex;
            flex-direction: row;
            justify-content: start; */
            .item {
                display: inline-block;
                border: 1px solid #F0650A;
                /* padding: 10px; */
            }
            .c_header {
                color: #fff;
                text-align: center;
                background-color: #F0650A;
                /* padding:  */
            }
        }
    }
    

    .chart_tit {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: $font-size-small;
        .chart_tip {
            .no_fix,
            .fix_tip {
                position: relative;
                display: inline-block;
                margin: 0px 12px;
                &::after {
                    position: absolute;
                    content: '';
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            .fix_tip::after {
                background-color: $primary;
                left: -16px;
            }
            .no_fix::after {
                background-color: $success;
                left: -16px;
            }
        }
    }

    .configShow {
        .configTit {
            color: $primary;
            margin-bottom: 10px;
        }
        .status_config {
            .config_tit {
                display: inline-block;
                padding: 8px 10px;
                border-radius: 30px;
                border: 1px solid #F0F0F0;
                background-color: #FAFAFA;
                span {
                    display: inline-block;
                    margin: 0px 10px;
                }
            }
        }
    }

    .info_card {
        .info_card_con {
            display: flex;
            flex-direction: column;
            h5 {
                margin-bottom: 16px;
                color: $c2EBAC6;
            }
            .line {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                /* line-height: 30px; */
                margin-bottom: 12px;

            }
        }
        .btn-group {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .deposit {
                border-radius: 50px;
                padding: 0.5rem 1.5rem !important;
            }
        }
    }
</style>