<script setup lang="ts">
import { IxButton, IxDropdown, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <IxButton id="triggerId">Open</IxButton>
  <IxDropdown trigger="triggerId">
    <IxDropdownItem label="Item 1"></IxDropdownItem>
    <IxDropdownItem label="Item 2"></IxDropdownItem>
    <IxDropdownItem label="Item 3"></IxDropdownItem>
  </IxDropdown>
</template>
