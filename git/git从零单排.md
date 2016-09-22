#git从零单排
## 一、下载git

## 二、安装git

## 三、运行git

### 提交代码到自己仓库

##### 1. git config

```bash
git config --global user.name zhangsalle
git config --global user.email salle@126.com
```

##### 2. git init

初始化git仓库

```bash
git init
``` 

* 使用 `ls -a` 查看隐藏目录.
* 当前目录就是 `工作区`.

##### 3. modify

balabala

##### 4. git add

把修改好的文件放到`暂存区`

```bash
git add -A
```

##### 5. git commit

把暂存区文件放到`历史区`

```bash
git commit -m "xxx"
```

##### 6. 在github上创建github仓库

##### 7. git remote

在gitbash上关联远程仓库

```bash
git remote add origin https://github.com/zhangsalle/js-note
```

##### 8. git push

本地代码提交到主干

```bash
git push -u origin master
```

### 提交代码到别人仓库

  1. Github: fork

	fork别人仓库到自己名下 

  2. `git clone https://github.com/zhangsalle/xxx`

	下载自己仓库的代码

  3. 本地: modify

  	修改代码

  4. `git add -A`

  	把代码添加到暂存区

  5. `git commit -m "提交"`

  	把代码添加到历史区

  6. `git push origin master`

  	把代码推送到远程仓库（自己的）

  7. Github: New pull request

  	在别人仓库下点击按钮

  8. Github: 神秘人物合并代码

### git将远程仓库更新到本地

  1. `git remote -v`

	查看远程仓库

  2. `git fetch origin master:temp`

  	本地新建一个分支，并且将远程仓库的master分支代码下载到本地

  3. `git diff temp`

  	本地代码与temp分支代码比较

  4. `git merge temp`

  	合并本地代码与temp分支代码