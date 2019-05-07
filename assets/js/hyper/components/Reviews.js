import { h, app } from "hyperapp";
export default function Reviews({ state, actions }) {
  var currentReview = function() {
    
    return (
      <div>
        <h5 className="comp-title">Reviews</h5>
        <h2>{state.globalState.reviewsData[state.globalState.currentReview].company}</h2>
        <h4>"{state.globalState.reviewsData[state.globalState.currentReview].highlight}"</h4>
        <p>
          {state.globalState.reviewsData[state.globalState.currentReview].review}
        </p>
        <div className="author">
          <strong>{state.globalState.reviewsData[state.globalState.currentReview].author}</strong> - <em>{state.globalState.reviewsData[state.globalState.currentReview].authorInfo}</em>
        </div>
      </div>
    );
  };

  var leftClickBTN = function(){
    if(state.globalState.currentReview == 0){
      console.log('do nothing');
    }else{
      actions.reviewLeftClick()
    }
  }
  var rightClickBTN = function(){
    if(state.globalState.currentReview == (state.globalState.reviewsData.length - 1)){
      console.log('do nothing');
    }else{
      actions.reviewRightClick()
      console.log(`The current review: ${state.globalState.currentReview}`);
    }
  }
  return (
    <section id="Reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="side-image">
              <img src="https://s-i.huffpost.com/gen/1282658/images/o-FEMALE-CHEF-facebook.jpg" />
            </div>
          </div>
          <div className="col-md-4">
          {currentReview()}
            <div className="arrows">
              <i  onclick={leftClickBTN}className={`fa fa-arrow-left ${(state.globalState.currentReview > 0) ? 'ready': ''}`} aria-hidden="true" />
              <i onclick={rightClickBTN} className={`fa fa-arrow-right ${(state.globalState.currentReview < state.globalState.reviewsData.length - 1) ? 'ready': ''}`} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
