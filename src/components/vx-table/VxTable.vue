<template>
    <div class="vx_table">
        <div class="tableBody" :style="{'height':tableBodyHeight}">
            <vuescroll>
                <slot name="list-tit"></slot>
                <div class="table_line" :key="i" v-for="(item, i) in users" @click="toReserveOver(item)">
                    <div class="t_td td-fund">
                        <img src="./../../assets/images/logo/logo.png" class="product-img" />
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
                    <div class="t_td single" v-if="listType === 'deposit' || listType === 'borrow'">
                        <vs-button color="primary" type="filled">详 情</vs-button>
                    </div>
                    <div class="t_td td-deposit td-lending-rate" v-if="item.lending_rate">
                        <p class="tit">
                            <span>{{ item.lending_rate }}</span>%</p>
                        <p class="average">Past 30D Avg.
                            <span>{{ item.lending_rate_per }}</span>%</p>
                    </div>
                    <div class="t_td td-fixed-borrow" v-if="item.fixed_borrow">
                        <p class="tit single">
                            <span>{{ item.fixed_borrow }}</span>%
                        </p>
                    </div>
                </div>
            </vuescroll>
        </div>
    </div>
</template>
<script>
    import vuescroll from './../../components/vue-scroll/VueScroll.vue';
    export default {
        props: {
           
            users: {
                type: Array,
                default: []
            },
            otherDivHeight: { // 内容区域除了list之外div的高度
                type: Number,
                default: 0
            },
            listType: { // deposit => 存款
                type: String,
                default: ``
            }
        },
        data() {
            return {
                windowHeight: document.documentElement.clientHeight,
                tableBodyHeight: ``
            }
        },
        components: {
            vuescroll
        },
        mounted() {
            let otherHeight = this.$parent.$refs.listHeader.offsetHeight;            
            this.tableBodyHeight = this.scrollHeight(this.windowHeight,otherHeight);

            window.onresize = () => {
                this.windowHeight = document.documentElement.clientHeight;
                this.tableBodyHeight = this.scrollHeight(this.windowHeight,otherHeight);
            }
        },
        methods: {
            toReserveOver(item) {
                this.$emit('listItemClick',item);
            },
            scrollHeight(winHeight,otherHeight) {
                let conHeight = winHeight - otherHeight;
                return `${conHeight}px`;
            }
        },
    }
</script>
<style lang="scss" scope>
    @import '@/assets/scss/home.scss';
</style>