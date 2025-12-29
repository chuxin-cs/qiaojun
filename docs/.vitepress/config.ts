import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

function getPackageSidebarItems(): { text: string; link: string }[] {
  const packagesDir = resolve(__dirname, '..', '..', 'packages')
  let dirs: string[] = []
  try {
    dirs = readdirSync(packagesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort()
  } catch {
    dirs = []
  }

  return dirs.map((dirName) => {
    const pkgJsonPath = resolve(packagesDir, dirName, 'package.json')
    let text = dirName
    try {
      const pkg = JSON.parse(readFileSync(pkgJsonPath, 'utf-8')) as {
        name?: string
        description?: string
      }
      text = pkg.name ?? dirName
    } catch {}

    return { text, link: `/packages/${dirName}` }
  })
}

export default {
  lang: 'zh-CN',
  title: 'qiaojun',
  description: 'Monorepo 技术文档',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Packages', link: '/packages/' },
    ],
    sidebar: {
      '/packages/': [
        { text: '概览', link: '/packages/' },
        ...getPackageSidebarItems(),
      ],
    },
    search: {
      provider: 'local',
    },
  },
}
