---
title: 关于AGENT的tool的一些注意事项
date: 2026-09-24
tags:
  - Tool_use
  - agent
  - ERROR
draft: false
---
Agent的tool在agent loop中的调用很重要
1.ToolResultBlock = ToolResult 的字段 + tool_use_id。ToolResult 产生的时候还不知道自己对应哪次 tool_use，挂进对话历史前必须补上这个 id 才能让 API 正确配对请求和结果。
2. 用户在交互确认里点了"拒绝"，这次工具调用的 is_error 是什么，内容是哪种文案？
is_error为true，rejected_tool_result是固定文案：the user has rejected th