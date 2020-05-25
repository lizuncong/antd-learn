---
title: 基本用法
order: 1
---

这个例子演示如何创建按钮；

```jsx
class App extends React.Component{
  
  render(){
    return <div>
        <button onClick={() => {
            alert('this is a button!')
        }}>
            我是一个按钮
        </button>
    </div>
  }
}

ReactDOM.render(
  <App/>,
  mountNode
)
```
