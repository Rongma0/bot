import {defineStore} from 'pinia'
import { command } from '../commands/ping'
import { Client } from 'discord.js'

export const useAppStore = defineStore('app', {
    state: () => ({
        client:null,
        commandsActionMap:null,
    }),
    getters: {},
    actions: {},
  })