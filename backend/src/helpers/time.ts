export class TimeAdapter {
  /**
   *@param time 23:59
   *@result 1439
   */
  convertHoursToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number)
    const minutesAmount = hours * 60 + minutes
    return minutesAmount
  }

  convertMinutesToHourString(time: number): string {
    const minutes = time % 60
    const hours = Math.floor(time / 60)
    const hoursWithZero = String(hours).padStart(2, '0')
    const minutesWithZero = String(minutes).padStart(2, '0')
    const hourString = [hoursWithZero, minutesWithZero].join(':')
    return hourString
  }
}
