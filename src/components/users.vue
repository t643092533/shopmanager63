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
    <el-row class="searchBox">
      <el-col>
        <el-input class="searchInput" placeholder="请输入内容" v-model="query">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary">添加用户</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <!-- tableData是[{date:?,name:?,address:?}]
    el-table-column控制列
      label控制的是表头
      prop的值控制的是该列中每一行单元格的内容

    -->
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="name" label="#" width="80"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="name" label="邮箱" width="140"></el-table-column>
      <el-table-column prop="name" label="电话" width="140"></el-table-column>
      <el-table-column prop="name" label="创建日期" width="200"></el-table-column>
      <el-table-column prop="name" label="用户状态" width="120"></el-table-column>
      <el-table-column prop="name" label="操作" width="200"></el-table-column>
    </el-table>
    <!-- 分页 -->
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      // 搜索关键字
      query: "",
      // 分页功能->前提:接口必须支持分页->通过在接口url参数中类似page的参数名
      pagenum: 1,
      pagesize: 2,
      // 表格数据

      list: []
    };
  },
  // ?
  // mounted(){}
  created() {
    this.getTableData();
  },
  methods: {
    async getTableData() {
      // query	查询参数	可以为空
      // pagenum	当前页码	不能为空
      // pagesize	每页显示条数	不能为空
      // 设置发送请求时的请求头-> axios库 ->找axios中有没有可以设置headers头部的API->看axios文档
      const AUTH_TOKEN = localStorage.getItem("token");
      // console.log(AUTH_TOKEN);
      this.$http.defaults.headers.common["Authorization"] = AUTH_TOKEN;
      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${
          this.pagesize
        }`
      );
      console.log(res);
    }
  }
};
</script>

<style>
.searchBox {
  margin-top: 20px;
}
.searchInput {
  width: 400px;
}
</style>
