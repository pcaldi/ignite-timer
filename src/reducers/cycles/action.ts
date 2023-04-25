import { Cycle } from './reducer'

export enum ActionTypes {
  /* eslint-disable no-unused-vars */
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_FINISHED = 'MARK_CURRENT_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_FINISHED,
  }
}
