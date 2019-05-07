import { h, app } from "hyperapp";
export default function OurStory({ state, actions }) {
  return (
    <section id="OurStory">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <h5 className="comp-title">Our Story</h5>
        <h2> Cooking is the art of adjustment</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni animi pariatur earum quas ipsa quo? Culpa quisquam repudiandae doloremque inventore harum dolorem id laborum magni voluptatibus hic saepe animi aut accusamus voluptate voluptatum expedita excepturi, esse blanditiis, beatae delectus? Porro nobis maiores, nisi similique adipisci repellendus odio nesciunt officiis.</p>
        <div className="quote">"The best steak in the town of Huntington" -<strong>Thomas Eggsy</strong></div>
        <a href="#" className="reserve-btn">Reserve</a>
        </div>
        <div className="col-md-6">
          <div className="video-img"></div> 
        </div>
      </div>
      </div>
    </section>
  );
}
