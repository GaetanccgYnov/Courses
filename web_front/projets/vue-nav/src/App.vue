<template>
  <div id="app">
    <Header />
    <Nav />
    <RouterView />
    <Sidebar />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Sidebar,
    Nav
  }
}
</script>
