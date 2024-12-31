// lib/api.ts
interface ApiResponse<T> {
    data: T | null
    error: string | null
  }
  
  export async function fetchApi<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`/api/${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      })
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
  
      const data = await response.json()
      return { data, error: null }
    } catch (error) {
      console.error(`API Error: ${endpoint}`, error)
      return {
        data: null,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      }
    }
  }