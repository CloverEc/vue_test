<template>
        <div class="home_page">
            <div class="home_header_box" ref="listHeader">
                <type-switch text="所有|稳定货币" v-model="type_switch_value"></type-switch>
                <sort-table-header :sortArr="sortArr"></sort-table-header>
            </div>
            <vx-table 
                :users="users"
                :listType="listType"
                @listItemClick="toDetail">
                <div slot="list-tit">
                    <div class="deposit_tip">
                        <div>如要去进行借贷，请先将这些货币中的任何一种转到您的钱包中。</div>
                        <div>Can’t find your asset? Change market</div>
                    </div>
                </div>
            </vx-table>
        </div>
    </template>
    <script>
        import VxTable from '@/components/vx-table/VxTable.vue';
        import TypeSwitch from '@/components/type-switch/TypeSwitch.vue';
        import SortTableHeader from './../components/vx-table/VxTbaleHeader.vue';
        import listData from './../assets/data/listData.js'
        export default {
            data() {
                return {
                    type_switch_value: '',
                    sortArr: listData.borrow_list_tit,
                    users: listData.deposit_users,
                    listType: `borrow`
                }
            },
            components: {
                VxTable,
                TypeSwitch,
                SortTableHeader,
            },
            methods: {
                toDetail() {
                    this.$router.push({ path: '/deposit-detail' })
                }
            },
        }
    </script>