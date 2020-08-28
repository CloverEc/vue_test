<template>
  <div>
	<h4>You are second page.</h4>
    <div class="mt-4">
        <h5 class="mb-2">Theme Mode</h5>
        <div>
            <vs-radio v-model="themeMode" vs-value="light" class="mr-4" vs-name="theme-mode-light">Light</vs-radio>
            <vs-radio v-model="themeMode" vs-value="dark" class="mr-4" vs-name="theme-mode-dark">Dark</vs-radio>
            <!-- <vs-radio v-if="layoutType === 'vertical'" v-model="themeMode" vs-value="semi-dark" vs-name="theme-mode-semi-dark">Semi Dark</vs-radio> -->
            <vs-radio v-model="themeMode" vs-value="semi-dark" vs-name="theme-mode-semi-dark">Semi Dark</vs-radio>          
        </div>
        <div class="lang">
            <div @click="changeLang('zh')">中文</div>
            <div @click="changeLang('en')">English</div>

            <!-- <div @click="$store.commit('SET_LANG','zh-CN')">中文 - VUEX</div>
            <div @click="$store.commit('SET_LANG','en-US')">English - vuex</div>             -->
            {{$t('login')}}<br />
            <!-- {{$store.state.local_lang}} -->
        </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
  },
  data () {
    return {
      themeMode: 'semi-dark',
      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']
    }
  },
  watch: {
    themeMode (val) {
        if (val === 'dark') {
            if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                document.body.classList.add('theme-dark');
        } else {
            if (document.body.className.match('theme-dark'))  document.body.classList.remove('theme-dark')
            if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
        }
    }
  },
  methods: {
    changeLang(lang) {
        this.$i18n.locale = lang;
        this.$storage.setLang(lang);
    }
  },
}
  
</script>
