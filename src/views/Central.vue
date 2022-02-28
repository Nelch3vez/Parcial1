<template  >
   <div class="turismo2">
    <br>
     <h1 style="color:black">Departamentos y Turismo</h1>
     <br>
   
 
  <b-row class="mt-5"> 
    <b-col cols="12" md="4">
  <b-card 
    title="San Salvador"
    img-src="https://www.cideu.org/wp-content/uploads/San-Salvador-ciudad-3.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
       En este apartado se podrá ver distintos lugares del departamento de San Salvador.
    </b-card-text>

    <b-button href="https://enviajes.cl/el-salvador/san-salvador/lugares-turisticos-de-san-salvador/" variant="primary" target="_blank" >Ver Lugares</b-button>
  </b-card>
 </b-col>
  <b-col cols="12" md="4">   
  <b-card   
    title="La Libertad"
    img-src="https://afar-production.imgix.net/uploads/images/post_images/images/NZnZ9btATU/original_9b8dba822a61f9ef4bc71c7ac56ccd47.jpg?1478266387?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
      En este apartado se podrá ver distintos lugares del departamento de La Libertad.
    </b-card-text>

    <b-button href="https://elsalvadoreshermoso.com/lugares-turisticos-de-la-libertad-el-salvador/" variant="primary" target="_blank" >Ver Lugares</b-button>
  </b-card>
 
 </b-col>

 <b-col cols="12" md="4">   
  <b-card   
    title="Chalatenango"
    img-src="https://cdn-pro.elsalvador.com/wp-content/uploads/2017/06/30112641/Reubicacio%CC%81n.jpg" 
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
      En este apartado se podrá ver distintos lugares del departamento de Chalatenango.
    </b-card-text>

    <b-button href="https://chalatenango.sv/cinco-lugares-turisticos-mas-visitados-en-chalatenango" variant="primary" target="_blank" >Ver Lugares</b-button>
  </b-card>
  
 </b-col>
</b-row> 
</div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
        
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
  
</script>

<script>
export default{
  name:"lugares"

}   
</script>

<style>
 .turismo2{
    height: 700px;
  width: 100%;
  background-color:rgb(122, 161, 13);
  text-align: center;
  position: relative;
  align-content: center;
 }
 
</style>
