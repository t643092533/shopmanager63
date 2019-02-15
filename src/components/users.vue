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
    <!--
      id: 500
      username: "admin"
      email: "adsfad@qq.com"
      mobile: "12345678"
      create_time: 1486720211

      mg_state: true
      role_name: "主管"
    -->
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="id" label="#" width="80"></el-table-column>
      <el-table-column prop="username" label="姓名" width="100"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="140"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="140"></el-table-column>

      <!-- 过滤器fmtdate
        1. v-bind:
        2. {{create_time|fmtdate}}
      -->
      <!-- 1. 思路 直接给prop赋值 不行 -->
      <!-- <el-table-column prop="create_time | fmtdate" label="创建日期" width="200"></el-table-column> -->
      <!-- 2. 思路  可以实现效果 但是error-->
      <!-- <el-table-column prop="create_time" label="创建日期" width="200">
        {{create_time|fmtdate}}
      </el-table-column>-->
      <!-- 3.
      前提: 单元格内容不是prop的值,
      3.1 给单元格内容外层加template
      3.2 给template设置slot-scope
      3.3 slot-scope的值 自动绑定为外层数据el-table :data="list"
      3.4 在template内部通过list.row 自动取出数组list中每个对象
      3.5 list.row.属性create_time
      注意: row是固定写法

      -->
      <el-table-column label="创建日期" width="200">
        <template slot-scope="scope">
          <!-- 内层 list.row 表示的是list的每个对象-->
          {{scope.row.create_time|fmtdate}}
        </template>
      </el-table-column>

      <el-table-column label="用户状态" width="120">
        <!-- 前提: 单元格内容是一个组件, 不是porp的值 -->
        <template slot-scope="scope">
          <!-- 内容 -->
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
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
      pagesize: 10,
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
      // console.log(res);
      const {
        data,
        meta: { status, msg }
      } = res.data;
      if (status === 200) {
        this.list = data.users;
        console.log(this.list);
      }
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
