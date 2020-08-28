<template>
    <div class="footer-sticky">
        <footer class="the-footer flex-wrap" :class="classes">
            <!-- <p>
                      <span>COPYRIGHT &copy;</span>
                      <span>{{ new Date().getFullYear() }} </span>
                      <a href="https://1.envato.market/vuexy_admin" target="_blank" rel="nofollow">Pixinvent</a>
                      <span class="hidden sm:inline-block">, All rights Reserved</span>
                    </p>
                    <span class="md:flex hidden items-center">
                        <span>Hand-crafted & Made with</span>
                        <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
                    </span> -->

            <span class="md:flex hidden items-center">
                <span>夜晚模式:</span>
                <vs-switch v-model="switchDark">
                    <template #off>
                        <i class='bx bx-x'></i>
                    </template>
                    <template #on>
                        <i class='bx bx-check'></i>
                    </template>
                </vs-switch>
            </span>

            <vs-dropdown vs-custom-content class="cursor-pointer more_lang">
                <div class="con-img ml-3 currentLang">{{localLang}}
                    <vs-icon class="dropIcon" icon="expand_more"></vs-icon>
                </div>
                <vs-dropdown-menu class="vx-navbar-dropdown">
                    <vs-dropdown-item class="langItem" @click="changeLang('zh')">ZH</vs-dropdown-item>
                    <vs-dropdown-item class="langItem" @click="changeLang('en')">EN</vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>
        </footer>
    </div>

</template>

<script>
    export default {
        name: 'the-footer',
        data: () => ({
            switchDark: true,
            local_lang: '',
        }),
        props: {
            classes: {
                type: String
            }
        },
        computed: {
            localLang() {
                return this.local_lang || this.$storage.getLang();
            }
        },
        watch: {
            switchDark(val) {
                console.log('watch', val)
                if (val) {
                    if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark')
                    if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                } else {
                    if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                    document.body.classList.add('theme-dark');
                }
            }
        },
        methods: {
            changeLang(lang) {
                this.$i18n.locale = lang;
                this.$storage.setLang(lang);
                this.local_lang = lang;
            }
        },
    }
</script>
<style lang="scss" scope>
    .the-footer {
        justify-content: flex-end;
        padding: 25px 85px 10px 10px;
    }

    .theme-dark .vs-switch {
        background: #e2e2e2;
    }

    .more_lang {
        .currentLang {
            border: 1px solid #786CF1;
            padding: .5rem .8rem;
            border-radius: 6px;
            text-transform: uppercase;
            .dropIcon {
                font-size: 20px;
                vertical-align: text-bottom;
            }
        }
    }

    .vs-dropdown--item {
        padding: .5rem .7rem !important;
    }
</style>