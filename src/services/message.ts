import { supabase } from './supabase'
import { MessageDTO } from 'types/supabase'

export const getMessages = async () => {
  const { data } = await supabase.from('tb_guestBook').select().order('id', { ascending: false })

  console.log(data)

  return { messages: data || [] }
}

export const postMessage = async (message: Omit<MessageDTO, 'id'>) => {
  const { data, error } = await supabase
    .from('tb_guestBook')
    .insert({ ...message })
    .select()

  return { message: data || [], error }
}

export const deleteMessage = async (id: number) => {
  const { error } = await supabase.from('tb_guestBook').delete().eq('id', id)

  return { error }
}
