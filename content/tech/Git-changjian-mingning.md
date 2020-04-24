---
title: "Git工具-常用命令"
date: 2020-04-24T11:59:10+08:00
draft: false
---

## 设置全局用户与邮箱
```
设置用户名：git config --global user.name "name"
设置用户邮箱：git config --global user.email "eamil"
查看配置的用户名：git config user.name
查看配置的用户邮箱：git config user.email
```


## 初始化一个目录为仓库

```
git init

git init命令的作用是在当前目录中初始化仓库，并且创建一个名为.git的子目录，该目录含有你初始化的Git仓库中所有的必须文件。
```

## 关联远程仓库到本地仓库
```
查看关联的远程仓库的名称：git remote
查看关联的远程仓库的详细信息：git remote -v
添加远程仓库的关联：git remote add origin <远程仓库地址>
删除远程仓库的关联：git remote remove <远程仓库名称>
修改远程仓库的关联：git remote set-url origin <新的远程仓库地址>
更新远程仓库的分支：git remote update origin --prune

先删后加
git remote rm origin
git remote add origin [url]

```
```注意关联的仓库地址不一样，在上传的时候认证的方式也不一样，http的地址是会弹出输入用户名与密码相反ssh密匙认证的关联地址git@github.com:reuixiy/io-oi.me.git是这样的一个地址```


## 生成认证密匙
```
ssh-keygen -t rsa -C "eamil"

```
你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，因为这个个Key仅仅用于简单的服务，所以也无需设置密码。
 ```.ssh```目录生产两个文件:```id_rsa私匙```和```id_rsa.pub公匙```我们需要的是把公匙内容复制到Github设置里密匙设置就行
 
 