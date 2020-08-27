<template>
    <VuePerfectScrollbar class="scrollBar">
        <slot></slot>    
    </VuePerfectScrollbar>
</template>
<script>
    // import vuescroll from 'vuescroll';
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    export default {
        data() {
            return {
                scrollOption: {
                    bar: {
                        showDelay: 500,
                        onlyShowBarOnScroll: true,
                        keepShow: false,
                        background: '#857BF2',
                        opacity: 1,
                        hoverStyle: false,
                        specifyBorderRadius: false,
                        minSize: false,
                        size: '6px',
                    },
                }
            }
        },
        components: {
            VuePerfectScrollbar
        }
    }
</script>
<style lang="scss" scope>
    .scrollBar {
        height: 100%;
    }
</style>