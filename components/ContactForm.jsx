import { useEffect, useState } from "react"
import FormGroup from "./FormGroup"

export default function ContactForm() {
  const [fullname, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    setFullName('testing')
  }, [])

  useEffect(() => {
    console.log('name changed')
  }, [fullname])

  function handleSubmit(e) {
    e.preventDefault()
    
    setSubmitted(false)
    setErrors(null)

    let isValid = true
    if (fullname === '' || email === '') {
      isValid = false
    }

    if (isValid) {
      setSubmitted(true)
    } else {
      setErrors('You have errors')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-3/4 mx-auto flex flex-col space-y-3">
      <FormGroup onInput={(e) => setFullName(e.target.value)} label="Full Name" type="text" placeholder="Your name" value={fullname} />

      <FormGroup onInput={(e) => setEmail(e.target.value)} value={email} label="Email" type="email" placeholder="Your email" />

      <FormGroup onInput={(e) => setMessage(e.target.value)} value={message} label="Message" type="text" placeholder="Your message" />

      <div className="text-center">
        <button className="bg-green-500 hover:bg-opacity-80 transition-all text-gray-50 px-6 py-2 rounded">Send Message</button>
      </div>

      { submitted ? (
        <span>Thank you for your submission {fullname}</span>
      ) : ''}

      { errors !== null ? (
        <span className='text-red-600'>{errors}</span>
      ) : ''}
    </form>
  )
}
