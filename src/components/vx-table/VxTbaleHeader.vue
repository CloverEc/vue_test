<template>
        <div class="sortBtnGroup" @click="sortClick">
            <div 
                :data-key="item.id" 
                data-sort="asc" v-for="(item, index) in sortArr" :key="index" 
                class="sortItem" 
                :class="currentKey == item.id && item.sort ? 'checkedI' : ''"
            >
                {{item.text}} 
                <span v-if="item.sort && currentKey != ''">{{currentKey == item.id && currentSort == 'asc' ? '↑' : '↓'}} </span>
                <span v-if="item.sort && currentKey == ''">{{currentSort == 'asc' ? '↑' : '↓'}} </span>  
            </div>
        </div>
    </template>
    <script>
        export default {
            props: {
                sortArr:{
                    type: Array,
                    default: []
                }
            },
            data() {
                return {
                    // sortArr:[{
                    //     text:'资产',
                    //     id: 1,
                    //     sort: true,
                    //     sortType: 'asc'
                    // },{
                    //     text:'市场规模',
                    //     id: 2,
                    //     sort: false
                    // },{
                    //     text:'总借入额',
                    //     id: 3,
                    //     sort: true
                    // },{
                    //     text:'存款年化',
                    //     id: 4,
                    //     sort: true
                    // }],
                    currentKey: '',
                    currentSort: 'asc',
                    clickNum: 0
                }
            },
            methods: {
                sortClick(e) {
                    let {key,sort} = e.target.dataset;
                    sort === 'asc' ? e.target.dataset.sort = 'desc' : e.target.dataset.sort='asc'             
                    this.currentKey = key;
                    this.currentSort = sort === 'asc' ? 'desc' : 'asc'; 
                }
            },
        }
    </script>
    <style lang="scss" scope>
        .sortBtnGroup {
            display: flex;
            flex-direction: row;
            .sortItem {
                padding: 10px 0px;
                cursor: pointer;
                flex: 1;
                text-align: center;
            }
            .checkedI span {
                color: aquamarine;
            }
            .sortItem:first-child {
                text-align: left;
            }
            .sortItem:last-child {
                text-align: center;
            }
        }
    </style>