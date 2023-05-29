<template>
    <div
        class="container w-[1366px] m-auto relative flex justify-center bg-[url('~/assets/image/bghero.svg')] h-[750px] font-fontRoboto">
        <Header></Header>
        <CardForm></CardForm>
    </div>
    <div class="container w-[1366px] m-auto">
        <Category></Category>
    </div>
    <div class="container w-[1366px] m-auto">
        <AirbnbPlus></AirbnbPlus>
    </div>
    <div class="container w-[1366px] m-auto">
        <CardItem></CardItem>
    </div>
    <div class="container w-[1366px] m-auto">
        <Accommodations></Accommodations>
    </div>
    <div class="container w-[1366px] m-auto">
        <CardItem></CardItem>
    </div>
    <div class="container w-[1366px] m-auto">
        <Destination></Destination>
    </div>
</template>

<script>
import Accommodations from '~/components/accommodations.vue';
export default {
    async asyncData() {
        const url = 'https://hotels4.p.rapidapi.com/v2/get-meta-data';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b1f4afdd77msh166ac96d7ae34ebp129dffjsn2f4d005dc1aa',
                'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return { result };
        } catch (error) {
            console.error(error);
            return { result: [] };
        }
    }
};


</script>