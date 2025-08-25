'use server'

import { revalidatePath } from "next/cache"
import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

export const revalidate = async (path: string) => {
  revalidatePath(path)
  redirect(path)
}

export const disableDraftMode = async (path: string) => {
  draftMode().disable()
  revalidatePath(path)
  redirect(path)
}