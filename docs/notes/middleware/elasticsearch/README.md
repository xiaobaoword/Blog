---
title: Elasticsearch
createTime: 2024/12/18 10:40:11
permalink: /middleware/elasticsearch/
---


## 学习资料

[极客时间-Elasticsearch核心技术与实战 阮一鸣](https://time.geekbang.org/course/intro/100030501) [🔨](https://www.youtube.com/playlist?list=PLn5XLkWHBxyuTUqxpuwdPEwO3ZoxwhkyS)

[Elastic 中国社区官方博客](https://elasticstack.blog.csdn.net/?type=blog)

[ElasticSearch核心知识讲解](https://developer.aliyun.com/article/941168)

### Logstash

入门跟练

[Logstash：Logstash 入门教程 （一）](https://blog.csdn.net/UbuntuTouch/article/details/105973985)

[Logstash：Logstash 入门教程 （二）](https://elasticstack.blog.csdn.net/article/details/105979677)

[Logstash：把 Apache 日志导入到 Elasticsearch](https://blog.csdn.net/UbuntuTouch/article/details/100727051)

## to do list

Elasticsearch 工程师认证考试


## 概述

Elasticsearch 是一个分布式的、基于 Lucene 的搜索和分析引擎。

它能够快速地存储、搜索和分析大量数据。

Elasticsearch 经常用于日志分析、实时应用监控、全文检索等场景。

它的特点包括高扩展性、近实时搜索能力以及对结构化和非结构化数据的支持。

## 倒排索引

倒排索引作为ES的核心，底层基于Lucene进行实现。

倒排索引（Inverted Index）也叫反向索引，有反向索引必有正向索引。

通俗地来讲，正向索引是通过文档ID找单词。反向索引则是通过单词找文档ID。

## 文本分析（Analysis）

文本分析是把全文本转化为一系列单词（term/token）的过程，称为分词。

它是自然语言处理（NLP）领域中的重要过程。

这个过程是通过分词器（analyzer）来实现的，es有内置的分词器、也有自定义分词器。

### 分词器（Analyzer）

分词器（Analyzer）由三个核心部分组成：字符过滤器（Character Filters）、分词器（Tokenizer） 和 （词条过滤器）Token Filters。它们按照**顺序**依次处理文本，完成从原始文本到可索引词条（Terms）的转换。

1. Character Filters

字符过滤器，文本分析的第一步，对原始文本进行预处理。

它用于筛选、转换或移除特定字符，例如：移除HTML标签、转换为小写、替换某些字符等。

2. Tokenizer

分词器，文本分析的第二步，它的功能是将连续的文本分割成一个个独立的单元（如单词或子词），这些单元是更小的词条，被称为 tokens。这对于后续的各种文本处理任务（如机器翻译、情感分析等）是非常关键的步骤。

不同的语言可能需要不同类型的分词器，因为语言结构和语法规则各不相同。例如，在英文中，分词器可以根据空格来区分单词；而在中文中，则需要更复杂的算法来识别词语的边界。


3. Token Filters

词条过滤器，对切分单词加工、小写、删除 stopwords，增加同义词

Token Filters 是文本分析管道中的一个组件，位于分词器（Tokenizer）之后。它们的主要任务是对已经分词后的词汇单元（tokens）进行进一步的处理或转换。与字符过滤器（Character Filters）不同，Token Filters 不会改变原始文本，而是直接操作已经生成的 tokens。


