<template>
    <div class="p-6">
        <div class="flex justify-between items-center gap-4">
            <div class="flex justify-center items-center pb-2">
                <ULink
                    to="/"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                    <svg
                        class="mr-4"
                        width="86"
                        height="24"
                        viewBox="0 0 86 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M76.8415 23.4161C75.6148 23.4161 74.4361 23.2241 73.3055 22.8401C72.1748 22.4561 71.1881 21.9067 70.3455 21.1921C69.5028 20.4667 68.9001 19.6081 68.5375 18.6161L71.6575 17.4481C71.8388 17.9601 72.1855 18.4187 72.6975 18.8241C73.2201 19.2187 73.8388 19.5281 74.5535 19.7521C75.2788 19.9761 76.0415 20.0881 76.8415 20.0881C77.6948 20.0881 78.4948 19.9494 79.2415 19.6721C79.9988 19.3947 80.6068 19.0107 81.0655 18.5201C81.5348 18.0294 81.7695 17.4534 81.7695 16.7921C81.7695 16.1094 81.5241 15.5494 81.0335 15.1121C80.5535 14.6747 79.9348 14.3281 79.1775 14.0721C78.4308 13.8161 77.6521 13.6241 76.8415 13.4961C75.2735 13.2401 73.8655 12.8667 72.6175 12.3761C71.3801 11.8854 70.3988 11.1974 69.6735 10.3121C68.9588 9.42672 68.6015 8.27472 68.6015 6.85606C68.6015 5.52272 68.9801 4.36006 69.7375 3.36806C70.5055 2.37606 71.5135 1.60806 72.7615 1.06406C74.0201 0.509389 75.3801 0.232056 76.8415 0.232056C78.0468 0.232056 79.2095 0.424056 80.3295 0.808056C81.4601 1.18139 82.4521 1.73072 83.3055 2.45606C84.1695 3.17072 84.7881 4.04006 85.1615 5.06406L82.0095 6.20006C81.8281 5.67739 81.4815 5.22406 80.9695 4.84006C80.4575 4.44539 79.8388 4.13606 79.1135 3.91206C78.3988 3.68806 77.6415 3.57606 76.8415 3.57606C75.9881 3.56539 75.1881 3.70406 74.4415 3.99206C73.7055 4.26939 73.1028 4.65339 72.6335 5.14406C72.1641 5.63472 71.9295 6.20539 71.9295 6.85606C71.9295 7.65606 72.1481 8.26406 72.5855 8.68006C73.0228 9.09606 73.6095 9.40539 74.3455 9.60806C75.0921 9.80006 75.9241 9.97606 76.8415 10.1361C78.3135 10.3707 79.6735 10.7601 80.9215 11.3041C82.1801 11.8481 83.1881 12.5734 83.9455 13.4801C84.7135 14.3761 85.0975 15.4801 85.0975 16.7921C85.0975 18.1147 84.7135 19.2774 83.9455 20.2801C83.1881 21.2721 82.1801 22.0454 80.9215 22.6001C79.6735 23.1441 78.3135 23.4161 76.8415 23.4161Z"
                            fill="black"
                        />
                        <path
                            d="M56.159 23.416C54.367 23.416 52.8044 22.9786 51.471 22.104C50.1484 21.2293 49.119 20.056 48.383 18.584C47.6577 17.1013 47.295 15.4586 47.295 13.656V0.599976H50.623V13.656C50.623 14.8293 50.8364 15.9066 51.263 16.888C51.7004 17.8586 52.3297 18.6373 53.151 19.224C53.983 19.8 54.9857 20.088 56.159 20.088C57.3644 20.088 58.3777 19.8 59.199 19.224C60.0204 18.6373 60.639 17.8586 61.055 16.888C61.4817 15.9066 61.695 14.8293 61.695 13.656V0.599976H65.023V13.656C65.023 15.0106 64.815 16.28 64.399 17.464C63.983 18.6373 63.3857 19.672 62.607 20.568C61.8284 21.464 60.895 22.1626 59.807 22.664C58.719 23.1653 57.503 23.416 56.159 23.416Z"
                            fill="black"
                        />
                        <path
                            d="M34.9755 23.416C33.4609 23.416 32.0369 23.1173 30.7035 22.52C29.3702 21.912 28.1969 21.08 27.1835 20.024C26.1809 18.9573 25.3915 17.72 24.8155 16.312C24.2502 14.904 23.9675 13.4 23.9675 11.8C23.9675 10.2 24.2502 8.69596 24.8155 7.28796C25.3915 5.87996 26.1809 4.64796 27.1835 3.59196C28.1969 2.52529 29.3702 1.69329 30.7035 1.09596C32.0369 0.48796 33.4609 0.18396 34.9755 0.18396C36.7889 0.18396 38.4582 0.605293 39.9835 1.44796C41.5089 2.29063 42.7729 3.41063 43.7755 4.80796L40.8155 6.39196C40.1222 5.51729 39.2635 4.81863 38.2395 4.29596C37.2155 3.77329 36.1275 3.51196 34.9755 3.51196C33.9089 3.51196 32.9115 3.73063 31.9835 4.16796C31.0555 4.60529 30.2395 5.20263 29.5355 5.95996C28.8315 6.71729 28.2822 7.59729 27.8875 8.59996C27.4929 9.60263 27.2955 10.6693 27.2955 11.8C27.2955 12.9413 27.4929 14.0133 27.8875 15.016C28.2822 16.008 28.8315 16.888 29.5355 17.656C30.2502 18.4133 31.0715 19.0106 31.9995 19.448C32.9275 19.8746 33.9195 20.088 34.9755 20.088C36.1489 20.088 37.2422 19.8266 38.2555 19.304C39.2795 18.7706 40.1329 18.0666 40.8155 17.192L43.7755 18.808C42.7729 20.2053 41.5089 21.3253 39.9835 22.168C38.4582 23 36.7889 23.416 34.9755 23.416Z"
                            fill="black"
                        />
                        <path d="M16.9625 23V0.599976H20.2905V23H16.9625Z" fill="black" />
                        <path
                            d="M0.920044 23V0.599976H14.12V3.92798H4.24804V9.33598H12.584V12.664H4.24804V23H0.920044Z"
                            fill="black"
                        />
                    </svg>
                </ULink>

                <UButton
                    color="gray"
                    variant="ghost"
                    activeClass="text-primary-500 hover:text-primary-500 font-semibold"
                    to="/market"
                    >Marché</UButton
                >
                <UButton
                    color="gray"
                    variant="ghost"
                    activeClass="text-primary-500 hover:text-primary-500 font-semibold"
                    to="/community"
                    >Communauté</UButton
                >
            </div>
            <div class="flex items-center gap-2">
                <UButton
                    v-if="token"
                    icon="i-heroicons-outline-tag"
                    color="primary"
                    :ui="{ rounded: 'rounded-full' }"
                    >Publier</UButton
                >
                <UButton
                    icon="i-heroicons-outline-search"
                    variant="ghost"
                    color="gray"
                    @click="isOpen = true"
                >
                </UButton>
                <UChip v-if="token" color="red" text="3" size="2xl" inset>
                    <UButton
                        icon="i-heroicons-outline-mail"
                        to="/messages"
                        variant="ghost"
                        color="grey"
                    />
                </UChip>
                <UDropdown
                    v-if="token"
                    class="flex items-center p-1"
                    :items="items"
                    :popper="{ placement: 'bottom-start' }"
                    :ui="{ item: { disabled: 'cursor-text select-text' } }"
                >
                    <UAvatar size="xs" src="" alt="Avatar" />
                    <template #account="{ item }">
                        <div class="text-left">
                            <p>{{ user.username }}</p>
                            <p class="truncate font-medium text-gray-900 dark:text-white">
                                {{ user.name }}
                            </p>
                        </div>
                    </template>
                    <template #item="{ item }">
                        <span
                            class="truncate"
                            :class="{ 'text-red-500': item.label == 'Déconnexion' }"
                            >{{ item.label }}</span
                        >

                        <UIcon
                            :name="item.icon"
                            class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
                            :class="{ 'text-red-500': item.label == 'Déconnexion' }"
                        />
                    </template>
                </UDropdown>
                <UButton
                    v-if="!token"
                    icon="i-heroicons-shopping-cart"
                    to="/authentification"
                    variant="ghost"
                    color="grey"
                    >Se connecter | S'inscrire</UButton
                >
            </div>
        </div>
    </div>
    <UModal
        v-model="isOpen"
        :ui="{
            container: 'flex min-h-full items-start sm:items-center justify-center text-center',
            width: 'w-3/5 sm:max-w-lg',
        }"
    >
        <UCommandPalette
            v-model="selected"
            multiple
            nullable
            placeholder="Recherche"
            :groups="[{ key: 'people', commands: people }]"
        />
    </UModal>
</template>
<script setup>
const token = localStorage.getItem('jwt_token')
const user = JSON.parse(localStorage.getItem('user_info'))

const items = [
    [
        {
            label: 'Infos du compte',
            slot: 'account',
            disabled: true,
        },
    ],
    [
        {
            label: 'Tableau de bord',
            icon: 'i-heroicons-outline-template',
            to: '/dashboard',
        },
        {
            label: 'Paramètres du compte',
            icon: 'i-heroicons-outline-cog',
            to: '/account',
        },
    ],
    [
        {
            label: 'Déconnexion',
            icon: 'i-heroicons-outline-logout',
            click: () => {
                logout()
            },
        },
    ],
]

const links = [
    // {
    //     label: null,
    //     icon: 'i-heroicons-home',
    //     to: '/',
    // },
    {
        label: 'Marché',
        icon: null,
        to: '/market',
    },
    {
        label: 'Communauté',
        icon: null,
        to: '/community',
    },
    // {
    //     label: 'Faq',
    //     icon: null,
    //     to: '/faq',
    // },
]

const isOpen = ref(false)

const logout = () => {
    localStorage.removeItem('jwt_token')
}
</script>
