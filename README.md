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

## 文档站（VitePress）

- 启动开发预览（默认端口 5173）：

```bash
pnpm docs:dev
```

- 构建静态站点产物（输出到 `docs/.vitepress/dist`）：

```bash
pnpm docs:build
```

- 预览构建产物：

```bash
pnpm docs:preview
```

- 包文档页约定：
  - 在 `docs/packages/` 目录下新增同名页面，如 `utils.md` 对应 `packages/utils` 包
  - 左侧导航会自动扫描 `packages/*`，显示包名，并指向 `/packages/<目录名>`

## 变更与发布（Changesets）

- 创建变更：

```bash
pnpm changeset
```

- 应用版本与生成变更日志：

```bash
pnpm version
```

- 构建并发布到 npm（只发布有变更的包）：

```bash
pnpm release
```

- 干跑发布流程（不打 tag、不真正发布）：

```bash
pnpm release:dry
```

- 查看当前变更状态：

```bash
pnpm changeset:status
```

说明：
- 发布前需完成 npm 登录或配置令牌（避免把令牌提交到仓库）
- `.changeset/config.json` 默认以 `master` 为基准分支，如默认分支不是 `master`，请调整 [config.json](file:///g:/chuxin-cs/qiaojun/.changeset/config.json) 的 `baseBranch`
- 包内建议提供 `prepack` 构建脚本，发布前自动构建更稳

## 新增包接入约定

- 包内必须提供：
  - `name`、`version`
  - 正确的 `master`/`module`/`types` 与 `files`（保证发布包含构建产物）
  - `publishConfig.access: "public"`
  - 自身的 `scripts.build`（任选构建工具：unbuild/tsup/vite/rollup）
- 文档接入：
  - 在 `docs/packages/` 下新增页面（命名与包目录一致），编写安装、API、示例
  - 导航无需手动配置，系统会自动扫取
