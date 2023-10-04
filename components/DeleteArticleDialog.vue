<template>
    <Icon
        name="ep:delete-filled"
        size="20"
        class="text-red-500 cursor-pointer"
        @click="openDialog = true"
    />
    <el-dialog
        v-model="openDialog"
        title="Supprimer un article"
        width="400"
        :destroy-on-close="true"
    >
        <p class="mb-4 text-center">
            Es-tu sûre de vouloir supprimer
            <span class="font-bold">{{ props.articleInfos.title }}</span>
        </p>
        <div class="flex justify-center">
            <el-button type="danger" @click.prevent="delArticle(props.articleInfos.id_article)"
                >Supprimer</el-button
            >
        </div>
    </el-dialog>
</template>
<script setup>
import Module from '/services/articles.service.js'

let openDialog = ref(false)
const props = defineProps(['articleInfos'])
const emit = defineEmits(['refresh'])

const delArticle = async (id) => {
    try {
        Module.deleteArticle(id)
        openDialog = false
        emit('refresh')
    } catch (e) {
        console.log(e)
    }
}
</script>
