<template>
    <div class="container mx-auto px-4 py-[150px]">
        <div class="basket">
            <div class="basket-module flex flex-col w-[200px] m-auto space-y-3 pb-[24px]">
                <label for=" promo-code" class="text-gray-700">Enter a promotional code</label>
                <input id="promo-code" type="text" name="promo-code" maxlength="5" v-model="promoCode"
                    class="border border-gray-300 rounded px-2 py-1" />
                <button class="promo-code-cta bg-primaryRed text-secondaryWhite rounded-lg px-4 py-2"
                    @click="applyPromoCode">Apply</button>
            </div>
            <div class="basket-labels w-[1024px] m-auto">
                <ul class="flex">
                    <li class="item item-heading w-2/5">Item</li>
                    <li class="price w-1/5">Price</li>
                    <li class="quantity w-1/5">Quantity</li>
                    <li class="subtotal w-1/5">Subtotal</li>
                </ul>
            </div>
            <div class="basket-product w-[1024px] m-auto" v-for="(product, index) in products" :key="index">
                <div class="item w-2/5">
                    <div class="product-image">
                        <img src="~/assets/image/exploreOne.png" :alt="product.name" class="product-frame" />
                    </div>
                    <div class="product-details">
                        <h1>
                            <strong>
                                <span class="item-quantity">{{ product.quantity }}</span> x {{ product.name }}
                            </strong>
                        </h1>
                        <p><strong>{{ product.color }}, Size {{ product.size }}</strong></p>
                        <p>Product Code - {{ product.code }}</p>
                    </div>
                </div>
                <div class="price w-1/5">{{ product.price.toFixed(2) }}</div>
                <div class="quantity w-1/5">
                    <input type="number" v-model="product.quantity" min="1"
                        class="quantity-field border border-gray-300 rounded px-2 py-1" />
                </div>
                <div class="subtotal w-1/5">{{ (product.price * product.quantity).toFixed(2) }}</div>
                <div class="remove w-1/5">
                    <button class="text-red-500 underline" @click="removeProduct(index)">Remove</button>
                </div>
            </div>
        </div>
        <aside class="summary w-[1024px] m-auto">
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
            <div class="summary-delivery w-[1024px] m-auto">
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
            <div class="summary-checkout">
                <button class="checkout-cta bg-gray-800 text-white w-full py-2" @click="checkout">Checkout</button>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    name: 'Product 1',
                    image: 'product1.jpg',
                    color: 'Red',
                    size: 'S',
                    code: 'PRD1',
                    price: 10.99,
                    quantity: 1,
                },
            ],
            promoCode: '',
            promoPrice: null,
        };
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
};
</script>

<style>
.item-quantity {
    font-weight: bold;
}
</style>