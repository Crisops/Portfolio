import { useState } from 'react'

export const useForm = (validateForm) => {
  const initialForm = {
    email: '',
    subject: '',
    message: ''
  }

  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeKeyUp = (e) => {
    handleChange(e)
    setError(validateForm(form))
    const label = e.target.parentElement.children[0]

    if (e.target.value <= 0) {
      (e.target.name === 'message') ? label.style.top = `${32}px` : label.style.top = `${50}%`

      label.style.zIndex = `${0}`
      label.style.fontSize = `${14}px`
    } else {
      label.style.top = `${2}px`
      label.style.zIndex = `${3}`
      label.style.fontSize = `${12}px`
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (Object.entries(form).some(input => input[1] === '')) {
      setResponse('Error. Al parecer se encuetran campos vacíos')
      setLoading(false)
      setTimeout(() => setResponse(null), 4000)
      return
    }
    try {
      const url = 'https://formsubmit.co/ajax/crialeperez1835@gmail.com'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json'
        },
        body: JSON.stringify(form)
      }
      const response = await fetch(url, options)

      if (!response.ok) throw new Error('Fallo al enviar los datos')

      setLoading(false)
      setResponse('Datos enviados. Gracias por tu mensaje')
      setForm(initialForm)
      setTimeout(() => setResponse(null), 4000)
    } catch (e) {
      setResponse('Fallo al enviar los datos')
    }
  }

  return {
    handleSubmit,
    handleChange,
    handleChangeKeyUp,
    form,
    error,
    loading,
    response
  }
}
