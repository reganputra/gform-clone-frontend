<template>
<v-row>
    <v-col cols="10" offset="1" md="4" offset-md="4">
        <v-card>
            <v-card-text class="d-flex align-center">
                <h2>Logout</h2>
                 <v-progress-circular class="ml-3" indeterminate color="primary"></v-progress-circular>
            </v-card-text>
        </v-card>
    </v-col>
</v-row>
</template>
<script> 
export default {
    middleware: ['authenticated'],
    layout: 'auth',
    mounted(){
        setTimeout(() =>{
            this.$store.commit('auth/logout')
            this.$router.push({name: 'index___' + this.$i18n.locale})
        }, 2000)
    }
}
</script>