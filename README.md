# qiaojun

pnpm + monorepo 工作区，用于管理 `packages/**` 下的可发布包与 `plays/*` 下的演示/实验项目。

## 环境要求

- Node.js（建议使用 LTS）
- pnpm

## 工作区结构

本仓库使用 [pnpm-workspace.yaml](file:///g:/chuxin-cs/qiaojun/pnpm-workspace.yaml) 定义子包范围：

- `packages/**`：工具库/组件库等可复用包
- `plays/*`：示例/实验项目

当前已包含：

- `@qiaojun/utils`：常用工具函数库（位于 `packages/utils`，基于 unbuild 构建）

## 安装依赖

在仓库根目录执行：

```bash
pnpm install
```

## 常用命令

### 一键构建（推荐在根目录执行）

- 构建工作区内所有包含 `build` 脚本的包：

```bash
pnpm build
```

- 仅构建 `packages/**` 下的包：

```bash
pnpm build:packages
```

- 仅构建 `@qiaojun/utils`：

```bash
pnpm build:utils
```

### 单包构建（更灵活）

- 在根目录按包名过滤：

```bash
pnpm --filter @qiaojun/utils build
```

- 在任意目录指定工作目录：

```bash
pnpm -C packages/utils build
```

## 版本管理

仓库集成了 `@changesets/cli`（见根 package.json 的 devDependencies），用于多包版本变更管理。
