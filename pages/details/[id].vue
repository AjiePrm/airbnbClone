<template>
    <div class="container lg:w-[1366px] px-[34px] m-auto py-16">
        <div class="font-semibold text-3xl pb-[6px]">
            Detail Product
        </div>
        <div class="flex space-x-4 pb-6">
            <h2 class="text-xl pr-[500px] ">Category : {{ detailsProucts.category }}</h2>
            <h2 class="text-xl">Bagikan</h2>
            <h2 class="text-xl">Simpan</h2>
        </div>
        <div class="flex m-auto space-x-2 w-[1120px] h-[516px] pb-12">
            <div class="w-[560px] h-[410px] bg-secondaryGray rounded-l-lg">
                <img class="w-[560px] h-[410px] bg-secondaryGray rounded-l-lg object-cover" :src="imageOne" alt="" />
            </div>
            <div class="grid gap-1 grid-cols-2 w-[650px] h-[422px]">
                <img class="w-[272px] h-[196px] bg-secondaryGray object-cover" :src="imageTwo" alt="" />
                <img class="w-[272px] h-[196px] bg-secondaryGray rounded-r-lg object-cover" :src="imageTree" alt="" />
                <img class="w-[272px] h-[196px] bg-secondaryGray object-cover" :src="imageFour" alt="" />
                <img class="w-[272px] h-[196px] bg-secondaryGray rounded-r-lg object-cover" :src="imageFive" alt="" />
            </div>
        </div>
        <div class="flex justify-center">
            <div>
                <div class="font-semibold text-3xl pb-[6px]">
                    {{ detailsProucts.title }}
                </div>

                <div class="flex space-x-1 text-2xl border-b-2 pb-[26px]">
                    <h2 class="text-2xl"> Stock: {{ detailsProucts.stock }} · </h2>
                    <h2 class="text-2xl"> {{ detailsProucts.brand }} · </h2>
                    <h2 class="text-2xl"> rating: {{ detailsProucts.rating }} </h2>
                </div>

                <div class="w-[653px] h-[261px] pt-4">
                    <p class="w-full">{{ detailsProucts.description }}</p>
                </div>
            </div>

            <div class="ml-[93px] w-[372px] h-[276px] shadow-2xl rounded-lg">
                <div class="h-[56px] px-[25px] py-[26px]">

                    <h1 class="text-2xl font-semibold">${{ discountVal }} <span class="text-lg font-normal line-through">${{
                        detailsProucts.price }}</span> <span
                            class="text-sm font-normal bg-primaryRed text-secondaryWhite rounded-lg py-1 px-1">{{
                                detailsProucts.discountPercentage }}%</span></h1>

                    <div class="pt-4">
                        <button class="border-spacing-1 border h-[56px] w-[323px] rounded-lg">Chart ></button>
                    </div>
                    <div class="h-[56px] w-[323px] pt-4">
                        <button
                            class="h-12 w-[323px] bg-primaryRed rounded-lg text-secondaryWhite font-semibold text-xl">Pesan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            detailsProucts: [],
            discount: null,
            imageOne: null,
            imageTwo: null,
            imageTree: null,
            imageFour: null,
            imageFive: null
        };
    },
    methods: {
        async getPost(id) {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            this.details = await response.json();
            const detailProducts = this.details;
            console.log(detailProducts.category);
            console.log(detailProducts.images)
            return detailProducts;
        },

        discountPrice(price, persetage) {
            let discount
            let discountVal = persetage / 100
            let priceCut = price * discountVal
            return discount = price - priceCut
        },

    },

    async mounted() {
        const { id } = useRoute().params;
        this.detailsProucts = await this.getPost(id);
        this.imageOne = this.detailsProucts.images[0];
        this.imageTwo = this.detailsProucts.images[1];
        this.imageTree = this.detailsProucts.images[2];
        this.imageFour = this.detailsProucts.images[3];
        this.imageFive = this.detailsProucts.images[4];
        const prices = this.detailsProucts.price
        const persetage = this.detailsProucts.discountPercentage
        this.discount = this.discountPrice(prices, persetage)
        this.discountVal = this.discount.toFixed(2)

    },
};

</script>

 