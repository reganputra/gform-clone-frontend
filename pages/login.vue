<template>
    <v-row>
      <v-col cols="10" offset="1" md="4" offset-md="4">
        <v-card>
          <v-toolbar dark color="primary">Login</v-toolbar>
          
          <v-card-text>
            <v-form ref="form">

              <v-text-field
              label="Email"
              :rules="rules.email"
              v-model="form.email"
              required
              ></v-text-field>

              <v-text-field             
              label="Password"
              type="password"
              :rules="rules.password"
              v-model="form.password"  
              required
              ></v-text-field>

            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :loading="isLoading" color="primary" @click="onSubmit">Login</v-btn>
          </v-card-actions>
        </v-card>

        <div class="d-flex align-baseline"> 
          <p>Kamu sudah punya akun?</p>
          <v-btn
          text
          plain
          to="/register"
          :ripple="false"
          color="primary"
          class="pl-1"
          >Register</v-btn>
        </div>

      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    layout: 'auth',
    data() {
        return {
        isLoading: false,
        form: {
          email: '',
          password: '',
        },
        rules: {
          email: [
            (v) => !! v || "Email is required",
            (v) => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(v) || "Email must be valid",
            (v) => !this.emailExist || "Email exist"
          ],
          password: [
            (v) => !!v || "Password is required",
            (v) => v.length >= 6 || "Password must be at least 6 characters"
          ]
        }
        }
    }, 
    methods : {
      async onSubmit () {
        try {
        this.isLoading = true
        await this.$store.dispatch('auth/login', this.form)

        } catch (error) {
            console.log(error)
        }
      }
    }
  }
  </script>
  