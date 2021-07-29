import { Event } from './event'

const event = new Event()

event.on('xixi', (name: string) => {
  console.log(`${name} xixi called`)
})

event.on('haha', () => {
  console.log('haha called')
})

event.on('haha', () => {
  console.log('haha1 called')
})

event.emit('xixi', 'bryce')
event.emit('haha')
