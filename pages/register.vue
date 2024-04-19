<template>
    <v-row>
      <v-col cols="10" md="4" offset="1" offset-md="4">
        <v-card>
          <v-toolbar dark color="primary">Register</v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field 
              label="Name"
               :rules="rules.fullname" 
               v-model="form.fullname"
               required
               />
              

              <v-text-field 
              label="Email" 
              :rules = "rules.email"
              v-model="form.email"
              required
              />

              <v-text-field
               label="Password" 
               type="password" 
               :rules="rules.password"
               v-model="form.password"
               required
               />

               <v-text-field
              label="Confirm Password"
              type="password"
              :rules="rules.password_confirmation"
              v-model="form.password_confirmation"
              required
              />

              
            </v-form>
          </v-card-text>

          <v-card-action>
            <v-spacebar></v-spacebar>
            <v-btn color="primary" @click="onSubmit">Register</v-btn>
          </v-card-action>

        </v-card>
        <div class="d-flex align-baseline">
          <p>Kamu belum punya akun?</p>
          <v-btn 
          text 
          plain
          to="/login"
          :ripple="false"
          color="primary"
          class="pl-1" 
          >Login</v-btn>
        </div>

      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    layout: 'auth',
    data() {
      return {
        form: {
          fullname:'',
          email:'',
          password:'',
          password_confirmation:'',
        },
        rules: {
          fullname:[(v) => !!v || "Full name is required" 
        ],
          email: [(v) => !!v || "Email is required", 
          (v) => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(v) || "Email must be valid" 
        ],
          password: [(v) => !!v || "Password is required",
          (v) => v.length >= 6 || "Password must be at least 6 characters"
        ],
          password_confirmation: [(v) => !!v || "Password confirmastion is required", 
           (v) => v === this.form.password || "Password confirmation must be same with password"
        ]
        },
      }
    },
    methods: {
      async onSubmit() {
        this.$axios.$post('http:/localhost:3000/register', this.form)
      }
    }
  }
  </script>