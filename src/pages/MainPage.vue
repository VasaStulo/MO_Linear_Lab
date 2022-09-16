<template>
  <q-page class="row">
    <div class="controls ">
      <div>
        <p>Кол-во столбцов:</p>
        <input type="number" v-model="countRow" />
      </div>
      <div>
        <p>Кол-во строк:</p>
        <input type="number" v-model="countColumn" />
      </div>
      <div>
        <p>Какие дроби использовать:</p>
        <q-select square outlined v-model="fraction" :options="optionsFraction"/>
      </div>
      <div>
        <p>Режим решения:</p>
        <q-select square outlined v-model="mode" :options="optionsMode"/>
      </div>
    </div>
<!--   <table-var :table="table"/>-->
  </q-page>
</template>

<script setup lang="ts">
import TableVar from 'components/organisms/TableVar.vue';
import { ref } from 'vue';
let countRow = ref(0)
let countColumn = ref(0)
let fraction = ref(null)
let mode = ref(null)
const optionsFraction = ['Обыкновенные', 'Десятичные']
const optionsMode = ['Автоматический', 'Ручной']
const table = ref([
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
])

</script>
<style lang="scss">
.controls{
  height: 500px;
  width: 250px;
  margin: 30px;
  padding: 0 15px;
  border-radius: 10px;
  border: 1px solid #000;
  p{
    font-size: 20px;
    margin: 20px 0 10px;
  }
}
input{
  width: 100px;
}
</style>

