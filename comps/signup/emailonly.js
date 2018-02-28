import React from 'react'

/* 
 * only email address is required 
 */

class EmailOnly extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      email: "",
      newSignup: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validateEmailFormat() {
    return (
      this.state.email.length > 0
    )
  }

  handleChange(e) {
    console.log(e)

    this.setState({
      email: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('sub', e)
    this.setState({
      id: Date.now(), 
      newSub: this.state.email
    })
    console.log(this.state.id)
  }

  renderConfirmation() {
    return (
      <div className='confirm'>
        <p>Thank you and we will keep you updated!</p>
      </div>
    )
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input value={this.state.email} 
               onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Notify me</button>
      </form>
    )
  }

  render() {
    return (
      <div className='signup'>
        { (this.state.newSignup === null) 
          ? this.renderForm()
          : this.renderConfirmation()
        }
      </div>
    )
  }
}

export default EmailOnly
