<template>
<div>
<footer class="footer mt-auto py-3">
    <span class="text-muted">Made by Lucas Rojas. 
        <a href="https://github.com/lucaasrojas" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="iconFooter"></font-awesome-icon></a>
        <a href="https://www.linkedin.com/in/lucaasrojas/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" class="iconFooter"></font-awesome-icon></a>
        </span>
</footer>
</div>
</template>

<script>
export default {

}
</script>

<style>
.footer {
    background: #f5f5f5;
    position: fixed;
left: 0;
bottom: 0;
right: 0;
width: 100%;
height: 60px;
}

.iconFooter {
    margin-left: 0.5rem;
    font-size: 1.5rem
}
</style>