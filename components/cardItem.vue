<template>
    <div>
        <div class="card w-[188px] h-[371px] ">
            <div class="rounded-lg w-[188px] h-[240px]">
                <img src="~/assets/image/imageOne.svg" class="img-in-image-div">
            </div>

            <div class="font-fontRoboto py-[8px]">
                <div class="font-bold text-xs leading-[1.2] uppercase text-secondaryGray">Cayman Islands</div>
                <div class="font-fontRoboto font-bold text-base leading-[1.1875rem]">2 Night PAKAGE ALL Inclusive</div>
                <div class="font-normal text-base leading-[1.5rem] text-secondaryDark">Rp 800.000 / malam</div>
                <div class="flex text-sm leading-5 text-primaryGreeb">
                    <div class="font-bold text-[12px] leading-[14px]">4.97</div>
                    <span class="ml-1 ">
                        <StarIcon class="h-[11px] w-[11px] text-blue-500" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { StarIcon } from '@heroicons/vue/24/solid'
export default {
    components: {
        StarIcon
    }
}

</script>