<template>
    <header class="w-full lg:w-[1366px] md:m-auto relative flex justify-center font-fontRoboto z-40">
        <div class="fixed w-full lg:w-[1366px] md:m-auto">
            <!--:class="{ 'navbar-scroll': isScrolling }-->
            <div class="w-full flex place-content-between gap-4 pt-[15.61px] navbar-scroll">
                <div class="flex">
                    <div class="px-[25.65px]">
                        <!--:class="{ 'logo-scroll': isScrolling }-->
                        <nuxt-link to="/">
                            <img class="w-[28.65px] h-[30.78px] text-primaryRed logo-scroll cursor-pointer"
                                src="~/assets/image/icon.svg" alt="">
                        </nuxt-link>
                    </div>
                    <div class="pt-2">
                        <div class="w-[200px]  md:w-[300px] lg:w-[400px] h-6 bg-gray-200 flex justify-center items-center">
                            <div
                                class="w-full h-[38px] bg-gray-100 rounded-r-full rounded-l-full border shadow-lg text-xl flex items-center justify-center py-1 space-x-2 hover:cursor-pointer px-8">
                                <input type="text" placeholder="Search"
                                    class="bg-gray-100 w-full md:w-3/4 h-3/4 focus:outline-none flex-1">

                                <button type="submit" class="rounded-full flex justify-center items-center h-6 w-6">
                                    <MagnifyingGlassIcon class="text-blue-500 h-6 w-6"></MagnifyingGlassIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:flex justify-end pr-[24px] lg:block
        ">
                    <!--{ 'text-scroll': isScrolling }-->
                    <ul
                        class="hidden list md:flex space-x-[24px] text-secondaryDark font-fontRoboto font-semibold text-xs lg:text-base leading-[1rem] mt-[7px] cursor-pointer">
                        <NuxtLink to="/">
                            <li>Home</li>
                        </NuxtLink>
                        <li>EUR €</li>
                        <li>Devenir hôte</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>

    <div>
        <slot />
    </div>
</template>

<script>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
export default {
    data() {
        return {
            isScrolling: false
        };
    },
    components: {
        MagnifyingGlassIcon
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 0) {
                this.isScrolling = true;
            } else {
                this.isScrolling = false;
            }
        },


    }
};
</script>

<style>
.navbar-scroll {
    background-color: white;
    padding-bottom: 15px;

}

.text-scroll {
    color: black;
}

.logo-scroll {
    background-color: #FF5A5F;
    border-radius: 50%;
    width: 38px;
    height: 40px;
}
</style>