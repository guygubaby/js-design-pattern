
// calculate salary

const A = (salary: number): number => salary * 4
const B = (salary: number): number => salary * 3
const C = (salary: number): number => salary * 2
const D = (salary: number): number => salary * 1

type SalaryLevel = 'A' | 'B' | 'C' | 'D'

const stratiges = {
  A, B, C, D,
}

export const getSalary = (level: SalaryLevel, salary: number): number => {
  const func = stratiges[level]
  return func(salary)
}
