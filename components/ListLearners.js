import React from "react";
import Image from "next/image";
import ImageMain from "../img/main.jpg";

function ListLearners({
  id,
  nom,
  postnom,
  prenom,
  sexe,
  image,
  email,
  password,
  contact,
  filiere,
  cohorte,
  description,
  entreprise,
}) {
  return (
    <>
      <div
        className="container-learner"
        data-aos="fade-down"
        data-aos-delay="50"
      >
        <div className="blog-learner">
          <Image
            src={ImageMain}
            alt="image of main page"
            className="leaner-img"
          />
          <div className="title-learner">{filiere}</div>
          <div className="learner-description">{description}</div>
          <div className="detail">Detail</div>
        </div>
      </div>
    </>
  );
}

export default ListLearners;
