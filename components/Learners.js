import React from "react";

import ListLearners from "./ListLearners";

function Learners({ data }) {
  console.log(data);
  return (
    <div className="container">
      <div className="msg-alert" data-aos="zoom-in-up" data-aos-delay="900">
        <h2>Digital marketing specialists and web developers in Africa</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          dignissimos eaque totam. Quidem, perferendis aspernatur similique
          deserunt reprehenderit error ab! Eveniet a voluptatibus corrupti
        </p>
      </div>
      <div className="learners-pub">
        <div className="learnerAleatoir">
          {data.learners.map((learner) => {
            return (
              <ListLearners
                key={learner._id}
                nom={learner.nom}
                postnom={learner.postnom}
                prenom={learner.prenom}
                sexe={learner.sexe}
                image={learner.image}
                email={learner.email}
                password={learner.password}
                contact={learner.contact}
                filiere={learner.filiere}
                cohorte={learner.cohorte}
                description={learner.description}
                entreprise={learner.entreprise}
              />
            );
          })}
        </div>
        <div className="publicity">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          dignissimos eaque totam. Quidem, perferendi. perferendis.
        </div>
      </div>
    </div>
  );
}

export default Learners;
