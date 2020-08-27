<template>
        <div class="home_page">
            <div class="home_header_box" ref="homeHeader">
                <type-switch text="所有|稳定货币" v-model="type_switch_value"></type-switch>
                <sort-table-header :sortArr="sortArr"></sort-table-header>
            </div>
            <!-- <vx-table></vx-table> -->
            <div class="vx_table">
                <div class="tableBody" :style="{'height':tableBodyHeight}">
                    <vuescroll>
                        <div class="deposit_tip">
                            <div>如要去进行借贷，请先将这些货币中的任何一种转到您的钱包中。</div>
                            <div>Can’t find your asset? Change market</div>
                        </div>
                        <div class="table_line" :key="i" v-for="(item, i) in users">
                            <div class="t_td td-fund">
                                <img src="./../assets/images/logo/logo.png" class="product-img" />
                                <span>{{item.name}}</span>
                            </div>
                            <div class="t_td td-scale single">{{ item.scale }}</div>
                            <div class="t_td td-scale single">{{ item.borrow }}</div>
                            <div class="t_td td-deposit">
                                <p class="tit">
                                    <span>{{ item.deposit }}</span>%</p>
                                <p class="average">Past 30D Avg.
                                    <span>{{ item.deposit_per }}</span>%</p>
                            </div>
                            <!-- <router-link>
                                
                            </router-link> -->
                            <div class="t_td single" @click="toDetail(item)">
                                <vs-button color="primary" type="filled">详 情</vs-button>
                            </div>
                            <!-- <div class="t_td td-deposit td-lending-rate">
                                <p class="tit">
                                    <span>{{ item.lending_rate }}</span>%</p>
                                <p class="average">Past 30D Avg.
                                    <span>{{ item.lending_rate_per }}</span>%</p>
                            </div>
                            <div class="t_td td-fixed-borrow">
                                <p class="tit single">
                                    <span>{{ item.fixed_borrow }}</span>%
                                </p>
                            </div> -->
                        </div>
                    </vuescroll>
                </div>
            </div>
        </div>
    </template>
    <script>
        import VxTable from '@/components/vx-table/VxTable.vue';
        import TypeSwitch from '@/components/type-switch/TypeSwitch.vue';
        import SortTableHeader from './../components/vx-table/VxTbaleHeader.vue';
        import vuescroll from './../components/vue-scroll/VueScroll.vue';
        import listData from './../assets/data/listData.js'
        export default {
            data() {
                return {
                    type_switch_value: '',
                    sortArr: listData.borrow_list_tit,
                    users: listData.users,
                    tableBodyHeight: `300px`,
                }
            },
            components: {
                VxTable,
                TypeSwitch,
                SortTableHeader,
                vuescroll
            },
            mounted() {
               
                let clinetHeight = document.documentElement.clientHeight || document.body.clientHeight;
                let homeHeaderHeight = this.$refs.homeHeader.offsetHeight;
                let h = clinetHeight - homeHeaderHeight ;
                this.tableBodyHeight = `${h}px`;
            },
            methods: {
                toDetail() {
                    this.$router.push({ path: '/deposit-detail' })
                }
            },
        }
    </script>
    <style lang="scss" scope>
        @import '@/assets/scss/home.scss';
       
    </style>