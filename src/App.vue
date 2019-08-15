<template>
  <div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    >
  <NavBar/>
  <Home/>
  <LoginPage/>
  </div>
</template>

<script>
import Home from './components/HomePage'
import NavBar from './components/NavigationBar'
import LoginPage from './components/LoginPage'

export default {
  name: 'app',
  components: {
    Home,
    NavBar,
    LoginPage,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
