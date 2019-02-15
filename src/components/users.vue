<template>
  <!-- el-card小容器 可以理解为是div -->
  <el-card class="box">
    <!-- 面包屑 -->
    <!--
      首页
      用户管理
      用户列表
    -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框 -->
    <!-- 表格 -->
    <!-- 分页 -->
  </el-card>
</template>

<script>
export default {};
</script>

<style>
</style>
