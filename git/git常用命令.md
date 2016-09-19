# git常用命令收集

## vim

### 退出vim 
1. Esc
2. Shift + ;
3. q! 或者 wq!

### 设置sublime为gitbash默认浏览器
1. 将 `D:\work_soft\Sublime Text 3` 添加到 环境变量 中；（之后可能需要重启电脑使更改生效）

2. 打开 gitbash，设置 sublime text 为默认的编辑器， 使用如下命令：
```bash
git config --global --add core.editor "'sublime_text.exe' -w"
```

3. gitbash输入
```bash
sublime_text.exe xx.js
```
### git commit 不打开编辑器
git config --global --add core.editor gvim