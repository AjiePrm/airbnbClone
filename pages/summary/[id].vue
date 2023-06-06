<template>
  <div class="container mx-auto px-4 py-8 md:py-20">
    <div class="m-0">
      <div class="basket-module flex flex-col md:w-[200px] md:mx-auto space-y-3 pb-4">
        <label for="promo-code" class="text-gray-700">Enter a promotional code</label>
        <input id="promo-code" type="text" name="promo-code" maxlength="5" v-model="promoCode"
          class="border border-gray-300 rounded px-2 py-1" />
        <button class="promo-code-cta bg-primaryRed text-secondaryWhite rounded-lg px-4 py-2" @click="applyPromoCode">
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
      <div class="basket-product lg:w-[1024px] lg:mx-auto flex flex-col md:flex-row" v-for="product in products"
        :key="index">
        <div class="item w-full md:w-[43%] md:flex mt-4">
          <div class="product-image w-[200px] object-cover">
            <img :src="product.image" :alt="product.name" class="product-frame object-cover w-[200px] " />
          </div>
          <div class="product-details">
            <h1>
              <strong>
                <span class="item-quantity">{{ product.quantity }}</span>
                x {{ product.name }}
              </strong>
            </h1>
            <p><strong>{{ product.category }}</strong></p>
            <p class="lg:hidden">Product price -</p>
          </div>
        </div>
        <div class="price w-1/5">{{ formatPrice(product.price) }}</div>
        <div class="quantity w-1/5">
          <input type="number" v-model="product.quantity" min="1"
            class="quantity-field border border-gray-300 rounded px-2 py-1" />
        </div>
        <div class="subtotal lg:pl-[50px] w-1/5">
          <span class="lg:hidden">Subtotal -</span> {{ formatPrice(product.price * product.quantity) }}
        </div>
        <div class="remove w-1/5">
          <button class="text-primaryGreeb underline" @click="removeProduct(index)">
            Remove
          </button>
        </div>
      </div>
    </div>
    <div class="summary w-full md:w-[500px] lg:w-[1024px] md:mx-auto py-10">
      <div class="summary-total-items text-center text-gray-700 border-t-2">
        <span class="total-items">{{ getTotalItems() }}</span> Items in your Bag
      </div>
      <div class="summary-subtotal w-[200px]">
        <div class="subtotal-title border-b-2">Subtotal</div>
        <div class="subtotal-value final-value text-right">
          item : ${{ formatPrice(getSubtotal()) }}
        </div>
        <div class="subtotal-value final-value text-right">
          10% tax : ${{ (formatPrice(getSubtotal()) * 0.10).toFixed(2) }}
        </div>
        <div class="subtotal-value final-value text-right">
          shipping fee: ${{ deliveryPrice }}
        </div>
        <div class="summary-promo" v-if="promoPrice">
          <div class="promo-title">Promotion</div>
          <div class="promo-value final-value text-right">
            {{ formatPrice(promoPrice) }}
          </div>
        </div>
      </div>
      <div class="subtotal-title border-t-2 mt-2 pt-2">Select shipping</div>
      <div v-if="isAlert !== null">
        <p class="text-primaryRed">please select your shipping</p>
      </div>
      <div class="summary-delivery w-2/4 py-6">
        <select v-model="selectedDelivery" @change="updateTotalPrice" name="delivery-collection"
          class="summary-delivery-selection w-full border border-gray-300 rounded px-2 py-1">
          <option value="reguler">Reguler</option>
          <option value="express">Express</option>
        </select>
      </div>
      <div class="summary-total w-11">
        <div class="total-title">Total :</div>
        <div class="total-value final-value text-right">
          ${{ total }}
        </div>
      </div>
      <div class="summary-checkout py-2 lg:m-auto lg:w-2/6 ">
        <button class="checkout-cta bg-primaryRed text-secondaryWhite rounded-lg w-full py-2" @click="handleCheckout">
          Checkout
        </button>
      </div>
      <div class="summary-checkout py-2 lg:m-auto lg:w-2/6">
        <NuxtLink to="/login"></NuxtLink>
        <button class="checkout-cta bg-primaryRed text-secondaryWhite rounded-lg w-full py-2">
          log in
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Count: {
      type: Number,
      // default: productsCount,
    },
  },

  data() {
    console.log('props count');
    //const productsCount = this.$route.query.quantity;
    //const productsName = this.$route.query.name;
    //const productsPrice = this.$route.query.price;
    //const productImage = this.$route.query.image;
    //const productCategory = this.$route.query.category;

    return {
      products: [


      ], // Initialize the products array as an empty array
      selectedDelivery: '0',
      //deliveryPrice: 0,
      promoCode: '',
      promoPrice: null,
      isAlert: null,
    };
  },

  computed: {
    deliveryPrice() {
      return this.selectedDelivery === 'reguler' ? 10 : this.selectedDelivery === 'express' ? 20 : 0;
    },
    total() {
      const subtotal = parseFloat(this.getSubtotal());
      const tax = subtotal * 0.10;
      const deliveryFee = parseFloat(this.deliveryPrice);
      const total = subtotal + tax + deliveryFee;
      return total.toFixed(2);
    },
  },

  methods: {
    applyPromoCode() {
      // Implement the logic for applying the promo code
    },

    removeProduct(index) {
      this.products.splice(index, 1);
      const savedProducts = localStorage.getItem('selectedProducts');
      if (savedProducts) {
        try {
          const productsArray = JSON.parse(savedProducts);
          productsArray.splice(index, 1); // Remove the product from the localStorage array
          localStorage.setItem('selectedProducts', JSON.stringify(productsArray)); // Update the localStorage
        } catch (error) {
          console.error('Error parsing products from localStorage:', error);
        }
      }
    },

    getTotalItems() {
      return this.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    },

    getSubtotal() {
      return this.products.reduce((total, product) => {
        const productPrice = parseFloat(product.price);
        return total + (isNaN(productPrice) ? 0 : productPrice * product.quantity);
      }, 0);
    },

    getTotal() {
      const subtotal = this.getSubtotal();
      if (this.promoPrice) {
        return subtotal - this.promoPrice;
      }
      return subtotal;
    },

    formatPrice(price) {
      price = parseFloat(price); // Parse the price to a number
      return price.toFixed(2)
    },

    handleCheckout() {
      const summaryTotal = {
        quantity: this.getTotalItems() || '',
        totalPrice: this.total || '',
        shipingFee: this.deliveryPrice || ''
      };
      if (this.deliveryPrice !== 0) {
        // Display a confirmation dialog
        if (confirm("Are you sure you want to proceed to checkout?")) {
          navigateTo({
            path: '/summary/checkout/1',
            query: summaryTotal
          });
        }
      } else {
        this.isAlert = true;
      }


    },
  },

  mounted() {
    if (process.client) {
      const savedProducts = localStorage.getItem('selectedProducts');
      if (savedProducts) {
        try {
          const productsArray = JSON.parse(savedProducts);
          this.products = Array.isArray(productsArray) ? productsArray : [productsArray];
          console.log('Updated products array:', this.products);
          return obj = this.products
        } catch (error) {
          console.error('Error parsing products from localStorage:', error);
        }
      } else {
        console.log('No selected products found in localStorage.');
      }
    }
  }

};
</script>

<style>
.item-quantity {
  font-weight: bold;
}
</style>
