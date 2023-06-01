<template>
    <div class="w-full flex place-content-between gap-4" :class="{ 'navbar-scroll': isScrolling }">
        <div class="flex">
            <div class="px-[25.65px]">
                <img class="w-[28.65px] h-[30.78px] text-primaryRed " :class="{ 'logo-scroll': isScrolling }" src="~/assets/image/icon.svg" alt="">
            </div>
        </div>
        <div class="hidden md:flex justify-end pr-[24px] lg:block
        ">
            <ul
                class="hidden list md:flex space-x-[24px] text-secondaryWhite font-fontRoboto font-medium text-xs lg:text-base leading-[1rem] mt-[7px] " :class="{ 'text-scroll': isScrolling }">
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
    }
  }
};
</script>

<style>
.navbar-scroll {
  background-color: white;
  padding-bottom: 15px;
  z-index: 999999;
}

.text-scroll{
    color: black;
}

.logo-scroll{
    background-color: #FF5A5F;
    border-radius: 50%;
    width: 38px;
    height: 40px;
}
</style>