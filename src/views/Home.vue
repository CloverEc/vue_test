<template>
    <div class="home_page">
        <div class="home_header_box" ref="listHeader">
            <div class="home_header" :class="$store.state.isMobile ? 'mobileHeaderStyle' : ''">
                <div class="logo">
                    <vs-button color="primary" type="filled" v-on:click="connect">Connect</vs-button>
                </div>
                <div class="market_desc">
                    <h3>{{$t('current_market_size')}}</h3>
                    <h1>$ 1,630,633,040.33</h1>
                </div>
            </div>
            <type-switch text="USD|Native" v-model="type_switch_value"></type-switch>
            <sort-table-header :sortArr="$t('home_list_sort_header')"></sort-table-header>
        </div>
        <vx-table 
            ref="vxTable"
            :users="users"
            @listItemClick="toReserveOver"></vx-table>
    <vs-popup class="holamundo"  title="connect wallet" :active.sync="popupActivo">
       <vs-button @click="mmlogin" color="primary" type="filled">
          <img src="/mm-logo.svg" width="120" >
       </vs-button>
    </vs-popup>
    </div>
</template>

<script>
    import VxTable from '@/components/vx-table/VxTable.vue';
    import TypeSwitch from '@/components/type-switch/TypeSwitch.vue';
    import SortTableHeader from './../components/vx-table/VxTbaleHeader.vue';
    import listData from './../assets/data/listData.js'
    import Web3 from 'web3'
    // メタマスクの設定を読み込み
    async function startup() {
        console.log('starapp')　//ファンクションが動いてるかの確認メッセージ
        //
        if (window.ethereum) {
            web3 = new Web3(ethereum);
            try {
                // Request account access if needed
                await ethereum.enable();
                // Acccounts now exposed
                } catch (error) {
                    // User denied account access...
                    alert('User denied account access...');
                }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            web3 = new Web3(web3.currentProvider);
        }
        // Non-dapp browsers...
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    }
    //const EvmChains = window.EvmChains;
    //const Fortmatic = window.Fortmatic;
    export default {
        data() {
            return {
                popupActivo:false,
                type_switch_value: '',
                sortArr: listData.home_list_tit,
                users: listData.users,
                testData: this.$t('login')
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
            connect: function (event) {
                    this.popupActivo = true;
            },
            mmlogin: function (event) {
                startup();
            },
            onComplete(data){
                console.log('data:', data);
            }
        },
    }
</script>
<style lang="scss" scope>
    @import '@/assets/scss/common.scss';
</style>
