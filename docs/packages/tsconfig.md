---
title: "@qiaojun/tsconfig"
---

# @qiaojun/tsconfig

用于统一 TypeScript 配置的包（例如基础 tsconfig、不同运行时/框架的扩展配置等）。

## 约定

- 该包建议只导出配置文件（例如 `tsconfig.json`、`*.json`），供其他包通过 `extends` 引用
- 需要发布到 npm 时，确保 `package.json` 的 `files` 字段包含这些配置文件
