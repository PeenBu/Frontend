<template>
<div>

<br>
    <div class="SearchBox"> 
      <v-layout row >
        <v-flex xs10>
          <v-text-field 
              v-model="searchbox"
              prepend-icon="search" 
              label="Search"
              solo-inverted
              class="mx-3"
              flat
            >
            </v-text-field>
        </v-flex >
        <v-flex>
        </v-flex>
        
        <v-flex>
          
          <v-btn color="amber lighten-4" href="/addContact">+ contact</v-btn>
          
        </v-flex>
      </v-layout>
       </div> 

       
      <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-bottom-transition"
        :overlay="false"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Edit</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-divider></v-divider>
              <v-container fluid>
    <v-layout column>
      <v-card>
      <v-flex xs12 class="text-xs-center" mt-5 style="margin: auto !important" >
      <h1 style="color: green accent-4">EDIT CONTACT</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3 style="margin: auto !important" >
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                v-model="id"
                name="contactid"
                label="Contact ID"
                id="contactid"
                type="contactid"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="firstname"
                name="firstname"
                label="Firstname"
                id="firstname"
                type="firstname"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="lastname"
                name="lastname"
                label="Lastname"
                id="lastname"
                type="lastname"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="phone"
                name="mobileno."
                label="Mobile No."
                id="mobileno"
                type="mobileno"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="email"
                name="email"
                label="Email"
                id="email"
                type="email"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="fb"
                name="facebook"
                label="Facebook"
                id="facebook"
                type="facebook"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="img"
                name="imageurl"
                label="Image URL"
                id="imageurl"
                type="imageurl"
                required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5 style="margin: auto !important" >
              <v-btn color="primary" v-on:click="update(id, firstname, lastname, phone, email, fb, img)">UPDATE CONTACT</v-btn>
              <v-btn color="red" @click.stop="dialog=false">EXIT</v-btn>
            </v-flex>
          </v-layout>
        </form>
       
      </v-flex>
       </v-card>
    </v-layout>
  </v-container>
          </v-card-text>

          <div style="flex: 1 1 auto;"/>
        </v-card>
      </v-dialog>



  <br>
      <v-layout row wrap>
            <v-flex xs12 sm6 md3 style="padding: 5px" v-for="x in filterdUsers" v-bind:key="x">
              <v-card class="card">
                    <img v-bind:src="x.img" height="200px" width="100%"/>
                  <v-card-title primary-title>
                      <v-card-text class="headline mb-0" style="text-align:center">{{x.firstname}} {{x.lastname}}</v-card-text>
                      <v-card-text style="text-align:center">Mobile: {{x.mobile}}<br>Email: {{x.email}}<br>Facebook: {{x.fb}}</v-card-text>
                  </v-card-title>
                  <v-card-actions>
                  <v-btn flat color="green" style="margin:auto" @click.stop="dialog = true, edit(x.id)">Edit</v-btn>
                  <v-btn flat color="red" style="margin:auto" v-on:click="Delete(x.id)">Delete</v-btn>
                  </v-card-actions>
              </v-card>
            </v-flex>
            </v-layout>
  </div>
</template>

<script>
import Vue from 'vue'
import Api from '../api/api.js'
// import Store from '../store/index.js'
// import { Vue } from 'vue/types/vue';
export default {
  beforeCreate () {
    Api.getUserMember(callback => {
      this.contact = callback
      console.log(this.contact)
    })
  },
  data () {
    return {
      contact: [],
      searchbox: '',
      dialog: false,
      id: '',
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      fb: '',
      img: ''
    }
  },
  computed: {
    filterdUsers: function () {
      return this.contact.filter((user) => {
        return user.firstname.match(this.searchbox)
      })
    }
  },
  methods: {
    edit (UserID) {
      console.log('Edit')
      var url = 'http://localhost:3000/users/' + UserID
      Vue.$http.get(url)
      .then((response) => {
        // alert(UserID)
        console.log('response ' + response.data.fb)
        this.firstname = response.data.firstname
        this.id = response.data.id
        this.lastname = response.data.lastname
        this.phone = response.data.mobile
        this.email = response.data.email
        this.fb = response.data.fb
        this.img = response.data.img
      })
      .catch((error) => {
        console.log(error)
      })
    },
    Delete (UserID) {
      var url = 'http://localhost:3000/users/' + UserID
      Vue.$http.delete(url)
      .then((response) => {
        alert(UserID)
        console.log('Delete userId: ' + response)
      })
      .catch((error) => {
        console.log(error)
      })
      window.location.reload()
    },
    update (UserID, firstname, lastname, mobile, email, fb, img) {
      console.log('updating')
      window.location.reload()
      var params = {
        id: this.id,
        firstname: firstname,
        lastname: lastname,
        mobile: mobile,
        email: email,
        fb: fb,
        img: img
      }
      Vue.$http.post('http://localhost:3000/users/' + UserID, params)
      .then(function (response) {
        this.dialog = false
        this.$router.push('/Home')
        window.location.reload()
      })
      .catch(function (response) {
      })
    }
  }
}
</script>

<style>
.SearchBox {
    border-radius: 10px;
    border: 1px solid #adadad;
    padding: 10px;
    max-width: 99%;
    max-height: 100px;
    margin: auto;

}
.mx-3.input-group.input-group--prepend-icon.input-group--solo.input-group--solo-inverted.elevation-0.input-group--text-field.input-group--single-line.primary--text{
    margin-left:0 !important;
}
.application .theme--light.input-group.input-group--solo-inverted, .theme--light .input-group.input-group--solo-inverted{
    background: rgba(0,0,0,.05);
}

</style>