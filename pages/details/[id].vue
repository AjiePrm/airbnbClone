<template>
    <div class="container px-[34px]">
        <div class="font-semibold text-3xl pb-[6px]">
            Detail Product
        </div>
        <div class="flex space-x-4 pb-6" >
            <h2 class="text-xl pr-[500px] ">Category :  {{ detailsProucts.category }}</h2>
            <h2 class="text-xl">Bagikan</h2>
            <h2 class="text-xl">Simpan</h2>   
        </div>
        <div class="flex space-x-2 w-[1120px] h-[416px] pb-12">
            <div class="w-[560px] h-[410px] bg-secondaryGray rounded-l-lg">
                <img class="w-[560px] h-[410px] bg-secondaryGray rounded-l-lg" :src="imageOne" alt="img"/>
            </div>
            <div class="grid gap-1 grid-cols-2 w-[650px] h-[422px]">
                <img class="w-[272px] h-[196px] bg-secondaryGray" src="" alt="img"/>
                <img class="w-[272px] h-[196px] bg-secondaryGray rounded-r-lg" src=""  alt="img"/>
                <img class="w-[272px] h-[196px] bg-secondaryGray" src=""  alt="img"/>
                <img class="w-[272px] h-[196px] bg-secondaryGray rounded-r-lg" src=""  alt="img"/>
            </div>
        </div>
        <div class="flex">
        <div>
                <div class="font-semibold text-3xl pb-[6px]">
                   {{ detailsProucts.title }}
                </div>

                <div class="flex space-x-1 text-2xl border-b-2 pb-[26px]">
                    <h2 class="text-2xl"> Stock: {{ detailsProucts.stock }}  · </h2>
                    <h2 class="text-2xl"> {{detailsProucts.brand}}  · </h2>
                    <h2 class="text-2xl"> rating: {{detailsProucts.rating}} </h2>
                </div>

                <div class="w-[653px] h-[261px] pt-4">
                    <p class="w-full">{{ detailsProucts.description }}</p>
                </div>
            </div>

            <div class="ml-[93px] w-[372px] h-[276px] shadow-2xl rounded-lg">
                <div class="h-[56px] px-[25px] py-[26px]">

                    <h1 class="text-2xl font-semibold">${{detailsProucts.price}} <span class="text-lg font-normal">/ malam</span></h1>
                    <div class="w-full flex mt-6">
                        <div class=" w-[161px] border-spacing-1 border">
                            <h2>Check-in</h2>
                            <input type="date">
                        </div>
                        <div class="w-[161px] border-spacing-1 border">
                            <h2>check-out</h2>
                            <input type="date">
                        </div>
                    </div>
                    
                    <div class="h-[56px] w-[323px] border-spacing-1 border">
                        <button class="h-[56px] w-[323px]">tamu ></button>
                    </div>
                    <div class="h-[56px] w-[323px] pt-4">
                        <button class="h-12 w-[323px] bg-primaryRed rounded-lg text-secondaryWhite font-semibold text-xl">Pesan</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
</template>

<script>
    export default {
  data() {
    return {
      detailsProucts: [],
      imageOne: {},
    };
  },
  methods: {
    async getPost(id) {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      this.details = await response.json();
      const detailProducts = this.details;
      console.log(detailProducts.category);
      console.log(detailProducts.images)
      return detailProducts;
    },
  },
  async mounted() {
    const { id } = useRoute().params;
    this.detailsProucts = await this.getPost(id);
    this.imageOne = this.detailsProucts.images[0]();
  },
};

</script>

 