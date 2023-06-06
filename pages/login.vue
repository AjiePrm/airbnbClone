<template>
    <div class="w-full lg:w-[1366px] md:m-auto pt-[20vh]">
        <div class="w-[391px] m-auto h-[508px] shadow-2xl bg-secondaryWhite rounded-[4px]">
            <h1
                class="px-[24px] pt-[32px] pb-[24px] font-fontRoboto font-semibold text-[32px] leading-[38px] text-secondaryDark">
                Login
            </h1>
            <div class="px-[24px] pb-[16px]">
                <h2 class="pb-[8px] font-fontRoboto font-bold text-xs leading-[1.1667rem] uppercase text-secondaryDark">
                    Username
                </h2>
                <input v-model="username" type="text" placeholder="type here ..." class="w-[343px] h-[42px] rounded-sm"
                    style="border: 1px solid #E3E3E3;">
            </div>

            <div class="px-[24px]">
                <h2 class="pb-[8px] font-fontRoboto font-bold text-xs leading-[1.1667rem] uppercase text-secondaryDark">
                    Password
                </h2>
                <input v-model="password" type="password" placeholder="type here ..." class="w-[343px] h-[42px] rounded-sm"
                    style="border: 1px solid #E3E3E3;">
            </div>

            <div class="px-[24px] pt-[24px] flex justify-end">
                <button @click="handleLogin"
                    class="bg-primaryRed px-[32px] py-[13px] rounded-[4px] text-secondaryWhite text-[16px] font-semibold">
                    Login
                </button>
            </div>
        </div>

        <div>
            <p class="w-[391px] m-auto pt-3">Login page is still under development</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async handleLogin() {
            if (!this.username || !this.password) {
                return;
            }

            try {
                const response = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: this.username,
                        password: this.password,
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    const token = data.token;
                    navigateTo({
                        path: '/'
                    })

                } else {

                }
            } catch (error) {

            }
        },
    },
};
</script>
  
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
