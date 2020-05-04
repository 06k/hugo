---
title: "Linux 下自动挂载硬盘"
date: 2020-05-04T18:55:39+08:00
draft: 
---

后面补充遇到的问题

### 查看分区信息

```
fdisk -l
```

### 创建挂载目录

```
mkdir /mnt/sd1
```

### 显示UUID

```
blkid /dev/sda1
```

```/dev/sda1```是硬盘分区

### 修改 /etc/fstab

```
vi /etc/fstab
```

#### 添加以下内容

```
UUID=722059EC2059B835   /mnt/sd1      ntfs    defaults        0 0
```

![图片示意](../imges/2020041215431452.png)

图片mnts只是演示实际应该替换成/mnt/sd1