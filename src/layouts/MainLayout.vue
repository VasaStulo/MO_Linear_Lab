<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Линейное программирование</q-toolbar-title>
        <q-btn color="secondary" class="q-mr-lg" >Загрузить задачу</q-btn>
        <q-btn >Новая задача</q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.header{
  height: 60px;
}
</style>
