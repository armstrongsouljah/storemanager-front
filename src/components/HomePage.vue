<template>
    <div class="jumbotron">
    <h1 class="display-5 text-white">Heroes store</h1>
    <p class="lead text-white">At heroes, we pledge to provide our customers with the best services they could ever find on market.</p>
    <hr class="my-4">
    <p class="text-white">With a  wide-range of friendly prices, we assure you that you won't leave until you have shopped to the fullest.</p>
    <p class="lead">
        <a class="btn btn-light btn-lg" href="#" role="button">Get Started</a>
    </p>
</div>
</template>
<script>
export default {
    name:'Home',
    data () {
      return {
      }
    }
}
</script>

<style scoped>
 .jumbotron{
     background-image: url('../assets/top-bg.jpg');
     background-size: cover;
     background-repeat: no-repeat;
 }
 .text-white{
     color:orange;
 }
</style>