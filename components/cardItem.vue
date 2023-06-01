<template>
    <div class="container px-6 lg:px-20 pt-[88px]">
        <div class="pb-6">
            <h1 class="font-fontRoboto font-semibold text-[24px] text-secondaryDark pb-2">{{ mainTitle }}
            </h1>
            <h2 class="lg:w-[581px] w-[300px] font-fontRoboto font-light text-base leading-5 text-secondaryGray">{{
                underTitle }}</h2>
        </div>
        <div class="grid xl:grid-cols-6 gap-4 md:grid-cols-2 grid-cols-1  ">
            <!--v-for="product in firstFiveProducts"-->
            <div v-for="product in products" :key="product.id" class="card w-[188px] h-[371px]">
                <nuxt-link :to="`/details/${product.id}`">
                    <div class="rounded-lg w-[278px] h-[242px]  md:w-[188px] md:h-[240px]">
                        <img :src="product.thumbnail" class="object-cover inline-block rounded-lg w-[188pxlx] h-[240px]">
                    </div>

                    <div class="font-fontRoboto py-[8px]">
                        <div class="font-bold text-xs leading-[1.2] uppercase text-secondaryGray">{{ product.category }}
                        </div>
                        <div
                            class="h-[38px] font-fontRoboto font-bold text-base leading-[1.1875rem] pb-2 pt-1 overflow-hidden">
                            {{ product.title
                            }}
                        </div>
                        <div class="font-normal text-base leading-[1.5rem] text-secondaryGray pb-[5px]">$ {{ product.price
                        }}
                        </div>
                        <div class="flex text-sm leading-5 text-primaryGreeb">
                            <div class="font-bold text-[12px] leading-[14px]">{{ product.rating }}</div>
                            <span class="ml-1 ">
                                <StarIcon class="h-[11px] w-[11px] text-blue-500" />
                            </span>
                        </div>
                    </div>
                </nuxt-link>
            </div>


        </div>
    </div>
</template>

<script>
import { StarIcon } from '@heroicons/vue/24/solid'

export default {
    components: {
        StarIcon
    },
    props: {
        products: {
            type: Array,
            required: true
        },
        mainTitle: String,
        underTitle: String,
    },
    computed: {
        //firstFiveProducts() {
        //    if (this.products && this.products.length > 0) {
        //        return this.products.slice(0, 6);
        //    }
        //    return [];
        //}
    }
};

</script>

<style>
.card {
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.1);
}
</style>