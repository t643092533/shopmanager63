<template>
  <el-container class="container">
    <el-header>
      <!--
        el-row 一行
        el-col 一列
        份数  24
      -->
      <el-row>
        <el-col :span="4">
          <img src="@/assets/logo.png" alt="图片加载失败">
        </el-col>
        <el-col :span="19" class="middle">
          <h2>电商后台管理系统</h2>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <a href="#" @click.prevent="handleLoginout()" class="loginout">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <!-- 导航 -->
        <!-- router:开启路由模式,点击对应的导航,当前的path就是激活导航的index值 -->
        <el-menu default-active="1" :router="true" :unique-opened="true">
          <!-- 用户管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <!--
              1. <router-link ></router-link> 改标识
              2. 提供容器
              3. 提供组件 users.vue
              4. newVueRouter()
              5. 配置
              6. 挂载
            -->
            <el-menu-item index="users">
              <i class="el-icon-menu"></i>
              用户列表
            </el-menu-item>
          </el-submenu>
          <!-- 权限管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              角色列表
            </el-menu-item>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              权限列表
            </el-menu-item>
          </el-submenu>
          <!-- 商品 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              商品列表
            </el-menu-item>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              分类参数
            </el-menu-item>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              商品分类
            </el-menu-item>
          </el-submenu>

          <!-- 订单 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              订单列表
            </el-menu-item>
          </el-submenu>
          <!-- 数据统计 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              数据报表
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <!-- 提供容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // 如果用户没有登录,/标识匹配到时 不能进入home.vue->显示login.vue
  // if(有没有正确的token){渲染home.vue}
  // if(没有token){改login,显示login.vue}
  // 代码位置-> 在渲染home.vue之前   home.vue渲染完毕时->mounted()
  // beforeMount(){?}
  beforeMount() {
    if (!localStorage.getItem("token")) {
      this.$router.push({
        name: "login"
      });
    }
  },
  methods: {
    // 退出
    handleLoginout() {
      // 1. 清除token
      localStorage.clear();
      // 2. 跳转到login
      this.$router.push({
        name: "login"
      });
      // 提示
      this.$message.warning("退出成功");
    }
  }
};
</script>

<style>
.container {
  height: 100%;

  background: #b3c0d1;
}
.middle {
  text-align: center;
  line-height: 60px;
}
.aside {
  /* background: red; */
}
.main {
  background: gray;
}
.loginout {
  line-height: 60px;
  text-decoration: none;
}
</style>
