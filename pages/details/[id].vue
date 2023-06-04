<template>
    <div class="container lg:max-w-[1366px] lg:mx-auto lg:px-4 py-8 md:py-20">
        <div class="font-semibold text-3xl pb-2 md:pb-6">
            Details Product
        </div>
        <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 pb-2 md:pb-6">
            <h2 class="text-xl md:pr-4">Category: {{ detailsProucts.category }}</h2>
            <div class="flex space-x-4">
                <h2 class="text-xl">Bagikan</h2>
                <h2 class="text-xl">Simpan</h2>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 w-full md:w-[650px] lg:w-[1120px] pb-4 md:pb-12">
            <div class="w-full h-[410px] bg-secondaryGray rounded-l-lg">
                <img class="w-full h-full bg-secondaryGray rounded-l-lg object-cover" :src="imageOne" alt="" />
            </div>
            <div class="grid grid-cols-2 gap-1">
                <img class="w-full h-[196px] bg-secondaryGray object-cover" :src="imageTwo" alt="" />
                <img class="w-full h-[196px] bg-secondaryGray rounded-r-lg object-cover" :src="imageTree" alt="" />
                <img class="w-full h-[196px] bg-secondaryGray object-cover" :src="imageFour" alt="" />
                <img class="w-full h-[196px] bg-secondaryGray rounded-r-lg object-cover" :src="imageFive" alt="" />
            </div>
        </div>

        <div class="flex flex-col lg:flex-row lg:justify-center">
            <div class="lg:w-[600px] xl:w-[650px]">
                <div class="font-semibold text-3xl pb-2">
                    {{ detailsProucts.title }}
                </div>
                <div class="flex flex-col md:flex-row space-x-1 text-2xl border-b-2 pb-2 md:pb-6">
                    <h2 class="text-2xl">Stock: {{ stock }} ·</h2>
                    <h2 class="text-2xl">{{ detailsProucts.brand }} ·</h2>
                    <h2 class="text-2xl">rating: {{ detailsProucts.rating }}</h2>
                </div>
                <div class="container md:w-[653px] md:h-[261px] pt-2 md:pt-4">
                    <p class="w-full">{{ detailsProucts.description }}</p>
                </div>
            </div>
            <div class="container pt-4 lg:pt-0 md:ml-4 lg:w-[500px] md:w-[372px] h-[296px] shadow-2xl rounded-lg pb-20">
                <div class="h-[56px] px-[25px] py-[26px]">
                    <h1 class="text-2xl font-semibold">
                        ${{ discountVal }}
                        <span class="text-lg font-normal line-through">${{ detailsProucts.price }}</span>
                        <span class="text-sm font-normal bg-primaryRed text-secondaryWhite rounded-lg py-1 px-1">
                            {{ detailsProucts.discountPercentage }}%
                        </span>
                    </h1>
                    <h1 class="text-2xl font-semibold px-2 py-2">total: ${{ needToPayVal }}</h1>
                    <div class="pt-2">
                        <DropDownBtn></DropDownBtn>
                    </div>
                    <div class="py-2">
                        <div class="container m-0 flex justify-center px-2 md:px-5">
                            <button @click="handleCountMin" type="submit"
                                class="btn btn-default inline-block bg-secondaryGray text-white py-1 rounded-xl px-3">
                                -
                            </button>
                            <span>
                                <h1 class="px-2 py-1 rounded-sm">
                                    {{ count }}
                                </h1>
                            </span>
                            <button @click="handleCountPlus" type="submit"
                                class="btn btn-default inline-block bg-primaryRed text-white py-1 rounded-xl px-3">
                                +
                            </button>
                        </div>
                    </div>
                    <div class="h-[56px] w-[323px] pt-2 m-auto">

                        <!--
                            <SummaryComponent class="" :count="count" />
                            -->
                        <button @click="handlePesanClick"
                            class="h-12 w-full bg-primaryRed rounded-lg text-secondaryWhite font-semibold text-xl ">
                            Pesan
                        </button>

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
            count: 1,
            detailsProucts: [],
            discount: null,
            priceItem: null,
            discountVal: null,
            //needToPay: 0,
            //needToPayVal: 0,
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

        handleCountPlus() {
            this.count++
            this.needToPay = this.handlePriceCount(this.discount, this.count);
            this.needToPayVal = this.needToPay.toFixed(2)
            this.stock = this.handleStockCount(this.stockCount, this.count)
        },

        handleCountMin() {
            if (this.count > 1) {
                this.count--;
                this.needToPay = this.handlePriceCount(this.discount, this.count);
                this.needToPayVal = (this.needToPay * 1).toFixed(2)
                this.stock = this.handleStockCount(this.stockCount, this.count)
            }
        },

        handlePriceCount(priceItem, pcs) {
            //let thePayedPrice = 0
            return priceItem * pcs
        },

        handleStockCount(stocItem, pcs) {
            return stocItem - pcs
        },
        handlePesanClick(pcs) {
            this.$router.push({
                path: `/summary/example`,
                props: {
                    count: pcs,
                },
            });
        },

    },

    async mounted() {
        const { id } = useRoute().params;
        //funtion call 
        this.detailsProucts = await this.getPost(id);


        //object calll variable
        this.imageOne = this.detailsProucts.images[0];
        this.imageTwo = this.detailsProucts.images[1];
        this.imageTree = this.detailsProucts.images[2];
        this.imageFour = this.detailsProucts.images[3];
        this.imageFive = this.detailsProucts.images[4];

        //discount 
        const prices = this.detailsProucts.price
        const persetage = this.detailsProucts.discountPercentage
        this.discount = this.discountPrice(prices, persetage)
        this.discountVal = this.discount.toFixed(2)

        const pcs = this.count;
        const priceItem = this.discount;
        this.needToPay = this.handlePriceCount(priceItem, pcs);
        this.needToPayVal = (this.needToPay * 1).toFixed(2);

        //price handel
        this.stockCount = this.detailsProucts.stock
        this.stock = this.detailsProucts.stock - 1;
        //this.needToPayVal = this.detailProducts.price;
        // const pcs = this.count
        // const priceItem = this.discount
        // this.needToPay = this.handleStockCount(priceItem, pcs)

    },
};

</script>

 