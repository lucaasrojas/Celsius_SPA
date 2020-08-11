<template>
    <div>
        <button type="button" class="btn btn-dark mx-2" @click="changeAccount('boywithtools')">Crafting</button>
        <button type="button" class="btn btn-dark mx-2" @click="changeAccount('boytakingphotos')">Photography</button>
        <instagram v-if="accountToFetch !== ''" :account="accountToFetch" class="my-5"/>
    </div>
</template>

<script>
import InstagramPosts from '@/components/Instagram.vue'

export default {
    components: {
        instagram: InstagramPosts,
	},
    data(){
        return {
            accountToFetch: ''
        }
    },
    methods:{
        changeAccount(el) {
            this.accountToFetch = el;
        }
    },
    mounted() {
        const langData = this.$i18n.messages[this.$i18n.locale].hobbies;
		this.$emit('jumbotronData', {mainTitle: langData.mainTitle, mainDescription: langData.mainDescription});

		this.bus.$on('locale-changed', () => {
			const langData = this.$i18n.messages[this.$i18n.locale].hobbies;
			this.$emit('jumbotronData', {mainTitle: langData.mainTitle, mainDescription: langData.mainDescription});
		})
    }
}
</script>

<style>

</style>