---
title: AI benchmark的评测模式说明
date: 2026-09-29
tags:
  - zh
draft: true
---
三种情况：
1.LLM直接：prompt in -> answer out，模型不调用外部工具，不与环境交互。分数可以直接归因到模型本身。
2.Agent（自选）：评测环境固定（repo快照，VM镜像，网站等等），但agent架构不做同一要求--各团队自行选择scaffold（React，swe-agent，function-calling loop），tool定义，prompt策略，错误恢复机制。。。。
3.Agent（固定）：评测同事固定环境和agent架构，分数完全可比

1和3的比较/区别在于：**Agent (固定)** 的意义正是：在**必须借助环境交互的多步复杂任务**中，强制把框架、Prompt 和工具全部锁死，从而能够像“LLM 直接”那样，**把 Agent 任务上的成功率完全归因于 LLM 本身的多步规划与工具利用能力**。