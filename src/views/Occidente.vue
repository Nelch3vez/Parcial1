<template  >
   <div class="turismo">
    <br>
     <h1 style="color:black">Departamentos y Turismo</h1>
     <br>
   
 
  <b-row class="mt-5"> 
    <b-col cols="12" md="4">
  <b-card 
    title="Santa Ana"
    img-src="https://www.kayak.com.sv/rimg/himg/2b/18/0b/ice-60732-67403048_3XL-444312.jpg?width=1366&height=768&crop=true"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
       En este apartado se podrá ver distintos lugares del departamento de Santa Ana.
    </b-card-text>

    <b-button href="https://www.tripadvisor.es/Attractions-g656475-Activities-Santa_Ana_Santa_Ana_Department.html" variant="primary" target="_blank" >Ver Lugares</b-button>
  </b-card>
 </b-col>
  <b-col cols="12" md="4">   
  <b-card   
    title="Sonsonate"
    img-src="https://pbs.twimg.com/media/Ej2L_YFXcAcs68X.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
      En este apartado se podrá ver distintos lugares del departamento de Sonsonate.
    </b-card-text>

    <b-button href="https://www.elsv.info/lugares-para-visitar-en-sonsonate" variant="primary" target="_blank" >Ver Lugares</b-button>
  </b-card>
 
 </b-col>

 <b-col cols="12" md="4">   
  <b-card   
    title="Ahuachapán"
    img-src="https://elsalvador.travel/wp-content/uploads/2020/01/Ciudad-de-Ataco.jpg" 
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; color:rgb(7, 84, 136)"
    class="mb-2"
  >
    <b-card-text>
      En este apartado se podrá ver distintos lugares del departamento de Ahuachapán.
    </b-card-text>

    <b-button href="https://www.tripadvisor.es/Attractions-g3654631-Activities-Ahuachapan_Department.html" variant="primary" target="_blank" >Ver Lugares</b-button>
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
 .turismo{
    height: 700px;
  width: 100%;
  background-color:#9b0808;
  text-align: center;
  position: relative;
  align-content: center;
 }
 
</style>