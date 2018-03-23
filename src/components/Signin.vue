<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12 class="text-xs-center" mt-5 style="margin: auto !important" >
        <h1 >Sign In</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3 style="margin: auto !important" >
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                v-model="email"
                
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="password"
                
                required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" >
              <v-btn color="primary" style="margin: auto !important"  @click="login()" > Sign In </v-btn>
              
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
     
  </v-container>
  
</template>

<script>
import Api from '../api/api.js'
export default{
  methods: {
    login () {
      console.log('in')
      Api.login(this.email, this.password, callback => {
        if (callback === 'success') {
          this.$router.push('/home')
          console.log('pushhh')
        }
      })
    }
  },
  data () {
    return {
      email: '',
      password: '',
      error: false,
      dialog: false
    }
  }
}
</script>