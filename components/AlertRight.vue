<template>
    <div class="v-alert-right">
     <v-alert 
     v-for="(alerts, index) in alerts"
     :key="index"
     v-model="alerts.show"
     outlined 
     border="left" 
     :type="alerts.type"
     class="v-bg-white">
      <v-row>
        <v-col class="grow">
            {{ alerts.message }}
        </v-col>
        <v-col class="shrink">
            <v-btn small :color="alerts.type" icon @click="onClose(index)">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-col>
      </v-row>
     </v-alert>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return{
        }
    },
    methods: {
        onClose (index) {
            this.$store.commit('alerts/close', index)
        }
    },
    computed: {
        ...mapState('alerts', ['alerts'])
    },
}
</script>

<style scoped>
.v-bg-white {
    background-color: white !important;
}

.v-alert-right {
    max-width: 70%;
    position: fixed;
    right: 20px;
    bottom: 10px;
    z-index: 9;
}
@media (max-width: 768px) {
    .v-alert-right {
        max-width: 70%;
    }
}
</style>