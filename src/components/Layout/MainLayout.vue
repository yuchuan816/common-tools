<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { Menu as IconMenu } from '@element-plus/icons-vue'
const route = useRoute()
</script>

<template>
  <el-container class="MainLayout">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu
          class="menu"
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
          router
          :default-active="route.path"
        >
          <el-menu-item index="/SightSinging">
            <el-icon><icon-menu /></el-icon>
            <span>视唱</span>
          </el-menu-item>
          <el-menu-item index="/MelodyPitchPractice">
            <el-icon><icon-menu /></el-icon>
            <span>旋律音程高低判断</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <span class="logo">TOM的工具箱 </span>
      </el-header>
      <el-main><RouterView /></el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.MainLayout {
  height: 100vh;

  .header {
    display: flex;
    align-items: center;
    background-color: #545c64;

    .logo {
      color: #fff;
    }
  }
  .menu {
    background-color: #545c64;
    min-height: 100vh;
  }
}
</style>
