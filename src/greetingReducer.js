const initialName = '김코딩';

export const greetingReducer = (state = `안녕하세요, ${initialName}님!`, action) => {
  if (action.type === 'CHANGE_NAME'){
    return `안녕하세요, ${action.payload.name}님!`;
  } else {
    return state;
  }
}