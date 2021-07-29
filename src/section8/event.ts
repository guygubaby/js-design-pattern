interface EventInterface<T extends string|symbol> {
  bus: Record<T, Function[]>
  on(type: T, fn: Function): void
  off(type: T, fn: Function): void
  emit(type: T, ...args: unknown[]): void
}

export class Event<T extends string|symbol> implements EventInterface<T> {
  bus: Record<T, Function[]>

  constructor() {
    this.bus = Object.create(null)
  }

  on(type: T, fn: Function) {
    const subs = this.bus[type] || []
    subs.push(fn)
    this.bus[type] = subs
  }

  off(type: T, fn: Function) {
    const subs = this.bus[type] || []
    if (!subs.includes(fn)) return
    const index = subs.indexOf(fn)
    subs.slice(index, 1)
  }

  emit(type: T, ...args: unknown[]) {
    const subs = this.bus[type]
    if (!subs || subs.length === 0) return
    subs.forEach(fn => fn(...args))
  }
}
