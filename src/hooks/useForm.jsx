import { useState } from 'react'

export const useForm = (validateForm) => {
  const initialForm = {
    email: '',
    subject: '',
    message: ''
  }

  const initialSubject = {
    start: 0,
    end: 150
  }

  const initialTextArea = {
    start: 0,
    end: 255
  }

  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [limitSubject, setLimitSubject] = useState(initialSubject)
  const [limitTextArea, setLimitTextArea] = useState(initialTextArea)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const animateLabelText = (e) => {
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

  const handleChangeKeyUp = (e) => {
    handleChange(e)
    setLimitSubject(prevent => ({ ...prevent, start: form.subject.length }))
    setLimitTextArea(prevent => ({ ...prevent, start: form.message.length }))
    setError(validateForm(form))
    animateLabelText(e)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (Object.entries(form).some(input => input[1] === '')) {
      setResponse('Digite la información correctamente, antes de enviar los datos')
      setLoading(false)
      setTimeout(() => setResponse(null), 4000)
      return
    }

    if (Object.keys(error).length > 0) {
      setResponse(`Digita bien la información en el campo ${Object.keys(error).join(',')}`)
      setTimeout(() => setResponse(null), 4000)
      setLoading(false)
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
      resetForm()
      setTimeout(() => setResponse(null), 4000)
    } catch (e) {
      setResponse('Fallo al enviar los datos')
    }
  }

  const resetForm = () => {
    setForm(initialForm)
    setLimitSubject(initialSubject)
    setLimitTextArea(initialTextArea)
  }

  return {
    handleSubmit,
    handleChange,
    handleChangeKeyUp,
    form,
    error,
    loading,
    response,
    limitSubject,
    limitTextArea
  }
}
