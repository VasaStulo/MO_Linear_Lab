<template>
<q-table :columns="table">


</q-table>
</template>
<script setup  lang="ts">
const props = defineProps<{
  table: {name:string, label:string,field:string}[];
}>();

</script>
