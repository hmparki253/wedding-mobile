export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      wedding_board: {
        Row: {
          description: string
          id: number
          name: string
          password: string
        }
        Insert: {
          description: string
          id?: number
          name: string
          password: string
        }
        Update: {
          description?: string
          id?: number
          name?: string
          password?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']

export type MessageDTO = Tables<'wedding_board'>
