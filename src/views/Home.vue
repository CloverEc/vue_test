<template>
    <div class="home_page">
        <div class="home_header">
            <div class="logo"><img src="@/assets/images/logo/logo.png" /></div>
            <div class="market_desc">
                <h3>当前市场规模</h3>
                <h1>$ 1,630,633,040.33</h1>
            </div>
        </div>
        <type-switch text="USD|Native" v-model="type_switch_value"></type-switch>
       <vx-table></vx-table>
    </div>
</template>
<script>
    import VxTable from '@/components/vx-table/VxTable.vue';
    import TypeSwitch from '@/components/type-switch/TypeSwitch.vue';
    export default {
        data() {
            return {
                type_switch_value:''
            }
        },
        components: {
            VxTable,
            TypeSwitch
        }
    }
</script>
<style lang="scss" scope>
    @import '@/assets/scss/vuexy/_variables.scss';
    .home_header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 30px;
        .market_desc {
            text-align: right;
            h1 {
                font-weight: $font-weight-bold;
                font-size: $font-size-48;
            }
        }
        .logo img {
            width: 94px;
            height: 70px;
        }
    }
</style>