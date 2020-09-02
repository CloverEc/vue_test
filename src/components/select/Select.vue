<template>
    <div id="extra-component-select-demo">
        <select-dropdown-options></select-dropdown-options>
        <select-selecting-values></select-selecting-values>
    </div>
</template>

<script>
import SelectDropdownOptions from './SelectDropdownOptions.vue'
import SelectSelectingValues from './SelectSelectingValues.vue'

export default {
  components: {
    SelectDropdownOptions,
    SelectSelectingValues
  }
}
</script>
