<template>
<div >
  <v-container fluid>
    <v-layout column>
      <v-flex xs12 class="text-xs-center" mt-5 style="margin: auto !important" >
        <h1>Welcome to Contacts App</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3 style="margin: auto !important" >
        <blockquote class="blockquote text-lg-center">
          You will need to Signin before entering the website <br>
         
        </blockquote>
      </v-flex>
      <v-flex class="text-xs-center" mt-5 style="margin: auto !important" >
        <v-btn to="/signin">Sign In</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {}
</script>

<style>

</style>