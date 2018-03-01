import React from 'react'

/* 
 * only email address is required
 *
 * to validate the email address is in fact more complicated than
 * the regular expression here.
 * TODO 
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
    this.validateEmailFormat = this.validateEmailFormat.bind(this)
  }

  validateEmailFormat() {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (reg.test(this.state.email) === false)
    {
      return false
    }
    return true
  }

  handleChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.validateEmailFormat()) {
      this.setState({
        id: Date.now(), 
        newSub: this.state.email
      })
    } else {
      alert('Please check your email format')
    }
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
        { (this.state.id === null) 
          ? this.renderForm()
          : this.renderConfirmation()
        }
      </div>
    )
  }
}

export default EmailOnly
