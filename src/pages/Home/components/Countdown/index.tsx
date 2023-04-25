import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CountdownContainer, Separator } from './styles'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  /* 
    Math.floor => arrendonda para baixo  floor/chão
    Math.ceil => arrendonda para cima  ceil/teto
    Math.round => arrendonda acima de .5 para cima ou abaixo de .5 para baixo
  */
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')
  /* 
  padStart => Preenche o início de uma string até um tamanho específico, 
  no caso aqui é 2. caso ela não tenha aquele tamanho ainda com algum caractere.

  padEnd => Preenche o final de uma string até um tamanho específico, 
  caso ela não tenha aquele tamanho ainda com algum caractere. 
  */

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentAsFinished,
    setSecondsPassed,
  ])

  // Acrescentar o timer no título da página.
  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle?.task}`
    } else {
      document.title = 'Ignite Timer'
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
