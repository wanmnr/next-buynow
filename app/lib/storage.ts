// lib/storage.ts (important)

// Shopping cart persistence
// User preferences
// Recent views
// Wishlist functionality

export function getLocalStorage<T>(key: string): T | null {
    if (typeof window === 'undefined') return null
    
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return null
    }
  }
  
  export function setLocalStorage<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return
    
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }