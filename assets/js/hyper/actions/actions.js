export const actions = {
  reviewRightClick,
  reviewLeftClick,
  intro,
  showMenu
}

function reviewLeftClick (state, actions) {
  return {currentReview: state.globalState.currentReview--}
  
}
function reviewRightClick (state, actions) {
  return {currentReview: state.globalState.currentReview++}
  
}

function showMenu(){
}

function intro(state, actions){
  console.log('Just ran my first action' )
  return (
    {count: state.count + 1}
  )
}
