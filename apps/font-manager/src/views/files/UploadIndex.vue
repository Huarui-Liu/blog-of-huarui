<template>
    <el-upload v-model:file-list="fileList" list-type="picture-card" action="/api/files/upload">
        <el-icon><Plus ></Plus></el-icon>

    </el-upload>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons'
import type { UploadUserFile } from 'element-plus';
import { ref } from 'vue';

const fileList = ref<UploadUserFile[]>([]);
</script>