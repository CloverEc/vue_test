<template lang="html">
    <div class="faq_page">
        <div class="col_box" :style="{height: tableBodyHeight}">
            <vuescroll>
                <template v-for="(item, index) in faq_list">
                    <h4 class="maintit">{{item.maintit}}</h4>
                    <vs-collapse>
                        <vs-collapse-item v-for="(il, ind) in item.list" :key="ind">
                            <div slot="header">{{il.tit}}</div>
                            <vs-divider color="primary" />
                            <div class="con">{{il.desc}}</div>
                        </vs-collapse-item>
                    </vs-collapse>
                </template>
            </vuescroll>
        </div>
    </div>
</template>
<script>
    import vuescroll from './../components/vue-scroll/VueScroll.vue';
    import listData from './../assets/data/listData.js';
    export default {
        data() {
            return {
                tableBodyHeight: '',
                faq_list: listData.faq_list
            }
        },
        components: {
            vuescroll
        },
        mounted() {
           let clinetHeight = document.documentElement.clientHeight || document.body.clientHeight;
           this.tableBodyHeight = `${clinetHeight}px`;
       },
    }
</script>
<style lang="scss" scope>
    @import './../assets/scss/vuexy/_variables.scss';
    .faq_page {
        padding: $padding_1;
        .col_box {
            padding-bottom: $pb_8rem;
            .maintit {
                font-weight: $font-weight-bold;
                color: $primary;
                padding-left: 10px;
                margin-bottom: 1rem;
            }
        }
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
        .con-content--item {
            padding: 0rem !important;
        }
    }
</style>