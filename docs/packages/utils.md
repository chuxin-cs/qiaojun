---
title: "@qiaojun/utils"
---

# @qiaojun/utils

常用工具函数库，面向 React、Vue、微信小程序、uni-app 等项目复用。

## 安装

```bash
pnpm add @qiaojun/utils
```

## 构建

该包基于 unbuild 构建，产物输出到 `dist/`：

```bash
pnpm -C packages/utils build
```

或在仓库根目录：

```bash
pnpm build:utils
```

## API

### add

```ts
import { add } from '@qiaojun/utils'

add(1, 2)
```
