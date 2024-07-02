import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
  const path = ref<string>('')
  const setPath = (data: string = '') => {
    path.value = data
  }

  const page = ref<number>(1)
  const limit = ref<number>(4)
  const artworks = ref<{ 2024: string[]; 2023: string[] }>({
    2024: [],
    2023: [],
  })
  return {
    path,
    setPath,
    page,
    limit,
    artworks,
  }
})
