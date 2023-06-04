<template>
    <div class="container mx-auto px-4 py-8 md:py-20">
        <div class="m-0">
            <div class="basket-module flex flex-col md:w-[200px] md:mx-auto space-y-3 pb-4">
                <label for="promo-code" class="text-gray-700">Enter a promotional code</label>
                <input id="promo-code" type="text" name="promo-code" maxlength="5" v-model="promoCode"
                    class="border border-gray-300 rounded px-2 py-1" />
                <button class="promo-code-cta bg-primaryRed text-secondaryWhite rounded-lg px-4 py-2"
                    @click="applyPromoCode">
                    Apply
                </button>
            </div>
            <div class="basket-labels lg:w-[1024px] lg:mx-auto">
                <ul class="md:flex hidden">
                    <li class="item item-heading w-1/3">Item</li>
                    <li class="price w-1/5">Price</li>
                    <li class="quantity w-1/5">Quantity</li>
                    <li class="subtotal w-1/5">Subtotal</li>
                </ul>
            </div>
            <div class="basket-product lg:w-[1024px] lg:mx-auto flex flex-col md:flex-row"
                v-for="(product, index) in products" :key="index">
                <div class="item w-full md:w-[43%] md:flex mt-4">
                    <div class="product-image">
                        <img src="~/assets/image/exploreOne.png" :alt="product.name" class="product-frame object-cover" />
                    </div>
                    <div class="product-details">
                        <h1>
                            <strong>
                                <span class="item-quantity">{{ product.quantity }}</span> x {{ product.name }}
                            </strong>
                        </h1>
                        <p><strong>{{ product.category }},</strong></p>
                        <p class="lg:hidden">Product price -</p>
                    </div>
                </div>
                <div class="price w-1/5">{{ product.price.toFixed(2) }}</div>
                <div class="quantity w-1/5">
                    <input type="number" v-model="product.quantity" min="1"
                        class="quantity-field border border-gray-300 rounded px-2 py-1" />
                </div>
                <div class="subtotal lg:pl-[50px] w-1/5">Subtotal- {{ (product.price * product.quantity).toFixed(2) }}</div>
                <div class="remove w-1/5">
                    <button class="text-primaryGreeb underline" @click="removeProduct(index)">Remove</button>
                </div>
            </div>
        </div>
        <div class="summary w-full md:w-[500px] lg:w-[1024px] md:mx-auto py-10">
            <div class="summary-total-items text-center text-gray-700">
                <span class="total-items">{{ getTotalItems() }}</span> Items in your Bag
            </div>
            <div class="summary-subtotal">
                <div class="subtotal-title">Subtotal</div>
                <div class="subtotal-value final-value text-right">{{ getSubtotal().toFixed(2) }}</div>
                <div class="summary-promo" v-if="promoPrice">
                    <div class="promo-title">Promotion</div>
                    <div class="promo-value final-value text-right">{{ promoPrice.toFixed(2) }}</div>
                </div>
            </div>
            <div class="summary-delivery">
                <select name="delivery-collection"
                    class="summary-delivery-selection w-full border border-gray-300 rounded px-2 py-1">
                    <option value="0" selected="selected">Select Collection or Delivery</option>
                    <option value="collection">Collection</option>
                    <option value="delivery">Delivery</option>
                </select>
            </div>
            <div class="summary-total">
                <div class="total-title">Total</div>
                <div class="total-value final-value text-right">{{ getTotal().toFixed(2) }}</div>
            </div>
            <div class="summary-checkout py-2">
                <button class="checkout-cta bg-primaryRed text-secondaryWhite rounded-lg w-full py-2"
                    @click="checkout">Checkout</button>
            </div>
        </div>
    </div>
</template>
  

<script>
export default {
    props: {
        count: {
            type: Number,
            default: 1,
        },
    },

    data() {
        console.log('props count')
        console.log(this.count)
        return {
            products: [
                {
                    name: 'Product 1',
                    image: 'product1.jpg',
                    category: 'smartphone',
                    price: 10.99,
                    quantity: this.count,
                },
            ],
            promoCode: '',
            promoPrice: null,
        };
    },
    watch: {
        count(newCount) {
            this.products.quantity = newCount;
        },
    },
    methods: {
        applyPromoCode() {
        },
        removeProduct(index) {
            this.products.splice(index, 1);
        },
        getTotalItems() {
            return this.products.reduce((total, product) => total + product.quantity, 0);
        },
        getSubtotal() {
            return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
        },
        getTotal() {
            if (this.promoPrice) {
                return this.getSubtotal() - this.promoPrice;
            }
            return this.getSubtotal();
        },
        checkout() {
            // Handle the checkout 

        },
    },
    async mounted() {

    }
};
</script>

<style>
.item-quantity {
    font-weight: bold;
}
</style>