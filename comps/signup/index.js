import EmailOnly from './emailonly'

export default () => (
  <div className='email-signup'>
    <EmailOnly />
    <style jsx global>{`
      .email-signup {
        text-align: center;
      }
      @media all and (min-width: 480px) {
        .signup {
          padding: 60px 0;
        }
        .signup form {
          margin: 0 auto;
          max-width: 320px;
        }
      }
    `}</style>  
  </div>
)
