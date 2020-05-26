---
title: 基本用法
order: 1
---

这个例子演示如何创建按钮；

```jsx
import { Button } from 'react-ui';
class App extends React.Component{
  
  render(){
    return <div>
       <Button />
    </div>
  }
}

ReactDOM.render(
  <App/>,
  mountNode
)
```
