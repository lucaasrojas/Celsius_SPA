<template>
        <div class="jumbotron">
            <div class="jumbotron-billboard"></div>
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
</template>

<script>
export default {

}
</script>

<style>
.jumbotron-billboard {
    margin-bottom: 0px;
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
    position:absolute;
    top:0;
    left:0;
    filter: opacity(0.5);
    background-color: black;
}
.jumbotron-content {margin-top:0; color: white}
.jumbotron {
  position:relative;
background-color: transparent !important;
}
</style>