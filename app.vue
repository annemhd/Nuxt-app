<template>
    <div class="m-4">
        <client-only>
            <el-header>
                <Navbar />
            </el-header>
            <el-main>
                <NuxtPage />
            </el-main>
            <el-footer> Bas de page </el-footer>
        </client-only>
    </div>
</template>
<script setup>
useHead({
    title: 'The Ficus',
    meta: [{ name: 'description', content: 'My amazing site.' }],
})
</script>
