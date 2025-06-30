// packages/migration/src/utils/bootstrap.ts
import findUp from 'find-up'
import dotenv from 'dotenv'

export function loadEnv() {
  dotenv.config({
    path: findUp.sync([
      `.env.${process.env.NODE_ENV}`,
      '.env.local',
      '.env'
    ]),
  })
}