// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2027'),
// })

class CountdownTimer {
  constructor({ selector, targetDate }) {
    setInterval(() => {
      this.timer = document.querySelector(selector)

      this.getDays = this.timer.querySelector('[data-value="days"]')
      this.getHours = this.timer.querySelector('[data-value="hours"]')
      this.getMins = this.timer.querySelector('[data-value="mins"]')
      this.getSecs = this.timer.querySelector('[data-value="secs"]')

      const currentDate = new Date()
      const time = targetDate - currentDate

      const days = Math.floor(time / (1000 * 60 * 60 * 24))
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      const secs = Math.floor((time % (1000 * 60)) / 1000)

      this.getDays.textContent = days
      this.getHours.textContent = hours
      this.getMins.textContent = mins
      this.getSecs.textContent = secs
    }, 1000)
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2027'),
})
