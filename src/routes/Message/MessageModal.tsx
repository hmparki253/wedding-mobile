import { Dispatch, SetStateAction, useState } from 'react'

import { MessageDTO } from 'types/supabase'
import { deleteMessage } from 'services/message'
import Button from 'components/Button'
import Modal from 'components/Modal'
import styles from './message.module.scss'

interface Props {
  selectedMessage?: MessageDTO
  setMessages: Dispatch<SetStateAction<MessageDTO[]>>
  closeModal: () => void
}

const MessageModal = ({ selectedMessage, setMessages, closeModal }: Props) => {
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleDelete = () => {
    if (!selectedMessage) return
    const { id: selectedId, password: selectedPassword } = selectedMessage

    if (!password) {
      setErrorMessage('비밀번호를 입력해주세요.')
      return
    }
    if (password !== selectedPassword) {
      setErrorMessage('비밀번호가 일치하지 않습니다.')
      return
    }

    deleteMessage(selectedId)
      .then(() => {
        setMessages((prev) => prev.filter((message) => message.id !== selectedId))
      })
      .finally(closeModal)
  }

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.modal}>
        <p>메시지를 삭제하시겠습니까?</p>
        <input
          type='password'
          placeholder='비밀번호를 입력하세요'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Button text='삭제' onClick={handleDelete} />
      </div>
    </Modal>
  )
}

export default MessageModal
