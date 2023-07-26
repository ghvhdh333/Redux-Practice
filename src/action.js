// Action의 타입을 상수로 줘서 같은 타입명을 사용하지 못하도록 한다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const SET_COUNT = 'SET_COUNT';
const CHANGE_NAME = 'CHANGE_NAME';

export const increase = () => {
    return { 
      type: INCREASE
    }
  }

export const decrease = () => {
    return { 
      type: DECREASE
    }
  }

export const setCounter = (number) => {
    return {
      type: SET_COUNT,
      payload: number
    }
  } 
  
export const changeName = (name) => {
    return {
      type: CHANGE_NAME,
      payload: { name }
    }
  } 