---
title: 模块一：Go语言基础知识
createTime: 2025/01/03 15:22:56
permalink: /languages/golang/Go语言核心36讲/模块一：Go语言基础知识/
---


## 01 工作区和GOPATH

- GOROOT：Go 语言安装根目录的路径，也就是 GO 语言的安装路径。

- GOPATH：若干工作区目录的路径。是我们自己定义的工作空间。

- GOBIN：GO 程序生成的可执行文件（executable file）的路径。

### Go 语言源码的组织方式

Go 语言源码的组织方式就是以环境变量 GOPATH、工作区、src 目录和代码包为主线的。一般情况下，Go 语言的源码文件都需要被存放在环境变量 GOPATH 包含的某个工作区（目录）中的 src 目录下的某个代码包（目录）中。

## 02 命令源码文件

### 命令源码文件是什么

命令源码文件是程序的运行入口，是每个可独立运行的程序必须拥有的。

### 命令源码文件怎样接收参数

Go 语言标准库中有一个代码包专门用于接收和解析命令参数。这个代码包的名字叫flag。

::: go-repl#editable flag包代码练习
```go
package main

import (
	"flag"
	"fmt"
	"os"
)

var name string

// 方式3。
//var cmdLine = flag.NewFlagSet("question", flag.ExitOnError)

func init() {
	// 方式2。
	flag.CommandLine = flag.NewFlagSet("", flag.ExitOnError)
	flag.CommandLine.Usage = func() {
		fmt.Fprintf(os.Stderr, "Usage of %s:\n", "question")
		flag.PrintDefaults()
	}
	// 方式3。
	//cmdLine.StringVar(&name, "name", "everyone", "The greeting object.")
	flag.StringVar(&name, "name", "everyone", "The greeting object.")
}

func main() {
	// 方式1。
	//flag.Usage = func() {
	//	fmt.Fprintf(os.Stderr, "Usage of %s:\n", "question")
	//	flag.PrintDefaults()
	//}
	// 方式3。
	//cmdLine.Parse(os.Args[1:])
	flag.Parse()
	fmt.Printf("Hello, %s!\n", name)
}

```
:::

## 03 库源码文件

库源码文件是不能被直接运行的源码文件，它仅用于存放程序实体，这些程序实体可以被其他代码使用（只要遵从 Go 语言规范的话）。

### 程序实体是什么

Go 语言中的程序实体包括变量、常量、函数、结构体和接口。 Go 语言是静态类型的编程语言。

再多说一点，程序实体的名字被统称为标识符。标识符可以是任何 Unicode 编码可以表示的字母字符、数字以及下划线“_”，但是其首字母不能是数字。

**什么样的程序实体才可以被当前包外的代码引用？**

名称的首字母为大写的程序实体才可以被当前包外的代码引用，否则它就只能被当前包内的其他代码引用。

**对于程序实体，还有其他的访问权限规则吗？**

可以通过创建internal代码包让一些程序实体仅仅能被当前模块中的其他代码引用。这被称为 Go 程序实体的第三种访问权限：模块级私有。

## 04 程序实体那些事

### Go 语言的类型推断可以带来哪些好处？

代码重构，函数级变成的思想

Go 语言的类型推断可以明显提升程序的灵活性，使得代码重构变得更加容易，同时又不会给代码的维护带来额外负担（实际上，它恰恰可以避免散弹式的代码修改），更不会损失程序的运行效率。

### 程序实体的访问权限

包级私有的、模块级私有的和公开的。这其实就是 Go 语言在语言层面，依据代码块对程序实体作用域进行的定义。

### 类型断言

类型断言表达式的语法形式是x.(T)。其中的x代表要被判断类型的值。这个值当下的类型必须是接口类型的

**注意：**

一对不包裹任何东西的花括号，除了可以代表空的代码块之外，还可以用于表示不包含任何内容的数据结构（或者说数据类型）。

比如：

struct{}，它就代表了不包含任何字段和方法的、空的结构体类型。

interface{}则代表了不包含任何方法定义的、空的接口类型。

对于一些集合类的数据类型来说，{}还可以用来表示其值不包含任何元素，比如空的切片值[]string{}，以及空的字典值map[int]string{}。

![类型断言](/images/languages/golang/Go语言核心36讲/1/类型断言.png)