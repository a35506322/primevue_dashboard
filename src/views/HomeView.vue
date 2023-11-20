<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  }
])
const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success'

    case 'LOWSTOCK':
      return 'warning'

    case 'OUTOFSTOCK':
      return 'danger'

    default:
      return null
  }
}
</script>
<template>
  <div class="card">
    <p-datatable :value="products" tableStyle="min-width: 50rem">
      <template #header>
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Products</span>
          <p-button icon="pi pi-bi bi-arrow-clockwise" rounded raised />
        </div>
      </template>
      <p-column field="name" header="Name"></p-column>
      <p-column header="Image">
        <template #body="slotProps">
          <img
            :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
            :alt="slotProps.data.image"
            class="w-6rem shadow-2 border-round"
          />
        </template>
      </p-column>
      <p-column field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </p-column>
      <p-column field="category" header="Category"></p-column>
      <p-column field="rating" header="Reviews">
        <template #body="slotProps">
          <p-rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
        </template>
      </p-column>
      <p-column header="Status">
        <template #body="slotProps">
          <p-tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
      </p-column>
      <template #footer>
        In total there are {{ products ? products.length : 0 }} products.
      </template>
    </p-datatable>
  </div>
</template>
