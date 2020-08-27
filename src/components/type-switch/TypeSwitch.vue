<template>
    <div>
        <span class="weui-switch" :class="{'weui-switch-on' : isChecked}" :value="value" @click="toggle" style="position:relative">
            <div class="right-switch">
                {{direction[0]}}
            </div>
            <div class="left-switch">
                {{direction[1]}}
            </div>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'switchComponent',
        props: {
            value: {
                type: Boolean,
                default: true
            },
            text: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                isChecked: this.value
            }
        },
        computed: {
            direction() {
                if (this.text) {
                    return this.text.split('|')
                } else {
                    return []
                }
            }
        },
        watch: {
            value(val) {
                this.isChecked = val
            },
            isChecked(val) {
                this.$emit('change', val);
            }
        },
        methods: {
            toggle() {
                this.isChecked = !this.isChecked;
            }
        }
    }
</script>
<style>
    .weui-switch {
        display: block;
        position: relative;
        width: 240px;
        height: 40px;
        border: 1px solid #E7E7E7;
        outline: 0;
        border-radius: 35px;
        cursor: pointer;
        box-sizing: border-box;
    }

    .weui-switch:before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 35px;
        background-color: #F7F7F7;
        transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    }

    .weui-switch:after {
        content: " ";
        position: absolute;
        top: 0%;
        left: 0;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        border-radius: 35px;
        background-color: #FFFFFF;
        z-index: 0;
        transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    }

    .weui-switch-on:after {
        transform: translateX(100%);
    }
    .right-switch,
    .left-switch {
        z-index: 1;
        width: 50%;
        height:100%;
        position:absolute;
        line-height: 40px;
        text-align: center;
        user-select:none;
    }
    .left-switch {
        right:2px;
    }
</style>
<!-- <template>
    <div class="type-switch" :class="isChecked ? 'weui-switch-on' : 'weui-switch-off'"  :value="value" @click="toggle">
        <div class="item right"> {{direction[0]}}</div>
        <div class="item left"> {{direction[1]}}</div>        
    </div>
</template>
<script>
    export default {
        name: 'switchComponent',
        props: {
            value: {
                type: Boolean,
                default: true
            },
            text: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                isChecked: this.value
            }
        },
        computed: {
            direction() {
                if (this.text) {
                    return this.text.split('|')
                } else {
                    return []
                }
            }
        },
        watch: {
            value(val) {
                this.isChecked = val
            },
            isChecked(val) {
                this.$emit('change', val);
            }
        },
        methods: {
            toggle() {
                this.isChecked = !this.isChecked;
                console.log('xxxx',this.isChecked);
            }
        }
    }
</script>
<style lang="scss" scope>
    .type-switch {
        position: relative;
        width: 240px;
        height: 40px;
        border: 1px solid #E7E7E7;
        outline: 0;
        border-radius: 35px;
        cursor: pointer;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        line-height: 40px;
        .item {
            flex: 1;
            text-align: center;
            z-index: 1;
        }
    }
    .weui-switch-on::before {
        content: " ";
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        border-radius: 35px;
        background-color: #F00;
        transform: translateX(0%);
        transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);        
    }
</style> -->