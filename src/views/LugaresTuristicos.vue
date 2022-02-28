<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="San Salvador"
        text="Plaza de San Salvador"
        img-src="https://blogapi.uber.com/wp-content/uploads/2019/04/Plazas-bonitas-de-San-Salvador-a-las-que-vas-a-querer-volver-1024x512.png"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://www.presidencia.gob.sv/wp-content/uploads/2021/02/photo5010708847416944955.jpg">
        <h1>Surf City</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/134918959.jpg?k=3530755debe69a206a44dbcb9660e7c21144e20a2a0ca818c27d6e63b22eed00&o=&hp=1">
      <h1>Playa Los Mangos</h1>
      
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      
    </b-carousel>

     
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
