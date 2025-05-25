import { object, string } from 'yup'

export function useValidation(fields: string[], _num: number = 6) {
  interface Schema {
    [key: string]: any
  }

  const schema: Schema = {}

  const validation: Schema = {
    email: string().email('Неверный формат (пример: RwNpM@example.com)').required('Неверный формат (пример: RwNpM@example.com)'),
    name: string().min(2, 'Минимум 2 символа').required('Минимум 2 символа'),
    phone: string()
      .matches(/^\+?\d{1,3}?[-\s]?\(?\d{1,4}?\)?[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9}$/, 'Неверный формат (пример: +79996211951)')
      .required('Неверный формат (пример: +79996211951)'),
  }

  fields.forEach((field) => {
    schema[field] = validation[field]
  })

  const validationSchema = object(schema)

  return validationSchema
}
