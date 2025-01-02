// app/utils/validation.ts
export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }
  
  export const validatePhone = (phone: string): boolean => {
    const regex = /^\+?[\d\s-]{10,}$/
    return regex.test(phone)
  }
  
  export const validatePostalCode = (code: string): boolean => {
    const regex = /^\d{5}(-\d{4})?$/
    return regex.test(code)
  }