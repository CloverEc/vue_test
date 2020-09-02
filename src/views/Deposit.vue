<template>
    <div class="home_page">
        <div class="home_header_box" ref="listHeader" :class="$store.state.isMobile ? 'mobileHeaderStyle' : ''">
            <type-switch :text="$t('deposit_switch')" v-model="type_switch_value"></type-switch>
            <sort-table-header :sortArr="$t('deposit_list_tit')"></sort-table-header>
        </div>
        <vx-table
            :users="users"
            :listType="listType"
            @listItemClick="toDetail"
            >
            <div slot="list-tit">
                <div class="deposit_tip">
                    <div>{{$t('deposit_explain')}}</div>
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
                sortArr: listData.deposit_list_tit,
                users: listData.deposit_users,
                listType: `deposit`
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
<style lang="scss" scope>
    @import '@/assets/scss/common.scss';
</style>
