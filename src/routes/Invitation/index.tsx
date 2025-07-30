import styles from './invitation.module.scss'
import BankAccount from './components/BankAccount'
import Calendar from './components/Calendar'
import Location from './components/Location'
import Welcome from './components/Welcome'

const Invitation = () => {
  return (
    <div className={styles.invitationSection}>
      <Welcome />
      <Location />
      <Calendar />
      <BankAccount />
    </div>
  )
}

export default Invitation
