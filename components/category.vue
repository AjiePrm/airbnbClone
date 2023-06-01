<template>
    <div class="container lg:px-20 px-6 pt-[88px]">
        <h1 class="pb-6 font-fontRoboto font-semibold text-[24px] text-secondaryDark">Explorer Airbnb</h1>
        <div class="flex">
            <div
                class=" grid grid-cols-1 w-[200px] h-[200px] lg:pl-8 place-content-center md:w-[840px] lg:w-full overflow-y-auto lg:h-[300px] lg:overflow-y-hidden lg:grid-cols-5 md:grid-cols-3 gap-2 border-[1px] py-3 rounded-xl">
                <div v-for="product in category"
                    class="card flex w-[155px] h-[30px] md:h-[45px] rounded-xl items-center shadow-2xl border-[1px] filter drop-shadow-sm">
                    <div class="pl-4 content-center">
                        <h2 class="font-fontRoboto font-semibold text-sm leading-5">{{ product }}</h2>
                    </div>
                </div>
            </div>
            <div class="pl-4 h-[200px] lg:hidden flex flex-col">
                <div class="pt-2">
                    <ChevronDoubleUpIcon class="h-[21px] w-[21px] text-blue-500" />
                </div>
                <div class="pt-2 items-end">
                    <ChevronDoubleDownIcon class="h-[21px] w-[21px] mt-[134px] text-blue-500 self-end" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ChevronDoubleUpIcon } from '@heroicons/vue/24/solid'
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/solid'
export default {
    data() {
        return {
            category: [],
        };
    },
    components: {
        ChevronDoubleUpIcon,
        ChevronDoubleDownIcon,
    },
    methods: {
        async fetchData() {
            const response = await fetch(`https://dummyjson.com/products/categories`);
            this.data = await response.json();
            const category = this.data;
            console.log(category[0])
            return category;
        },

    },
    async mounted() {
        this.category = await this.fetchData();
    },
};
</script>