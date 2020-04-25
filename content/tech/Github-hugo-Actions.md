---
title: "Github搭建Hugo与Actions联动"
date: 2020-04-25T15:37:49+08:00
draft: 
---

本网站就是这样搭建的，把源代码放到一个仓库然后通过Actions[^1]

[^1]: 持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。

功能把源代码进行编译构成静态文件推送到06K.Github.io这个仓库,希望对在看的同学有一定的帮助。

### 前期准备

首先您得去```Github```这个网站去注册账号并创建存放源代码的仓库与一个以您用户名开头的然后后缀是以```.Github.io```结尾的的仓库比如说我的用户名为06k那么我存放网站文件的仓库名称就是```06k.Github.io```

那么我们现在在Github网站上有两个仓库了```请注意我们的通俗约定是您已经通晓Git这个工具的使用方式```

1. 源代码仓库名字随意
2. 存放网站文件的仓库以用户名开头 uesr.Github.io

### 生成密匙

我们Actions功能需要对仓库有操作的权限ssh密匙就是很好的方式，下面是生成的方式

```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```

上面的命令会在执行命令的目录下生成```gh-pages私匙```与```gh-pages.pub公匙```

1. 假设 上传源代码的仓库为 **HUGO** 部署的项目网页文件的仓库为 **user.github.io**

2. 打开`HUGO`仓库的`settings`，再点击`Secrets`，然后添加刚刚生成的私钥，name为`ACTIONS_DEPLOY_KEY`名字不能改

3. 同理，打开`user.github.io`，点击Deploy keys，添加公钥，**Allow write access**一定要勾上，**否则会无法提交**

然后，

### 配置Github Action

首先在源代码项目仓库点击action，选择**Simple workflow**，输入一下的配置代码：

```
name: CI #自动化的名称
on:
  push: # push的时候触发
    branches: # 那些分支需要触发
      - master
jobs:
  build:
    runs-on: ubuntu-18.04 # 镜像市场
    steps:
      - name: checkout # 步骤的名称
        uses: actions/checkout@v1 #软件市场的名称
        with: # 参数
          submodules: true
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2.2.2
        with:
          hugo-version: latest
          extended: true
      - name: Build
        run: hugo -D                  
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v2.5.1
        env:
          ACTIONS_DEPLOY_KEY: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          EXTERNAL_REPOSITORY: 06k/06k.Github.io # 自定义仓库名称
          PUBLISH_BRANCH: master
          PUBLISH_DIR: ./public

```

后面#号的注释不用删除

后面就是大功告成，好好体验吧



