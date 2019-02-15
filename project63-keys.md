## Vue-项目-重点

### day07-项目-重点

#### 01-项目-准备-vue-cli创建项目结构

1. 来到项目期望的目录->打开cmd
2. vue init webpack 项目名
   1. 是否使用路由 -> Y
   2. 是否使用ESLint(检查代码规范) -> Y
   3. for most users
3. cd 项目名
4. npm run dev(默认不会打开浏览器)



#### 02-项目-准备-项目目录说明

1. build/ webpack打包的产物/结果
2. config/ 配置服务器 ->
   1.    index.js -> autoOpenBrowser: true, -> npm run dev
3. .eslintrc:配置ESLint
4. .eslintignore: ESLint忽略文件
5. index.html -> 注意: 不需要引入build.js



#### 03-项目-准备-代码规范-自定义指令-lintfix

> ESLint 自动检测js代码的规范 
>
> 1. 结尾没有;
> 2. 必须===
> 3. 单引号
> 4. 不能有未使用变量
> 5. 缩进
> 6. 不能有多余空行
> 7. 等

1. package.json->scripts->自定义指令
2. ​    "lintfix": "eslint --ext .js,.vue src --fix", 
3. npm run lintfix(未使用)
4. npm run dev(启动开发模式)

#### 04-项目-准备-element-ui-文档分析

> 饿了么web开发团队 vue UI库Element
>
> ElementUI 适用于vue2+项目并且PC端项目

> 扩展: vue移动端web -> Mint-ui
>
> PC端UI库:   iView

#### 05-项目-准备-element-ui-安装-引入

`main.js`

```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

```

> 可以在任何一个.vue文件的template通过组件名使用组件

#### 06-项目-准备-项目模板简化-调整

> 简化模板

#### 07-项目-准备-git-版本控制

> 第一次使用git

```shell

// 
git init 
// 
git add .
// 
git commit -m "初始化项目"
// 新建远程仓库->关联仓库
git push -u origin master

```

> 完成一个小功能,提交/推送代码

```shell
git add .
git commit -m "注释"
git push
```

> gitbash -> git指令操作-> 任何cmd执行git指令->git是无效指令-> 配置windows系统的环境变量
>
> 1. 找到git安装位置 2.修改计算技属性->path全局变量
>
> 注意: 如果不想改全局path , 可以在gitbash中使用git

> 每完成一个小功能 提交commit一次
>
> 每完成大功能 push一次

#### 08-项目-准备-git-分支管理

> 管理代码-> 合并代码

> 项目3个人-> 区分代码是谁写的?->新建分支

> 每个分支管理自己的代码 有默认分支->git branch

> 主分支master:git push
>
> 新建子分支A->编写代码->编码完成->add/commit -> 提交A->
>
> 切换到master分支->合并代码git merge
>
> 新建子分支B->编写代码->编码完成->add/commit -> 提交B->
>
> 切换到master分支->合并代码git merge

> 结论: master/ dev-login /dev-users

```shell
// 检查分支
git branch
// 新建分支并且切换到该分支
// dev-login用来实现项目登录功能 
git checkout -b 分支名(dev-login)
// 接下来所有代码操作都是在dev-login分支上

```



#### 09-项目-登录-新建分支-login 组件-配置路由

> 在dev-login分支上

1. 新建login.vue组件
2. 配置路由
3. 新建home.vue组件

```shesll
git add .
git commit -m "登录-配置路由"
// 切换master到分支
git checkout master
```

> 在master主分支操作(git push)

```shell
// 合并代码: 把dev-login的代码合并到master分支上
git merge dev-login
// 检查状态
git status
// 如果status有问题
git add .
git coimmit -m ""
// 如果status没问题
git push
```

> 推送完, 切换回dev-login分支

```shell
git checkout dev-login
```



#### 10-项目-登录-引入表单组件

`login.vue`

1. 找表单组件
2. 复制代码->提供数据formdata:{}
3. 提供了类名->测试
4. git branch / git status / git add ./ git commit -m "balabala



#### 11-项目-登录-样式调整

1. assets/css/base.css 

```css
html,
body,
h2 {
  padding: 0;
  margin: 0;
  height: 100%;
}

```

2. App.vue

```css
#app {
  height: 100%;
}
```

3. login.vue

```css
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  background-color: #ffffff;
  width: 400px;
  border-radius: 5px;
  padding: 30px;
}
.login-btn {
  width: 100%;
}
```

> 注意: css样式不是重点!
>
> 扩展: 企业开发, 设计图psd会有尺寸/字号/色号...

#### 12-项目-登录-axios 插件

1. npm i axios
2. main.js 导入axios+配置baseURL
3. login.vue->发送请求



#### 13-项目-登录-发送登录请求

`login.vue`

```js
 handlelogin() {
      this.$http
        .post(`login`, this.formdata)
        .then(res => {
          console.log(res);
          const {
            data: {
              data,
              meta: { msg, status }
            }
          } = res;
          if (status === 200) {
            console.log("login---success----");
          } else {
            console.log("error----");
          }

          // eg
          // const {per} = {per:"abc"}
          // console.log(per)
          // const {name:newname} = {name:'abc'}
          // console.log(newname);
        })
        .catch(err => {
          console.log(err);
        });
    }
  
```

```shell
git add .
git commit -m "注释"
```



#### 14-项目-登录-引入提示框组件

>username或者password错误 -> 提示框

```js
this.$message.error(msg);
```

#### 15-项目-登录-登录成功-进入home 组件

`login.vue`

```js
 this.$router.push({
            name: "home"
          });
```

> 补充: ES6对象解构赋值
>
> 数组
>
> 对象(const {per:{name}} = {per:{name:'abc'}}) -> log(name)

#### 16-项目-登录-简化登录请求代码-async 和 await

> async+await简化代码:把异步代码变得像同步

```js
async handlelogin() {
    // 目前代码: 异步的结果res在一个函数里面获取的
    // 目的: res的获取是同步
    // const res = axios请求返回的结果
    // console.log(res)

    const res = await this.$http.post(`login`, this.formdata)

    }
```

> 步骤

1. 找到异步代码 前面加await 接收异步结果const res
2. 找到异步代码最近的外层函数 , 前面加async

> 目的: 简化代码

#### 17-项目-登录-保存token值

> 将来要使用用户token数据,把正确用户token存储->cookie/session/sessionStorage/localStorage(存储体积大的数据)

```js
localStorage.setItem("token", token);

```

> 浏览器控制台application->storage

#### 18-项目-首页-布局容器-样式调整

> 引入UI库布局容器

```html
<el-container class="container">
    <el-header>Header</el-header>
    <el-container>
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
```



#### 19-项目-首页-头部-样式调整

> el-row(行)>el-col(列)  24份

```css
.container {
  height: 100%;

  background: #b3c0d1;
}
.middle {
  text-align: center;
  line-height: 60px;
}
.aside {
  background: red;
}
.main {
  background: gray;
}
.loginout {
  line-height: 60px;
  text-decoration: none;
}
```

> 注意

1. 找组件
2. 提供数据
3. 布局
4. 样式

### day08-项目-重点

#### 01-项目-首页-侧边栏-导航组件-文档

> el-menu router属性
>
> el-submenu index属性

#### 02-项目-首页-侧边栏-引入导航组件-调整

`home.vue侧边栏`

```html
 <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              用户列表
            </el-menu-item>
          </el-submenu>
```



#### 03-项目-首页-进入首页的权限验证

```js
beforeMount() {
    console.log("beforeMount----");

    if (!localStorage.getItem("token")) {
      this.$router.push({
        name: "login"
      });
    }
  }
```

> 如果登录了->渲染home.vue
>
> 如果没登录->来到login.vue->登录

#### 04-项目-首页-头部-退出功能

> 点击头部的退出按钮

```js
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
```



#### 05-项目-首页-合并分支-新建用户分支

```shell
git add .
git commit -m ""
// 新功能 新建分支
git checkout -b dev-users
// 接下来 开发新功能

```



#### 06-项目-用户管理-用户列表-新建组件-路由配置

1. 改标识 index='users'
2. 提供容器router-view(在home.vue的main位置)
3. 新建users.vue
4. 配置路由(嵌套路由->在home匹配成功之上)
5. 测试



#### 07-项目-用户管理-用户列表-面包屑和搜索框

1. el-card 小容器
2. 面包屑

```html
 <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
```



#### 08-项目-用户管理-用户列表-引入表格组件

#### 09-项目-用户管理-用户列表-表头处理

#### 10-项目-用户管理-用户列表-请求数据

#### 11-项目-用户管理-用户列表-渲染数据-一般数据

#### 12-项目-用户管理-用户列表-渲染数据-日期格式处理

#### 13-项目-用户管理-用户列表-渲染数据-用户状态开关

#### 14-项目-用户管理-用户列表-渲染数据-操作

#### 15-项目-用户管理-用户列表-分页组件-文档-引入

#### 16-项目-用户管理-用户列表-分页组件-配置数据

#### 17-项目-用户管理-用户列表-分页组件-分页请求

#### 18-项目-用户管理-用户列表-搜索用户

#### 19-项目-用户管理-用户列表-添加用户-显示对话框

#### 20-项目-用户管理-用户列表-添加用户-发送请求

#### 21-项目-用户管理-用户列表-删除用户-打开确认框

#### 22-项目-用户管理-用户列表-删除用户-处理响应

#### 23-项目-用户管理-用户列表-编辑用户-显示对话框

#### 24-项目-用户管理-用户列表-编辑用户-显示编辑数据

#### 25-项目-用户管理-用户列表-编辑用户-发送请求

#### 
