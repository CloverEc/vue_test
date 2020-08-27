<template>
    <div class="deposit_detail">
        <div class="d_h" ref="dHeader">
            <div class="item">
                <p class="tit">您已经存入</p>
                <p class="subtit">
                    <span>0.0000</span>DAI</p>
            </div>
            <div class="item">
                <p class="tit">您的钱包余额</p>
                <p class="subtit">
                    <span>0.0000</span>DAI</p>
            </div>
            <div class="item">
                <p class="tit">健康系数</p>
                <p class="subtit">—</p>
            </div>
        </div>
        <vs-divider/>
        <div :style="{height:tableBodyHeight}">
            <vuescroll>
                <div class="vx-row blance_info">
                    <div class="vx-col w-full lg:w-3/5 lg:mt-0 mt-base">
                        <vx-card>
                            <div class="blance">
                                <h1>您的余额为零</h1>
                                <h5>您的DAI余额为0。请将DAI转移到您的钱包中以进行存款</h5>
                                <vs-button class="returnBtn" color="rgb(46,186,198)" type="filled" @click="returnBack">返 回</vs-button>
                                <div class="line">
                                    <vs-divider color="rgb(46,186,198)">or</vs-divider>
                                </div>
                                <h6>
                                    Directly purchase this asset via our partners. Please make sure your
                                    <span>country is eligible for purchase</span>
                                </h6>
                                <vs-button type="line" color="rgb(46,186,198)" @click="returnBack">返 回</vs-button>
                            </div>
                        </vx-card>
                    </div>
                    <div class="vx-col w-full lg:w-2/5 lg:mt-0 mt-base">
                        <vx-card class="blance_detail">
                            <router-link class="bd_header" to="/reserve-overview">
                                <vs-avatar size="40px" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4" /> DAI 储备金总览
                            </router-link>
                            <vs-divider/>
                            <div class="info_card">
                                <div class="item">
                                    <h6>利用率</h6>
                                    <h6>
                                        <span class="strong">46.79</span>%</h6>
                                </div>
                                <div class="item">
                                    <h6>可用流动资金</h6>
                                    <h6>
                                        <span class="strong">17,950,984.96576</span>%</h6>
                                </div>
                                <div class="item">
                                    <h6>Asset price</h6>
                                    <h6>$
                                        <span class="strong">1.01</span>
                                    </h6>
                                </div>
                                <div class="item">
                                    <h6>存款 APY（年收益率）
                                        <br />
                                        <span class="f_s">平均30天</span>
                                    </h6>
                                    <h6>
                                        <span class="strong cF0650A">2.41</span>%
                                        <br />
                                        <span class="f_s">
                                            <strong>8.04</strong> %</span>
                                    </h6>
                                </div>
                                <div class="item">
                                    <h6>可以用作抵押</h6>
                                    <h6>
                                        <span class="strong c79C982">是的</span>
                                    </h6>
                                </div>

                                <div class="item">
                                    <h6>最大 LTV</h6>
                                    <h6>
                                        <span class="strong">46.79</span>%</h6>
                                </div>
                                <div class="item">
                                    <h6>清算门槛</h6>
                                    <h6>
                                        <span class="strong">46.79</span>%</h6>
                                </div>
                                <div class="item">
                                    <h6>清算罚款</h6>
                                    <h6>
                                        <span class="strong">46.79</span>%</h6>
                                </div>
                                <div class="item">
                                    <h6>历史利率</h6>
                                    <h6 class="chartTip">年化</h6>
                                </div>
                                <div class="chart">
                                    <div class="chart_box" ref="depositChart"></div>
                                </div>
                            </div>
                        </vx-card>
                    </div>
                </div>
            </vuescroll>
        </div>

    </div>
</template>
<script>
    import vuescroll from './../../components/vue-scroll/VueScroll.vue';
    import lineOptions from './../ui-elements/card/analyticsData.js';
    export default {
        data() {
            return {
                tableBodyHeight: `300px`,
                lineOptions
            }
        },
        components: {
            vuescroll
        },
        mounted() {
            let clinetHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let homeHeaderHeight = this.$refs.dHeader.offsetHeight;
            let h = clinetHeight - homeHeaderHeight - 60;
            this.tableBodyHeight = `${h}px`;
            this.initCharts();
        },
        methods: {
            initCharts() {
                let series = [{
                    name: '固定利率',
                    data: [20, 232, 201, 234, 290, 30, 220],
                    symbol: 'none',
                    type: 'line',               // 类型为折线图
                    lineStyle: {                // 线条样式 => 必须使用normal属性
                        normal: {
                            color: '#7367F0',
                        }
                    },
                }]
                let xAxis = {
                    data: ['8/21', '8/22', '8/23', '8/24', '8/25', '8/26', '8/29',]
                }
                let myChart = this.$echarts.init(this.$refs.depositChart);
                let options = {
                    ...this.lineOptions.lineOptions, series, xAxis
                }
                myChart.setOption({ ...options })
            },
            returnBack() {
                this.$router.go(-1)
            }
        },
    }
</script>
<style lang="scss" scope>
    @import './../../assets/scss/vuexy/_variables.scss';
    .deposit_detail {
        width: 100%;
        height: 100%;
        .d_h {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            p {
                text-align: center;
            }
            .item .subtit span {
                font-weight: $font-weight-bold;
                margin-right: $mr_5_;
            }
        }
        .blance_info {
            padding-bottom: $pb_8rem;
            .blance {
                padding: 10rem 0rem;
                text-align: center;
                h1 {
                    font-weight: $font-weight-bold;
                    font-size: $h4-font-size;
                    color: $c2EBAC6;
                    margin: 0rem 0rem $mr_5_;
                }
                h5 {
                    margin-bottom: $mr_2;
                }
                .line {
                    width: 100px;
                    margin: $mr_2 auto;
                }
                .returnBtn {
                    /* background-color: $c2EBAC6 !important; */
                    border-radius: 10rem;
                    padding: 0.55rem 3rem !important;
                }
                h6 {
                    width: 30rem;
                    margin: 0rem auto;
                }
            }
        }
        .blance_detail {
            .vx-card__body {
                padding: 1.5rem 0rem;
            }

            .bd_header {
                .con-vs-avatar {
                    vertical-align: middle;
                }
                text-align: center;
                cursor: pointer;
                display: block;
                color: $grey;
            }
            .info_card {
                padding: $padding_1;
                display: flex;
                flex-direction: column;
                .item {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-bottom: $rem_1;
                    .strong {
                        font-weight: $font-weight-bold;
                        margin-right: $mr_5_;
                    }
                    .c79C982 {
                        color: $c79C982;
                    }
                    .cF0650A {
                        color: $cF0650A;
                    }
                    .f_s {
                        font-size: $font-size-small
                    }
                    
                }
            }
        }

    }
    .chart_box {
        height: 220px;
    }
    .vx-card {
        height: 100%;
    }
</style>