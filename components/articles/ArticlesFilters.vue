<template>
    <el-button type="primary" @click="drawer = true" link>
        Filtrer<Icon name="material-symbols:filter-list-rounded" size="16" class="ml-2"
    /></el-button>

    <el-drawer v-model="drawer" title="Filter les articles">
        <div class="flex flex-col justify-between h-full p-4">
            <div>
                <p class="mb-3">Trier par</p>
                <el-radio-group v-model="radio">
                    <el-radio label="newest">Plus récents</el-radio>
                    <el-radio label="oldest" class="w-full">Plus anciens</el-radio>
                    <el-radio label="priceasc">Prix croissant</el-radio>
                    <el-radio label="pricedesc" class="w-full">Prix décroissant</el-radio>
                </el-radio-group>
            </div>

            <el-button class="mt-4" @click="confirmFilters">Valider</el-button>
        </div>
    </el-drawer>
</template>
<script setup>
const drawer = ref(false)
const radio = ref('newest')

const props = defineProps(['modelValue'])
const emit = defineEmits(['refresh', 'update:model-value'])

const confirmFilters = () => {
    emit('refresh')
    emit('update:model-value', radio.value)
    drawer.value = false
}
</script>
