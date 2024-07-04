<template>
  <main>
    <section>
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
          <tr>
            <th>Code</th>
            <th>Company</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change %</th>
          </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
          <tr v-for="rate in rates" :key="rate.code">
            <td>{{ rate.code }}</td>
            <td>{{ rate.company }}</td>
            <td>{{ rate.price }}</td>
            <td>{{ rate.change }}</td>
            <td>{{ rate.changePercent }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const rates = ref([
  {
    code: 'AAC',
    company: 'AUSTRALIAN COMPANY',
    price: '$1.38',
    change: '+2.01',
    changePercent: '-0.36%'
  },
  {
    code: 'AAD',
    company: 'AUSENCO',
    price: '$2.38',
    change: '-0.01',
    changePercent: '-1.36%'
  },
  {
    code: 'AAX',
    company: 'ADELAIDE',
    price: '$3.22',
    change: '+0.01',
    changePercent: '+1.36%'
  },
  {
    code: 'XXD',
    company: 'ADITYA BIRLA',
    price: '$1.02',
    change: '-1.01',
    changePercent: '+2.36%'
  }
])
</script>

<style scoped>
.tbl-header {
  background-color: #f2f2f2;
  padding: 10px;
}
.tbl-content {
  height: 300px;
  overflow-y: auto;
  margin-top: 0px;
}
table {
  width: 100%;
  table-layout: fixed;
}
th, td {
  padding: 8px 15px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
