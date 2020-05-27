import React from 'react'

class Button extends React.Component {

  render() {
    return (
      <div
        className="button"
        onClick={() => {
          alert('click your mother click!')
        }}
      >
        helloButton
      </div>
    )
  }
}

export default Button
