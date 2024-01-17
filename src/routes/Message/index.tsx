import { FormEvent, useEffect, useState } from 'react'

import { getMessages, postMessage } from 'services/message'
import { MessageDTO } from 'types/supabase'
import { useModal } from 'hooks/useModal'
import MessageModal from './MessageModal'
import Button from 'components/Button'
import { ReactComponent as DeleteIcon } from 'assets/icons/close.svg'
import styles from './message.module.scss'

const initialFormData = {
  name: '',
  password: '',
  description: '',
}

const Message = () => {
  const [messages, setMessages] = useState<MessageDTO[]>([])
  const [formData, setFormData] = useState<Omit<MessageDTO, 'id'>>(initialFormData)
  const [selectedMessage, setSelectedMessage] = useState<MessageDTO>()
  const [errorMessage, setErrorMessage] = useState('')
  const { isModalOpen, openModal, closeModal } = useModal()

  useEffect(() => {
    getMessages().then((res) => setMessages(res.messages))
  }, [])

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setErrorMessage('이름을 입력해주세요.')
      return
    }
    if (!formData.password || formData.password.length < 4) {
      setErrorMessage('비밀번호는 4자리 이상이어야 합니다.')
      return
    }
    if (!formData.description.trim()) {
      setErrorMessage('메시지를 입력해주세요.')
      return
    }

    postMessage(formData).then((res) => {
      setMessages((prev) => [...res.message, ...prev])
    })
    setFormData(initialFormData)
    setErrorMessage('')
  }

  const handleDeleteClick = (message: MessageDTO) => {
    setSelectedMessage(message)
    openModal()
  }

  return (
    <section>
      <h2>MESSAGE</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='name'
            placeholder='이름'
            autoComplete='off'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='비밀번호'
            autoComplete='off'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <textarea
          name='description'
          placeholder='축하 메시지를 남겨주세요.'
          autoComplete='off'
          maxLength={200}
          value={formData.description}
          onChange={handleChange}
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Button type='submit' text='등록' />
      </form>
      <ul className={styles.messageList}>
        {messages.map((message) => (
          <li key={message.id} className={styles.messageItem}>
            <div className={styles.messageHeader}>
              <div>
                <span>{message.name}</span>
                {/* <span>{message.created_at.slice(0, 10)}</span> */}
              </div>
              <button type='button' value={message.id} onClick={() => handleDeleteClick(message)}>
                <DeleteIcon />
              </button>
            </div>
            <p>{message.description}</p>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <MessageModal selectedMessage={selectedMessage} setMessages={setMessages} closeModal={closeModal} />
      )}
    </section>
  )
}

export default Message
