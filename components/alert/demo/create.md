---
title: 基本用法
order: 1
---

这个例子演示如何创建alert；

```jsx
import { Alert } from 'react-ui';
class App extends React.Component{
  
  render(){
    return <div>
       <Alert />
    </div>
  }
}

ReactDOM.render(
  <App/>,
  mountNode
)
```
