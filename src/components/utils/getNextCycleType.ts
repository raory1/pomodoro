export function getNextCycleType(nextCycle: number) {
  if (nextCycle % 2 === 0 && nextCycle % 8 === 0) {
    return 'longBreak';
  }
  if (nextCycle % 2 === 0) {
    return 'work';
  } else {
    return 'shortBreak';
  }
}
