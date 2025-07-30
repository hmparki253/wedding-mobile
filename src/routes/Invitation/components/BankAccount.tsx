import { MouseEvent, useEffect, useState } from 'react'

import { useModal } from 'hooks/useModal'
import Modal from 'components/Modal'
import Button from 'components/Button'
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg'
import styles from './bankAccount.module.scss'

const side = {
  bride: '신부측',
  groom: '신랑측',
}

type Side = typeof side[keyof typeof side]

interface Account {
  person: string
  name: string
  bank: string
  account: string
}

const accounts: Record<keyof typeof side, Account[]> = {
  groom: [
    {
      person: '신랑',
      name: '박현민',
      bank: '우리은행',
      account: '1002-740-834018',
    },
  ],
  bride: [
    {
      person: '신부',
      name: '이수경',
      bank: '카카오뱅크',
      account: '22640104329522',
    },
    {
      person: '아버지',
      name: '이창수',
      bank: '우리은행',
      account: '168-315378-12-001',
    },
    {
      person: '어머니',
      name: '박경분',
      bank: '농협',
      account: '211051-52-272023',
    },
  ],
}

const BankAccount = () => {
  const [selectedSide, setSelectedSide] = useState<Side>(side.groom)
  const [copiedPerson, setCopiedPerson] = useState('')
  const { isModalOpen, openModal, closeModal } = useModal()

  useEffect(() => {
    return () => setCopiedPerson('')
  }, [isModalOpen])

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedSide((e.target as HTMLButtonElement).value as Side)
    openModal()
  }

  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    const { id, value } = e.target as HTMLButtonElement
    navigator.clipboard.writeText(value)
    setCopiedPerson(id)
  }

  return (
    <section className={styles.bankSection}>
      <div className={styles.header}>
        <h2>마음 전하실 곳</h2>
        <p className={styles.description}>
          소중한 마음을 전해주시는 모든 분들께
          <br />
          진심으로 감사드립니다
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          text={`💙 ${side.groom}`}
          value={side.groom}
          size='fullWidth'
          buttonStyle='secondary'
          onClick={handleClick}
        />
        <Button
          text={`💖 ${side.bride}`}
          value={side.bride}
          size='fullWidth'
          buttonStyle='secondary'
          onClick={handleClick}
        />
      </div>

      {isModalOpen && (
        <Modal title={selectedSide === side.groom ? side.groom : side.bride} closeModal={closeModal}>
          <div className={styles.accountList}>
            {accounts[selectedSide === side.groom ? 'groom' : 'bride'].map((account) => (
              <div key={account.name} className={styles.accountCard}>
                <div className={styles.accountInfo}>
                  <div className={styles.personInfo}>
                    <span className={styles.person}>{account.person}</span>
                    <span className={styles.name}>{account.name}</span>
                  </div>
                  <div className={styles.bankInfo}>
                    {account.bank} {account.account}
                  </div>
                </div>
                <div className={styles.copyButton}>
                  {account.name === copiedPerson ? (
                    <CheckIcon />
                  ) : (
                    <Button
                      id={account.name}
                      text='복사'
                      value={`${account.bank} ${account.account}`}
                      size='small'
                      buttonStyle='ghost'
                      onClick={handleCopy}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </section>
  )
}

export default BankAccount
