<template>
  <div class="q-pa-md row items-start q-gutter-md justify-center">
    <div v-for="store in stores" :key="store.code" class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
      <q-card
        class="bg-purple text-white cursor-pointer row items-center justify-center"
        flat
        bordered
        @click="openStore(store)"
      >
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
    this.$store.commit('main/saveStores', response.data);
    this.stores.push(...this.$store.getters['main/stores']);
  },
  methods: {
    openStore (store) {
      this.$dialog.storeDialog(store)
    }
  }
})
</script>
