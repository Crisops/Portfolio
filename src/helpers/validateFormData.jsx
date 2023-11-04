export const validateFormData = (form) => {
  const errors = {}

  const regexxEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  const regexSubject = /^.{1,150}$/

  const regexMessage = /^(?:[\s\S]{0,255})$/

  if (!regexxEmail.test(form.email)) errors.email = 'Email no valido'

  if (!form.subject.trim()) {
    errors.subject = 'El asunto no puede estar vacio'
  } else if (!regexSubject.test(form.subject)) {
    errors.subject = 'El asunto no puede tener más de 150 caracteres'
  }

  if (!form.message.trim()) {
    errors.message = 'Este campo no puede estar vacío'
  } else if (!regexMessage.test(form.message)) {
    errors.message = 'Se ha sobrepasado el límite de caracteres'
  }

  return errors
}
