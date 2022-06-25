# VScode Vim

## 自动切换中英文

**MacOS**

1. 首先安装 [im-select](https://github.com/daipeihust/im-select)

```shell
curl -Ls https://raw.githubusercontent.com/daipeihust/im-select/master/install_mac.sh | sh
```

这里如果不好使的话，就手动把 `im-select` 下载到 `/usr/local/bin` 这个目录下

2. 在 VSCode 的 `settings.json` 中添加：

```json
"vim.autoSwitchInputMethod.enable": true,
"vim.autoSwitchInputMethod.defaultIM": "com.apple.keylayout.ABC",
"vim.autoSwitchInputMethod.obtainIMCmd": "/usr/local/bin/im-select",
"vim.autoSwitchInputMethod.switchIMCmd": "/usr/local/bin/im-select 	com.apple.keylayout.ABC {im}"
```

这样当输入完中文以后，进入到 `normal` 模式下，就会自动切换输入法为 `defaultIM`，也就是mac自带的ABC英文输入法。

`"vim.autoSwitchInputMethod.switchIMCmd": "/usr/local/bin/im-select 	com.apple.keylayout.ABC {im}"`，这句的意思是指：

每次切换到 `insert` 模式时，输入法都是ABC，如果不想每次都是ABC的话，可以设置为：

```json
"vim.autoSwitchInputMethod.switchIMCmd": "/usr/local/bin/im-select {im}"
```

这里需要注意：如果是中文输入法下，按 `esc` 切换到正常模式是可以的，但是按 `control+[` 是不可以，因为这时 `[` 是 ` 【` ，所以我改用 `control+c` 了。

