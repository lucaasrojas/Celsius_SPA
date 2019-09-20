<template>
<div>
        <navbar></navbar>
        <div class="jumbotron">
            <div class="jumbotron-billboard backgroun-header"></div>
            <div class="container">
                <div class="row jumbotron-content">
                    <div class="col-lg-12">
                    <h1>Hi Stranger!</h1>
                        <p>
                            Let's take a trip
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
import navbar from './Navbar.vue'

export default {
    components: {
        navbar: navbar
    }
}
</script>

<style>

.jumbotron-content {margin-top:0; color: white}
.jumbotron {
  position:relative;
background-color: transparent !important;
}


</style>