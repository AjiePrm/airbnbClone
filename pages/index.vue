<template>
    <div
        class="w-full lg:w-[1366px] md:m-auto relative flex justify-center bg-[url('~/assets/image/bghero.svg')] h-[750px] font-fontRoboto">
        <!--
        <Header class="fixed w-full lg:w-[1366px] md:m-auto pt-[15.61px]"></Header>
        -->
        <CardForm class="hidden md:block"></CardForm>
    </div>

    <div class="w-full lg:w-[1366px] md:m-auto">
        <Category></Category>
    </div>
    <div class="w-full lg:w-[1366px] md:m-auto">
        <AirbnbPlus></AirbnbPlus>
    </div>
    <div class="w-full lg:w-[1366px] md:m-auto">
        <CardItem :products="products" :mainTitle="'Découvrez les aventures Airbnb'"
            :underTitle="'Voyages de plusieurs jours organisés par des experts locaux avec activités, repas et logements compris'">
        </CardItem>
    </div>
    <!--
    <div class="w-full lg:w-[1366px] md:m-auto">
        <Accommodations></Accommodations>
    </div>
    <div class="w-full lg:w-[1366px] md:m-auto">
        <CardItem :products="nextProducts" :mainTitle="'Expériences très bien notées'"
            :underTitle="'Voyages de plusieurs jours organisés par des experts locaux avec activités, repas et logements compris'">
        </CardItem>
    </div>
    <div class="w-full lg:w-[1366px] md:m-auto">
        <Destination></Destination>
    </div>
    -->
</template>

<script>
import Accommodations from '~/components/accommodations.vue';
import CardItem from '~/components/cardItem.vue'
export default {
    data() {
        return {
            imgLoading: null,
            data: null,
            index: 1,
            products: {},
            nextProduct: [],
        };
    },
    methods: {
        async fetchData() {
            const response = await fetch(`https://dummyjson.com/products`);
            this.data = await response.json();
            //console.log(this.data.products[0].title)
            const products = this.data.products;
            //console.log(products)
            return products;
        },

    },
    components: {
        CardItem,
    },
    async mounted() {
        this.products = await this.fetchData();
        this.nextProducts = this.products.slice(6)
        //if (data.products && data.products.length > 0) {
        //this.productTitle = this.data.products[0].title;
        // }
        //console.log(productTitle)
    },
};

</script>