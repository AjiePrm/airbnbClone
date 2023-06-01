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
                </div>
                <div class="hidden md:flex justify-end pr-[24px] lg:block
        ">
                    <!--{ 'text-scroll': isScrolling }-->
                    <ul
                        class="hidden list md:flex space-x-[24px] text-secondaryDark font-fontRoboto font-semibold text-xs lg:text-base leading-[1rem] mt-[7px]">
                        <li>Français (FR)</li>
                        <li>EUR €</li>
                        <li>Devenir hôte</li>
                        <li>Créer son expérience</li>
                        <li>Aide</li>
                        <li>Inscription</li>
                        <li>Connexion</li>
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
export default {
    data() {
        return {
            isScrolling: false
        };
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