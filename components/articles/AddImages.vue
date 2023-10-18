<template>
   <!-- <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false"
        :on-change="handlePictureCardPreview"
    >
        <el-icon><Plus /></el-icon>

        <template #file="{ file }">
            <div>
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                <span class="el-upload-list__item-actions">
                    <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                    >
                        <el-icon><zoom-in /></el-icon>
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                    >
                        <el-icon><Download /></el-icon>
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                    >
                        <el-icon><Delete /></el-icon>
                    </span>
                </span>
            </div>
        </template>
    </el-upload> -->

    <input type="file" @change="test"  multiple />
</template>
<script setup>
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

const dialogImageUrl = ref('')
const disabled = ref(false)

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:model-value'])

const handleRemove = (file) => {
    console.log(file)
}

const handlePictureCardPreview = (file) => {

}

const handleDownload = (file) => {
    console.log(file)
}

const test = (e) => {
    dialogImageUrl.value = [...e.target.files]
    emit('update:model-value', dialogImageUrl.value)
    console.log(e.target.files)
}
</script>
