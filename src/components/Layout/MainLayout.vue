<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { Menu as IconMenu } from '@element-plus/icons-vue'
const route = useRoute()
</script>

<template>
  <ElContainer class="MainLayout">
    <ElAside width="200px">
      <ElScrollbar>
        <ElMenu
          router
          class="menu"
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
          :default-active="route.path"
        >
          <ElMenuItem index="/SightSinging">
            <el-icon><icon-menu /></el-icon>
            <span>视唱</span>
          </ElMenuItem>
          <ElMenuItem index="/MelodyPitchPractice">
            <el-icon><icon-menu /></el-icon>
            <span>旋律音程高低判断</span>
          </ElMenuItem>
        </ElMenu>
      </ElScrollbar>
    </ElAside>
    <ElContainer>
      <ElHeader class="header">
        <span class="logo">TOM的工具箱</span>
      </ElHeader>
      <ElMain><RouterView /></ElMain>
    </ElContainer>
  </ElContainer>
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
