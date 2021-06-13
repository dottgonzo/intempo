export default class InTempo {
  startTimeInSeconds: number
  endTimeInSeconds: number
  constructor(startTime: string, endTime: string) {
    if (!startTime || !endTime) throw new Error('invalid time for intempo')

    this.startTimeInSeconds = Date.parse('01 Jan 1970 ' + startTime)
    this.endTimeInSeconds = Date.parse('01 Jan 1970 ' + endTime)
  }
  static weAreInside(startTime: string, endTime: string) {
    const inT = new InTempo(startTime, endTime)
    return inT.weAreInside()
  }
  static msecondElapsed() {
    const currentDate = new Date()
    const hours = currentDate.getUTCHours()
    const minutes = currentDate.getUTCMinutes()
    const seconds = currentDate.getUTCMinutes()
    const milliseconds = currentDate.getUTCMilliseconds()

    return Date.parse(`01 Jan 1970 ${hours}:${minutes}:${seconds}:${milliseconds} UTC`)
  }
  weAreInside() {
    const elapsed = InTempo.msecondElapsed()
    return elapsed > this.startTimeInSeconds && elapsed < this.endTimeInSeconds
  }
  weAreOutside() {
    return !this.weAreInside()
  }
  status() {
    if (this.weAreInside()) {
      return 'inside'
    } else {
      return 'outside'
    }
  }
  nextStartInMs() {
    const elapsed = InTempo.msecondElapsed()

    if (elapsed < this.startTimeInSeconds) {
      return this.startTimeInSeconds - InTempo.msecondElapsed()
    } else {
      const toEndOfDay = Date.parse('01 Jan 1970 24:00:00')
      return toEndOfDay - InTempo.msecondElapsed() + this.startTimeInSeconds
    }
  }
  nextStopInMs() {
    const elapsed = InTempo.msecondElapsed()

    if (elapsed < this.endTimeInSeconds) {
      return this.endTimeInSeconds - InTempo.msecondElapsed()
    } else {
      const toEndOfDay = Date.parse('01 Jan 1970 24:00:00')
      return toEndOfDay - InTempo.msecondElapsed() + this.endTimeInSeconds
    }
  }
}
