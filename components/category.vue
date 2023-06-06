<template>
    <div class="container">
        <h1 class="pb-6 font-fontRoboto font-semibold text-[24px] text-secondaryDark hidden">Explorer Airbnb
        </h1>
        <button v-if="isShow !== true"
            class="animate-pulse card py-4 pl-10 pr-8 bg-secondaryWhite rounded-r font-fontRoboto font-bold lg:text-[14px] md:text-xs leading-[1.2] uppercase flex items-center"
            @click="handleClikcs">Filter<img class="ml-5 w-2 h-3" src="~/assets/image/arrowR.svg" alt=">" />
        </button>
        <div class="relative flex lg:shadow-2xl lg:rounded-md bg-secondaryWhite">
            <div v-if="isShow !== false"
                class="absolute top-[-140px] bg-secondaryWhite grid grid-cols-1 w-[200px] h-[200px] lg:pl-8 lg:place-content-center md:w-[840px] lg:w-full overflow-y-auto lg:h-[300px] lg:overflow-y-hidden lg:grid-cols-5 xl:grid-cols-6 md:grid-cols-3 gap-2 py-3 rounded-xl">
                <div v-for="product in category"
                    class="card flex w-[155px] h-[30px] md:h-[45px] rounded-xl items-center shadow-2xl border-[1px] filter drop-shadow-sm">
                    <nuxt-link :to="`category/${product}`">
                        <div class="pl-4 md:content-center h-[45px] pt-3 cursor-pointer">
                            <h2 class="font-fontRoboto w-[155px] font-semibold text-sm leading-5 cursor-pointer">{{ product
                            }}
                            </h2>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <button v-if="isShow !== false"
                class="absolute card border top-[-140px] right-1 bg-secondaryWhite rounded font-fontRoboto font-bold lg:text-[12px] px-1 py-1 md:text-xs leading-[1.2] uppercase flex items-center"
                @click="handleClikcs">CLOSE<span class="text-primaryRed ml-2">X</span>
            </button>
            <div v-if="isShow !== false" class="pl-4 h-[200px] lg:hidden flex flex-col">
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
            isShow: false,
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
            //console.log(category[0])
            return category;
        },

        handleClikcs() {
            this.isShow = !this.isShow
            //console.log(this.isShow)
        }

    },
    async mounted() {
        this.category = await this.fetchData();
    },
};
</script>

