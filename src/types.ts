import { type SessionSettings } from "./env"

export const enum LocalStorageKey {
  GLOBALSETTINGS = "gpt-global-settings",
  THEME = "gpt-theme",
  PREFIXSESSION = "gpt-session-"
}

export interface ChatMessage {
  role: Role
  content: string
  type?: "default" | "locked" | "temporary"
}

export type Role = "system" | "user" | "assistant" | "error"
export type SimpleModel = "gpt-3.5" | "gpt-4"
export type Model =
  | "gpt-3.5-turbo-0613"
  | "gpt-3.5-turbo-16k-0613"
  | "gpt-4-0613"
  | "gpt-4-32k-0613"

export interface Prompt {
  desc: string
  detail: string
}

export interface Session {
  id: string
  lastVisit: number
  messages: ChatMessage[]
  settings: SessionSettings
}

export interface Option {
  desc: string
  title: string
  positions?: Set<number>
  extra?: any
}
