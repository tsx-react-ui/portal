# @tsx-react-ui/portal

* 作者：maqing01
* 邮箱：475986855@qq.com

## 介绍

_The portal component of the react written in Typescript_

---

## 安装

组件使用 `npm` 进行管理，请使用以下命令进行组件安装：

```
npm i @tsx-react-ui/portal --save
```

- 安装cnpm `npm install -g cnpm --registry=https://registry.npm.taobao.org`


---

## 使用

### 样例文档

- 待开发

### 使用
最少配置参数为：
- 传入`children`增加内容

```jsx
<Portal>
    <div>我被转移到body下了</div>
</Portal>
```
详细配置：
```jsx
<Portal className="test" target={() => document.getElementById('test')}>
    <div>我被转移到body下了</div>
</Portal>
```
### 配置参数

| Prop | Type | Default | Description |
| ---- |:----:|:-------:| :----------:|
| **`children`** | `ReactNode` | `undefined` | 被传送的组件 |
| **`target`** | `function` | `() => document.body` | 返回目标元素 |
| **`className`** | `string` | `undefined` | 自定义样式名 |

---

## Changelog

---
