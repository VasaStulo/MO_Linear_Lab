<template>
  <q-page class="row">
    <div class="controls ">
      <div>
        <p>Кол-во столбцов:</p>
        <input v-model="mainStore.countVariables"  />
        {{countVariables}}
      </div>

      <div>
        <p>Кол-во строк:</p>
        <input v-model="mainStore.countConfines" />
      </div>
      <div>
        <p>Какие дроби использовать:</p>
        <q-select square outlined  :options="optionsFraction"/>
      </div>
      <div>
        <p>Режим решения:</p>
        <q-select square outlined v-model="mode" :options="optionsMode"/>
      </div>
      <div>
        <q-btn class="buttons" color="secondary">Решить</q-btn>
      </div>
      <div>
        <q-btn class="buttons" color="purple">Очистить</q-btn>
      </div>
      <div>
        <q-btn class="buttons" color="primary">Сохранить</q-btn>
      </div>

    </div>
   <table-var :table="table"/>
  </q-page>
</template>

<script setup lang="ts">
import TableVar from 'components/organisms/TableVar.vue';
import {computed, ref} from 'vue';
import {useMainStore} from 'stores/example-store';
const mainStore = useMainStore();

const countVariables = computed(()=>mainStore.getCountVariables);
const countConfines = computed(()=>mainStore.getCountConfines);

let mode = ref(null)
const optionsFraction = ['Обыкновенные', 'Десятичные']
const optionsMode = ['Автоматический', 'Ручной']
const table = ref([
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
])

</script>
<style lang="scss">
.controls{
  height: 650px;
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
.buttons{
  margin-top: 30px;
  height: 30px;
  width: 120px;
}
</style>

