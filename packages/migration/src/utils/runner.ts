/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
import { loadEnv } from '../loadEnv'

loadEnv()

export function runner(main: () => Promise<void>): void {
  loadEnv()

  Promise.resolve()
    .then(main)
    .catch((err) => {
      if (err instanceof Error && err.name === 'ExitPromptError') {
        console.log('👋 until next time!')
      } else {
        throw err
      }
    })
}