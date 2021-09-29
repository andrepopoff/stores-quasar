<template>
  <div class="q-pa-md row items-start q-gutter-md justify-center">
    <div v-for="store in stores" :key="store.code">
      <q-card class="bg-purple text-white cursor-pointer" flat bordered @click="openStore(store)">
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-subtitle2">{{ store.name }}</div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      stores: []
    }
  },
  async mounted() {
    const response = await this.$axios.get(process.env.API_BASE_URL + '/api/service', {
      params: {
        Request: 'Stores',
        Language: 'en-us'
      }
    });
    if (response.status !== 200) {
      this.$dialog.error('Something went wrong');
      return;
    }
    this.stores.push(...response.data);
  },
  methods: {
    openStore (store) {
      this.$dialog.storeDialog(store)
    }
  }
})
</script>
