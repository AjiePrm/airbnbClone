<template>
    <div class="w-full px-6 lg:px-20 pt-[88px] pb-6">
        <h1 class="font-fontRoboto font-semibold text-[24px] text-secondaryDark pb-2">Explore</h1>
        <h2 class="font-fontRoboto font-light text-base leading-5 text-secondaryGray">A selection of category checked
            according to quality and design criteria</h2>
    </div>
    <div class="w-full md:m-auto flex items-center justify-center xl:px-20 px-6">
        <div
            class="relative lg:w-[1206px] w-full h-[290px] md:h-[310px] xl:px-[80px] bg-[url('~/assets/image/bnbPlus.png')] bg-cover rounded">
            <div class="pt-[65.87px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img class="w-[104.5px] h-[112.27px]" src="~/assets/image/icon.svg" alt="logo">
            </div>
            <div class="absolute container top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Category></Category>
            </div>
        </div>
    </div>
</template>

