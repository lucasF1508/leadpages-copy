'use server'

import { revalidatePath } from "next/cache"
import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

export const revalidate = (path: string) => {
  revalidatePath(path)
  redirect(path)
}

export const disableDraftMode = (path: string) => {
  draftMode().disable()
  revalidatePath(path)
  redirect(path)
}