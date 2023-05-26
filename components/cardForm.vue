<template>
    <div class="w-[391px] h-[508px] bg-secondaryWhite absolute left-[80px] top-[132px] rounded-[4px]">
        <h1
            class="px-[24px] pt-[32px] pb-[24px] font-fontRoboto font-semibold text-[32px] leading-[38px] text-secondaryDark">
            Réservez des
            hébergements
            et
            des activités
            uniques.
        </h1>
        <div class="px-[24px] pb-[16px]">
            <h2 class="pb-[8px] font-fontRoboto font-bold text-xs leading-[1.1667rem] uppercase text-secondaryDark">Où</h2>
            <input type="text" placeholder="Partout" class="w-[343px] h-[42px] rounded-sm"
                style="border: 1px solid #E3E3E3;">
        </div>

        <div class="px-[24px] pb-[16px] flex">
            <div>
                <h2 class="pb-[8px] font-fontRoboto font-bold text-xs leading-[1.1667rem] uppercase text-secondaryDark">
                    Arrivée</h2>
                <input class="date-pick w-[172px] h-[42px] rounded-l-sm text-[#8F8F8F]" type="date" id="date"
                    style="border: 1px solid #E3E3E3;">
            </div>
            <div>
                <h2 class="pb-[8px] font-fontRoboto font-bold text-xs leading-[1.1667rem] uppercase text-secondaryDark">
                    Départ</h2>
                <input class="date-pick w-[172px] h-[42px] rounded-r-sm text-[#8F8F8F]" type="date" id="date"
                    style="border: 1px solid #E3E3E3;">
            </div>

        </div>

        <div class="px-[24px]">
            <h2 class="pb-[8px] font-fontRoboto font-bold text-xs leading-[1.1667rem] uppercase text-secondaryDark">
                Voyageurs</h2>
            <input type="text" placeholder="Voyageurs" class="w-[343px] h-[42px] rounded-sm"
                style="border: 1px solid #E3E3E3;">
        </div>

        <div class="px-[24px] pt-[24px] flex justify-end">
            <button class="bg-primaryRed px-[32px] py-[13px] rounded-[4px] text-secondaryWhite text-[16px] font-semibold">
                Rechercher
            </button>
        </div>
    </div>
</template>

<style>
::placeholder {
    padding-left: 40px;
    font-size: 16px;
}

.date-pick {
    padding: 0 16px;
    font-size: 16px;
}
</style>