<template>
    <div class="w-6/12 m-auto">
        <div class="primary">
            <main class="mx-auto bg-secondaryWhite w-[800px] h-[600px] shadow-xl relative overflow-hidden z-[-2]">
                <div class="credit-cards mt-[50px] text-center">
                    <i class="fab fa-credit-card"></i>
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-mastercard"></i>
                </div>

                <div class="payment relative mt-[50px]">
                    <div class="purchases float-left text-left ml-[180px]">
                        <div class="title text-primaryPurple">Purchases: {{ products[0].quantity }} items</div>
                        <div class="items text-white">
                            <div class="item">Shipping:</div>
                            <div class="item">{{ products[0].shippingFee }}</div>
                        </div>
                    </div>

                    <div class="total float-right mr-[170px] text-[36px] mt-[12px]">${{ products[0].price }}</div>
                </div>

                <button
                    class="pay-button w-[180px] h-[45px] leading-[45px] text-center bg-primaryRed text-secondaryWhite mx-auto rounded-[22.5px] cursor-pointer font-bold text-[16px] mt-[400px]">PAY</button>

                <div
                    class="credit-card-front absolute left-[144px] top-[255px] w-[345px] h-[210px] text-secondaryWhite bg-primaryGreeb rounded-[20px] z-[10] text-[16px]">
                    <div class="number mt-[50px] space-x-1 pl-1">
                        <span>0000</span>
                        <span>0000</span>
                        <span>0000</span>
                        <span>0000</span>
                    </div>
                    <div class="name-date mt-[70px] flex justify-between">
                        <div class="name w-[160px] ml-[36px]">{{ products[0].name }}</div>
                        <div class="date mr-[18px]">{{ products[0].date }}</div>
                    </div>
                </div>

                <div
                    class="credit-card-back absolute right-[144px] top-[280px] w-[345px] h-[210px] bg-primaryPurple rounded-[20px] z-2">
                    <div class="bar w-full h-[45px] bg-primaryRed mt-[20px]"></div>
                    <div class="value mt-[22px] text-right">
                        <div class="text mr-[56px] text-secondaryWhite">CVV</div>
                        <div class="text text-secondaryWhite pr-5">{{ products[0].cvv }}</div>
                    </div>
                </div>

            </main>
            <div>
                <p class="text-center">this is the end of the simulation </p>
                <NuxtLink to="/">
                    <p class="text-center text-primaryGreeb underline">contionue shopping ?</p>
                </NuxtLink>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        const productsCount = this.$route.query.quantity;
        const productsPrice = this.$route.query.totalPrice;
        console.log(productsPrice)
        const productFee =
            this.$route.query.shipingFee === '10'
                ? 'regular'
                : this.$route.query.shipingFee === '20'
                    ? 'express'
                    : '0';

        return {
            products: [
                {
                    price: productsPrice,
                    quantity: productsCount,
                    shippingFee: productFee,
                    name: 'Jhon Cena', // Replace with the appropriate name value
                    date: '12/24', // Replace with the appropriate date value
                    cvv: '123', // Replace with the appropriate CVV value
                },
            ],
        };
    },
};
</script>
  