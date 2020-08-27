<template>
    <div id="data-list-thumb-view" class="data-list-container">
        <!-- <vuescroll :ops="scrollOption"> -->
        <!-- <vs-table :data="users" @sort="handleSort"> -->
        <vs-table :data="users">
            <template slot="thead">
                <vs-th>资产</vs-th>
                <vs-th>您的钱包余额</vs-th>
                <vs-th>您已经存入</vs-th>
                <vs-th>年化</vs-th>
                <vs-th></vs-th>
            </template>
            <!-- <template slot-scope="{data}">
                    <tbody class="table-list">
                        <vs-tr :data="item" :key="i" v-for="(item, i) in users">
                            <vs-td class="td-fund" :data="item.name">
                                <img src="./../../assets/images/logo/logo.png" class="product-img" />
                                <span>{{item.name}}</span>
                            </vs-td>
                            <vs-td class="td-scale" :data="item.scale">{{ item.scale }}</vs-td>
                            <vs-td class="td-scale" :data="item.borrow">{{ item.borrow }}</vs-td>
                            <vs-td class="td-deposit" :data="item.deposit">
                                <p class="tit">
                                    <span>{{ item.deposit }}</span>%</p>
                                <p class="average">Past 30D Avg.
                                    <span>{{ item.deposit_per }}</span>%</p>
                            </vs-td>
                            <vs-td class="td-deposit td-lending-rate">
                                <p class="tit">
                                    <span>{{ item.lending_rate }}</span>%</p>
                                <p class="average">Past 30D Avg.
                                    <span>{{ item.lending_rate_per }}</span>%</p>
                            </vs-td>
                        </vs-tr>
                    </tbody>
                </template> -->
        </vs-table>
        <div style="height: 300px">
            <vuescroll>
                <vs-table :data="users">
                    <template slot-scope="{data}">
                        <tbody class="table-list">
                            <vs-tr :data="item" :key="i" v-for="(item, i) in users">
                                <vs-td class="td-fund" :data="item.name">
                                    <img src="./../../assets/images/logo/logo.png" class="product-img" />
                                    <span>{{item.name}}</span>
                                </vs-td>
                                <vs-td class="td-scale" :data="item.scale">{{ item.scale }}</vs-td>
                                <vs-td class="td-scale" :data="item.borrow">{{ item.borrow }}</vs-td>
                                <vs-td class="td-deposit" :data="item.deposit">
                                    <p class="tit">
                                        <span>{{ item.deposit }}</span>%</p>
                                    <p class="average">Past 30D Avg.
                                        <span>{{ item.deposit_per }}</span>%</p>
                                </vs-td>
                                <vs-td class="td-deposit td-lending-rate">
                                    <p class="tit">
                                        <span>{{ item.lending_rate }}</span>%</p>
                                    <p class="average">Past 30D Avg.
                                        <span>{{ item.lending_rate_per }}</span>%</p>
                                </vs-td>
                            </vs-tr>
                        </tbody>
                    </template>
                </vs-table>
            </vuescroll>
        </div>

        <!-- </vuescroll> -->
    </div>
</template>
<script>
    import vuescroll from './../vue-scroll/VueScroll.vue'
    export default {
        data() {
            return {
                users: [
                    {
                        "id": 1,
                        "img": './../../assets/images/logo/logo.png',
                        "name": "DAI",
                        "scale": '35.23M',
                        "borrow": '21.08M',
                        "deposit": '3.53',
                        "deposit_per": '11.09',
                        "lending_rate": '5.65',
                        "lending_rate_per": '6.02',
                        'fixed_borrow': '7.49',
                    },
                    {
                        "id": 2,
                        "img": './../../assets/images/logo/logo.png',
                        "name": "DAI",
                        "scale": '35.23M',
                        "borrow": '21.08M',
                        "deposit": '3.53',
                        "deposit_per": '11.09',
                        "lending_rate": '5.65',
                        "lending_rate_per": '6.02',
                        'fixed_borrow': '7.49',
                    },
                    {
                        "id": 3,
                        "img": './../../assets/images/logo/logo.png',
                        "name": "DAI",
                        "scale": '35.23M',
                        "borrow": '21.08M',
                        "deposit": '3.53',
                        "deposit_per": '11.09',
                        "lending_rate": '5.65',
                        "lending_rate_per": '6.02',
                        'fixed_borrow': '7.49',
                    },
                    {
                        "id": 4,
                        "img": './../../assets/images/logo/logo.png',
                        "name": "DAI",
                        "scale": '35.23M',
                        "borrow": '21.08M',
                        "deposit": '3.53',
                        "deposit_per": '11.09',
                        "lending_rate": '5.65',
                        "lending_rate_per": '6.02',
                        'fixed_borrow': '7.49',
                    },
                    {
                        "id": 5,
                        "img": './../../assets/images/logo/logo.png',
                        "name": "DAI",
                        "scale": '35.23M',
                        "borrow": '21.08M',
                        "deposit": '3.53',
                        "deposit_per": '11.09',
                        "lending_rate": '5.65',
                        "lending_rate_per": '6.02',
                        'fixed_borrow': '7.49',
                    }, {
                        "id": 6,
                        "img": './../../assets/images/logo/logo.png',
                        "name": "DAI",
                        "scale": '35.23M',
                        "borrow": '21.08M',
                        "deposit": '3.53',
                        "deposit_per": '11.09',
                        "lending_rate": '5.65',
                        "lending_rate_per": '6.02',
                        'fixed_borrow': '7.49',
                    },
                    {
                        "id": 7,
                        "img": './../../assets/images/logo/logo.png',
                        "name": "DAI",
                        "scale": '35.23M',
                        "borrow": '21.08M',
                        "deposit": '3.53',
                        "deposit_per": '11.09',
                        "lending_rate": '5.65',
                        "lending_rate_per": '6.02',
                        'fixed_borrow': '7.49',
                    },
                    {
                        "id": 8,
                        "img": './../../assets/images/logo/logo.png',
                        "name": "DAI",
                        "scale": '35.23M',
                        "borrow": '21.08M',
                        "deposit": '3.53',
                        "deposit_per": '11.09',
                        "lending_rate": '5.65',
                        "lending_rate_per": '6.02',
                        'fixed_borrow': '7.49',
                    }, {
                        "id": 9,
                        "img": './../../assets/images/logo/logo.png',
                        "name": "DAI",
                        "scale": '35.23M',
                        "borrow": '21.08M',
                        "deposit": '3.53',
                        "deposit_per": '11.09',
                        "lending_rate": '5.65',
                        "lending_rate_per": '6.02',
                        'fixed_borrow': '7.49',
                    }, {
                        "id": 10,
                        "img": './../../assets/images/logo/logo.png',
                        "name": "DAI",
                        "scale": '35.23M',
                        "borrow": '21.08M',
                        "deposit": '3.53',
                        "deposit_per": '11.09',
                        "lending_rate": '5.65',
                        "lending_rate_per": '6.02',
                        'fixed_borrow': '7.49',
                    }
                ],
                scrollOption: {
                    bar: {
                        showDelay: 500,
                        onlyShowBarOnScroll: true,
                        keepShow: false,
                        background: '#02273b',
                        opacity: 1,
                        hoverStyle: false,
                        specifyBorderRadius: false,
                        minSize: false,
                        size: '6px',
                    },
                }
            }
        },
        components: {
            vuescroll
        },
        methods: {
            handleSort(key, active) {
                // let _print = `the user ordered: ${key} ${active}\n`
                // this.$refs.pre.appendChild(document.createTextNode(_print))
                console.log('sort', key, active)
            }
        },
    }
</script>

<style lang="scss">
    /* #data-list-thumb-view .vs-con-table .vs-table */
    #data-list-thumb-view {
        .vs-con-table {
            .product-name {
                max-width: 23rem;
            }

            .vs-table--header {
                display: flex;
                flex-wrap: wrap-reverse;
                margin-left: 1.5rem;
                margin-right: 1.5rem;
                >span {
                    display: flex;
                    flex-grow: 1;
                }

                .vs-table--search {
                    padding-top: 0;

                    .vs-table--search-input {
                        padding: 0.9rem 2.5rem;
                        font-size: 1rem;

                        &+i {
                            left: 1rem;
                        }

                        &:focus+i {
                            left: 1rem;
                        }
                    }
                }
            }

            .vs-table {
                border-collapse: separate;
                border-spacing: 0 1.3rem;
                padding: 0 1rem;
                tr {
                    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .05);
                    td {
                        padding: 10px;
                        &:first-child {
                            border-top-left-radius: .5rem;
                            border-bottom-left-radius: .5rem;
                        }
                        &:last-child {
                            border-top-right-radius: .5rem;
                            border-bottom-right-radius: .5rem;
                        }
                        &.img-container {
                            // width: 1rem;
                            // background: #fff;
                            span {
                                display: flex;
                                justify-content: flex-start;
                            }

                            .product-img {
                                height: 110px;
                            }
                        }
                    }
                    td.td-check {
                        padding: 20px !important;
                    }
                }
            }

            .vs-table--thead {
                th {
                    padding-top: 0;
                    padding-bottom: 0;
                    .vs-table-text {
                        text-transform: uppercase;
                        font-weight: 600;

                    }
                }
                th.td-check {
                    padding: 0 15px !important;
                }
                tr {
                    background: none;
                    box-shadow: none;
                }
            }

            .vs-table--pagination {
                justify-content: center;
            }
        }
    }
</style>
<style lang="scss" scope>
    @import '@/assets/scss/vuexy/_variables.scss';
    .vs-table--thead {
        th .vs-table-text {
            font-size: $font-size-base;
            .titdesc .rate {
                font-size: $font-size-small;
            }
        }
    }

    .data-list-container {
        .td-fund {
            .product-img {
                width: 45px;
                height: 45px;
                vertical-align: middle;
                margin-right: 10px;
            }
        }
        .td-scale {
            font-weight: 600;
            font-size: $font-size-large;
        }
        .table-list {
            .tit {
                font-size: $font-size-large;
                font-weight: 600;
                span {
                    margin-right: 3px;
                }
            }
        }
        .td-deposit {
            .tit span {
                color: #F0650A;
            }
            .average {
                font-size: $font-size-small;
                span {
                    color: #F0650A;
                }
            }
        }
        .td-lending-rate {
            .tit span {
                color: #2EBAC6;
            }
        }
        .td-fixed-borrow .bor {
            color: #B6509E !important;
        }


        .vs-table--tbody-table .tr-values:not(.activeEdit):not(.tr-expandedx):not(.hoverFlat):hover {
            box-shadow: $focus_shadow_primary !important;
        }

    }
</style>