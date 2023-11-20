<script setup>
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const items = ref([
  {
    label: 'Router',
    icon: 'bi bi-gear',
    items: [
      {
        label: 'Styled',
        icon: 'bi bi-gear',
        route: '/theming'
      },
      {
        label: 'Unstyled',
        icon: 'bi bi-gear',
        route: '/unstyled'
      }
    ]
  },
  {
    label: 'External',
    icon: 'bi bi-gear',
    items: [
      {
        label: 'Vue.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      }
    ]
  },
  {
    label: 'External',
    icon: 'bi bi-gear',
    items: [
      {
        label: 'Vue.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      }
    ]
  },
  {
    label: 'External',
    icon: 'bi bi-gear',
    items: [
      {
        label: 'Vue.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      }
    ]
  },
  {
    label: 'External',
    icon: 'bi bi-gear',
    items: [
      {
        label: 'Vue.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      }
    ]
  },
  {
    label: 'External',
    icon: 'bi bi-gear',
    items: [
      {
        label: 'Vue.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      }
    ]
  },
  {
    label: 'External',
    icon: 'bi bi-gear',
    items: [
      {
        label: 'Vue.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        icon: 'bi bi-gear',
        url: 'https://vuejs.org/'
      }
    ]
  }
])
</script>
<template>
  <p-toolbar class="shadow-2" style="border-bottom: 1px solid var(--surface-border)">
    <template #start>
      <a href="#" class="fs-3 text-decoration-none">網站標題</a>
    </template>

    <template #center></template>

    <template #end>
      <div class="flex align-items-center gap-2">
        <span class="font-bold text-bluegray-50">ADMIN</span>
      </div>
    </template>
  </p-toolbar>
  <div class="container-fluid d-flex p-3">
    <div class="col-2 py-3">
      <p-scroll-panel
        style="width: 100%; height: 85vh"
        :pt="{
          wrapper: {
            style: { 'border-right': '10px solid var(--surface-ground)' }
          },
          bary: 'bg-body-secondary bg-body-secondary opacity-100'
        }"
      >
        <p-panel-menu :model="items" class="w-100">
          <template #item="{ item }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a
                v-ripple
                class="d-flex align-items-center cursor-pointer text-dark px-3 py-3 text-decoration-none"
                :href="href"
                @click="navigate"
              >
                <span :class="item.icon" class="me-2" />
                <span class="ml-2 text-color">{{ item.label }}</span>
              </a>
            </router-link>
            <a
              v-else
              v-ripple
              class="d-flex align-items-center cursor-pointer text-dark px-3 py-3 text-decoration-none"
              :href="item.url"
              :target="item.target"
            >
              <span :class="item.icon" class="me-2" />
              <span>{{ item.label }}</span>
              <i v-if="item.items" class="bi bi-caret-down-fill text-dark ms-auto"></i>
            </a>
          </template>
        </p-panel-menu>
      </p-scroll-panel>
    </div>
    <div class="col-10 p-3">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<style scoped></style>
