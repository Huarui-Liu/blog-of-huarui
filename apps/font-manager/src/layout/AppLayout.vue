<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
    
</template>



<style scoped lang="less">

</style>