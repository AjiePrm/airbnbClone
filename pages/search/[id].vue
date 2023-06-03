<template>
    <div class="container lg:w-[1366px] px-[34px] m-auto py-16">
        <div class="w-full lg:w-[1366px] md:m-auto">
            <CardItem :products="categoryProducts.products" :mainTitle="'Result for'" :underTitle="categoryId">
            </CardItem>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categoryProducts: {},
            categoryId: null,
        };
    },

    methods: {
        async getPost(id) {
            const response = await fetch(`https://dummyjson.com/products/search?q=${id}`);
            this.details = await response.json();
            const categoryProducts = this.details;
            console.log(categoryProducts.products)
            return categoryProducts;
        },
    },

    async mounted() {
        const { id } = useRoute().params;
        this.categoryId = id;
        this.categoryProducts = await this.getPost(id);

    },
};
</script>