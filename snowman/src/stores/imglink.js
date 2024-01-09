import { ref } from 'vue'
import { defineStore } from 'pinia'

import teqmImg from '../assets/team.jpg'

export const useImglinkStore = defineStore('imglink', () => ({
  imglink: ref(teqmImg)
}))
