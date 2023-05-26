<template>
    <div class="bg-primaryRed">
        <button
            class="fancy-btn inline-flex text-white border-0 py-2 px-6 focus:outline-none bg-red-400 hover:bg-red-600 rounded text-lg">
            <slot />
        </button>
    </div>
</template>

<style></style>

<script setup>
definePageMeta({
    layout: "redPrimaryButton"
})
</script>