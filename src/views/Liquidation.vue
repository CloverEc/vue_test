<template>
    <div class="liquidation_page" :style="{height: winH+'px'}">
        <div ref="searchHeader">
            <div class="seacherHeader centerx icons-example" :class="$store.state.isMobile ? 'mobileHeaderStyle' : ''">
                <vs-input icon-after="true" class="searchIpt" icon="search" :label="$t('search_for_address')" placeholder="0x00000" v-model="searchKey" />
                <vs-select :placeholder="$t('liquidation_asset')" multiple class="selectExample" :label="$t('liquidation_asset')" v-model="selectVal">
                    <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in assetsList" />
                </vs-select>
                <div class="sliderCom">
                    <label class="vs-input--label">{{$t('liquidation_amount')}}</label>
                    <vs-slider v-model="sliderVal" />
                    <span class="showSliderVal">$ {{sliderVal}}</span>
                </div>
            </div>
            <sort-table-header :sortArr="$t('liquidation_sortArr')"></sort-table-header>
        </div>
        <div class="liquidation_con" :style="{height:tableBodyHeight}">
            <vuescroll>
                <div class="liq_list">
                    <vs-collapse v-for="(item, index) in mortgage_project" :key="index">
                        <vs-collapse-item>
                            <div slot="header" class="liq_list_header">
                                <div class="header_i">{{item.address}}</div>
                                <div class="header_i liq_factor">{{item.pro_index}}</div>
                                <div class="header_i liq_pay">
                                    <p class="pay_h">
                                        <img class="pay_img" :src="item.pay_icon" />
                                        <span>{{item.pay_num}}</span>{{item.pay_type}}
                                    </p>
                                    <p class="pay_sub">{{item.pay_money}}</p>
                                </div>
                                <div class="header_i liq_pay">
                                    <p class="pay_h">
                                        <img class="pay_img" :src="item.mortgage_icon" />
                                        <span>{{item.mortgage_num}}</span>{{item.mortgage_type}}
                                    </p>
                                    <p class="pay_sub">{{item.mortgage_money}}</p>
                                </div>
                                <div class="header_i">
                                    <div class="cons_progress">
                                        <vs-progress :height="12" :percent="item.percent">success</vs-progress>
                                    </div>
                                </div>
                            </div>
                            <vs-divider color="rgb(184,194,204)" />
                            <div class="con liq_list_con">
                                <h4 class="maintit">抵押</h4>
                                <div class="con_header">
                                    <div class="con_header_item" :class="itemCurrent == item.id ? 'itemCurrent' : ''" v-for="(item, index) in item.pro_list"
                                        :key="index" @click="liqItemDetail(item)">
                                        <div class="account_total">
                                            <p class="l_con">
                                                <img :src="item.pro_icon" class="acount_img" />
                                            </p>
                                            <p class="r_con">
                                                <span>{{item.pro_num}}</span>{{item.pro_type}}
                                            </p>
                                        </div>
                                        <div class="bonus">
                                            <div>清算奖金
                                                <feather-icon icon="AlertCircleIcon" @click="popupActive=true" />
                                            </div>
                                            <span>
                                                <b>{{item.percent}}</b>%</span>
                                            <vs-popup class="holamundo" title="清算奖金" :active.sync="popupActive">
                                                <p>这代表抵押不足的借贷和需要对每种抵押，进行清算的门槛。例如，如果抵押的清算门槛为80％，则意味着当债务价值达到抵押价值的80％时，将会被清算。</p>
                                            </vs-popup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <vs-divider color="rgb(184,194,204)" />
                            <div class="liq_list_body">
                                <div class="list_body_item">
                                    <div class="list_header">
                                        <p class="h_icon">
                                            <img :src="mortage_pro_detail.money_icon" />金额</p>
                                        <p class="unit">{{mortage_pro_detail.max_pay_type}}</p>
                                    </div>
                                    <div class="list_max_pay flex_spancebetween p_10">
                                        <span>最大可被支付的债务</span>
                                        <span>
                                            <b>{{mortage_pro_detail.max_pay}}</b> BAT</span>
                                    </div>
                                    <div class="no_money p_10">
                                        <!-- <span class="icon-alert-triangle"></span> -->
                                        <feather-icon icon="AlertTriangleIcon" class="no_money_voice" />
                                        <!-- <img :src="mortage_pro_detail.receive_icon" class="img_30" /> -->
                                        您的余额不足</div>
                                </div>
                                <div class="list_body_item p_10 receive_bonus">
                                    <div class="flex_spancebetween bonus_all">
                                        <p>您将收到</p>
                                        <div>
                                            <img class="img_30" :src="mortage_pro_detail.receive_icon" />
                                            <b>{{mortage_pro_detail.receive_mon}}</b> {{mortage_pro_detail.max_pay_type}}</div>
                                    </div>
                                    <div class="flex_spancebetween bonus_s">
                                        <p>(5.00%)清算奖金</p>
                                        <p>
                                            <b>{{mortage_pro_detail.receive_mon}}</b> USDC</p>
                                    </div>
                                </div>
                                <button class="myDisabled" disabled>清算</button>
                            </div>
                        </vs-collapse-item>
                    </vs-collapse>
                </div>
            </vuescroll>
        </div>
    </div>
</template>
<script>
    import VSelect from '@/components/select/Select.vue';
    import listData from '@/assets/data/listData.js';
    import SortTableHeader from '@/components/vx-table/VxTbaleHeader.vue';
    import vuescroll from '@/components/vue-scroll/VueScroll.vue';
    export default {
        data() {
            return {
                searchKey: '',
                selectVal: [],
                assetsList: [
                    { text: 'IT', value: 0 },
                    { text: 'Blade Runner', value: 2 },
                    { text: 'Thor Ragnarok', value: 3 },
                ],
                sliderVal: 10,
                sortArr: listData.liquidation_sortArr,
                liq_list: listData.liq_list,
                winH: ``,
                tableBodyHeight: ``,
                popupActive: false,
                mortgage_project: listData.mortgage_project,
                itemCurrent: 1,
                mortage_pro_detail: {
                    money_icon: require('@/assets/images/product/btc_icon.svg'),
                    max_pay: 0,
                    max_pay_type: 'ZRX',
                    receive_icon: require('@/assets/images/product/btc_icon.svg'),
                    receive_mon: 0
                }
            }
        },
        components: {
            VSelect,
            SortTableHeader,
            vuescroll
        },
        mounted() {
            let searchHeader = this.$refs.searchHeader.offsetHeight;
            console.log('searchHeader',searchHeader);
            this.winH = this.$storage.getWinH();
            this.tableBodyHeight = this.$storage.scrollHeight(this.winH, searchHeader);

            window.onresize = () => {
                this.winH = this.$storage.getWinH();
                this.tableBodyHeight = this.$storage.scrollHeight(this.winH, searchHeader);
            }
        },
        methods: {
            liqItemDetail(item) {
                this.mortage_pro_detail = item.details;
                this.itemCurrent = item.id;
            }
        },
    }
</script>
<style lang="scss" scope>
    @import '@/assets/scss/vuexy/_variables.scss';
    @import '@/assets/scss/common.scss';
    $m10: 10px;
    $m4: 4px;
    .flex_spancebetween {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .p_10 {
        padding: 10px;
    }

    .img_30 {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        display: inline-block;
        margin-right: $m10;
    }

    .liquidation_page {
        .liquidation_con {
            padding-bottom: $pb_8_2rem;            
        }
        .seacherHeader {
            display: flex;
            flex-direction: row;
            padding: 0rem $mr_5_;
            .vs-input--label,
            .vs-select--label {
                font-size: $h6-font-size;
            }
            .searchIpt,
            .con-select,
            .sliderCom {
                width: 250px;
                margin-right: 30px;
            }
            .searchIpt {
                .vs-con-input {
                    /* color: #f00; */
                    .vs-input--icon {
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
            .con-select {}
            .sliderCom {
                position: relative;
                .con-vs-slider {
                    min-width: 250px;
                    position: absolute;
                    top: 38%;
                    transform: translateY(-50%);
                }
                .showSliderVal {
                    position: absolute;
                    right: -36px;
                    top: 62%;
                    transform: translateY(-50%);
                }
            }
        }
        .sortBtnGroup {
            padding: 0px 10px;
        }
        .liq_list {
            .vs-collapse-item {
                margin-bottom: 1rem;
                background-color: #fff;
                border-radius: 10px;
                &:hover {
                    box-shadow: $focus_shadow_primary;
                }
                .con {
                    padding: 1.5rem 1rem 1.5rem;
                }
                .vs-divider {
                    margin: 0px;
                }
            }
            .liq_list_header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .header_i {
                    flex: 1;
                    text-align: center;
                    overflow: hidden;
                    .cons_progress {
                        width: 80%;
                        margin: 0px auto;
                    }
                }
                .liq_pay {
                    .pay_h {
                        font-size: $h4-font-size;
                        .pay_img {
                            width: 30px;
                            vertical-align: middle;
                        }
                        span {
                            font-weight: 700;
                            display: inline-block;
                            margin: 0px 10px;
                        }
                    }
                    .pay_sub {
                        font-size: $h6-font-size;
                    }
                }
                .liq_factor {
                    text-shadow: rgb(222, 89, 89) 0px 0px 5px;
                    color: rgb(222, 89, 89);
                    font-weight: $font-weight-bold;
                    font-size: $h5-font-size;
                }
                .header_i:first-child {
                    text-align: left;
                }
            }
            .liq_list_con {
                .maintit {
                    font-weight: $font-weight-bold;
                    color: $primary;
                }
                .con_header {
                    padding: 20px 0px 0px;
                    .con_header_item {
                        min-width: 250px;
                        display: inline-block;
                        margin: 0px 20px 20px 0px;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px 0px;
                        padding: $m10;
                        border-radius: $m10;
                        .account_total {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            .acount_img {
                                width: 30px;
                                height: 30px;
                                margin-right: $m10;
                                vertical-align: middle;
                            }
                            .r_con {
                                font-size: $h5-font-size;
                                span {
                                    font-weight: $font-weight-bold;
                                    display: inline-block;
                                    margin-right: $m4;
                                }
                            }
                        }
                        .bonus {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            font-size: $h6-font-size;
                            margin-top: $m10;
                            b {
                                margin-right: $m4;
                            }
                            .feather-icon {
                                color: $danger;
                                vertical-align: middle;
                            }
                        }
                        &:hover {
                            box-shadow: $focus_shadow_primary;
                        }
                    }
                    .itemCurrent {
                        box-shadow: $focus_shadow_primary;
                    }
                }
            }

            .liq_list_body {
                padding: 1.5rem 1rem 1.5rem;
                display: flex;
                align-items: flex-start;
                .list_body_item {
                    display: inline-block;
                    width: 310px;
                    margin: 0px 20px 20px 0px;
                    .list_header {
                        background-color: #E3E3E3;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        /* align-items: center; */
                        padding: $m10;
                        font-size: $h5-font-size;
                        border-radius: 10px;
                        .h_icon {
                            img {
                                width: 30px;
                                vertical-align: middle;
                                margin-right: $m10;
                            }
                        }
                        .unit {
                            font-weight: $font-weight-bold;
                        }
                    }
                    .list_max_pay {
                        font-size: $h6-font-size;
                        color: $grey;
                    }
                    .no_money {
                        border: 1px solid $grey;
                        border-radius: $m10;
                        .no_money_voice {
                            vertical-align: middle;
                            color: $danger;
                        }
                    }
                }
                .receive_bonus {
                    border: 1px solid $grey;
                    border-radius: $m10;
                    .bonus_all {
                        font-size: $h5-font-size;
                        img {
                            width: 15px;
                            height: 15px;
                        }
                    }
                    .bonus_s {
                        font-size: $h6-font-size;
                        color: $grey;
                    }
                }
                .myDisabled {
                    margin-left: 30px;
                }
            }
            .con-content--item {
                padding: 0rem !important;
            }
        }
    }
</style>
