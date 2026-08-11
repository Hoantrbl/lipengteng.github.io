# 李鹏腾的学术主页

一个适用于 GitHub Pages 的单页学术主页。设计采用轻量、居中、暖金色强调的学术档案风格，并独立实现了响应式布局和交互。

## 当前功能

- 个人简介与头像
- 学术动态时间线
- 论文方向筛选与数量统计
- 代表性项目
- 荣誉与奖项
- 邮箱复制提示
- 桌面章节导航
- 手机端响应式适配

## 发布前需要替换

在 `index.html` 中搜索并替换：

- `your-email@example.com`
- 学校 / 实验室 / 机构名称
- 导师姓名
- 研究主题与个人介绍
- 论文、项目和获奖信息
- GitHub、Scholar、ORCID、CV 链接

将个人照片保存为 `avatar.jpg` 后，可把 `avatar.svg` 的引用替换为照片路径。

## 本地预览

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

访问 `http://127.0.0.1:8000/`。

## GitHub Pages 地址

- GitHub 用户名：`Hoantrbl`
- 仓库名称：`lipengteng.github.io`
- 网站地址：`https://hoantrbl.github.io/lipengteng.github.io/`
