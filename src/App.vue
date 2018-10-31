<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- <Quotes msg="Simplicity is the ultimate complexity"/> -->
        <QuoteListComponent></QuoteListComponent>
    </div>
</template>

<script>
    import Quotes from './components/Quotes'
    import QuoteNewComponent from './components/quotes/quote-new/index'
    import QuoteListComponent from './components/quotes/quote-list/index'

    import Vue from 'vue'
    import VueMaterial from 'vue-material'
    import 'vue-material/dist/vue-material.min.css'

    Vue.use(VueMaterial)

    export default {
        name: 'app',
        components: {
            Quotes,
            QuoteNewComponent,
            QuoteListComponent


        }
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
