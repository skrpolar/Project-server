# 客户端结构

客户端由vue-cli官方组件构建。

结构为：

```
├─build
├─config
├─node_modules
├─src
│  ├─assets
│  ├─common
│  │  └─css
│  ├─components
│  └─router
├─static
└─test
    ├─e2e
    │  ├─custom-assertions
    │  └─specs
    └─unit
        └─specs

```

- build         ：webpack相关配置文件。

- config        : vue基本配置文件。

- node_modules  : 依赖包。

- src           : 项目核心资源。 

    - assets    : 静态资源。

    - common    : css文件。

    - components: 组件。

    - router    : 路由。