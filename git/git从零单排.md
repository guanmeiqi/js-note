#git从零单排
## 一、下载git
## 二、安装git
## 三、运行git
### 配置git用户名和邮箱
```bash
git config --global user.name zhangsalle
git config --global user.email salle@126.com
```
### 创建版本库
1. 初始化git仓库
使用 `ls -a` 查看隐藏目录.
当前目录就是 `工作区`.
```bash
git init
``` 
2. 修改文件
balabala
3. 把修改好的文件放到`暂存区`
```bash
git add -A
```
4. 把暂存区文件放到`历史区`
```bash
git commit -m "xxx"
```
