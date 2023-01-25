/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

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
          <img
            src={image}
            alt="image of main page"
            className="leaner-img"
            component="img"
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
