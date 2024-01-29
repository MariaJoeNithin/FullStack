import React, { useState } from "react";
import "./review.css";

const RandomReview = () => {
  const [reactReview, setReview] = useState(0);

  let review = [
    {
      id: 1,
      name: "Susan Smith",
      post: "WEB DEVELOPER",
      description:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      image: "https://course-api.com/images/people/person-1.jpeg",
    },
    {
      id: 2,
      name: "Anna Johnson",
      post: "WEB DEVELOPER",
      description:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      image: "https://course-api.com/images/people/person-2.jpeg",
    },
    {
      id: 3,
      name: "Peter Jones",
      post: "INTERN",
      description:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      image: "https://course-api.com/images/people/person-4.jpeg",
    },
    {
      id: 4,
      name: "Bill Anderson",
      post: "THE BOSS",
      description:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
      image: "https://course-api.com/images/people/person-3.jpeg",
    },
  ];

  function handleRandom() {
    let randomNumber = Math.floor(Math.random() * review.length);
    if (reactReview === randomNumber) {
      handleRandom();
    } else {
      setReview(randomNumber);
    }
  }
  function handleClick(cnt, num) {
    cnt = num + cnt;
    console.log(cnt);
    if (cnt >= review.length) {
      cnt = setReview(0);
    } else if (cnt < 0) {
      cnt = setReview(review.length - 1);
    } else {
      setReview(cnt);
    }
  }

  return (
    <div className="container-fluid" id="page1">
      <div className="container shadow rounded-2" id="newCard">
        <div className="imgRound">
          <div className="img1">"</div>
          <div className="img2 rounded-circle">
            <img
              src={review[reactReview].image}
              alt={`${review[reactReview].name}`}
            />
          </div>
          <div className="img3"></div>
        </div>
        <h3>{review[reactReview].name}</h3>
        <h5 className="text-primary">{review[reactReview].post}</h5>
        <p className="text-center">{review[reactReview].description}</p>
        <div className="btnGrp">
          <button
            className="btn text-primary"
            onClick={() => handleClick(reactReview, -1)}
          >
            &lt;
          </button>
          <button
            className="btn text-primary"
            onClick={() => handleClick(reactReview, 1)}
          >
            &gt;
          </button>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleRandom}
          style={{ width: "200px" }}
        >
          Surprise Me !
        </button>
      </div>
    </div>
  );
};

export default RandomReview;
