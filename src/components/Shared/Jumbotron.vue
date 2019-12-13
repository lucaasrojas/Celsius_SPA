<template>
<div>
        <div class="jumbotron">
            <div class="row jumbotron-content">
                <div class="col-lg-12 mx-auto my-auto">
                    <p class="mainTitle">{{mainTitle}}</p>
                        <p class="mainSubtitle">
                            {{mainDescription}}
                        </p>
                </div>
            </div>
        </div>
        </div>
</template>

<script>

export default {
    props: ['mainTitle', 'mainDescription']
}
</script>

<style>

.jumbotron-content {
    color: white;
    height: 100%;
    width: 100%;

}
.jumbotron {
    height: 300px;
    background-image: linear-gradient(to bottom, rgba(148, 148, 148, 0.6) 0%,rgba(148,148,148,0.9) 100%), url('https://images.unsplash.com/photo-1523457938575-6e66e08ff567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1457&q=80');
    background-size: fill;
    background-position: center;
    margin: 0;
    padding: 1rem !important;   
   
}

.mainTitle {
    font-size: 3em;
}

.mainSubtitle {
    font-size: 1.5em;
}

</style>