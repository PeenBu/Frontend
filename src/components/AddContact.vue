<template>
  <v-container fluid>
    <v-layout column>
      <v-card>
      <v-flex xs12 class="text-xs-center" mt-5 style="margin: auto !important" >
      <h1><font color="Black">ADD NEW CONTACT</font></h1>
      <h3><font color="Red">***** If there is no more contact to add, CLICK EXIT *****</font></h3>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3 style="margin: auto !important" >
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                v-model="contact.id"
                name="contactid"
                label="Contact ID"
                id="contactid"
                type="contactid"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="contact.firstname"
                name="firstname"
                label="Firstname"
                id="firstname"
                type="firstname"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="contact.lastname"
                name="lastname"
                label="Lastname"
                id="lastname"
                type="lastname"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="contact.mobile"
                name="mobileno."
                label="Mobile No."
                id="mobileno"
                type="mobileno"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="contact.email"
                name="email"
                label="Email"
                id="email"
                type="email"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="contact.fb"
                name="facebook"
                label="Facebook"
                id="facebook"
                type="facebook"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="contact.img"
                name="imageurl"
                label="Image URL"
                id="imageurl"
                type="imageurl"
                required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5 style="margin: auto !important" >
              <v-btn color="primary" type="submit" v-on:click="addContact">ADD CONTACT</v-btn>
              <v-btn color="red" href="/home">EXIT</v-btn>
            </v-flex>
          </v-layout>
        </form>
       
      </v-flex>
       </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      contact: {
        id: '',
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        fb: '',
        img: ''
      }
    }
  },
  methods: {
    addContact () {
      console.log('click')
      Vue.$http.post('http://localhost:3000/users', this.contact)
    .then(function (response) {
      console.log('response.data', response.data)
      console.log(response.data)
    })
    .catch(function (response) {
    })
    }
  }
}
</script>