<template>
    <div class="primary">
        <main class="mx-auto bg-secondaryWhite w-[800px] h-[600px] shadow-xl relative overflow-hidden z-[-2]">
            <div class="credit-cards mt-[50px] text-center">
                <i class="fab fa-credit-card"></i>
                <i class="fab fa-cc-visa"></i>
                <i class="fab fa-cc-mastercard"></i>
            </div>

            <div class="payment relative mt-[50px]">
                <div class="purchases float-left text-left ml-[180px]">
                    <div class="title text-primaryPurple">Purchases: {{ qty }}</div>
                    <div class="items text-white">
                        <div class="item">Shiping :</div>
                        <div class="item">{{ fee }}</div>
                    </div>
                </div>

                <div class="total float-right mr-[170px] text-[36px] mt-[12px]">${{ price }}</div>
            </div>

            <button
                class="pay-button w-[180px] h-[45px] leading-[45px] text-center bg-primaryRed text-secondaryWhite mx-auto rounded-[22.5px] cursor-pointer font-bold text-[16px] mt-[450px]">PAY</button>

            <div
                class="credit-card-front absolute left-[144px] top-[255px] w-[345px] h-[210px] text-secondaryWhite bg-primaryGreeb rounded-[20px] z-[10] text-[16px]">
                <div class="number mt-[50px] space-x-1 pl-1">
                    <span>0000</span>
                    <span>0000</span>
                    <span>0000</span>
                    <span>0000</span>
                </div>
                <div class="name-date mt-[70px] flex justify-between">
                    <div class="name w-[160px] ml-[36px]">Name</div>
                    <div class="date mr-[18px]">00/00</div>
                </div>
            </div>

            <div
                class="credit-card-back absolute right-[144px] top-[280px] w-[345px] h-[210px] bg-primaryPurple rounded-[20px] z-2">
                <div class="bar w-full h-[45px] bg-primaryRed mt-[20px]"></div>
                <div class="value mt-[22px] text-right">
                    <div class="text mr-[56px] text-secondaryWhite">CVV</div>
                    <div class="text"></div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    props: {
        price: String,
        fee: String,
        qty: Number
    },
}
</script>