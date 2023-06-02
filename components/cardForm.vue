<template>
    <div class="w-[391px] h-[508px] bg-secondaryWhite absolute left-[80px] top-[132px] rounded-[4px]">
        <h1
            class="px-[24px] pt-[32px] pb-[24px] font-fontRoboto font-semibold text-[32px] leading-[38px] text-secondaryDark">
            Login
        </h1>
        <div class="px-[24px] pb-[16px]">
            <h2 class="pb-[8px] font-fontRoboto font-bold text-xs leading-[1.1667rem] uppercase text-secondaryDark">Username
            </h2>
            <input type="text" placeholder="type here ..." class="w-[343px] h-[42px] rounded-sm"
                style="border: 1px solid #E3E3E3;">
        </div>


        <div class="px-[24px]">
            <h2 class="pb-[8px] font-fontRoboto font-bold text-xs leading-[1.1667rem] uppercase text-secondaryDark">
                Password</h2>
            <input type="password" placeholder="type here ..." class="w-[343px] h-[42px] rounded-sm"
                style="border: 1px solid #E3E3E3;">
        </div>

        <div class="px-[24px] pt-[24px] flex justify-end">
            <button class="bg-primaryRed px-[32px] py-[13px] rounded-[4px] text-secondaryWhite text-[16px] font-semibold">
                Login
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