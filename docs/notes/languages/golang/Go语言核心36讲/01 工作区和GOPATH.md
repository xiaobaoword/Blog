---
title: 01 工作区和GOPATH
createTime: 2024/12/18 16:50:32
permalink: /languages/golang/Go语言核心36讲/01 工作区和GOPATH/
---

## 概述

- GOROOT：Go 语言安装根目录的路径，也就是 GO 语言的安装路径。

- GOPATH：若干工作区目录的路径。是我们自己定义的工作空间。

- GOBIN：GO 程序生成的可执行文件（executable file）的路径。

## 1. Go 语言源码的组织方式

Go 语言源码的组织方式就是以环境变量 GOPATH、工作区、src 目录和代码包为主线的。一般情况下，Go 语言的源码文件都需要被存放在环境变量 GOPATH 包含的某个工作区（目录）中的 src 目录下的某个代码包（目录）中。