<template  >
   <div class="turismo4">
    <br>
     <h1 style="color:black">Departamentos y Turismo</h1>
     <br>
   
 
  <b-row class="mt-5"> 
    <b-col cols="12" md="4">
  <b-card 
    title="San Miguel"
    img-src="https://travelwider.com/wp-content/uploads/2016/01/San-Miguel-El-Salvador-scaled.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
       En este apartado se podrá ver distintos lugares del departamento de San Miguel.
    </b-card-text>

    <b-button href="https://www.lugaresturisticos.org/san-miguel/" variant="primary" target="_blank" >Ver Lugares</b-button>
  </b-card>
 </b-col>
  <b-col cols="12" md="4">   
  <b-card   
    title="Morazán"
    img-src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Iglesia_San_Francisco_Gotera_-_panoramio.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
      En este apartado se podrá ver distintos lugares del departamento de Morazán El Salvador.
    </b-card-text>

    <b-button href="https://www.tripadvisor.es/Attractions-g3654645-Activities-Morazan_Department.html" variant="primary" target="_blank" >Ver Lugares</b-button>
  </b-card>
 
 </b-col>

 <b-col cols="12" md="4">   
  <b-card   
    title="Usulután"
    img-src="https://upload.wikimedia.org/wikipedia/commons/7/74/Ciudad_de_Usulut%C3%A1n.jpg" 
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
      En este apartado se podrá ver distintos lugares del departamento de Usulután El Salvador.
    </b-card-text>

    <b-button href="https://www.lugaresturisticos.org/usulutan/" variant="primary" target="_blank" >Ver Lugares</b-button>
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
 .turismo4{
    height: 700px;
  width: 100%;
  background-color:#00aeff;
  text-align: center;
  position: relative;
  align-content: center;
 }
 
</style>
