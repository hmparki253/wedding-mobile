import styles from './calendar.module.scss'

const Calendar = () => {
  return (
    <section className={styles.calendarSection}>
      <div className={styles.header}>
        <h2>DATE</h2>
      </div>

      <div className={styles.dateCard}>
        <div className={styles.dateInfo}>
          <div className={styles.mainDate}>2025. 09. 13. (토)</div>
          <div className={styles.time}>오후 2시</div>
        </div>
      </div>

      <div className={styles.calendarCard}>
        <div className={styles.month}>9월</div>
        <table className={styles.calendarTable}>
          <tbody>
            <tr className={styles.dayOfWeek}>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
              <td>
                <span>6</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>7</span>
              </td>
              <td>
                <span>8</span>
              </td>
              <td>
                <span>9</span>
              </td>
              <td>
                <span>10</span>
              </td>
              <td>
                <span>11</span>
              </td>
              <td>
                <span>12</span>
              </td>
              <td className={styles.dday}>
                <span>13</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>14</span>
              </td>
              <td>
                <span>15</span>
              </td>
              <td>
                <span>16</span>
              </td>
              <td>
                <span>17</span>
              </td>
              <td>
                <span>18</span>
              </td>
              <td>
                <span>19</span>
              </td>
              <td>
                <span>20</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>21</span>
              </td>
              <td>
                <span>22</span>
              </td>
              <td>
                <span>23</span>
              </td>
              <td>
                <span>24</span>
              </td>
              <td>
                <span>25</span>
              </td>
              <td>
                <span>26</span>
              </td>
              <td>
                <span>27</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>28</span>
              </td>
              <td>
                <span>29</span>
              </td>
              <td>
                <span>30</span>
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Calendar
