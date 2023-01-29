<template>
    <div class="kahvelist">
      <div
        class="kahvelist-item"
        v-for="kahve in kahveler"
        :key="kahve._id"
        @click="$router.push(`/shopPage`)"
      >
        <img v-bind:src="kahve.thumbnail" alt="Kahve Fotoğrafı" />
        <p>{{ kahve.name }}</p>
        <p>{{ kahve.price }}TL</p>
        <button class="ana">Sepete Ekle</button>
      </div>
    </div>
  </template>
  <script>

  import { computed } from 'vue'
  export default {
    name: 'NuxtTutorial',
  
    data() {
      return {
        kahveler: null,
      }
    },
  
    computed: {
      async getData() {
        const response = await fetch('http://localhost:8000/kahve')
        const finalResponse = await response.json()
        this.kahveler = finalResponse
      },
    },
    mounted() {
      this.getData
    },
  }
  </script>
  
  <style scoped>
  .kahvelist {
    display: flex;
    gap: 35px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-wrap: wrap;
  }
  
  .kahvelist-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    row-gap: 5px;
  }
  
  .kahvelist-item > * {
    font-size: 15px;
  }
  
  .ana {
    margin-top: 5px;
    border: 2px solid #005e5c;
    height: 50px;
    width: 150px;
    color: #005e5c;
    font-weight: bolder;
    opacity: 0;
    transition: hover 0.5s;
    background: #fff;
  }
  
  .kahvelist-item:hover .ana {
    opacity: 1;
    cursor: pointer;
  }