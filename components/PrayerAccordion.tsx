"use client";

import { useState } from "react";

type PrayerVerse = {
  quote: string;
  reference: string;
};

type PrayerSection = {
  copy?: string;
  verses: PrayerVerse[];
};

type PrayerTopic = {
  title: string;
  sections: PrayerSection[];
};

const prayerTopics: PrayerTopic[] = [
  {
    title: "Rendons grâce à Dieu",
    sections: [
      {
        copy: "Rendons grâce à Dieu parce que nous ne sommes pas venus de nous-mêmes sur le territoire de Fontainebleau. Nous avons été envoyés et établis sous la couverture de l’Apôtre Yvan Castanou. Remercions Dieu pour cette couverture, cette vision et cet envoi.",
        verses: [
          {
            quote: "Et comment y aura-t-il des prédicateurs, s’ils ne sont pas envoyés ?",
            reference: "Romains 10:15"
          },
          {
            quote: "Après avoir jeûné et prié, ils leur imposèrent les mains, et les laissèrent partir.",
            reference: "Actes 13:3"
          }
        ]
      },
      {
        copy: "Rendons grâce à Dieu parce que, jusqu’à ce jour, Il nous a toujours donné un lieu où nous rassembler et célébrer nos cultes. Malgré les changements et les contraintes, Il ne nous a jamais abandonnés et nous a toujours secourus.",
        verses: [
          {
            quote: "Jusqu’ici l’Éternel nous a secourus.",
            reference: "1 Samuel 7:12"
          },
          {
            quote: "Car l’Éternel est bon ; Sa bonté dure toujours, et Sa fidélité de génération en génération.",
            reference: "Psaume 100:5"
          }
        ]
      },
      {
        copy: "Rendons grâce à Dieu pour tous les S.T.A.R. qui, jusqu’à ce jour, se sont mobilisés, ont servi, donné de leur temps et fait le nécessaire afin que chaque culte puisse avoir lieu.",
        verses: [
          {
            quote: "Je rends grâces à mon Dieu de tout le souvenir que je garde de vous, [...] à cause de la part que vous prenez à l’Évangile.",
            reference: "Philippiens 1:3,5"
          },
          {
            quote: "Car Dieu n’est pas injuste, pour oublier votre travail et l’amour que vous avez montré pour Son nom.",
            reference: "Hébreux 6:10"
          }
        ]
      },
      {
        copy: "Rendons grâce à Dieu parce que nous croyons qu’Il tient entre Ses mains le cœur des autorités, des décideurs et des propriétaires sur le territoire de Fontainebleau, et qu’Il est capable de les incliner en faveur de Son dessein.",
        verses: [
          {
            quote: "Le cœur du roi est un courant d’eau dans la main de l’Éternel ; Il l’incline partout où Il veut.",
            reference: "Proverbes 21:1"
          },
          {
            quote: "Ils célébrèrent avec joie [...] car l’Éternel les avait réjouis en inclinant vers eux le cœur du roi.",
            reference: "Esdras 6:22"
          }
        ]
      }
    ]
  },
  {
    title: "Prions pour que Dieu nous accorde Sa faveur dans toutes les démarches, les négociations et les décisions liées au projet.",
    sections: [
      {
        verses: [
          {
            quote: "Le roi me donna ces lettres, car la bonne main de mon Dieu était sur moi.",
            reference: "Néhémie 2:8"
          },
          {
            quote: "Car Tu bénis le juste, ô Éternel ! Tu l’entoures de Ta grâce comme d’un bouclier.",
            reference: "Psaume 5:13"
          }
        ]
      }
    ]
  },
  {
    title: "Prions pour que Dieu pourvoie pleinement aux ressources nécessaires et suscite la générosité dans les cœurs.",
    sections: [
      {
        verses: [
          {
            quote: "Dieu peut vous combler de toutes sortes de grâces, afin que, possédant toujours en toutes choses de quoi satisfaire à tous vos besoins, vous ayez encore en abondance pour toute bonne œuvre.",
            reference: "2 Corinthiens 9:8"
          },
          {
            quote: "Tout vient de Toi, et nous recevons de Ta main ce que nous T’offrons.",
            reference: "1 Chroniques 29:14"
          }
        ]
      }
    ]
  },
  {
    title: "Prions pour que toute la famille ICC Fontainebleau demeure unie autour de cette vision, dans un même cœur, une même foi et un même engagement.",
    sections: [
      {
        verses: [
          {
            quote: "Qu’il est agréable, qu’il est doux pour des frères de demeurer ensemble !",
            reference: "Psaume 133:1"
          },
          {
            quote: "La multitude de ceux qui avaient cru n’était qu’un cœur et qu’une âme.",
            reference: "Actes 4:32"
          }
        ]
      }
    ]
  },
  {
    title: "Prions pour que Dieu nous protège de tout blocage, de toute opposition et de tout découragement, et qu’Il nous donne la force de persévérer jusqu’à l’accomplissement.",
    sections: [
      {
        verses: [
          {
            quote: "Qui es-tu, grande montagne, devant Zorobabel ? Tu seras aplanie.",
            reference: "Zacharie 4:7"
          },
          {
            quote: "Si Dieu est pour nous, qui sera contre nous ?",
            reference: "Romains 8:31"
          }
        ]
      }
    ]
  },
  {
    title: "Prions pour que Dieu conduise et bénisse chaque étape des travaux, de l’aménagement et de l’installation, et qu’Il nous permette de mener cette œuvre jusqu’à son terme.",
    sections: [
      {
        verses: [
          {
            quote: "Que la grâce de l’Éternel, notre Dieu, soit sur nous ! Affermis l’ouvrage de nos mains, oui, affermis l’ouvrage de nos mains !",
            reference: "Psaume 90:17"
          },
          {
            quote: "Celui qui a commencé en vous cette bonne œuvre la rendra parfaite pour le jour de Jésus-Christ.",
            reference: "Philippiens 1:6"
          }
        ]
      }
    ]
  },
  {
    title: "Prions pour que ce lieu devienne un véritable instrument entre les mains de Dieu : un lieu de salut, de transformation, de croissance et d’impact pour Fontainebleau et au-delà.",
    sections: [
      {
        verses: [
          {
            quote: "Élargis l’espace de ta tente ; qu’on déploie les couvertures de ta demeure : ne retiens pas ! Allonge tes cordages, et affermis tes pieux !",
            reference: "Ésaïe 54:2"
          },
          {
            quote: "Je vous ai établis, afin que vous alliez, et que vous portiez du fruit, et que votre fruit demeure.",
            reference: "Jean 15:16"
          }
        ]
      }
    ]
  }
];

export default function PrayerAccordion() {
  const [openTopic, setOpenTopic] = useState<number | null>(null);

  return (
    <div className="prayer-accordion" aria-label="Sujets de prière">
      {prayerTopics.map(({ title, sections }, index) => {
        const isOpen = openTopic === index;
        const contentId = `prayer-topic-${index}`;
        const buttonId = `prayer-topic-button-${index}`;

        return (
          <article className={`prayer-accordion-item ${isOpen ? "is-open" : ""}`} key={title}>
            <button
              id={buttonId}
              className="prayer-accordion-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenTopic(isOpen ? null : index)}
            >
              <span className="prayer-accordion-marker" aria-hidden="true">✦</span>
              <span>{title}</span>
              <span className="prayer-accordion-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>

            <div
              id={contentId}
              className="prayer-accordion-content"
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
            >
              <div className="prayer-accordion-inner">
                <div className="prayer-accordion-body">
                  {sections.map(({ copy, verses }, sectionIndex) => (
                    <div className="prayer-topic-section" key={`${title}-${sectionIndex}`}>
                      {copy && <p className="prayer-topic-copy">{copy}</p>}
                      <div className="prayer-topic-verses">
                        {verses.map(({ quote, reference }) => (
                          <blockquote key={reference}>
                            <p>« {quote} »</p>
                            <cite>{reference}</cite>
                          </blockquote>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
