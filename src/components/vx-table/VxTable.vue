<template>
    <div id="data-list-thumb-view" class="data-list-container">
        <vs-table :data="users" scroll  @sort="handleSort" :sst="true">
            <template slot="thead">
                <vs-th sort-key="name">资产</vs-th>
                <vs-th sort-key="scale">市场规模</vs-th>
                <vs-th sort-key="borrow">总借入额</vs-th>
                <vs-th sort-key="deposit">存款年化</vs-th>
                <vs-th sort-key="fixed_borrow">
                    <div class="titdesc"><p class="rate">浮动利率</p><p>借贷年化</p></div>
                </vs-th>
                <vs-th sort-key="fixed_rate">
                    <div class="titdesc"><p class="rate">固定利率</p><p>借贷年化</p></div>
                </vs-th>
            </template>
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
                        <vs-td class="tit td-fixed-borrow">
                            <span class="bor">{{ item.fixed_borrow }}</span>%</vs-td>
                    </vs-tr>
                </tbody>
            </template>

        </vs-table>
    </div>

</template>

<script>
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
                    }
                ]
            }
        },
        methods: {
            handleSort(key, active) {
                // let _print = `the user ordered: ${key} ${active}\n`
                // this.$refs.pre.appendChild(document.createTextNode(_print))
                console.log('sort',key,active)
            }
        },
    }
</script>

<style lang="scss">
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
        .table-body {
            min-height: 150px;
            max-height: 200px;
        }


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

    }
</style>