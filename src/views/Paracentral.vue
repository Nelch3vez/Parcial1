<template  >
   <div class="turismo3">
    <br>
     <h1 style="color:black">Departamentos y Turismo</h1>
     <br>
   
 
  <b-row class="mt-5"> 
    <b-col cols="12" md="4">
  <b-card 
    title="Cabañas"
    img-src="https://elsalvadorviajar.com/wp-content/uploads/2021/09/ILOBASCO-Pueblos-de-El-Salvador.jpg.webp"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
       En este apartado se podrá ver distintos lugares  turísticos de departamento de Cabañas en El salvador.
       
    </b-card-text>

    <b-button href="http://sammarcaba7.blogspot.com/" variant="primary" target="_blank" >Ver Lugares</b-button>
  </b-card>
 </b-col>
  <b-col cols="12" md="4">   
  <b-card   
    title="La Paz"
    img-src="https://mapadelturista.com/wp-content/uploads/2020/04/zacatecoluca-la-paz-1.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
      En este apartado se podrá ver distintos lugares turísticos del departamento de La Paz en El Salvador.                 
    </b-card-text>

    <b-button href="https://www.lugaresturisticos.org/la-paz-el-salvador/" variant="primary" target="_blank" >Ver Lugares</b-button>
  </b-card>
 
 </b-col>

 <b-col cols="12" md="4">   
  <b-card   
    title="San Vicente"
    img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Parque_Central_de_San_Vicente.JPG/1200px-Parque_Central_de_San_Vicente.JPG" 
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
            En este apartado se podrá ver distintos lugares turísticos del departamento de San Vicente en El Salvador.
    </b-card-text>

    <b-button href="https://www.lugaresturisticos.org/san-vicente/" variant="primary" target="_blank" >Ver Lugares</b-button>
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
 .turismo3{
    height: 700px;
  width: 100%;
  background-color:green;
  text-align: center;
  position: relative;
  align-content: center;
 }
 
</style>
