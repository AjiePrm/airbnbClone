<template>
    <div>
        <div class="relative">
            <!-- Dropdown toggle button -->
            <button @click="show = !show" class="flex items-center p-2 rounded-md">
                <span class="mr-4">Chart</span>
                >
            </button>

            <!-- Dropdown menu -->
            <div v-show="show" class="
            absolute
            py-2
            mt-2
            rounded-md
            shadow-xl
            w-full
            bg-secondaryWhite
          ">
                <div class="  block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-primaryPurple hover:text-secondaryWhite">
                    item 1
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
        };
    },
};
</script>