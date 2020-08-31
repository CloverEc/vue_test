<template>
    <div class="home_page">
        <div class="home_header_box" ref="listHeader">
            <div class="home_header">
                <div class="logo">
                    <img src="@/assets/images/logo/logo.png" />
                </div>
                <div class="market_desc">
                    <h3>当前市场规模</h3>
                    <h1>$ 1,630,633,040.33</h1>
                </div>
            </div>
            <type-switch text="USD|Native" v-model="type_switch_value"></type-switch>
            <sort-table-header :sortArr="sortArr"></sort-table-header>
        </div>
        <vx-table 
            ref="vxTable"
            :users="users"
            @listItemClick="toReserveOver"></vx-table>
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
                sortArr: listData.home_list_tit,
                users: listData.users,
            }
        },
        components: {
            VxTable,
            TypeSwitch,
            SortTableHeader,
        },
        methods: {
            toReserveOver(item) {
                // this.$router.push({path:'/reserve-overview',query: {id:'1'}})
                this.$router.push({ path: '/reserve-overview' })
            },
        },
    }
</script>