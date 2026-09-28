---
title: AI的Benchmark
date: 2026-09-27
tags:
  - en
  - zh
draft: true
---
1.SWE-bench-verified

2.SWE-bench-live

3.SWE-bench

他们三个属于软件工程领域的测评集。作用是负责：修bug，写feature，理解大型代码库



agent的memory和RAG的memory问题。




Benchmark是什么？
专业术语：一套标准化的测试，用来比较不同模型或在同一任务上的表现。

包括了：测试数据（数据从哪里来？）输入格式（模型看到什么？）输出格式（模型要回答什么？）评分规则（怎么样算对？）运行环境（是浏览器答题？还是调用工具，运行代码？访问文件？）汇总方式（最终分数是准确率，通过率，胜率，还是人类偏好？）

benchmark是一套完整的协议。

常见的benchmark

| 类型   | benchmark | 主要测什么        |
| ---- | --------- | ------------ |
| 知识考试 | MMLU      | 多学科知识与选择题能力  |
| 代码生成 | HumanEval | 根据说明写函数并通过测试 |
| 真实工程 | SWE-bench |              |
| 高难推理 |           |              |
| 综合评测 |           |              |
| 人类偏好 |           |              |
| 系统性能 |           |              |
|      |           |              |
