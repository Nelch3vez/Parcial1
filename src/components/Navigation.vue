<template>

<div>

  <b-navbar type="dark" variant="dark">

    <b-navbar-nav>

       
      <b-nav-item to="/lugares">El Salvador</b-nav-item>
      <b-nav-item to="/occidente">Zona Occidental</b-nav-item>
      <b-nav-item to="/oriente">Zona Oriental</b-nav-item>
     
      
    </b-navbar-nav>

    </b-navbar>

    <router-view/>

    </div>

</template>

<script>

     export default{

         name:'Navigation'

     }

</script>
