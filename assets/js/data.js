/* Généré par scripts/build.mjs — ne pas éditer à la main. */
window.ATLAS = {
  "budget": {
    "meta": {
      "year": 2026,
      "scope": "Ensemble des administrations publiques (APU)",
      "unit": "EUR",
      "population": 68600000,
      "populationNote": "Population France ≈ 68,6 millions d'habitants (INSEE, 2026).",
      "note": "Agrégats « toutes administrations publiques » (État + Sécurité sociale + collectivités). Chiffres officiels arrondis, loi de finances 2026 (LOI n° 2026-103 du 19 février 2026) et comptes nationaux INSEE."
    },
    "releve": {
      "scope": "Ensemble des administrations publiques (APU)",
      "entrees": 1520000000000,
      "sorties": 1672000000000,
      "ecart": 152000000000,
      "etatEntrees": 357000000000,
      "etatEntreesProvisoire": true,
      "dette": 3547000000000,
      "note": "« Entrées », « sorties » et « dette » agrègent toutes les administrations publiques. Les montants « argent de l'État » (357 et 486 Md€) ne couvrent que l'État. Les recettes de l'État (357 Md€) sont un ordre de grandeur saisi à la main en attendant revenues.json."
    },
    "insight": "Cette année, la France dépense environ 152 milliards d'euros de plus qu'elle ne perçoit.",
    "insightSub": "Ces ~152 milliards d'euros manquants sont empruntés : chaque année de déficit vient s'ajouter à la dette. C'est pourquoi la dette grimpe, même quand les recettes augmentent.",
    "actions": [
      {
        "key": "depenses",
        "label": "Où va l'argent ?",
        "icon": "💸",
        "target": "depenses"
      },
      {
        "key": "recettes",
        "label": "D'où vient l'argent ?",
        "icon": "💰",
        "target": "recettes"
      },
      {
        "key": "changement",
        "label": "Ce qui change",
        "icon": "📈",
        "target": "annee"
      },
      {
        "key": "pourquoi",
        "label": "Pourquoi ?",
        "icon": "❓",
        "target": "deficit"
      }
    ]
  },
  "expenses": {
    "meta": {
      "title": "Dépenses du budget de l'État — PLF 2026 (crédits budgétaires)",
      "unit": "EUR",
      "totalCreditsBudgetaires": 486289936565,
      "source": {
        "name": "PLF 2026 - Budget vert, Ministère de l'Économie",
        "dataset": "plf-2026-budget-vert",
        "portal": "data.economie.gouv.fr",
        "api": "https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/plf-2026-budget-vert/exports/json",
        "fetchedAt": "2026-07-27T21:14:17.958Z",
        "note": "Crédits budgétaires (CP) du PLF 2026, hiérarchie mission → programme → action, regroupée en grands postes. Niveau : budget de l'État."
      }
    },
    "items": [
      {
        "key": "education",
        "label": "Éducation & recherche",
        "amount": 95735558734,
        "share": 0.19686929861277008,
        "per1000": 197
      },
      {
        "key": "retraites",
        "label": "Retraites & pensions",
        "amount": 74140645517,
        "share": 0.15246181329744624,
        "per1000": 152
      },
      {
        "key": "defense",
        "label": "Défense & anciens combattants",
        "amount": 58887287569,
        "share": 0.12109501583553503,
        "per1000": 121
      },
      {
        "key": "collectivites",
        "label": "Collectivités territoriales",
        "amount": 53446598802,
        "share": 0.1099068575828035,
        "per1000": 110
      },
      {
        "key": "solidarite",
        "label": "Solidarité & santé",
        "amount": 31154406261,
        "share": 0.06406549656582446,
        "per1000": 64
      },
      {
        "key": "securite",
        "label": "Sécurité & justice",
        "amount": 30484011394,
        "share": 0.06268690569525152,
        "per1000": 63
      },
      {
        "key": "ue",
        "label": "Union européenne",
        "amount": 28781025011,
        "share": 0.059184907699921074,
        "per1000": 59
      },
      {
        "key": "territoires",
        "label": "Cohésion des territoires",
        "amount": 22220701069,
        "share": 0.045694346928007765,
        "per1000": 46
      },
      {
        "key": "ecologie",
        "label": "Écologie & mobilités",
        "amount": 20861927399,
        "share": 0.04290018326589715,
        "per1000": 43
      },
      {
        "key": "travail",
        "label": "Travail & emploi",
        "amount": 17362012698,
        "share": 0.035703006360032506,
        "per1000": 36
      },
      {
        "label": "Gestion des finances publiques",
        "amount": 8229155276,
        "share": 0.016922322789832293,
        "per1000": 17
      },
      {
        "label": "Investir pour la France de 2030",
        "amount": 5497829332,
        "share": 0.011305661332074743,
        "per1000": 11
      },
      {
        "label": "Administration générale et territoriale de l'État",
        "amount": 4246711486,
        "share": 0.008732879639659914,
        "per1000": 9
      },
      {
        "label": "Avances à l'audiovisuel public",
        "amount": 3878312945,
        "share": 0.007975309899265424,
        "per1000": 8
      },
      {
        "label": "Agriculture, alimentation, forêt et affaires rurales",
        "amount": 3767842168,
        "share": 0.007748139298573313,
        "per1000": 8
      },
      {
        "label": "Aide publique au développement",
        "amount": 3669036500,
        "share": 0.007544956669095244,
        "per1000": 8
      },
      {
        "label": "Culture",
        "amount": 3542752824,
        "share": 0.007285268638345465,
        "per1000": 7
      },
      {
        "label": "Économie",
        "amount": 3292008366,
        "share": 0.006769641151231131,
        "per1000": 7
      },
      {
        "label": "Action extérieure de l'État",
        "amount": 3253049286,
        "share": 0.006689526229924729,
        "per1000": 7
      },
      {
        "label": "Outre-mer",
        "amount": 2763584220,
        "share": 0.005682996937014766,
        "per1000": 6
      },
      {
        "label": "Contrôle et exploitation aériens",
        "amount": 2078319256,
        "share": 0.004273827401571575,
        "per1000": 4
      },
      {
        "label": "Sport, jeunesse et vie associative",
        "amount": 1194645238,
        "share": 0.002456652190745711,
        "per1000": 2
      },
      {
        "label": "Contrôle de la circulation et du stationnement routiers",
        "amount": 1177255819,
        "share": 0.002420892826439648,
        "per1000": 2
      },
      {
        "label": "Pouvoirs publics",
        "amount": 1140179221,
        "share": 0.0023446490154698024,
        "per1000": 2
      },
      {
        "label": "Engagements financiers de l'État",
        "amount": 1102669199,
        "share": 0.0022675139172916273,
        "per1000": 2
      },
      {
        "label": "Direction de l'action du Gouvernement",
        "amount": 1015683439,
        "share": 0.002088637585582112,
        "per1000": 2
      },
      {
        "label": "Médias, livre et industries culturelles",
        "amount": 690182793,
        "share": 0.0014192824919948691,
        "per1000": 1
      },
      {
        "label": "Conseil et contrôle de l'État",
        "amount": 683781018,
        "share": 0.0014061179691071035,
        "per1000": 1
      },
      {
        "label": "Transformation et fonction publiques",
        "amount": 516492869,
        "share": 0.0010621088987535791,
        "per1000": 1
      },
      {
        "label": "Crédits non répartis",
        "amount": 475000000,
        "share": 0.000976783528269681,
        "per1000": 1
      },
      {
        "label": "Financement des aides aux collectivités pour l'électrification rurale",
        "amount": 365300000,
        "share": 0.0007511979428987672,
        "per1000": 1
      },
      {
        "label": "Gestion du patrimoine immobilier de l'État",
        "amount": 321500000,
        "share": 0.0006611282196604261,
        "per1000": 1
      },
      {
        "label": "Développement agricole et rural",
        "amount": 171000000,
        "share": 0.0003516420701770851,
        "per1000": 0
      },
      {
        "label": "Publications officielles et information administrative",
        "amount": 143470856,
        "share": 0.00029503151353168697,
        "per1000": 0
      }
    ],
    "missions": [
      {
        "label": "Pensions",
        "amount": 68156628203,
        "share": 0.14015636162334985,
        "per1000": 140
      },
      {
        "label": "Enseignement scolaire",
        "amount": 64484505460,
        "share": 0.13260505844619852,
        "per1000": 133
      },
      {
        "label": "Défense",
        "amount": 57149258489,
        "share": 0.11752095651553986,
        "per1000": 118
      },
      {
        "label": "PSRCT",
        "amount": 49514696624,
        "share": 0.10182134751493385,
        "per1000": 102
      },
      {
        "label": "Recherche et enseignement supérieur",
        "amount": 31251053274,
        "share": 0.06426424016657155,
        "per1000": 64
      },
      {
        "label": "Solidarité, insertion et égalité des chances",
        "amount": 29482305025,
        "share": 0.06062701036598409,
        "per1000": 61
      },
      {
        "label": "PSRUE",
        "amount": 28781025011,
        "share": 0.059184907699921074,
        "per1000": 59
      },
      {
        "label": "Cohésion des territoires",
        "amount": 22220701069,
        "share": 0.045694346928007765,
        "per1000": 46
      },
      {
        "label": "Écologie, développement et mobilité durables",
        "amount": 20861927399,
        "share": 0.04290018326589715,
        "per1000": 43
      },
      {
        "label": "Sécurités",
        "amount": 17693728829,
        "share": 0.03638514289228966,
        "per1000": 36
      },
      {
        "label": "Travail, emploi et administration des ministères sociaux",
        "amount": 17362012698,
        "share": 0.035703006360032506,
        "per1000": 36
      },
      {
        "label": "Justice",
        "amount": 10629346857,
        "share": 0.02185804405512148,
        "per1000": 22
      },
      {
        "label": "Gestion des finances publiques",
        "amount": 8229155276,
        "share": 0.016922322789832293,
        "per1000": 17
      },
      {
        "label": "Régimes sociaux et de retraite",
        "amount": 5984017314,
        "share": 0.012305451674096376,
        "per1000": 12
      },
      {
        "label": "Investir pour la France de 2030",
        "amount": 5497829332,
        "share": 0.011305661332074743,
        "per1000": 11
      },
      {
        "label": "Administration générale et territoriale de l'État",
        "amount": 4246711486,
        "share": 0.008732879639659914,
        "per1000": 9
      },
      {
        "label": "Relations avec les collectivités territoriales",
        "amount": 3931902178,
        "share": 0.008085510067869648,
        "per1000": 8
      },
      {
        "label": "Avances à l'audiovisuel public",
        "amount": 3878312945,
        "share": 0.007975309899265424,
        "per1000": 8
      },
      {
        "label": "Agriculture, alimentation, forêt et affaires rurales",
        "amount": 3767842168,
        "share": 0.007748139298573313,
        "per1000": 8
      },
      {
        "label": "Aide publique au développement",
        "amount": 3669036500,
        "share": 0.007544956669095244,
        "per1000": 8
      },
      {
        "label": "Culture",
        "amount": 3542752824,
        "share": 0.007285268638345465,
        "per1000": 7
      },
      {
        "label": "Économie",
        "amount": 3292008366,
        "share": 0.006769641151231131,
        "per1000": 7
      },
      {
        "label": "Action extérieure de l'État",
        "amount": 3253049286,
        "share": 0.006689526229924729,
        "per1000": 7
      },
      {
        "label": "Outre-mer",
        "amount": 2763584220,
        "share": 0.005682996937014766,
        "per1000": 6
      },
      {
        "label": "Immigration, asile et intégration",
        "amount": 2160935708,
        "share": 0.004443718747840381,
        "per1000": 4
      },
      {
        "label": "Contrôle et exploitation aériens",
        "amount": 2078319256,
        "share": 0.004273827401571575,
        "per1000": 4
      },
      {
        "label": "Monde combattant, mémoire et liens avec la Nation",
        "amount": 1738029080,
        "share": 0.0035740593199951737,
        "per1000": 4
      },
      {
        "label": "Santé",
        "amount": 1672101236,
        "share": 0.003438486199840367,
        "per1000": 3
      },
      {
        "label": "Sport, jeunesse et vie associative",
        "amount": 1194645238,
        "share": 0.002456652190745711,
        "per1000": 2
      },
      {
        "label": "Contrôle de la circulation et du stationnement routiers",
        "amount": 1177255819,
        "share": 0.002420892826439648,
        "per1000": 2
      },
      {
        "label": "Pouvoirs publics",
        "amount": 1140179221,
        "share": 0.0023446490154698024,
        "per1000": 2
      },
      {
        "label": "Engagements financiers de l'État",
        "amount": 1102669199,
        "share": 0.0022675139172916273,
        "per1000": 2
      },
      {
        "label": "Direction de l'action du Gouvernement",
        "amount": 1015683439,
        "share": 0.002088637585582112,
        "per1000": 2
      },
      {
        "label": "Médias, livre et industries culturelles",
        "amount": 690182793,
        "share": 0.0014192824919948691,
        "per1000": 1
      },
      {
        "label": "Conseil et contrôle de l'État",
        "amount": 683781018,
        "share": 0.0014061179691071035,
        "per1000": 1
      },
      {
        "label": "Transformation et fonction publiques",
        "amount": 516492869,
        "share": 0.0010621088987535791,
        "per1000": 1
      },
      {
        "label": "Crédits non répartis",
        "amount": 475000000,
        "share": 0.000976783528269681,
        "per1000": 1
      },
      {
        "label": "Financement des aides aux collectivités pour l'électrification rurale",
        "amount": 365300000,
        "share": 0.0007511979428987672,
        "per1000": 1
      },
      {
        "label": "Gestion du patrimoine immobilier de l'État",
        "amount": 321500000,
        "share": 0.0006611282196604261,
        "per1000": 1
      },
      {
        "label": "Développement agricole et rural",
        "amount": 171000000,
        "share": 0.0003516420701770851,
        "per1000": 0
      },
      {
        "label": "Publications officielles et information administrative",
        "amount": 143470856,
        "share": 0.00029503151353168697,
        "per1000": 0
      }
    ],
    "tree": [
      {
        "key": "education",
        "label": "Éducation & recherche",
        "amount": 95735558734,
        "children": [
          {
            "label": "Enseignement scolaire",
            "amount": 64484505460,
            "children": [
              {
                "label": "Enseignement scolaire public du second degré",
                "amount": 26670904182,
                "children": [
                  {
                    "label": "Enseignement en collège",
                    "amount": 14062845452
                  },
                  {
                    "label": "Enseignement général et technologique en lycée",
                    "amount": 9313182237
                  },
                  {
                    "label": "Enseignement professionnel sous statut scolaire",
                    "amount": 5551296301
                  },
                  {
                    "label": "Pilotage, administration et encadrement pédagogique",
                    "amount": 4204962770
                  },
                  {
                    "label": "Enseignement post-baccalauréat en lycée",
                    "amount": 2563000757
                  },
                  {
                    "label": "Remplacement",
                    "amount": 1751026131
                  },
                  {
                    "label": "Besoins éducatifs particuliers",
                    "amount": 1544276540
                  },
                  {
                    "label": "Information et orientation",
                    "amount": 390538199
                  },
                  {
                    "label": "Formation des personnels enseignants et d'orientation",
                    "amount": 289900801
                  },
                  {
                    "label": "Formation continue des adultes et validation des acquis de l'expérience",
                    "amount": 150326680
                  },
                  {
                    "label": "Personnels en situations diverses",
                    "amount": 113181181
                  },
                  {
                    "label": "Aide à l'insertion professionnelle",
                    "amount": 65002377
                  },
                  {
                    "label": "Apprentissage",
                    "amount": 8315198
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -13336950442
                  }
                ]
              },
              {
                "label": "Enseignement scolaire public du premier degré",
                "amount": 17700395177,
                "children": [
                  {
                    "label": "Enseignement élémentaire",
                    "amount": 14122375334
                  },
                  {
                    "label": "Enseignement pré-élémentaire",
                    "amount": 6947911332
                  },
                  {
                    "label": "Besoins éducatifs particuliers",
                    "amount": 2347354309
                  },
                  {
                    "label": "Remplacement",
                    "amount": 2301116111
                  },
                  {
                    "label": "Pilotage et encadrement pédagogique",
                    "amount": 1652635425
                  },
                  {
                    "label": "Formation des personnels enseignants",
                    "amount": 418262714
                  },
                  {
                    "label": "Personnels en situations diverses",
                    "amount": 122240576
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -10211500624
                  }
                ]
              },
              {
                "label": "Enseignement privé du premier et du second degrés",
                "amount": 8801891766,
                "children": [
                  {
                    "label": "Enseignement en collège",
                    "amount": 2278544499
                  },
                  {
                    "label": "Enseignement élémentaire",
                    "amount": 1616053613
                  },
                  {
                    "label": "Enseignement général et technologique en lycée",
                    "amount": 1518613933
                  },
                  {
                    "label": "Enseignement professionnel sous statut scolaire",
                    "amount": 983347536
                  },
                  {
                    "label": "Fonctionnement des établissements",
                    "amount": 713659968
                  },
                  {
                    "label": "Enseignement pré-élémentaire",
                    "amount": 608122438
                  },
                  {
                    "label": "Enseignement post-baccalauréat en lycée",
                    "amount": 306086677
                  },
                  {
                    "label": "Soutien",
                    "amount": 244462947
                  },
                  {
                    "label": "Remplacement",
                    "amount": 224711913
                  },
                  {
                    "label": "Dispositifs spécifiques de scolarisation",
                    "amount": 197467611
                  },
                  {
                    "label": "Formation des personnels enseignants",
                    "amount": 99101317
                  },
                  {
                    "label": "Actions sociales en faveur des élèves",
                    "amount": 84318870
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -72599556
                  }
                ]
              },
              {
                "label": "Vie de l'élève",
                "amount": 7395263949,
                "children": [
                  {
                    "label": "Inclusion scolaire des élèves en situation de handicap",
                    "amount": 3110815608
                  },
                  {
                    "label": "Vie scolaire et éducation à la responsabilité",
                    "amount": 2865996566
                  },
                  {
                    "label": "Action sociale",
                    "amount": 1110691638
                  },
                  {
                    "label": "Santé scolaire",
                    "amount": 748193274
                  },
                  {
                    "label": "Actions éducatives complémentaires aux enseignements",
                    "amount": 159670157
                  },
                  {
                    "label": "Politique de l'internat et établissements à la charge de l'Etat",
                    "amount": 83392713
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -683496007
                  }
                ]
              },
              {
                "label": "Soutien de la politique de l'éducation nationale",
                "amount": 2449324221,
                "children": [
                  {
                    "label": "Politique des ressources humaines",
                    "amount": 875903890
                  },
                  {
                    "label": "Logistique, système d'information, immobilier",
                    "amount": 872630905
                  },
                  {
                    "label": "Pilotage et mise en oeuvre des politiques éducatives",
                    "amount": 534071793
                  },
                  {
                    "label": "Certification",
                    "amount": 240485777
                  },
                  {
                    "label": "Pilotage et mise œuvre des politiques du sport, de la jeunesse, de l'éducation populaire et de la vie associative",
                    "amount": 238288801
                  },
                  {
                    "label": "Établissements d'appui de la politique éducative",
                    "amount": 141614707
                  },
                  {
                    "label": "Évaluation et contrôle",
                    "amount": 101442109
                  },
                  {
                    "label": "Expertise juridique",
                    "amount": 21370972
                  },
                  {
                    "label": "Communication",
                    "amount": 16801035
                  },
                  {
                    "label": "Action internationale",
                    "amount": 10237519
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -603523287
                  }
                ]
              },
              {
                "label": "Enseignement technique agricole",
                "amount": 1463403320,
                "children": [
                  {
                    "label": "Mise en oeuvre de l'enseignement dans les établissements publics",
                    "amount": 920709718
                  },
                  {
                    "label": "Mise en oeuvre des enseignements dans les établissements privés",
                    "amount": 658514532
                  },
                  {
                    "label": "Aide sociale aux élèves et santé scolaire (enseignement public et privé)",
                    "amount": 76489493
                  },
                  {
                    "label": "Moyens communs à l'enseignement technique agricole (public et privé)",
                    "amount": 53777796
                  },
                  {
                    "label": "Mise en œuvre de l'enseignement agricole dans les territoires",
                    "amount": 5312828
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -251401047
                  }
                ]
              },
              {
                "label": "Autres crédits",
                "amount": 3322845,
                "children": [
                  {
                    "label": "Autres crédits",
                    "amount": 3322845
                  }
                ]
              }
            ]
          },
          {
            "label": "Recherche et enseignement supérieur",
            "amount": 31251053274,
            "children": [
              {
                "label": "Formations supérieures et recherche universitaire",
                "amount": 15447761840,
                "children": [
                  {
                    "label": "Recherche",
                    "amount": 4370569566
                  },
                  {
                    "label": "Formation initiale et continue du baccalauréat à la licence",
                    "amount": 4037687433
                  },
                  {
                    "label": "Formation initiale et continue de niveau master",
                    "amount": 2803060767
                  },
                  {
                    "label": "Pilotage et support du programme",
                    "amount": 1860108526
                  },
                  {
                    "label": "Immobilier",
                    "amount": 1225035789
                  },
                  {
                    "label": "Formation initiale et continue de niveau doctorat",
                    "amount": 548916357
                  },
                  {
                    "label": "Bibliothèques et documentation",
                    "amount": 500800436
                  },
                  {
                    "label": "Diffusion des savoirs et musées",
                    "amount": 144068698
                  },
                  {
                    "label": "Établissements d'enseignement privés",
                    "amount": 94895852
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -137381584
                  }
                ]
              },
              {
                "label": "Recherches scientifiques et technologiques pluridisciplinaires",
                "amount": 8212392870,
                "children": [
                  {
                    "label": "Recherches scientifiques et technologiques en sciences de la vie et de la santé",
                    "amount": 1424155162
                  },
                  {
                    "label": "Recherches scientifiques et technologiques dans le domaine de l'environnement",
                    "amount": 1261205210
                  },
                  {
                    "label": "Moyens généraux et d'appui à la recherche",
                    "amount": 1137415710
                  },
                  {
                    "label": "Recherches scientifiques et technologiques en sciences et techniques de l'information",
                    "amount": 1099015820
                  },
                  {
                    "label": "Agence nationale de la recherche",
                    "amount": 1038130000
                  },
                  {
                    "label": "Recherches scientifiques et technologiques dans le domaine de l'énergie",
                    "amount": 880684688
                  },
                  {
                    "label": "Recherches scientifiques et technologiques en sciences humaines et sciences sociales",
                    "amount": 444972030
                  },
                  {
                    "label": "Grandes infrastructures de recherche",
                    "amount": 337705000
                  },
                  {
                    "label": "Pilotage et animation",
                    "amount": 333505870
                  },
                  {
                    "label": "Diffusion, valorisation et transfert des connaissances et des technologies",
                    "amount": 173671500
                  },
                  {
                    "label": "Recherches interdisciplinaires et transversales",
                    "amount": 81931880
                  }
                ]
              },
              {
                "label": "Vie étudiante",
                "amount": 3223989026,
                "children": [
                  {
                    "label": "Aides directes",
                    "amount": 2503773035
                  },
                  {
                    "label": "Aides indirectes",
                    "amount": 507047217
                  },
                  {
                    "label": "Pilotage et animation du programme",
                    "amount": 119151814
                  },
                  {
                    "label": "Santé des étudiants et activités associatives, culturelles et sportives",
                    "amount": 94016960
                  }
                ]
              },
              {
                "label": "Recherche spatiale",
                "amount": 1847679541,
                "children": [
                  {
                    "label": "Maîtrise de l'accès à l'espace",
                    "amount": 524011451
                  },
                  {
                    "label": "Développement de la technologie spatiale au service de l'observation de la terre",
                    "amount": 404260742
                  },
                  {
                    "label": "Développement de la technologie spatiale au service de la science",
                    "amount": 284598500
                  },
                  {
                    "label": "Maîtrise des technologies orbitales et de l'innovation technologique",
                    "amount": 252342320
                  },
                  {
                    "label": "Développement de la technologie spatiale au service de la recherche en sciences de l'information et de la communication",
                    "amount": 169780979
                  },
                  {
                    "label": "Moyens généraux et d'appui à la recherche",
                    "amount": 147092925
                  },
                  {
                    "label": "Développement des satellites de météorologie",
                    "amount": 65592624
                  }
                ]
              },
              {
                "label": "Recherche dans les domaines de l'énergie, du développement et de la mobilité durables",
                "amount": 1485846635,
                "children": [
                  {
                    "label": "Charges nucléaires de long terme des installations du CEA",
                    "amount": 780000000
                  },
                  {
                    "label": "Recherche dans le domaine de l'énergie nucléaire",
                    "amount": 465819909
                  },
                  {
                    "label": "Recherche dans le domaine des nouvelles technologies de l'énergie",
                    "amount": 181956676
                  },
                  {
                    "label": "Recherche et développement dans le domaine de l'aéronautique civile",
                    "amount": 58070050
                  }
                ]
              },
              {
                "label": "Recherche et enseignement supérieur en matière économique et industrielle",
                "amount": 542162635,
                "children": [
                  {
                    "label": "Organismes de formation supérieure et de recherche",
                    "amount": 325350962
                  },
                  {
                    "label": "Soutien et diffusion de l'innovation technologique",
                    "amount": 216771673
                  },
                  {
                    "label": "Soutien de la recherche industrielle stratégique",
                    "amount": 40000
                  }
                ]
              },
              {
                "label": "Enseignement supérieur et recherche agricoles",
                "amount": 341201560,
                "children": [
                  {
                    "label": "Enseignement supérieur",
                    "amount": 307125374
                  },
                  {
                    "label": "Recherche, développement et transfert de technologie",
                    "amount": 34076186
                  }
                ]
              },
              {
                "label": "Recherche duale (civile et militaire)",
                "amount": 150019167,
                "children": [
                  {
                    "label": "Recherche duale dans le domaine aérospatial",
                    "amount": 127701136
                  },
                  {
                    "label": "Recherche duale en lutte contre la menace NRBC-E",
                    "amount": 12000000
                  },
                  {
                    "label": "Autres recherches et développements technologiques duaux",
                    "amount": 10318031
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "retraites",
        "label": "Retraites & pensions",
        "amount": 74140645517,
        "children": [
          {
            "label": "Pensions",
            "amount": 68156628203,
            "children": [
              {
                "label": "Pensions civiles et militaires de retraite et allocations temporaires d'invalidité",
                "amount": 66072951625,
                "children": [
                  {
                    "label": "Fonctionnaires civils relevant du code des pensions civiles et militaires de retraite",
                    "amount": 54743712223
                  },
                  {
                    "label": "Militaires relevant du code des pensions civiles et militaires de retraite",
                    "amount": 11188286896
                  },
                  {
                    "label": "Allocations temporaires d'invalidité",
                    "amount": 140952506
                  }
                ]
              },
              {
                "label": "Ouvriers des établissements industriels de l'État",
                "amount": 2083676578,
                "children": [
                  {
                    "label": "Prestations vieillesse et invalidité",
                    "amount": 2023186912
                  },
                  {
                    "label": "Rentes accidents du travail des ouvriers civils des établissements militaires (RATOCEM)",
                    "amount": 53334345
                  },
                  {
                    "label": "Gestion du régime",
                    "amount": 6512260
                  },
                  {
                    "label": "Autres dépenses spécifiques",
                    "amount": 643061
                  }
                ]
              }
            ]
          },
          {
            "label": "Régimes sociaux et de retraite",
            "amount": 5984017314,
            "children": [
              {
                "label": "Régimes sociaux et de retraite des transports terrestres",
                "amount": 4122679786,
                "children": [
                  {
                    "label": "Régime de retraite du personnel de la SNCF",
                    "amount": 3225801919
                  },
                  {
                    "label": "Régime de retraite du personnel de la RATP",
                    "amount": 885633671
                  },
                  {
                    "label": "Autres régimes",
                    "amount": 11244196
                  }
                ]
              },
              {
                "label": "Régimes de retraite des mines, de la SEITA et divers",
                "amount": 1059391129,
                "children": [
                  {
                    "label": "Versements au fonds spécial de retraite de la caisse autonome nationale de sécurité sociale dans les mines",
                    "amount": 830281572
                  },
                  {
                    "label": "Régime de retraite de la SEITA",
                    "amount": 128405635
                  },
                  {
                    "label": "Versements liés à la liquidation de l'ORTF",
                    "amount": 71452558
                  },
                  {
                    "label": "Caisse de retraites des personnels de l'Opéra national de Paris",
                    "amount": 23907370
                  },
                  {
                    "label": "Caisse de retraites du personnel de la Comédie Française",
                    "amount": 4772091
                  },
                  {
                    "label": "Caisse des retraites des régies ferroviaires d'outre-mer",
                    "amount": 571903
                  }
                ]
              },
              {
                "label": "Régimes de retraite et de sécurité sociale des marins",
                "amount": 801946399,
                "children": [
                  {
                    "label": "Régimes de retraite et de sécurité sociale des marins",
                    "amount": 801946399
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "defense",
        "label": "Défense & anciens combattants",
        "amount": 58887287569,
        "children": [
          {
            "label": "Défense",
            "amount": 57149258489,
            "children": [
              {
                "label": "Équipement des forces",
                "amount": 22883898639,
                "children": [
                  {
                    "label": "Engagement et combat",
                    "amount": 7339874980
                  },
                  {
                    "label": "Dissuasion",
                    "amount": 6115521552
                  },
                  {
                    "label": "Commandement et maîtrise de l'information",
                    "amount": 4200423111
                  },
                  {
                    "label": "Projection - mobilité - soutien",
                    "amount": 2776539268
                  },
                  {
                    "label": "Protection et sauvegarde",
                    "amount": 2045796078
                  },
                  {
                    "label": "Préparation et conduite des opérations d'armement",
                    "amount": 348331303
                  },
                  {
                    "label": "Soutien à l’effort de défense de pays tiers",
                    "amount": 57412347
                  }
                ]
              },
              {
                "label": "Soutien de la politique de la défense",
                "amount": 16052412179,
                "children": [
                  {
                    "label": "Préparation des forces terrestres - Personnel travaillant pour le programme \"Préparation et emploi des forces\"",
                    "amount": 8222359732
                  },
                  {
                    "label": "Préparation des forces navales - Personnel travaillant pour le programme \"Préparation et emploi des forces\"",
                    "amount": 2949684395
                  },
                  {
                    "label": "Préparation des forces aériennes- Personnel travaillant pour le programme \"Préparation et emploi des forces\"",
                    "amount": 2940023517
                  },
                  {
                    "label": "Logistique et soutien interarmées - Personnel travaillant pour le programme \"Préparation et emploi des forces\"",
                    "amount": 2886650110
                  },
                  {
                    "label": "Préparation et conduite des opérations d'armement - Personnel travaillant  pour le programme  \"Équipement des forces \"",
                    "amount": 2547358112
                  },
                  {
                    "label": "Planification des moyens et conduite des opérations - Personnel travaillant  pour le programme \"Préparation et emploi des forces\"",
                    "amount": 1027158207
                  },
                  {
                    "label": "Politique immobilière",
                    "amount": 943656316
                  },
                  {
                    "label": "Recherche et exploitation du renseignement intéressant la sécurité de la France - Personnel travaillant  pour le programme \"Environnement et prospective de la politique de défense\"",
                    "amount": 739616307
                  },
                  {
                    "label": "Pilotage, soutien et communication - dépenses de personnel des cabinets et des organismes rattachés / RH",
                    "amount": 647415809
                  },
                  {
                    "label": "Politique immobilière - Personnel travaillant pour l'action \"Politique immobilière\"",
                    "amount": 507498362
                  },
                  {
                    "label": "Pilotage, soutien  -  Personnel travaillant pour l'action \" Pilotage, soutien \"",
                    "amount": 413611373
                  },
                  {
                    "label": "Pilotage, soutien et communication",
                    "amount": 391350982
                  },
                  {
                    "label": "Action sociale, chômage et pensions",
                    "amount": 316198138
                  },
                  {
                    "label": "Surcoûts liés aux opérations - Personnel travaillant pour le programme \"Préparation et emploi des forces\"",
                    "amount": 300000000
                  },
                  {
                    "label": "Politiques des ressources humaines",
                    "amount": 221674051
                  },
                  {
                    "label": "Systèmes d'information, d'administration et de gestion",
                    "amount": 173110817
                  },
                  {
                    "label": "Journée défense et citoyenneté - Personnel travaillant pour le programme \"Reconnaissance et réparation en faveur du monde combattant\"",
                    "amount": 114532602
                  },
                  {
                    "label": "Relations internationales",
                    "amount": 74897855
                  },
                  {
                    "label": "Politique culturelle et éducative",
                    "amount": 57346615
                  },
                  {
                    "label": "Politique culturelle et éducative - gestion et communication des archives historiques de la défense - Personnel travaillant pour l'action \"Politique culturelle et éducative\"",
                    "amount": 39387591
                  },
                  {
                    "label": "Restructurations - RH",
                    "amount": 38454950
                  },
                  {
                    "label": "Rayonnement et contribution extérieure",
                    "amount": 37755406
                  },
                  {
                    "label": "Prospective de défense - Personnel travaillant  pour le programme \"Environnement et prospective de la politique de défense\"",
                    "amount": 28625435
                  },
                  {
                    "label": "Restructurations",
                    "amount": 10263244
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -9576217747
                  }
                ]
              },
              {
                "label": "Préparation et emploi des forces",
                "amount": 15902284405,
                "children": [
                  {
                    "label": "Préparation des forces navales",
                    "amount": 3986519126
                  },
                  {
                    "label": "Préparation des forces aériennes",
                    "amount": 3761336703
                  },
                  {
                    "label": "Logistique et soutien interarmées",
                    "amount": 3081766957
                  },
                  {
                    "label": "Préparation des forces terrestres",
                    "amount": 2530252724
                  },
                  {
                    "label": "Surcoûts liés aux opérations extérieures",
                    "amount": 870000000
                  },
                  {
                    "label": "Numérique de défense",
                    "amount": 848340097
                  },
                  {
                    "label": "Planification  des moyens et conduite des opérations",
                    "amount": 794068798
                  },
                  {
                    "label": "Surcoûts liés aux opérations intérieures",
                    "amount": 30000000
                  }
                ]
              },
              {
                "label": "Environnement et prospective de la politique de défense",
                "amount": 2293659614,
                "children": [
                  {
                    "label": "Prospective de défense",
                    "amount": 1616341389
                  },
                  {
                    "label": "Recherche et exploitation du renseignement intéressant la sécurité de la France",
                    "amount": 579182644
                  },
                  {
                    "label": "Relations internationales et diplomatie de défense",
                    "amount": 98135581
                  }
                ]
              },
              {
                "label": "Autres crédits",
                "amount": 17003652,
                "children": [
                  {
                    "label": "Autres crédits",
                    "amount": 17003652
                  }
                ]
              }
            ]
          },
          {
            "label": "Monde combattant, mémoire et liens avec la Nation",
            "amount": 1738029080,
            "children": [
              {
                "label": "Liens entre la Nation et son armée",
                "amount": 1659876270,
                "children": [
                  {
                    "label": "Reconnaissance envers le monde combattant",
                    "amount": 759640562
                  },
                  {
                    "label": "PMI, droits et soutien aux invalides",
                    "amount": 715144461
                  },
                  {
                    "label": "Actions en faveur des rapatriés",
                    "amount": 118219010
                  },
                  {
                    "label": "Liens armées-jeunesse",
                    "amount": 41067551
                  },
                  {
                    "label": "Politique de mémoire",
                    "amount": 25804686
                  }
                ]
              },
              {
                "label": "Indemnisation des victimes des persécutions antisémites et des actes de barbarie pendant la seconde guerre mondiale",
                "amount": 78152810,
                "children": [
                  {
                    "label": "Indemnisation des victimes d'actes de barbarie durant la seconde guerre mondiale",
                    "amount": 43850196
                  },
                  {
                    "label": "Indemnisation des orphelins de la déportation et des victimes de spoliations du fait des législations antisémites en vigueur pendant l'Occupation",
                    "amount": 34573652
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -271038
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "collectivites",
        "label": "Collectivités territoriales",
        "amount": 53446598802,
        "children": [
          {
            "label": "PSRCT",
            "amount": 49514696624,
            "children": [
              {
                "label": "PSR Collectivités territoriales",
                "amount": 49514696624,
                "children": [
                  {
                    "label": "PSR-CT",
                    "amount": 49514696624
                  }
                ]
              }
            ]
          },
          {
            "label": "Relations avec les collectivités territoriales",
            "amount": 3931902178,
            "children": [
              {
                "label": "Concours financiers aux collectivités territoriales et à leurs groupements",
                "amount": 3675597351,
                "children": [
                  {
                    "label": "Soutien aux projets des communes et groupements de communes",
                    "amount": 1744897878
                  },
                  {
                    "label": "Dotation générale de décentralisation des régions",
                    "amount": 938335116
                  },
                  {
                    "label": "Dotation générale de décentralisation concours particuliers",
                    "amount": 274428807
                  },
                  {
                    "label": "Dotation générale de décentralisation des départements",
                    "amount": 265353616
                  },
                  {
                    "label": "Dotation générale de décentralisation des communes",
                    "amount": 190903261
                  },
                  {
                    "label": "Soutien aux projets des départements et des régions",
                    "amount": 166703007
                  },
                  {
                    "label": "Dotation de soutien à l'investissement local exceptionnelle",
                    "amount": 94975666
                  }
                ]
              },
              {
                "label": "Concours spécifiques et administration",
                "amount": 256304827,
                "children": [
                  {
                    "label": "Dotations Outre-Mer",
                    "amount": 152339875
                  },
                  {
                    "label": "Aides exceptionnelles aux collectivités territoriales",
                    "amount": 91060528
                  },
                  {
                    "label": "Administration des relations avec les collectivités territoriales",
                    "amount": 12904424
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "solidarite",
        "label": "Solidarité & santé",
        "amount": 31154406261,
        "children": [
          {
            "label": "Solidarité, insertion et égalité des chances",
            "amount": 29482305025,
            "children": [
              {
                "label": "Handicap et dépendance",
                "amount": 16265317136,
                "children": [
                  {
                    "label": "Allocations et aides en faveur des personnes handicapées",
                    "amount": 16238716592
                  },
                  {
                    "label": "Pilotage du programme et animation des politiques inclusives",
                    "amount": 26600544
                  }
                ]
              },
              {
                "label": "Inclusion sociale et protection des personnes",
                "amount": 13121340299,
                "children": [
                  {
                    "label": "Prime d'activité et autres dispositifs",
                    "amount": 11298037432
                  },
                  {
                    "label": "Protection juridique des majeurs",
                    "amount": 911177901
                  },
                  {
                    "label": "Protection et accompagnement des enfants, des jeunes et des familles vulnérables",
                    "amount": 421630427
                  },
                  {
                    "label": "Pacte des Solidarités",
                    "amount": 258857138
                  },
                  {
                    "label": "Aide alimentaire",
                    "amount": 159350604
                  },
                  {
                    "label": "Allocations et dépenses d'aide sociale",
                    "amount": 37088064
                  },
                  {
                    "label": "Ingénierie, outils de la gouvernance et expérimentations",
                    "amount": 26156672
                  },
                  {
                    "label": "Qualification en travail social",
                    "amount": 7533600
                  },
                  {
                    "label": "Aide à la vie familiale et sociale des anciens migrants dans leur pays d'origine (AVFS)",
                    "amount": 1508461
                  }
                ]
              },
              {
                "label": "Égalité entre les femmes et les hommes",
                "amount": 95647590,
                "children": [
                  {
                    "label": "Prévention et lutte contre les violences et la prostitution",
                    "amount": 44841005
                  },
                  {
                    "label": "Aide universelle d'urgence pour les personnes victimes de violences conjugales",
                    "amount": 26371455
                  },
                  {
                    "label": "Accès aux droits et égalité professionnelle",
                    "amount": 23650773
                  },
                  {
                    "label": "Soutien du programme égalité entre les femmes et les hommes",
                    "amount": 784357
                  }
                ]
              }
            ]
          },
          {
            "label": "Santé",
            "amount": 1672101236,
            "children": [
              {
                "label": "Protection maladie",
                "amount": 1216300000,
                "children": [
                  {
                    "label": "Aide médicale de l'Etat",
                    "amount": 1208300000
                  },
                  {
                    "label": "Fonds d'indemnisation des victimes de l'amiante",
                    "amount": 8000000
                  }
                ]
              },
              {
                "label": "Compensation à la Sécurité sociale du coût des dons de vaccins à des pays tiers et reversement des recettes de la Facilité pour la Relance et la Résilience (FRR) européenne au titre du volet « Ségur investissement » du plan national de relance et de résilience (PNRR)",
                "amount": 242000000,
                "children": [
                  {
                    "label": "Ségur investissement du PNRR",
                    "amount": 242000000
                  }
                ]
              },
              {
                "label": "Prévention, sécurité sanitaire et offre de soins",
                "amount": 213801236,
                "children": [
                  {
                    "label": "Modernisation de l'offre de soins",
                    "amount": 74842517
                  },
                  {
                    "label": "Prévention des maladies chroniques et qualité de vie des malades",
                    "amount": 53132163
                  },
                  {
                    "label": "Pilotage de la politique de santé publique",
                    "amount": 44927220
                  },
                  {
                    "label": "Prévention des risques liés à l'environnement et à l'alimentation",
                    "amount": 28109998
                  },
                  {
                    "label": "Veille et sécurité sanitaire",
                    "amount": 7607914
                  },
                  {
                    "label": "Politique des produits de santé et de la qualité des pratiques et des soins",
                    "amount": 4261537
                  },
                  {
                    "label": "Santé des populations",
                    "amount": 919887
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "securite",
        "label": "Sécurité & justice",
        "amount": 30484011394,
        "children": [
          {
            "label": "Sécurités",
            "amount": 17693728829,
            "children": [
              {
                "label": "Police nationale",
                "amount": 9753038464,
                "children": [
                  {
                    "label": "Sécurité et paix publiques",
                    "amount": 4178853123
                  },
                  {
                    "label": "Missions de police judiciaire et concours à la justice",
                    "amount": 3319128562
                  },
                  {
                    "label": "Commandement, ressources humaines et logistique",
                    "amount": 2787584684
                  },
                  {
                    "label": "Ordre public et protection de la souveraineté",
                    "amount": 1881605251
                  },
                  {
                    "label": "Police des étrangers et sûreté des transports internationaux",
                    "amount": 1274326796
                  },
                  {
                    "label": "Sécurité routière",
                    "amount": 449278481
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -4137738433
                  }
                ]
              },
              {
                "label": "Gendarmerie nationale",
                "amount": 7050753351,
                "children": [
                  {
                    "label": "Ordre et sécurité publics",
                    "amount": 4249185091
                  },
                  {
                    "label": "Commandement, ressources humaines et logistique",
                    "amount": 3137515907
                  },
                  {
                    "label": "Missions de police judiciaire et concours à la justice",
                    "amount": 2697532606
                  },
                  {
                    "label": "Sécurité routière",
                    "amount": 835906077
                  },
                  {
                    "label": "Exercice des missions militaires",
                    "amount": 171769109
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -4041155439
                  }
                ]
              },
              {
                "label": "Sécurité civile",
                "amount": 807821862,
                "children": [
                  {
                    "label": "Préparation et interventions spécialisées des moyens nationaux",
                    "amount": 504089130
                  },
                  {
                    "label": "Soutien aux acteurs de la sécurité civile",
                    "amount": 207229053
                  },
                  {
                    "label": "Prévention et gestion de crises",
                    "amount": 61757823
                  },
                  {
                    "label": "Fonctionnement, soutien et logistique",
                    "amount": 34745856
                  }
                ]
              },
              {
                "label": "Sécurité et éducation routières",
                "amount": 82115152,
                "children": [
                  {
                    "label": "Démarches interministérielles et communication",
                    "amount": 48657755
                  },
                  {
                    "label": "Éducation routière",
                    "amount": 25564055
                  },
                  {
                    "label": "Observation, prospective, réglementation et soutien au programme",
                    "amount": 7893342
                  }
                ]
              }
            ]
          },
          {
            "label": "Justice",
            "amount": 10629346857,
            "children": [
              {
                "label": "Administration pénitentiaire",
                "amount": 4303358711,
                "children": [
                  {
                    "label": "Garde et contrôle des personnes placées sous main de justice",
                    "amount": 3899182596
                  },
                  {
                    "label": "Accueil et accompagnement des personnes placées sous main de justice",
                    "amount": 1205516471
                  },
                  {
                    "label": "Soutien et formation",
                    "amount": 444209554
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -1245549910
                  }
                ]
              },
              {
                "label": "Justice judiciaire",
                "amount": 3833875983,
                "children": [
                  {
                    "label": "Conduite de la politique pénale et jugement des affaires pénales",
                    "amount": 1653517405
                  },
                  {
                    "label": "Traitement et jugement des contentieux civils",
                    "amount": 1435335963
                  },
                  {
                    "label": "Soutien",
                    "amount": 1344732212
                  },
                  {
                    "label": "Formation",
                    "amount": 218133475
                  },
                  {
                    "label": "Cassation",
                    "amount": 85875207
                  },
                  {
                    "label": "Support à l'accès au droit et à la justice",
                    "amount": 13539649
                  },
                  {
                    "label": "Enregistrement des décisions judiciaires",
                    "amount": 13159689
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -930417617
                  }
                ]
              },
              {
                "label": "Protection judiciaire de la jeunesse",
                "amount": 960133917,
                "children": [
                  {
                    "label": "Mise en oeuvre des décisions judiciaires",
                    "amount": 972350526
                  },
                  {
                    "label": "Soutien",
                    "amount": 137908480
                  },
                  {
                    "label": "Formation",
                    "amount": 49331891
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -199456980
                  }
                ]
              },
              {
                "label": "Accès au droit et à la justice",
                "amount": 808493251,
                "children": [
                  {
                    "label": "Aide juridictionnelle",
                    "amount": 714176431
                  },
                  {
                    "label": "Aide aux victimes",
                    "amount": 57839779
                  },
                  {
                    "label": "Médiation et espaces de rencontre",
                    "amount": 15494867
                  },
                  {
                    "label": "Développement de l'accès au droit et du réseau judiciaire de proximité",
                    "amount": 14282174
                  },
                  {
                    "label": "Indemnisation des avoués",
                    "amount": 5700000
                  },
                  {
                    "label": "Subvention au fonds de financement des dossiers impécunieux",
                    "amount": 1000000
                  }
                ]
              },
              {
                "label": "Conduite et pilotage de la politique de la justice",
                "amount": 717747042,
                "children": [
                  {
                    "label": "Action informatique ministérielle",
                    "amount": 340087030
                  },
                  {
                    "label": "Gestion de l'administration centrale",
                    "amount": 217173075
                  },
                  {
                    "label": "Politiques RH transverses",
                    "amount": 77949800
                  },
                  {
                    "label": "Developpement des techniques d’enquetes numeriques judiciaires",
                    "amount": 56373749
                  },
                  {
                    "label": "Activité normative",
                    "amount": 36261787
                  },
                  {
                    "label": "Évaluation, contrôle, études et recherche",
                    "amount": 26600758
                  },
                  {
                    "label": "État major",
                    "amount": 12644373
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -49343530
                  }
                ]
              },
              {
                "label": "Conseil supérieur de la magistrature",
                "amount": 5737953,
                "children": [
                  {
                    "label": "Conseil supérieur de la magistrature",
                    "amount": 6489147
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -751194
                  }
                ]
              }
            ]
          },
          {
            "label": "Immigration, asile et intégration",
            "amount": 2160935708,
            "children": [
              {
                "label": "Immigration et asile",
                "amount": 1792471706,
                "children": [
                  {
                    "label": "Garantie de l'exercice du droit d'asile",
                    "amount": 1379596949
                  },
                  {
                    "label": "Lutte contre l'immigration irrégulière",
                    "amount": 327872824
                  },
                  {
                    "label": "Soutien",
                    "amount": 84481933
                  },
                  {
                    "label": "Circulation des étrangers et politique des visas",
                    "amount": 520000
                  }
                ]
              },
              {
                "label": "Intégration et accès à la nationalité française",
                "amount": 368464002,
                "children": [
                  {
                    "label": "Accueil des étrangers primo arrivants",
                    "amount": 268364002
                  },
                  {
                    "label": "Intégration des étrangers primo-arrivants",
                    "amount": 97260000
                  },
                  {
                    "label": "Accès à la nationalité française",
                    "amount": 1490000
                  },
                  {
                    "label": "Accompagnement des foyers de travailleurs migrants",
                    "amount": 1350000
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "ue",
        "label": "Union européenne",
        "amount": 28781025011,
        "children": [
          {
            "label": "PSRUE",
            "amount": 28781025011,
            "children": [
              {
                "label": "PSR Union européeenne",
                "amount": 28781025011,
                "children": [
                  {
                    "label": "PSR-UE",
                    "amount": 28781025011
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "territoires",
        "label": "Cohésion des territoires",
        "amount": 22220701069,
        "children": [
          {
            "label": "Cohésion des territoires",
            "amount": 22220701069,
            "children": [
              {
                "label": "Aide à l'accès au logement",
                "amount": 16126135643,
                "children": [
                  {
                    "label": "Aides personnelles",
                    "amount": 16116735643
                  },
                  {
                    "label": "Information relative au logement et accompagnement des publics en difficulté",
                    "amount": 9400000
                  }
                ]
              },
              {
                "label": "Hébergement, parcours vers le logement et insertion des personnes vulnérables",
                "amount": 3071443369,
                "children": [
                  {
                    "label": "Hébergement et logement adapté",
                    "amount": 3028677587
                  },
                  {
                    "label": "Prévention de l'exclusion",
                    "amount": 34569082
                  },
                  {
                    "label": "Conduite et animation des politiques de l'hébergement et de l'inclusion sociale",
                    "amount": 8196700
                  }
                ]
              },
              {
                "label": "Urbanisme, territoires et amélioration de l'habitat",
                "amount": 2030445390,
                "children": [
                  {
                    "label": "Réglementation, politique technique et qualité de la construction",
                    "amount": 1604003056
                  },
                  {
                    "label": "Urbanisme et aménagement",
                    "amount": 284282334
                  },
                  {
                    "label": "Construction locative et amélioration du parc",
                    "amount": 78950000
                  },
                  {
                    "label": "Innovation, territorialisation et services numériques",
                    "amount": 45430000
                  },
                  {
                    "label": "Lutte contre l'habitat indigne",
                    "amount": 11200000
                  },
                  {
                    "label": "Soutien à l'accession à la propriété",
                    "amount": 6580000
                  }
                ]
              },
              {
                "label": "Politique de la ville",
                "amount": 646408632,
                "children": [
                  {
                    "label": "Actions territorialisées et Dispositifs spécifiques de la politique de la ville",
                    "amount": 475059926
                  },
                  {
                    "label": "Rénovation urbaine et amélioration du cadre de vie",
                    "amount": 116000000
                  },
                  {
                    "label": "Revitalisation économique et emploi",
                    "amount": 41543714
                  },
                  {
                    "label": "Stratégie, ressources et évaluation",
                    "amount": 19143320
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -5338328
                  }
                ]
              },
              {
                "label": "Impulsion et coordination de la politique d'aménagement du territoire",
                "amount": 268670363,
                "children": [
                  {
                    "label": "FNADT section générale",
                    "amount": 115557239
                  },
                  {
                    "label": "FNADT section locale",
                    "amount": 83457636
                  },
                  {
                    "label": "Soutien aux Opérateurs",
                    "amount": 67646442
                  },
                  {
                    "label": "Prime d'aménagement du territoire, contrats de ruralité et pacte Etat-métropoles",
                    "amount": 4116285
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -2107239
                  }
                ]
              },
              {
                "label": "Interventions territoriales de l'État",
                "amount": 77597672,
                "children": [
                  {
                    "label": "Plans d'investissement pour la Corse",
                    "amount": 49632370
                  },
                  {
                    "label": "Fonds interministériel pour la transformation de la Guyane",
                    "amount": 9400247
                  },
                  {
                    "label": "Plan littoral 21",
                    "amount": 6516943
                  },
                  {
                    "label": "Plan Sargasses II",
                    "amount": 4200000
                  },
                  {
                    "label": "Volet territorialisé du plan national d'action chlordécone",
                    "amount": 4084102
                  },
                  {
                    "label": "Service d'incendie et de secours à Wallis-et-Futuna",
                    "amount": 2049674
                  },
                  {
                    "label": "Eau - Agriculture en Bretagne",
                    "amount": 1714336
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "ecologie",
        "label": "Écologie & mobilités",
        "amount": 20861927399,
        "children": [
          {
            "label": "Écologie, développement et mobilité durables",
            "amount": 20861927399,
            "children": [
              {
                "label": "Service public de l'énergie",
                "amount": 8443236908,
                "children": [
                  {
                    "label": "Soutien aux énergies renouvelables électriques en métropole continentale",
                    "amount": 7250830175
                  },
                  {
                    "label": "Soutien à l'injection de biométhane",
                    "amount": 533446889
                  },
                  {
                    "label": "Soutien à la cogénération au gaz naturel et autres moyens thermiques",
                    "amount": 315280010
                  },
                  {
                    "label": "Soutien aux effacements de consommation",
                    "amount": 146632978
                  },
                  {
                    "label": "Soutien dans les zones non interconnectées au réseau métropolitain",
                    "amount": 113960910
                  },
                  {
                    "label": "Dispositions sociales pour les consommateurs en situation de précarité énergétique",
                    "amount": 36318282
                  },
                  {
                    "label": "Mesures exceptionnelles de protection des consommateurs",
                    "amount": 33467664
                  },
                  {
                    "label": "Soutien hydrogène",
                    "amount": 13300000
                  }
                ]
              },
              {
                "label": "Infrastructures et services de transports",
                "amount": 4635813380,
                "children": [
                  {
                    "label": "Ferroviaire",
                    "amount": 3223093903
                  },
                  {
                    "label": "Transports collectifs",
                    "amount": 330888021
                  },
                  {
                    "label": "Routes - Entretien",
                    "amount": 299858660
                  },
                  {
                    "label": "Voies navigables",
                    "amount": 254425989
                  },
                  {
                    "label": "Transport routier",
                    "amount": 167712137
                  },
                  {
                    "label": "Transports combinés",
                    "amount": 156200000
                  },
                  {
                    "label": "Ports",
                    "amount": 87494963
                  },
                  {
                    "label": "Transport aérien",
                    "amount": 63260036
                  },
                  {
                    "label": "Fonctions support",
                    "amount": 52879671
                  }
                ]
              },
              {
                "label": "Conduite et pilotage des politiques de l'écologie, du développement et de la mobilité durables",
                "amount": 2287017314,
                "children": [
                  {
                    "label": "Pilotage, support, audit et évaluations",
                    "amount": 634908397
                  },
                  {
                    "label": "Personnels œuvrant pour les politiques du programme Urbanisme, territoires et aménagement de l'habitat",
                    "amount": 494489032
                  },
                  {
                    "label": "Personnels œuvrant pour les politiques de transport",
                    "amount": 436480287
                  },
                  {
                    "label": "Personnels oeuvrant pour la politique de la prévention des risques",
                    "amount": 211672762
                  },
                  {
                    "label": "Personnels oeuvrant pour la politique de l'eau et de la biodiversité",
                    "amount": 196922218
                  },
                  {
                    "label": "Personnels oeuvrant pour les politiques du programme \"Affaires maritimes\"",
                    "amount": 166308087
                  },
                  {
                    "label": "Personnels oeuvrant pour les politiques de l'énergie et du climat",
                    "amount": 54680078
                  },
                  {
                    "label": "Personnels œuvrant dans le domaine de la stratégie et de la connaissance des politiques de transition écologique",
                    "amount": 38414290
                  },
                  {
                    "label": "Commission de régulation de l'énergie (CRE)",
                    "amount": 24845637
                  },
                  {
                    "label": "Personnels transférés aux collectivités territoriales",
                    "amount": 22255530
                  },
                  {
                    "label": "Commission nationale du débat public",
                    "amount": 4158559
                  },
                  {
                    "label": "Autorité de contrôle des nuisances aéroportuaires (ACNUSA)",
                    "amount": 1882437
                  }
                ]
              },
              {
                "label": "Prévention des risques",
                "amount": 1484891584,
                "children": [
                  {
                    "label": "Agence de l'environnement et de la maîtrise de l'énergie (ADEME)",
                    "amount": 1059362215
                  },
                  {
                    "label": "Fonds de prévention des risques naturels majeurs",
                    "amount": 243800000
                  },
                  {
                    "label": "Prévention des risques technologiques et des pollutions",
                    "amount": 62769438
                  },
                  {
                    "label": "Gestion de l'après-mine et travaux de mise en sécurité, indemnisations et expropriations sur les sites",
                    "amount": 42389976
                  },
                  {
                    "label": "Institut national de l'environnement industriel et des risques (INERIS)",
                    "amount": 38770918
                  },
                  {
                    "label": "Prévention des risques naturels et hydrauliques",
                    "amount": 37799037
                  }
                ]
              },
              {
                "label": "Énergie, climat et après-mines",
                "amount": 1232145522,
                "children": [
                  {
                    "label": "Accompagnement transition énergétique",
                    "amount": 654600000
                  },
                  {
                    "label": "Gestion économique et sociale de l'après-mines",
                    "amount": 265795000
                  },
                  {
                    "label": "Politique de l'énergie",
                    "amount": 133952196
                  },
                  {
                    "label": "Aides à l'acquisition de véhicules propres",
                    "amount": 93753326
                  },
                  {
                    "label": "Lutte contre le changement climatique et pour la qualité de l'air",
                    "amount": 78145000
                  },
                  {
                    "label": "Soutien",
                    "amount": 5900000
                  }
                ]
              },
              {
                "label": "Fonds d'accélération de la transition écologique dans les territoires",
                "amount": 1085834766,
                "children": [
                  {
                    "label": "Performance environnementale",
                    "amount": 491676769
                  },
                  {
                    "label": "Amélioration du cadre de vie",
                    "amount": 403112689
                  },
                  {
                    "label": "Adaptation des territoires au changement climatique",
                    "amount": 191045308
                  }
                ]
              },
              {
                "label": "Expertise, information géographique et météorologie",
                "amount": 670754833,
                "children": [
                  {
                    "label": "Météorologie",
                    "amount": 267528259
                  },
                  {
                    "label": "Etudes et expertise en matière de développement durable",
                    "amount": 186348997
                  },
                  {
                    "label": "Information géographique et cartographique",
                    "amount": 100512673
                  },
                  {
                    "label": "Recherche dans le domaine des transports, de la construction et de l'aménagement",
                    "amount": 97932561
                  },
                  {
                    "label": "Gouvernance, évaluation, études et prospective en matière de développement durable",
                    "amount": 18432343
                  }
                ]
              },
              {
                "label": "Paysages, eau et biodiversité",
                "amount": 395097182,
                "children": [
                  {
                    "label": "Gestion des milieux et biodiversité",
                    "amount": 374769684
                  },
                  {
                    "label": "Innovation, territorialisation et contentieux",
                    "amount": 10762384
                  },
                  {
                    "label": "Sites, paysages, publicité",
                    "amount": 9565114
                  }
                ]
              },
              {
                "label": "Sûreté nucléaire et radioprotection",
                "amount": 337432980,
                "children": [
                  {
                    "label": "Personnels œuvrant pour la politique en matière de sûreté nucléaire et radio-protection",
                    "amount": 215957794
                  },
                  {
                    "label": "Sûreté nucléaire et radio-protection",
                    "amount": 121475186
                  }
                ]
              },
              {
                "label": "Affaires maritimes, pêches et aquaculture",
                "amount": 289702930,
                "children": [
                  {
                    "label": "Pêche et aquaculture",
                    "amount": 95597757
                  },
                  {
                    "label": "Innovation et flotte de commerce",
                    "amount": 77160247
                  },
                  {
                    "label": "Surveillance et sûreté maritimes",
                    "amount": 33829809
                  },
                  {
                    "label": "Emplois et formations maritimes",
                    "amount": 31988259
                  },
                  {
                    "label": "Action interministérielle de la mer",
                    "amount": 24394714
                  },
                  {
                    "label": "Planification et économie bleue",
                    "amount": 17521022
                  },
                  {
                    "label": "Soutien et systèmes d'information",
                    "amount": 9211122
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "key": "travail",
        "label": "Travail & emploi",
        "amount": 17362012698,
        "children": [
          {
            "label": "Travail, emploi et administration des ministères sociaux",
            "amount": 17362012698,
            "children": [
              {
                "label": "Accompagnement des mutations économiques et développement de l'emploi",
                "amount": 8747467735,
                "children": [
                  {
                    "label": "Actions pour favoriser la mise en activité professionnelles des demandeurs d'emploi",
                    "amount": 3618756394
                  },
                  {
                    "label": "Développement des compétences par l'alternance",
                    "amount": 3418355089
                  },
                  {
                    "label": "Formation professionnelle des demandeurs d'emploi",
                    "amount": 755069523
                  },
                  {
                    "label": "Financement des structures de la formation professionnelle et de l'emploi",
                    "amount": 673528121
                  },
                  {
                    "label": "Anticipation et accompagnement des conséquences des mutations économiques sur l'emploi",
                    "amount": 281758608
                  }
                ]
              },
              {
                "label": "Accès et retour à l'emploi",
                "amount": 6765692415,
                "children": [
                  {
                    "label": "Indemnisation des demandeurs d'emploi",
                    "amount": 2060903833
                  },
                  {
                    "label": "Structures de mise en oeuvre de la politique de l'emploi",
                    "amount": 1905457318
                  },
                  {
                    "label": "Accompagnement des personnes les plus éloignées du marché du travail- Fonds d'inclusion dans l'emploi",
                    "amount": 1851204961
                  },
                  {
                    "label": "Insertion des jeunes sur le marché du travail- Contrat d'engagement jeunes (CEJ)",
                    "amount": 948126303
                  }
                ]
              },
              {
                "label": "Soutien des ministères sociaux",
                "amount": 1771686153,
                "children": [
                  {
                    "label": "Financement des agences régionales de santé",
                    "amount": 627141633
                  },
                  {
                    "label": "Personnels mettant en œuvre les politiques d'amélioration de la qualité de l'emploi et des relations du travail",
                    "amount": 372830299
                  },
                  {
                    "label": "Personnels mettant en œuvre les politiques sociales et de la santé",
                    "amount": 318713193
                  },
                  {
                    "label": "Personnels mettant en œuvre les politiques de l'emploi et de la formation professionnelle",
                    "amount": 209536076
                  },
                  {
                    "label": "Personnels transversaux et de soutien",
                    "amount": 160058961
                  },
                  {
                    "label": "Affaires immobilières",
                    "amount": 126245356
                  },
                  {
                    "label": "Systèmes d'information",
                    "amount": 103648813
                  },
                  {
                    "label": "Politique des ressources humaines",
                    "amount": 51576045
                  },
                  {
                    "label": "Fonctionnement des services",
                    "amount": 23299833
                  },
                  {
                    "label": "Etudes, statistiques, évaluation et recherche",
                    "amount": 19418025
                  },
                  {
                    "label": "Communication",
                    "amount": 18985153
                  },
                  {
                    "label": "Personnels mettant en œuvre les politiques de l'égalité entre les femmes et les hommes",
                    "amount": 16140479
                  },
                  {
                    "label": "Soutien au plan d'investissement dans les compétences",
                    "amount": 8500000
                  },
                  {
                    "label": "Affaires européennes et internationales",
                    "amount": 3280000
                  },
                  {
                    "label": "T2 - contribution au CAS",
                    "amount": -287687713
                  }
                ]
              },
              {
                "label": "Amélioration de la qualité de l'emploi et des relations du travail",
                "amount": 77166395,
                "children": [
                  {
                    "label": "Dialogue social et démocratie sociale",
                    "amount": 41201983
                  },
                  {
                    "label": "Santé et sécurité au travail",
                    "amount": 24632187
                  },
                  {
                    "label": "Qualité et effectivité du droit",
                    "amount": 11332225
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "label": "Gestion des finances publiques",
        "amount": 8229155276,
        "children": [
          {
            "label": "Gestion fiscale et financière de l'État et du secteur public local",
            "amount": 5998555387,
            "children": [
              {
                "label": "Fiscalité des particuliers et fiscalité directe locale",
                "amount": 2057101559
              },
              {
                "label": "Soutien",
                "amount": 1947984690
              },
              {
                "label": "Fiscalité des PME",
                "amount": 1638501484
              },
              {
                "label": "Gestion financière du secteur public local hors fiscalité",
                "amount": 1330225279
              },
              {
                "label": "Gestion financière de l'État hors fiscalité",
                "amount": 947919973
              },
              {
                "label": "Fiscalité des grandes entreprises",
                "amount": 137354957
              },
              {
                "label": "Gestion des pensions",
                "amount": 91032806
              },
              {
                "label": "Gestion des fonds déposés",
                "amount": 58074847
              },
              {
                "label": "Élaboration de la législation fiscale",
                "amount": 21747410
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -2231387618
              }
            ]
          },
          {
            "label": "Facilitation et sécurisation des échanges",
            "amount": 1380256017,
            "children": [
              {
                "label": "Surveillance douanière des flux de personnes et de marchandises et lutte contre la grande fraude douanière.",
                "amount": 629531928
              },
              {
                "label": "Soutien des services opérationnels",
                "amount": 537573739
              },
              {
                "label": "Promotion des échanges internationaux et qualité du dédouanement",
                "amount": 259818699
              },
              {
                "label": "Préservation de la sécurité et de la sûreté de l'espace national et européen",
                "amount": 185773984
              },
              {
                "label": "Fiscalité douanière, énergétique et environnementale",
                "amount": 133894520
              },
              {
                "label": "Soutien au réseau des débitants de tabac",
                "amount": 49100000
              },
              {
                "label": "Mobilisation des outils du renseignement au service des missions douanières",
                "amount": 25199747
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -440636600
              }
            ]
          },
          {
            "label": "Conduite et pilotage des politiques économiques et financières",
            "amount": 850343872,
            "children": [
              {
                "label": "Prestations d'appui et support",
                "amount": 411118803
              },
              {
                "label": "Expertise, audit, évaluation et contrôle",
                "amount": 208353496
              },
              {
                "label": "Pilotage des finances publiques et projets interministériels",
                "amount": 189848259
              },
              {
                "label": "Action sociale ministérielle",
                "amount": 185432451
              },
              {
                "label": "Accompagnement du changement de l'action publique",
                "amount": 4107682
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -148516819
              }
            ]
          }
        ]
      },
      {
        "label": "Investir pour la France de 2030",
        "amount": 5497829332,
        "children": [
          {
            "label": "Financement des investissements stratégiques",
            "amount": 3753875009,
            "children": [
              {
                "label": "Soutien au déploiement",
                "amount": 1484390000
              },
              {
                "label": "Démonstration en conditions réelles, amorçage et premières commerciales",
                "amount": 799142700
              },
              {
                "label": "Industrialisation et déploiement",
                "amount": 438378864
              },
              {
                "label": "Accélération de la croissance (fonds propres)",
                "amount": 435563445
              },
              {
                "label": "Maturation de technologies, R&D, valorisation de la recherche",
                "amount": 356400000
              },
              {
                "label": "Programmes et équipements prioritaires de recherche",
                "amount": 240000000
              }
            ]
          },
          {
            "label": "Financement structurel des écosystèmes d’innovation",
            "amount": 1374439597,
            "children": [
              {
                "label": "Aides à l'innovation « bottom-up » (subventions et prêts)",
                "amount": 647267400
              },
              {
                "label": "Financements de l'écosystème ESRI et valorisation",
                "amount": 642172197
              },
              {
                "label": "Aides à l’innovation « bottom-up » (fonds propres)",
                "amount": 85000000
              }
            ]
          },
          {
            "label": "Soutien des progrès de l'enseignement et de la recherche",
            "amount": 200693126,
            "children": [
              {
                "label": "Soutien des grandes universités de recherche",
                "amount": 73000000
              },
              {
                "label": "Constitution d'écoles universitaires de recherche",
                "amount": 35000000
              },
              {
                "label": "Programmes prioritaires de recherche",
                "amount": 31000000
              },
              {
                "label": "Territoires d'innovation pédagogique",
                "amount": 22700000
              },
              {
                "label": "Nouveaux cursus à l'université",
                "amount": 20000000
              },
              {
                "label": "Équipements structurants de recherche",
                "amount": 18993126
              }
            ]
          },
          {
            "label": "Accélération de la modernisation des entreprises",
            "amount": 136660000,
            "children": [
              {
                "label": "Grands défis",
                "amount": 100000000
              },
              {
                "label": "Soutien à l'innovation collaborative",
                "amount": 27000000
              },
              {
                "label": "Accompagnement et transformation des filières",
                "amount": 9660000
              }
            ]
          },
          {
            "label": "Valorisation de la recherche",
            "amount": 32161600,
            "children": [
              {
                "label": "Accélération du développement des écosystèmes d'innovation performants",
                "amount": 27352111
              },
              {
                "label": "Démonstrateurs et territoires d'innovation de grande ambition",
                "amount": 4809489
              }
            ]
          }
        ]
      },
      {
        "label": "Administration générale et territoriale de l'État",
        "amount": 4246711486,
        "children": [
          {
            "label": "Administration territoriale de l'État",
            "amount": 2153599270,
            "children": [
              {
                "label": "Pilotage territorial des politiques gouvernementales",
                "amount": 833604839
              },
              {
                "label": "Fonctionnement courant de l'administration territoriale",
                "amount": 709133531
              },
              {
                "label": "Réglementation générale, garantie de l'identité et de la nationalité et délivrance des titres",
                "amount": 503269877
              },
              {
                "label": "Dépenses immobilières de l'administration territoriale",
                "amount": 354918309
              },
              {
                "label": "Coordination de la sécurité des personnes et des biens",
                "amount": 203918503
              },
              {
                "label": "Contrôle de légalité et conseil aux collectivités territoriales",
                "amount": 150154832
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -601400621
              }
            ]
          },
          {
            "label": "Conduite et pilotage des politiques de l'intérieur",
            "amount": 1792739796,
            "children": [
              {
                "label": "État-major et services centraux",
                "amount": 775845802
              },
              {
                "label": "Affaires immobilières",
                "amount": 453756688
              },
              {
                "label": "Numérique",
                "amount": 399991711
              },
              {
                "label": "Sécurité et éducation routières",
                "amount": 133126769
              },
              {
                "label": "Action sociale et formation",
                "amount": 91424967
              },
              {
                "label": "Affaires juridiques et contentieuses",
                "amount": 85188190
              },
              {
                "label": "Immigration, asile et intégration",
                "amount": 45005628
              },
              {
                "label": "Fonds interministériel de prévention de la délinquance",
                "amount": 43454233
              },
              {
                "label": "Equipements de vidéo-protection et de surveillance électronique du ministère de l'intérieur, des collectivités et des acteurs privés",
                "amount": 26125022
              },
              {
                "label": "Cultes et laïcité",
                "amount": 6699542
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -267878756
              }
            ]
          },
          {
            "label": "Vie politique",
            "amount": 300372420,
            "children": [
              {
                "label": "Organisation des élections",
                "amount": 221639608
              },
              {
                "label": "Financement des partis",
                "amount": 68670672
              },
              {
                "label": "Commission nationale des comptes de campagne et des financements politiques",
                "amount": 10614740
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -552600
              }
            ]
          }
        ]
      },
      {
        "label": "Avances à l'audiovisuel public",
        "amount": 3878312945,
        "children": [
          {
            "label": "France Télévisions",
            "amount": 2440577000,
            "children": [
              {
                "label": "France Télévisions",
                "amount": 2440577000
              }
            ]
          },
          {
            "label": "Radio France",
            "amount": 648033908,
            "children": [
              {
                "label": "Radio France",
                "amount": 648033908
              }
            ]
          },
          {
            "label": "France Médias Monde",
            "amount": 303883551,
            "children": [
              {
                "label": "France Médias Monde",
                "amount": 303883551
              }
            ]
          },
          {
            "label": "ARTE France",
            "amount": 298114886,
            "children": [
              {
                "label": "ARTE France",
                "amount": 298114886
              }
            ]
          },
          {
            "label": "Institut national de l'audiovisuel",
            "amount": 103461144,
            "children": [
              {
                "label": "Institut national de l'audiovisuel",
                "amount": 103461144
              }
            ]
          },
          {
            "label": "TV5 Monde",
            "amount": 84242456,
            "children": [
              {
                "label": "TV5 Monde",
                "amount": 84242456
              }
            ]
          }
        ]
      },
      {
        "label": "Agriculture, alimentation, forêt et affaires rurales",
        "amount": 3767842168,
        "children": [
          {
            "label": "Compétitivité et durabilité de l'agriculture, de l'agroalimentaire et de la forêt",
            "amount": 2056447002,
            "children": [
              {
                "label": "Gestion équilibrée et durable des territoires",
                "amount": 516427462
              },
              {
                "label": "Moyens de mise en oeuvre des politiques publiques et gestion des interventions",
                "amount": 478132500
              },
              {
                "label": "Gestion durable de la forêt et développement de la filière bois",
                "amount": 289787394
              },
              {
                "label": "Adaptation des filières à l'évolution des marchés",
                "amount": 234452078
              },
              {
                "label": "Planification écologique",
                "amount": 178337296
              },
              {
                "label": "Protection sociale",
                "amount": 142950000
              },
              {
                "label": "Gestion des crises et des aléas de la production agricole",
                "amount": 110900000
              },
              {
                "label": "Appui au renouvellement et à la modernisation des exploitations agricoles",
                "amount": 105460272
              }
            ]
          },
          {
            "label": "Sécurité et qualité sanitaires de l'alimentation",
            "amount": 749925422,
            "children": [
              {
                "label": "Mise en oeuvre de la politique de sécurité et de qualité sanitaires de l'alimentation",
                "amount": 370705156
              },
              {
                "label": "Lutte contre les maladies animales, protection et bien-être animal",
                "amount": 163120070
              },
              {
                "label": "Actions transversales",
                "amount": 115420016
              },
              {
                "label": "Sécurité sanitaire de l'alimentation",
                "amount": 103667500
              },
              {
                "label": "Planification écologique - Stratégie de réduction de l’utilisation des produits phytosanitaires",
                "amount": 42376830
              },
              {
                "label": "Santé, qualité et protection des végétaux",
                "amount": 33504200
              },
              {
                "label": "Qualité de l'alimentation et offre alimentaire",
                "amount": 5810500
              },
              {
                "label": "Elimination des cadavres et des sous-produits animaux",
                "amount": 4000000
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -88678850
              }
            ]
          },
          {
            "label": "Conduite et pilotage des politiques de l'agriculture",
            "amount": 512469744,
            "children": [
              {
                "label": "Moyens des directions régionales de l'alimentation, de l'agriculture et de la forêt, des directions de l'alimentation, de l'agriculture et de la forêt et directions départementales des territoires (et de la mer)",
                "amount": 323341274
              },
              {
                "label": "Moyens de l'administration centrale",
                "amount": 226508902
              },
              {
                "label": "Moyens communs",
                "amount": 95316023
              },
              {
                "label": "Évaluation de l'impact des politiques publiques et information économique",
                "amount": 16604586
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -149301041
              }
            ]
          },
          {
            "label": "Allègements du coût du travail en agriculture (TODE-AG)",
            "amount": 449000000,
            "children": [
              {
                "label": "Allègements de cotisations et contributions sociales",
                "amount": 449000000
              }
            ]
          }
        ]
      },
      {
        "label": "Aide publique au développement",
        "amount": 3669036500,
        "children": [
          {
            "label": "Solidarité à l'égard des pays en développement",
            "amount": 1541928976,
            "children": [
              {
                "label": "Coopération bilatérale",
                "amount": 1062402820
              },
              {
                "label": "Action humanitaire",
                "amount": 294000000
              },
              {
                "label": "Coopération communautaire",
                "amount": 124688830
              },
              {
                "label": "Coopération multilatérale",
                "amount": 60837326
              }
            ]
          },
          {
            "label": "Aide économique et financière au développement",
            "amount": 1289107524,
            "children": [
              {
                "label": "Aide économique et financière bilatérale",
                "amount": 601940000
              },
              {
                "label": "Aide économique et financière multilatérale",
                "amount": 593743754
              },
              {
                "label": "Traitement de la dette des pays pauvres",
                "amount": 93423770
              }
            ]
          },
          {
            "label": "Fonds de solidarité pour le développement",
            "amount": 738000000,
            "children": [
              {
                "label": "Fonds de solidarité pour le développement",
                "amount": 738000000
              }
            ]
          },
          {
            "label": "Renforcement des fonds propres de l’Agence française de développement",
            "amount": 100000000,
            "children": [
              {
                "label": "Renforcement des fonds propres de l'Agence française de développement",
                "amount": 100000000
              }
            ]
          }
        ]
      },
      {
        "label": "Culture",
        "amount": 3542752824,
        "children": [
          {
            "label": "Patrimoines",
            "amount": 1145372429,
            "children": [
              {
                "label": "Patrimoine des musées de France",
                "amount": 440949321
              },
              {
                "label": "Monuments Historiques et patrimoine monumental",
                "amount": 437068491
              },
              {
                "label": "Patrimoine archéologique",
                "amount": 163593552
              },
              {
                "label": "Patrimoine archivistique",
                "amount": 55789225
              },
              {
                "label": "Architecture et sites patrimoniaux",
                "amount": 38630595
              },
              {
                "label": "Acquisition et enrichissement des collections publiques",
                "amount": 9341245
              }
            ]
          },
          {
            "label": "Création",
            "amount": 1009899700,
            "children": [
              {
                "label": "Soutien à la création, à la production et à la diffusion du spectacle vivant",
                "amount": 789366589
              },
              {
                "label": "Soutien à la création, à la production et à la diffusion des arts visuels",
                "amount": 153813951
              },
              {
                "label": "Soutien à l'emploi et structurations des professions",
                "amount": 66719160
              }
            ]
          },
          {
            "label": "Transmission des savoirs et démocratisation de la culture",
            "amount": 722574664,
            "children": [
              {
                "label": "Soutien aux établissements d'enseignement supérieur et insertion professionnelle",
                "amount": 322563981
              },
              {
                "label": "Soutien à la démocratisation et à l'éducation artistique et culturelle",
                "amount": 273426182
              },
              {
                "label": "Recherche culturelle et culture scientifique et technique",
                "amount": 122360163
              },
              {
                "label": "Langue française et langues de France",
                "amount": 4224338
              }
            ]
          },
          {
            "label": "Soutien aux politiques du ministère de la culture",
            "amount": 664906031,
            "children": [
              {
                "label": "Fonctions de soutien du ministère",
                "amount": 859476403
              },
              {
                "label": "Action culturelle internationale",
                "amount": 10533981
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -205104353
              }
            ]
          }
        ]
      },
      {
        "label": "Économie",
        "amount": 3292008366,
        "children": [
          {
            "label": "Développement des entreprises et régulations",
            "amount": 1991209350,
            "children": [
              {
                "label": "Industrie et services",
                "amount": 941505577
              },
              {
                "label": "Développement des postes, des télécommunications et du numérique",
                "amount": 633108694
              },
              {
                "label": "Régulation concurrentielle des marchés, protection économique et sécurité du consommateur",
                "amount": 271104285
              },
              {
                "label": "Développement international des entreprises et attractivité du territoire",
                "amount": 170843358
              },
              {
                "label": "Mise en oeuvre du droit de la concurrence (Autorité de la concurrence)",
                "amount": 27867371
              },
              {
                "label": "Régulation des communications électroniques, des postes et de la distribution de la presse (ARCEP)",
                "amount": 25570203
              },
              {
                "label": "Expertise, conseil et inspection",
                "amount": 17339083
              },
              {
                "label": "Mesures exceptionnelles dans le cadre de la crise sanitaire",
                "amount": 15940652
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -112069873
              }
            ]
          },
          {
            "label": "Stratégies économiques",
            "amount": 645411332,
            "children": [
              {
                "label": "Définition et mise en oeuvre de la politique économique et financière de la France dans le cadre national, international et européen",
                "amount": 581547991
              },
              {
                "label": "Développement international de l'économie française",
                "amount": 72677639
              },
              {
                "label": "Économie sociale, solidaire et responsable",
                "amount": 12332842
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -21147140
              }
            ]
          },
          {
            "label": "Statistiques et études économiques",
            "amount": 368866613,
            "children": [
              {
                "label": "Infrastructures statistiques et missions régaliennes",
                "amount": 152119279
              },
              {
                "label": "Pilotage, soutien et formation initiale",
                "amount": 151894313
              },
              {
                "label": "Information économique, démographique et sociale",
                "amount": 135983629
              },
              {
                "label": "Action régionale",
                "amount": 45147057
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -116277665
              }
            ]
          },
          {
            "label": "Plan France Très haut débit",
            "amount": 286521071,
            "children": [
              {
                "label": "Réseaux d'initiative publique",
                "amount": 258431384
              },
              {
                "label": "Autres projets concourant à la mise en œuvre du plan France très haut débit",
                "amount": 14089687
              },
              {
                "label": "Inclusion numérique",
                "amount": 14000000
              }
            ]
          }
        ]
      },
      {
        "label": "Action extérieure de l'État",
        "amount": 3253049286,
        "children": [
          {
            "label": "Action de la France en Europe et dans le monde",
            "amount": 2493298081,
            "children": [
              {
                "label": "Réseau diplomatique",
                "amount": 783914615
              },
              {
                "label": "Contributions internationales",
                "amount": 602869335
              },
              {
                "label": "Soutien",
                "amount": 308699429
              },
              {
                "label": "Personnel concourant à l'action \"Offre d'un service public de qualité aux français à l'étranger\"",
                "amount": 214133092
              },
              {
                "label": "Dépenses de personnels concourant au programme \"Solidarité à l'égard des pays en développement\"",
                "amount": 178790737
              },
              {
                "label": "Action européenne",
                "amount": 178396684
              },
              {
                "label": "Coordination de l'action diplomatique",
                "amount": 152695459
              },
              {
                "label": "Coopération de sécurité et de défense",
                "amount": 118094690
              },
              {
                "label": "Dépenses de personnel concourant au programme \"Diplomatie culturelle et d'influence\"",
                "amount": 93553293
              },
              {
                "label": "Personnel concourant à l'action \"Instruction des demandes de visa\"",
                "amount": 66526786
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -204376039
              }
            ]
          },
          {
            "label": "Diplomatie culturelle et d'influence",
            "amount": 605940405,
            "children": [
              {
                "label": "Opérateurs",
                "amount": 420542722
              },
              {
                "label": "Appui au réseau culturel et de coopération",
                "amount": 103445956
              },
              {
                "label": "Mobilité étudiante",
                "amount": 56272657
              },
              {
                "label": "Crédits centraux",
                "amount": 25679070
              }
            ]
          },
          {
            "label": "Français à l'étranger et affaires consulaires",
            "amount": 153810800,
            "children": [
              {
                "label": "Accès des élèves français au réseau AEFE",
                "amount": 107024743
              },
              {
                "label": "Offre d'un service public de qualité aux Français à l'étranger",
                "amount": 44586057
              },
              {
                "label": "Instruction des demandes de visa",
                "amount": 2200000
              }
            ]
          }
        ]
      },
      {
        "label": "Outre-mer",
        "amount": 2763584220,
        "children": [
          {
            "label": "Emploi outre-mer",
            "amount": 1737056701,
            "children": [
              {
                "label": "Soutien aux entreprises",
                "amount": 1479150990
              },
              {
                "label": "Aide à l'insertion et à la qualification professionnelle",
                "amount": 297824261
              },
              {
                "label": "Financement de l'économie",
                "amount": 20094775
              },
              {
                "label": "Pilotage des politiques des outre-mer",
                "amount": 3373101
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -63386426
              }
            ]
          },
          {
            "label": "Conditions de vie outre-mer",
            "amount": 1026527519,
            "children": [
              {
                "label": "Collectivités territoriales",
                "amount": 452693694
              },
              {
                "label": "Logement",
                "amount": 211271857
              },
              {
                "label": "Aménagement  du territoire",
                "amount": 181734704
              },
              {
                "label": "Continuité territoriale",
                "amount": 76801512
              },
              {
                "label": "Appui à l'accès aux financements bancaires",
                "amount": 57875761
              },
              {
                "label": "Fonds exceptionnel d'investissement",
                "amount": 32030491
              },
              {
                "label": "Sanitaire, social, culture, jeunesse et sports",
                "amount": 13150000
              },
              {
                "label": "Insertion économique et coopération régionales",
                "amount": 969500
              }
            ]
          }
        ]
      },
      {
        "label": "Contrôle et exploitation aériens",
        "amount": 2078319256,
        "children": [
          {
            "label": "Soutien aux prestations de l'aviation civile",
            "amount": 1330267406,
            "children": [
              {
                "label": "Ressources humaines et management",
                "amount": 1461512072
              },
              {
                "label": "Formation aéronautique",
                "amount": 117844761
              },
              {
                "label": "Logistique",
                "amount": 85923144
              },
              {
                "label": "Affaires financières",
                "amount": 12204465
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -347217036
              }
            ]
          },
          {
            "label": "Navigation aérienne",
            "amount": 700537903,
            "children": [
              {
                "label": "Exploitation et innovation de la Navigation aérienne",
                "amount": 412782484
              },
              {
                "label": "Soutien et prestations externes de la Navigation aérienne",
                "amount": 287755419
              }
            ]
          },
          {
            "label": "Transports aériens, surveillance et certification",
            "amount": 47513947,
            "children": [
              {
                "label": "Surveillance et certification",
                "amount": 25555880
              },
              {
                "label": "Développement durable et régulation",
                "amount": 18078772
              },
              {
                "label": "Enquêtes de sécurité aérienne",
                "amount": 3879295
              }
            ]
          }
        ]
      },
      {
        "label": "Sport, jeunesse et vie associative",
        "amount": 1194645238,
        "children": [
          {
            "label": "Jeunesse et vie associative",
            "amount": 626640612,
            "children": [
              {
                "label": "Développement du service civique",
                "amount": 465000000
              },
              {
                "label": "Actions en faveur de la jeunesse et de l'éducation populaire",
                "amount": 113380069
              },
              {
                "label": "Développement de la vie associative",
                "amount": 48260543
              }
            ]
          },
          {
            "label": "Sport",
            "amount": 513198868,
            "children": [
              {
                "label": "Développement du sport de haut niveau",
                "amount": 325081205
              },
              {
                "label": "Promotion du sport pour le plus grand nombre",
                "amount": 146773391
              },
              {
                "label": "Promotion des métiers du sport",
                "amount": 48739150
              },
              {
                "label": "Prévention par le sport et protection des sportifs",
                "amount": 33816634
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -41211512
              }
            ]
          },
          {
            "label": "Jeux olympiques et paralympiques d'hiver 2031",
            "amount": 41600000,
            "children": [
              {
                "label": "Société de livraison des ouvrages olympiques et paralympiques Alpes 2031",
                "amount": 41600000
              }
            ]
          },
          {
            "label": "Jeux olympiques et paralympiques d'hiver 2030",
            "amount": 13205758,
            "children": [
              {
                "label": "Société de livraison des ouvrages olympiques et paralympiques Alpes 2030",
                "amount": 13205758
              }
            ]
          }
        ]
      },
      {
        "label": "Contrôle de la circulation et du stationnement routiers",
        "amount": 1177255819,
        "children": [
          {
            "label": "Contribution à l'équipement des collectivités territoriales pour l'amélioration des transports en commun, de la sécurité et de la circulation routières",
            "amount": 806735047,
            "children": [
              {
                "label": "Contribution à l'équipement des collectivités territoriales pour l'amélioration des transports en commun, de la sécurité et de la circulation routières",
                "amount": 806735047
              }
            ]
          },
          {
            "label": "Structures et dispositifs de sécurité routière",
            "amount": 344340107,
            "children": [
              {
                "label": "Dispositifs de contrôle",
                "amount": 204538214
              },
              {
                "label": "Centre national de traitement",
                "amount": 98301893
              },
              {
                "label": "Système d'information Education routière et permis de conduire",
                "amount": 37700000
              },
              {
                "label": "Soutien au programme",
                "amount": 3800000
              }
            ]
          },
          {
            "label": "Contrôle et modernisation de la politique de la circulation et du stationnement routiers",
            "amount": 26180665,
            "children": [
              {
                "label": "Déploiement du procès-verbal électronique",
                "amount": 26180665
              }
            ]
          }
        ]
      },
      {
        "label": "Pouvoirs publics",
        "amount": 1140179221,
        "children": [
          {
            "label": "Assemblée nationale",
            "amount": 607647569,
            "children": [
              {
                "label": "Assemblée nationale",
                "amount": 607647569
              }
            ]
          },
          {
            "label": "Sénat",
            "amount": 353470900,
            "children": [
              {
                "label": "Sénat",
                "amount": 341864000
              },
              {
                "label": "Jardin du Luxembourg",
                "amount": 11606900
              }
            ]
          },
          {
            "label": "Présidence de la République",
            "amount": 122563852,
            "children": [
              {
                "label": "Présidence de la République",
                "amount": 122563852
              }
            ]
          },
          {
            "label": "La Chaîne parlementaire",
            "amount": 35596900,
            "children": [
              {
                "label": "La Chaîne parlementaire - Assemblée nationale",
                "amount": 17798900
              },
              {
                "label": "Public Sénat",
                "amount": 17798000
              }
            ]
          },
          {
            "label": "Conseil constitutionnel",
            "amount": 20000000,
            "children": [
              {
                "label": "Conseil constitutionnel",
                "amount": 20000000
              }
            ]
          },
          {
            "label": "Cour de justice de la République",
            "amount": 900000,
            "children": [
              {
                "label": "Cour de justice de la République",
                "amount": 900000
              }
            ]
          }
        ]
      },
      {
        "label": "Engagements financiers de l'État",
        "amount": 1102669199,
        "children": [
          {
            "label": "Appels en garantie de l'État (crédits évaluatifs)",
            "amount": 790362961,
            "children": [
              {
                "label": "Financement des entreprises et industrie",
                "amount": 538040190
              },
              {
                "label": "Autres garanties",
                "amount": 162352771
              },
              {
                "label": "Développement international de l'économie française",
                "amount": 68600000
              },
              {
                "label": "Soutien au domaine social, logement, santé",
                "amount": 21170000
              },
              {
                "label": "Agriculture et environnement",
                "amount": 200000
              }
            ]
          },
          {
            "label": "Fonds de soutien relatif aux prêts et contrats financiers structurés à risque",
            "amount": 178679630,
            "children": [
              {
                "label": "Fonds de soutien relatif aux prêts et contrats financiers structurés à risque",
                "amount": 178679630
              }
            ]
          },
          {
            "label": "Épargne",
            "amount": 96166608,
            "children": [
              {
                "label": "Épargne logement",
                "amount": 95902608
              },
              {
                "label": "Instruments de financement du logement",
                "amount": 264000
              }
            ]
          },
          {
            "label": "Dotation du Mécanisme européen de stabilité",
            "amount": 37460000,
            "children": [
              {
                "label": "Dotation du Mécanisme européen de stabilité",
                "amount": 37460000
              }
            ]
          }
        ]
      },
      {
        "label": "Direction de l'action du Gouvernement",
        "amount": 1015683439,
        "children": [
          {
            "label": "Coordination du travail gouvernemental",
            "amount": 797240400,
            "children": [
              {
                "label": "Coordination de la sécurité et de la défense",
                "amount": 431083302
              },
              {
                "label": "Soutien",
                "amount": 158147271
              },
              {
                "label": "Coordination du travail gouvernemental",
                "amount": 110278275
              },
              {
                "label": "Coordination de la politique des ressources humaines en matière d’encadrement supérieur et dirigeant de l’Etat",
                "amount": 47657620
              },
              {
                "label": "Ordre de la Légion d'honneur",
                "amount": 30959316
              },
              {
                "label": "Stratégie et prospective",
                "amount": 23317423
              },
              {
                "label": "Coordination de la politique européenne",
                "amount": 19401670
              },
              {
                "label": "Mission interministérielle de lutte contre les drogues et les conduites addictives",
                "amount": 15338315
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -38942792
              }
            ]
          },
          {
            "label": "Protection des droits et libertés",
            "amount": 136170708,
            "children": [
              {
                "label": "Autorité de régulation de la communication audiovisuelle et numérique",
                "amount": 50521416
              },
              {
                "label": "Commission nationale de l'informatique et des libertés",
                "amount": 31228373
              },
              {
                "label": "Défenseur des droits",
                "amount": 31206422
              },
              {
                "label": "Haute autorité pour la transparence de la vie publique",
                "amount": 11531674
              },
              {
                "label": "Autres autorités indépendantes",
                "amount": 6324505
              },
              {
                "label": "Contrôleur général des lieux de privation de liberté",
                "amount": 6146795
              },
              {
                "label": "Commission nationale de contrôle des techniques de renseignement",
                "amount": 3798954
              },
              {
                "label": "Commission du secret de la Défense nationale",
                "amount": 806088
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -5393519
              }
            ]
          },
          {
            "label": "Autres crédits",
            "amount": 82272331,
            "children": [
              {
                "label": "Autres crédits",
                "amount": 82272331
              }
            ]
          }
        ]
      },
      {
        "label": "Médias, livre et industries culturelles",
        "amount": 690182793,
        "children": [
          {
            "label": "Presse et médias",
            "amount": 346746799,
            "children": [
              {
                "label": "Aides à la presse",
                "amount": 176455448
              },
              {
                "label": "Relations financières avec l'AFP",
                "amount": 147185233
              },
              {
                "label": "Soutien à l'expression radiophonique locale",
                "amount": 19607958
              },
              {
                "label": "Soutien aux médias de proximité",
                "amount": 1831660
              },
              {
                "label": "Compagnie internationale de radio et télévision (CIRT)",
                "amount": 1666500
              }
            ]
          },
          {
            "label": "Livre et industries culturelles",
            "amount": 343435994,
            "children": [
              {
                "label": "Livre et lecture",
                "amount": 321778360
              },
              {
                "label": "Industries culturelles",
                "amount": 21657634
              }
            ]
          }
        ]
      },
      {
        "label": "Conseil et contrôle de l'État",
        "amount": 683781018,
        "children": [
          {
            "label": "Conseil d'État et autres juridictions administratives",
            "amount": 446609698,
            "children": [
              {
                "label": "Fonction juridictionnelle : Tribunaux administratifs",
                "amount": 217766830
              },
              {
                "label": "Soutien",
                "amount": 157223948
              },
              {
                "label": "Fonction juridictionnelle : Cours administratives d'appel",
                "amount": 67637629
              },
              {
                "label": "Cour nationale du droit d'asile",
                "amount": 52255173
              },
              {
                "label": "Fonction juridictionnelle : Conseil d'État",
                "amount": 36351408
              },
              {
                "label": "Fonction consultative",
                "amount": 18239114
              },
              {
                "label": "Commission du contentieux du stationnement payant",
                "amount": 9294063
              },
              {
                "label": "Fonction études, expertise et services rendus aux administrations de l'État et des collectivités",
                "amount": 9188656
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -121347123
              }
            ]
          },
          {
            "label": "Haut Conseil des finances publiques",
            "amount": 206162432,
            "children": [
              {
                "label": "Contrôle des gestions publiques",
                "amount": 77035403
              },
              {
                "label": "Pilotage et soutien des juridictions financières",
                "amount": 55326388
              },
              {
                "label": "Examen des comptes publics",
                "amount": 53976535
              },
              {
                "label": "Evaluation des politiques publiques",
                "amount": 43300796
              },
              {
                "label": "Contrôle des finances publiques",
                "amount": 20653464
              },
              {
                "label": "Information des citoyens",
                "amount": 9223695
              },
              {
                "label": "Mise en jeu de la responsabilité des comptables publics et des gestionnaires publics",
                "amount": 6194835
              },
              {
                "label": "Gouvernance des Finances publiques",
                "amount": 1456048
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -61004732
              }
            ]
          },
          {
            "label": "Conseil économique, social et environnemental",
            "amount": 31008888,
            "children": [
              {
                "label": "Fonctions supports à l'institution",
                "amount": 21726813
              },
              {
                "label": "Travaux consultatifs",
                "amount": 12422625
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -3140550
              }
            ]
          }
        ]
      },
      {
        "label": "Transformation et fonction publiques",
        "amount": 516492869,
        "children": [
          {
            "label": "Fonds d'accompagnement interministériel Ressources humaines",
            "amount": 228212084,
            "children": [
              {
                "label": "Action sociale interministérielle",
                "amount": 119965653
              },
              {
                "label": "Formation des fonctionnaires",
                "amount": 77073184
              },
              {
                "label": "Appui et innovation des ressources humaines",
                "amount": 31173247
              }
            ]
          },
          {
            "label": "Performance et résilience des bâtiments de l’État et de ses opérateurs",
            "amount": 203671667,
            "children": [
              {
                "label": "Travaux et gros entretien à la charge du propriétaire",
                "amount": 145705814
              },
              {
                "label": "Résilience",
                "amount": 40359999
              },
              {
                "label": "Etudes",
                "amount": 17605854
              }
            ]
          },
          {
            "label": "Conduite et pilotage de la transformation et de la fonction publiques",
            "amount": 44659118,
            "children": [
              {
                "label": "Accompagnement des transformations des ressources humaines (DGAFP/CISIRH)",
                "amount": 35778938
              },
              {
                "label": "Pilotage des actions de modernisation (DITP)",
                "amount": 17078245
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -8198065
              }
            ]
          },
          {
            "label": "Transformation publique",
            "amount": 39950000,
            "children": [
              {
                "label": "Fonds pour la transformation de l'action publique",
                "amount": 20000000
              },
              {
                "label": "Accompagnement du changement de l'action publique",
                "amount": 19450000
              },
              {
                "label": "Renouveau démocratique",
                "amount": 500000
              }
            ]
          }
        ]
      },
      {
        "label": "Crédits non répartis",
        "amount": 475000000,
        "children": [
          {
            "label": "Provision relative aux rémunérations publiques",
            "amount": 350000000,
            "children": [
              {
                "label": "Provision relative aux rémunérations publiques",
                "amount": 350000000
              }
            ]
          },
          {
            "label": "Dépenses accidentelles et imprévisibles",
            "amount": 125000000,
            "children": [
              {
                "label": "Dépenses accidentelles et imprévisibles",
                "amount": 125000000
              }
            ]
          }
        ]
      },
      {
        "label": "Financement des aides aux collectivités pour l'électrification rurale",
        "amount": 365300000,
        "children": [
          {
            "label": "Électrification rurale",
            "amount": 362300000,
            "children": [
              {
                "label": "Renforcement des réseaux",
                "amount": 179400000
              },
              {
                "label": "Sécurisation de fils nus",
                "amount": 90000000
              },
              {
                "label": "Enfouissement et pose en façade",
                "amount": 42000000
              },
              {
                "label": "Extension des réseaux",
                "amount": 32000000
              },
              {
                "label": "Intempéries",
                "amount": 18000000
              },
              {
                "label": "Fonctionnement",
                "amount": 700000
              },
              {
                "label": "Déclaration d'utilité publique (Très haute tension)",
                "amount": 200000
              }
            ]
          },
          {
            "label": "Opérations de maîtrise de la demande d’électricité, de production d’électricité par des énergies renouvelables ou de production de proximité dans les zones non interconnectées",
            "amount": 3000000,
            "children": [
              {
                "label": "Transition énergétique",
                "amount": 1000000
              },
              {
                "label": "Appel à projets innovants",
                "amount": 500000
              },
              {
                "label": "Maîtrise de la demande d'énergie",
                "amount": 500000
              },
              {
                "label": "Sites isolés",
                "amount": 500000
              },
              {
                "label": "Installations de proximité en zone non interconnectée",
                "amount": 500000
              }
            ]
          }
        ]
      },
      {
        "label": "Gestion du patrimoine immobilier de l'État",
        "amount": 321500000,
        "children": [
          {
            "label": "Opérations immobilières et entretien des bâtiments de l'État",
            "amount": 321500000,
            "children": [
              {
                "label": "Opérations structurantes et cessions",
                "amount": 161500000
              },
              {
                "label": "Gros entretien, réhabilitation, mise en conformité et remise en état",
                "amount": 80000000
              },
              {
                "label": "Maintenance à la charge du propriétaire",
                "amount": 64000000
              },
              {
                "label": "Contrôles règlementaires, audits, expertises et diagnostics",
                "amount": 16000000
              }
            ]
          }
        ]
      },
      {
        "label": "Développement agricole et rural",
        "amount": 171000000,
        "children": [
          {
            "label": "Recherche appliquée et innovation en agriculture",
            "amount": 103070000,
            "children": [
              {
                "label": "Recherche appliquée et innovation",
                "amount": 102570000
              },
              {
                "label": "Fonction support",
                "amount": 500000
              }
            ]
          },
          {
            "label": "Développement et transfert en agriculture",
            "amount": 67930000,
            "children": [
              {
                "label": "Développement et transfert",
                "amount": 67900000
              },
              {
                "label": "Fonction support",
                "amount": 30000
              }
            ]
          }
        ]
      },
      {
        "label": "Publications officielles et information administrative",
        "amount": 143470856,
        "children": [
          {
            "label": "Pilotage et ressources humaines",
            "amount": 99742011,
            "children": [
              {
                "label": "Dépenses de personnel",
                "amount": 50914751
              },
              {
                "label": "Convention Etat - Société anonyme de composition et d'impression des journaux officiels",
                "amount": 42199000
              },
              {
                "label": "Pilotage, modernisation et activités numériques",
                "amount": 10571075
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -3942815
              }
            ]
          },
          {
            "label": "Édition et diffusion",
            "amount": 43728845,
            "children": [
              {
                "label": "Accès au droit et diffusion légale",
                "amount": 28073152
              },
              {
                "label": "Information administrative et vie publique",
                "amount": 15655693
              }
            ]
          }
        ]
      }
    ],
    "missionsTree": [
      {
        "label": "Pensions",
        "amount": 68156628203,
        "children": [
          {
            "label": "Pensions civiles et militaires de retraite et allocations temporaires d'invalidité",
            "amount": 66072951625,
            "children": [
              {
                "label": "Fonctionnaires civils relevant du code des pensions civiles et militaires de retraite",
                "amount": 54743712223
              },
              {
                "label": "Militaires relevant du code des pensions civiles et militaires de retraite",
                "amount": 11188286896
              },
              {
                "label": "Allocations temporaires d'invalidité",
                "amount": 140952506
              }
            ]
          },
          {
            "label": "Ouvriers des établissements industriels de l'État",
            "amount": 2083676578,
            "children": [
              {
                "label": "Prestations vieillesse et invalidité",
                "amount": 2023186912
              },
              {
                "label": "Rentes accidents du travail des ouvriers civils des établissements militaires (RATOCEM)",
                "amount": 53334345
              },
              {
                "label": "Gestion du régime",
                "amount": 6512260
              },
              {
                "label": "Autres dépenses spécifiques",
                "amount": 643061
              }
            ]
          }
        ]
      },
      {
        "label": "Enseignement scolaire",
        "amount": 64484505460,
        "children": [
          {
            "label": "Enseignement scolaire public du second degré",
            "amount": 26670904182,
            "children": [
              {
                "label": "Enseignement en collège",
                "amount": 14062845452
              },
              {
                "label": "Enseignement général et technologique en lycée",
                "amount": 9313182237
              },
              {
                "label": "Enseignement professionnel sous statut scolaire",
                "amount": 5551296301
              },
              {
                "label": "Pilotage, administration et encadrement pédagogique",
                "amount": 4204962770
              },
              {
                "label": "Enseignement post-baccalauréat en lycée",
                "amount": 2563000757
              },
              {
                "label": "Remplacement",
                "amount": 1751026131
              },
              {
                "label": "Besoins éducatifs particuliers",
                "amount": 1544276540
              },
              {
                "label": "Information et orientation",
                "amount": 390538199
              },
              {
                "label": "Formation des personnels enseignants et d'orientation",
                "amount": 289900801
              },
              {
                "label": "Formation continue des adultes et validation des acquis de l'expérience",
                "amount": 150326680
              },
              {
                "label": "Personnels en situations diverses",
                "amount": 113181181
              },
              {
                "label": "Aide à l'insertion professionnelle",
                "amount": 65002377
              },
              {
                "label": "Apprentissage",
                "amount": 8315198
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -13336950442
              }
            ]
          },
          {
            "label": "Enseignement scolaire public du premier degré",
            "amount": 17700395177,
            "children": [
              {
                "label": "Enseignement élémentaire",
                "amount": 14122375334
              },
              {
                "label": "Enseignement pré-élémentaire",
                "amount": 6947911332
              },
              {
                "label": "Besoins éducatifs particuliers",
                "amount": 2347354309
              },
              {
                "label": "Remplacement",
                "amount": 2301116111
              },
              {
                "label": "Pilotage et encadrement pédagogique",
                "amount": 1652635425
              },
              {
                "label": "Formation des personnels enseignants",
                "amount": 418262714
              },
              {
                "label": "Personnels en situations diverses",
                "amount": 122240576
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -10211500624
              }
            ]
          },
          {
            "label": "Enseignement privé du premier et du second degrés",
            "amount": 8801891766,
            "children": [
              {
                "label": "Enseignement en collège",
                "amount": 2278544499
              },
              {
                "label": "Enseignement élémentaire",
                "amount": 1616053613
              },
              {
                "label": "Enseignement général et technologique en lycée",
                "amount": 1518613933
              },
              {
                "label": "Enseignement professionnel sous statut scolaire",
                "amount": 983347536
              },
              {
                "label": "Fonctionnement des établissements",
                "amount": 713659968
              },
              {
                "label": "Enseignement pré-élémentaire",
                "amount": 608122438
              },
              {
                "label": "Enseignement post-baccalauréat en lycée",
                "amount": 306086677
              },
              {
                "label": "Soutien",
                "amount": 244462947
              },
              {
                "label": "Remplacement",
                "amount": 224711913
              },
              {
                "label": "Dispositifs spécifiques de scolarisation",
                "amount": 197467611
              },
              {
                "label": "Formation des personnels enseignants",
                "amount": 99101317
              },
              {
                "label": "Actions sociales en faveur des élèves",
                "amount": 84318870
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -72599556
              }
            ]
          },
          {
            "label": "Vie de l'élève",
            "amount": 7395263949,
            "children": [
              {
                "label": "Inclusion scolaire des élèves en situation de handicap",
                "amount": 3110815608
              },
              {
                "label": "Vie scolaire et éducation à la responsabilité",
                "amount": 2865996566
              },
              {
                "label": "Action sociale",
                "amount": 1110691638
              },
              {
                "label": "Santé scolaire",
                "amount": 748193274
              },
              {
                "label": "Actions éducatives complémentaires aux enseignements",
                "amount": 159670157
              },
              {
                "label": "Politique de l'internat et établissements à la charge de l'Etat",
                "amount": 83392713
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -683496007
              }
            ]
          },
          {
            "label": "Soutien de la politique de l'éducation nationale",
            "amount": 2449324221,
            "children": [
              {
                "label": "Politique des ressources humaines",
                "amount": 875903890
              },
              {
                "label": "Logistique, système d'information, immobilier",
                "amount": 872630905
              },
              {
                "label": "Pilotage et mise en oeuvre des politiques éducatives",
                "amount": 534071793
              },
              {
                "label": "Certification",
                "amount": 240485777
              },
              {
                "label": "Pilotage et mise œuvre des politiques du sport, de la jeunesse, de l'éducation populaire et de la vie associative",
                "amount": 238288801
              },
              {
                "label": "Établissements d'appui de la politique éducative",
                "amount": 141614707
              },
              {
                "label": "Évaluation et contrôle",
                "amount": 101442109
              },
              {
                "label": "Expertise juridique",
                "amount": 21370972
              },
              {
                "label": "Communication",
                "amount": 16801035
              },
              {
                "label": "Action internationale",
                "amount": 10237519
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -603523287
              }
            ]
          },
          {
            "label": "Enseignement technique agricole",
            "amount": 1463403320,
            "children": [
              {
                "label": "Mise en oeuvre de l'enseignement dans les établissements publics",
                "amount": 920709718
              },
              {
                "label": "Mise en oeuvre des enseignements dans les établissements privés",
                "amount": 658514532
              },
              {
                "label": "Aide sociale aux élèves et santé scolaire (enseignement public et privé)",
                "amount": 76489493
              },
              {
                "label": "Moyens communs à l'enseignement technique agricole (public et privé)",
                "amount": 53777796
              },
              {
                "label": "Mise en œuvre de l'enseignement agricole dans les territoires",
                "amount": 5312828
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -251401047
              }
            ]
          },
          {
            "label": "Autres crédits",
            "amount": 3322845,
            "children": [
              {
                "label": "Autres crédits",
                "amount": 3322845
              }
            ]
          }
        ]
      },
      {
        "label": "Défense",
        "amount": 57149258489,
        "children": [
          {
            "label": "Équipement des forces",
            "amount": 22883898639,
            "children": [
              {
                "label": "Engagement et combat",
                "amount": 7339874980
              },
              {
                "label": "Dissuasion",
                "amount": 6115521552
              },
              {
                "label": "Commandement et maîtrise de l'information",
                "amount": 4200423111
              },
              {
                "label": "Projection - mobilité - soutien",
                "amount": 2776539268
              },
              {
                "label": "Protection et sauvegarde",
                "amount": 2045796078
              },
              {
                "label": "Préparation et conduite des opérations d'armement",
                "amount": 348331303
              },
              {
                "label": "Soutien à l’effort de défense de pays tiers",
                "amount": 57412347
              }
            ]
          },
          {
            "label": "Soutien de la politique de la défense",
            "amount": 16052412179,
            "children": [
              {
                "label": "Préparation des forces terrestres - Personnel travaillant pour le programme \"Préparation et emploi des forces\"",
                "amount": 8222359732
              },
              {
                "label": "Préparation des forces navales - Personnel travaillant pour le programme \"Préparation et emploi des forces\"",
                "amount": 2949684395
              },
              {
                "label": "Préparation des forces aériennes- Personnel travaillant pour le programme \"Préparation et emploi des forces\"",
                "amount": 2940023517
              },
              {
                "label": "Logistique et soutien interarmées - Personnel travaillant pour le programme \"Préparation et emploi des forces\"",
                "amount": 2886650110
              },
              {
                "label": "Préparation et conduite des opérations d'armement - Personnel travaillant  pour le programme  \"Équipement des forces \"",
                "amount": 2547358112
              },
              {
                "label": "Planification des moyens et conduite des opérations - Personnel travaillant  pour le programme \"Préparation et emploi des forces\"",
                "amount": 1027158207
              },
              {
                "label": "Politique immobilière",
                "amount": 943656316
              },
              {
                "label": "Recherche et exploitation du renseignement intéressant la sécurité de la France - Personnel travaillant  pour le programme \"Environnement et prospective de la politique de défense\"",
                "amount": 739616307
              },
              {
                "label": "Pilotage, soutien et communication - dépenses de personnel des cabinets et des organismes rattachés / RH",
                "amount": 647415809
              },
              {
                "label": "Politique immobilière - Personnel travaillant pour l'action \"Politique immobilière\"",
                "amount": 507498362
              },
              {
                "label": "Pilotage, soutien  -  Personnel travaillant pour l'action \" Pilotage, soutien \"",
                "amount": 413611373
              },
              {
                "label": "Pilotage, soutien et communication",
                "amount": 391350982
              },
              {
                "label": "Action sociale, chômage et pensions",
                "amount": 316198138
              },
              {
                "label": "Surcoûts liés aux opérations - Personnel travaillant pour le programme \"Préparation et emploi des forces\"",
                "amount": 300000000
              },
              {
                "label": "Politiques des ressources humaines",
                "amount": 221674051
              },
              {
                "label": "Systèmes d'information, d'administration et de gestion",
                "amount": 173110817
              },
              {
                "label": "Journée défense et citoyenneté - Personnel travaillant pour le programme \"Reconnaissance et réparation en faveur du monde combattant\"",
                "amount": 114532602
              },
              {
                "label": "Relations internationales",
                "amount": 74897855
              },
              {
                "label": "Politique culturelle et éducative",
                "amount": 57346615
              },
              {
                "label": "Politique culturelle et éducative - gestion et communication des archives historiques de la défense - Personnel travaillant pour l'action \"Politique culturelle et éducative\"",
                "amount": 39387591
              },
              {
                "label": "Restructurations - RH",
                "amount": 38454950
              },
              {
                "label": "Rayonnement et contribution extérieure",
                "amount": 37755406
              },
              {
                "label": "Prospective de défense - Personnel travaillant  pour le programme \"Environnement et prospective de la politique de défense\"",
                "amount": 28625435
              },
              {
                "label": "Restructurations",
                "amount": 10263244
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -9576217747
              }
            ]
          },
          {
            "label": "Préparation et emploi des forces",
            "amount": 15902284405,
            "children": [
              {
                "label": "Préparation des forces navales",
                "amount": 3986519126
              },
              {
                "label": "Préparation des forces aériennes",
                "amount": 3761336703
              },
              {
                "label": "Logistique et soutien interarmées",
                "amount": 3081766957
              },
              {
                "label": "Préparation des forces terrestres",
                "amount": 2530252724
              },
              {
                "label": "Surcoûts liés aux opérations extérieures",
                "amount": 870000000
              },
              {
                "label": "Numérique de défense",
                "amount": 848340097
              },
              {
                "label": "Planification  des moyens et conduite des opérations",
                "amount": 794068798
              },
              {
                "label": "Surcoûts liés aux opérations intérieures",
                "amount": 30000000
              }
            ]
          },
          {
            "label": "Environnement et prospective de la politique de défense",
            "amount": 2293659614,
            "children": [
              {
                "label": "Prospective de défense",
                "amount": 1616341389
              },
              {
                "label": "Recherche et exploitation du renseignement intéressant la sécurité de la France",
                "amount": 579182644
              },
              {
                "label": "Relations internationales et diplomatie de défense",
                "amount": 98135581
              }
            ]
          },
          {
            "label": "Autres crédits",
            "amount": 17003652,
            "children": [
              {
                "label": "Autres crédits",
                "amount": 17003652
              }
            ]
          }
        ]
      },
      {
        "label": "PSRCT",
        "amount": 49514696624,
        "children": [
          {
            "label": "PSR Collectivités territoriales",
            "amount": 49514696624,
            "children": [
              {
                "label": "PSR-CT",
                "amount": 49514696624
              }
            ]
          }
        ]
      },
      {
        "label": "Recherche et enseignement supérieur",
        "amount": 31251053274,
        "children": [
          {
            "label": "Formations supérieures et recherche universitaire",
            "amount": 15447761840,
            "children": [
              {
                "label": "Recherche",
                "amount": 4370569566
              },
              {
                "label": "Formation initiale et continue du baccalauréat à la licence",
                "amount": 4037687433
              },
              {
                "label": "Formation initiale et continue de niveau master",
                "amount": 2803060767
              },
              {
                "label": "Pilotage et support du programme",
                "amount": 1860108526
              },
              {
                "label": "Immobilier",
                "amount": 1225035789
              },
              {
                "label": "Formation initiale et continue de niveau doctorat",
                "amount": 548916357
              },
              {
                "label": "Bibliothèques et documentation",
                "amount": 500800436
              },
              {
                "label": "Diffusion des savoirs et musées",
                "amount": 144068698
              },
              {
                "label": "Établissements d'enseignement privés",
                "amount": 94895852
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -137381584
              }
            ]
          },
          {
            "label": "Recherches scientifiques et technologiques pluridisciplinaires",
            "amount": 8212392870,
            "children": [
              {
                "label": "Recherches scientifiques et technologiques en sciences de la vie et de la santé",
                "amount": 1424155162
              },
              {
                "label": "Recherches scientifiques et technologiques dans le domaine de l'environnement",
                "amount": 1261205210
              },
              {
                "label": "Moyens généraux et d'appui à la recherche",
                "amount": 1137415710
              },
              {
                "label": "Recherches scientifiques et technologiques en sciences et techniques de l'information",
                "amount": 1099015820
              },
              {
                "label": "Agence nationale de la recherche",
                "amount": 1038130000
              },
              {
                "label": "Recherches scientifiques et technologiques dans le domaine de l'énergie",
                "amount": 880684688
              },
              {
                "label": "Recherches scientifiques et technologiques en sciences humaines et sciences sociales",
                "amount": 444972030
              },
              {
                "label": "Grandes infrastructures de recherche",
                "amount": 337705000
              },
              {
                "label": "Pilotage et animation",
                "amount": 333505870
              },
              {
                "label": "Diffusion, valorisation et transfert des connaissances et des technologies",
                "amount": 173671500
              },
              {
                "label": "Recherches interdisciplinaires et transversales",
                "amount": 81931880
              }
            ]
          },
          {
            "label": "Vie étudiante",
            "amount": 3223989026,
            "children": [
              {
                "label": "Aides directes",
                "amount": 2503773035
              },
              {
                "label": "Aides indirectes",
                "amount": 507047217
              },
              {
                "label": "Pilotage et animation du programme",
                "amount": 119151814
              },
              {
                "label": "Santé des étudiants et activités associatives, culturelles et sportives",
                "amount": 94016960
              }
            ]
          },
          {
            "label": "Recherche spatiale",
            "amount": 1847679541,
            "children": [
              {
                "label": "Maîtrise de l'accès à l'espace",
                "amount": 524011451
              },
              {
                "label": "Développement de la technologie spatiale au service de l'observation de la terre",
                "amount": 404260742
              },
              {
                "label": "Développement de la technologie spatiale au service de la science",
                "amount": 284598500
              },
              {
                "label": "Maîtrise des technologies orbitales et de l'innovation technologique",
                "amount": 252342320
              },
              {
                "label": "Développement de la technologie spatiale au service de la recherche en sciences de l'information et de la communication",
                "amount": 169780979
              },
              {
                "label": "Moyens généraux et d'appui à la recherche",
                "amount": 147092925
              },
              {
                "label": "Développement des satellites de météorologie",
                "amount": 65592624
              }
            ]
          },
          {
            "label": "Recherche dans les domaines de l'énergie, du développement et de la mobilité durables",
            "amount": 1485846635,
            "children": [
              {
                "label": "Charges nucléaires de long terme des installations du CEA",
                "amount": 780000000
              },
              {
                "label": "Recherche dans le domaine de l'énergie nucléaire",
                "amount": 465819909
              },
              {
                "label": "Recherche dans le domaine des nouvelles technologies de l'énergie",
                "amount": 181956676
              },
              {
                "label": "Recherche et développement dans le domaine de l'aéronautique civile",
                "amount": 58070050
              }
            ]
          },
          {
            "label": "Recherche et enseignement supérieur en matière économique et industrielle",
            "amount": 542162635,
            "children": [
              {
                "label": "Organismes de formation supérieure et de recherche",
                "amount": 325350962
              },
              {
                "label": "Soutien et diffusion de l'innovation technologique",
                "amount": 216771673
              },
              {
                "label": "Soutien de la recherche industrielle stratégique",
                "amount": 40000
              }
            ]
          },
          {
            "label": "Enseignement supérieur et recherche agricoles",
            "amount": 341201560,
            "children": [
              {
                "label": "Enseignement supérieur",
                "amount": 307125374
              },
              {
                "label": "Recherche, développement et transfert de technologie",
                "amount": 34076186
              }
            ]
          },
          {
            "label": "Recherche duale (civile et militaire)",
            "amount": 150019167,
            "children": [
              {
                "label": "Recherche duale dans le domaine aérospatial",
                "amount": 127701136
              },
              {
                "label": "Recherche duale en lutte contre la menace NRBC-E",
                "amount": 12000000
              },
              {
                "label": "Autres recherches et développements technologiques duaux",
                "amount": 10318031
              }
            ]
          }
        ]
      },
      {
        "label": "Solidarité, insertion et égalité des chances",
        "amount": 29482305025,
        "children": [
          {
            "label": "Handicap et dépendance",
            "amount": 16265317136,
            "children": [
              {
                "label": "Allocations et aides en faveur des personnes handicapées",
                "amount": 16238716592
              },
              {
                "label": "Pilotage du programme et animation des politiques inclusives",
                "amount": 26600544
              }
            ]
          },
          {
            "label": "Inclusion sociale et protection des personnes",
            "amount": 13121340299,
            "children": [
              {
                "label": "Prime d'activité et autres dispositifs",
                "amount": 11298037432
              },
              {
                "label": "Protection juridique des majeurs",
                "amount": 911177901
              },
              {
                "label": "Protection et accompagnement des enfants, des jeunes et des familles vulnérables",
                "amount": 421630427
              },
              {
                "label": "Pacte des Solidarités",
                "amount": 258857138
              },
              {
                "label": "Aide alimentaire",
                "amount": 159350604
              },
              {
                "label": "Allocations et dépenses d'aide sociale",
                "amount": 37088064
              },
              {
                "label": "Ingénierie, outils de la gouvernance et expérimentations",
                "amount": 26156672
              },
              {
                "label": "Qualification en travail social",
                "amount": 7533600
              },
              {
                "label": "Aide à la vie familiale et sociale des anciens migrants dans leur pays d'origine (AVFS)",
                "amount": 1508461
              }
            ]
          },
          {
            "label": "Égalité entre les femmes et les hommes",
            "amount": 95647590,
            "children": [
              {
                "label": "Prévention et lutte contre les violences et la prostitution",
                "amount": 44841005
              },
              {
                "label": "Aide universelle d'urgence pour les personnes victimes de violences conjugales",
                "amount": 26371455
              },
              {
                "label": "Accès aux droits et égalité professionnelle",
                "amount": 23650773
              },
              {
                "label": "Soutien du programme égalité entre les femmes et les hommes",
                "amount": 784357
              }
            ]
          }
        ]
      },
      {
        "label": "PSRUE",
        "amount": 28781025011,
        "children": [
          {
            "label": "PSR Union européeenne",
            "amount": 28781025011,
            "children": [
              {
                "label": "PSR-UE",
                "amount": 28781025011
              }
            ]
          }
        ]
      },
      {
        "label": "Cohésion des territoires",
        "amount": 22220701069,
        "children": [
          {
            "label": "Aide à l'accès au logement",
            "amount": 16126135643,
            "children": [
              {
                "label": "Aides personnelles",
                "amount": 16116735643
              },
              {
                "label": "Information relative au logement et accompagnement des publics en difficulté",
                "amount": 9400000
              }
            ]
          },
          {
            "label": "Hébergement, parcours vers le logement et insertion des personnes vulnérables",
            "amount": 3071443369,
            "children": [
              {
                "label": "Hébergement et logement adapté",
                "amount": 3028677587
              },
              {
                "label": "Prévention de l'exclusion",
                "amount": 34569082
              },
              {
                "label": "Conduite et animation des politiques de l'hébergement et de l'inclusion sociale",
                "amount": 8196700
              }
            ]
          },
          {
            "label": "Urbanisme, territoires et amélioration de l'habitat",
            "amount": 2030445390,
            "children": [
              {
                "label": "Réglementation, politique technique et qualité de la construction",
                "amount": 1604003056
              },
              {
                "label": "Urbanisme et aménagement",
                "amount": 284282334
              },
              {
                "label": "Construction locative et amélioration du parc",
                "amount": 78950000
              },
              {
                "label": "Innovation, territorialisation et services numériques",
                "amount": 45430000
              },
              {
                "label": "Lutte contre l'habitat indigne",
                "amount": 11200000
              },
              {
                "label": "Soutien à l'accession à la propriété",
                "amount": 6580000
              }
            ]
          },
          {
            "label": "Politique de la ville",
            "amount": 646408632,
            "children": [
              {
                "label": "Actions territorialisées et Dispositifs spécifiques de la politique de la ville",
                "amount": 475059926
              },
              {
                "label": "Rénovation urbaine et amélioration du cadre de vie",
                "amount": 116000000
              },
              {
                "label": "Revitalisation économique et emploi",
                "amount": 41543714
              },
              {
                "label": "Stratégie, ressources et évaluation",
                "amount": 19143320
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -5338328
              }
            ]
          },
          {
            "label": "Impulsion et coordination de la politique d'aménagement du territoire",
            "amount": 268670363,
            "children": [
              {
                "label": "FNADT section générale",
                "amount": 115557239
              },
              {
                "label": "FNADT section locale",
                "amount": 83457636
              },
              {
                "label": "Soutien aux Opérateurs",
                "amount": 67646442
              },
              {
                "label": "Prime d'aménagement du territoire, contrats de ruralité et pacte Etat-métropoles",
                "amount": 4116285
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -2107239
              }
            ]
          },
          {
            "label": "Interventions territoriales de l'État",
            "amount": 77597672,
            "children": [
              {
                "label": "Plans d'investissement pour la Corse",
                "amount": 49632370
              },
              {
                "label": "Fonds interministériel pour la transformation de la Guyane",
                "amount": 9400247
              },
              {
                "label": "Plan littoral 21",
                "amount": 6516943
              },
              {
                "label": "Plan Sargasses II",
                "amount": 4200000
              },
              {
                "label": "Volet territorialisé du plan national d'action chlordécone",
                "amount": 4084102
              },
              {
                "label": "Service d'incendie et de secours à Wallis-et-Futuna",
                "amount": 2049674
              },
              {
                "label": "Eau - Agriculture en Bretagne",
                "amount": 1714336
              }
            ]
          }
        ]
      },
      {
        "label": "Écologie, développement et mobilité durables",
        "amount": 20861927399,
        "children": [
          {
            "label": "Service public de l'énergie",
            "amount": 8443236908,
            "children": [
              {
                "label": "Soutien aux énergies renouvelables électriques en métropole continentale",
                "amount": 7250830175
              },
              {
                "label": "Soutien à l'injection de biométhane",
                "amount": 533446889
              },
              {
                "label": "Soutien à la cogénération au gaz naturel et autres moyens thermiques",
                "amount": 315280010
              },
              {
                "label": "Soutien aux effacements de consommation",
                "amount": 146632978
              },
              {
                "label": "Soutien dans les zones non interconnectées au réseau métropolitain",
                "amount": 113960910
              },
              {
                "label": "Dispositions sociales pour les consommateurs en situation de précarité énergétique",
                "amount": 36318282
              },
              {
                "label": "Mesures exceptionnelles de protection des consommateurs",
                "amount": 33467664
              },
              {
                "label": "Soutien hydrogène",
                "amount": 13300000
              }
            ]
          },
          {
            "label": "Infrastructures et services de transports",
            "amount": 4635813380,
            "children": [
              {
                "label": "Ferroviaire",
                "amount": 3223093903
              },
              {
                "label": "Transports collectifs",
                "amount": 330888021
              },
              {
                "label": "Routes - Entretien",
                "amount": 299858660
              },
              {
                "label": "Voies navigables",
                "amount": 254425989
              },
              {
                "label": "Transport routier",
                "amount": 167712137
              },
              {
                "label": "Transports combinés",
                "amount": 156200000
              },
              {
                "label": "Ports",
                "amount": 87494963
              },
              {
                "label": "Transport aérien",
                "amount": 63260036
              },
              {
                "label": "Fonctions support",
                "amount": 52879671
              }
            ]
          },
          {
            "label": "Conduite et pilotage des politiques de l'écologie, du développement et de la mobilité durables",
            "amount": 2287017314,
            "children": [
              {
                "label": "Pilotage, support, audit et évaluations",
                "amount": 634908397
              },
              {
                "label": "Personnels œuvrant pour les politiques du programme Urbanisme, territoires et aménagement de l'habitat",
                "amount": 494489032
              },
              {
                "label": "Personnels œuvrant pour les politiques de transport",
                "amount": 436480287
              },
              {
                "label": "Personnels oeuvrant pour la politique de la prévention des risques",
                "amount": 211672762
              },
              {
                "label": "Personnels oeuvrant pour la politique de l'eau et de la biodiversité",
                "amount": 196922218
              },
              {
                "label": "Personnels oeuvrant pour les politiques du programme \"Affaires maritimes\"",
                "amount": 166308087
              },
              {
                "label": "Personnels oeuvrant pour les politiques de l'énergie et du climat",
                "amount": 54680078
              },
              {
                "label": "Personnels œuvrant dans le domaine de la stratégie et de la connaissance des politiques de transition écologique",
                "amount": 38414290
              },
              {
                "label": "Commission de régulation de l'énergie (CRE)",
                "amount": 24845637
              },
              {
                "label": "Personnels transférés aux collectivités territoriales",
                "amount": 22255530
              },
              {
                "label": "Commission nationale du débat public",
                "amount": 4158559
              },
              {
                "label": "Autorité de contrôle des nuisances aéroportuaires (ACNUSA)",
                "amount": 1882437
              }
            ]
          },
          {
            "label": "Prévention des risques",
            "amount": 1484891584,
            "children": [
              {
                "label": "Agence de l'environnement et de la maîtrise de l'énergie (ADEME)",
                "amount": 1059362215
              },
              {
                "label": "Fonds de prévention des risques naturels majeurs",
                "amount": 243800000
              },
              {
                "label": "Prévention des risques technologiques et des pollutions",
                "amount": 62769438
              },
              {
                "label": "Gestion de l'après-mine et travaux de mise en sécurité, indemnisations et expropriations sur les sites",
                "amount": 42389976
              },
              {
                "label": "Institut national de l'environnement industriel et des risques (INERIS)",
                "amount": 38770918
              },
              {
                "label": "Prévention des risques naturels et hydrauliques",
                "amount": 37799037
              }
            ]
          },
          {
            "label": "Énergie, climat et après-mines",
            "amount": 1232145522,
            "children": [
              {
                "label": "Accompagnement transition énergétique",
                "amount": 654600000
              },
              {
                "label": "Gestion économique et sociale de l'après-mines",
                "amount": 265795000
              },
              {
                "label": "Politique de l'énergie",
                "amount": 133952196
              },
              {
                "label": "Aides à l'acquisition de véhicules propres",
                "amount": 93753326
              },
              {
                "label": "Lutte contre le changement climatique et pour la qualité de l'air",
                "amount": 78145000
              },
              {
                "label": "Soutien",
                "amount": 5900000
              }
            ]
          },
          {
            "label": "Fonds d'accélération de la transition écologique dans les territoires",
            "amount": 1085834766,
            "children": [
              {
                "label": "Performance environnementale",
                "amount": 491676769
              },
              {
                "label": "Amélioration du cadre de vie",
                "amount": 403112689
              },
              {
                "label": "Adaptation des territoires au changement climatique",
                "amount": 191045308
              }
            ]
          },
          {
            "label": "Expertise, information géographique et météorologie",
            "amount": 670754833,
            "children": [
              {
                "label": "Météorologie",
                "amount": 267528259
              },
              {
                "label": "Etudes et expertise en matière de développement durable",
                "amount": 186348997
              },
              {
                "label": "Information géographique et cartographique",
                "amount": 100512673
              },
              {
                "label": "Recherche dans le domaine des transports, de la construction et de l'aménagement",
                "amount": 97932561
              },
              {
                "label": "Gouvernance, évaluation, études et prospective en matière de développement durable",
                "amount": 18432343
              }
            ]
          },
          {
            "label": "Paysages, eau et biodiversité",
            "amount": 395097182,
            "children": [
              {
                "label": "Gestion des milieux et biodiversité",
                "amount": 374769684
              },
              {
                "label": "Innovation, territorialisation et contentieux",
                "amount": 10762384
              },
              {
                "label": "Sites, paysages, publicité",
                "amount": 9565114
              }
            ]
          },
          {
            "label": "Sûreté nucléaire et radioprotection",
            "amount": 337432980,
            "children": [
              {
                "label": "Personnels œuvrant pour la politique en matière de sûreté nucléaire et radio-protection",
                "amount": 215957794
              },
              {
                "label": "Sûreté nucléaire et radio-protection",
                "amount": 121475186
              }
            ]
          },
          {
            "label": "Affaires maritimes, pêches et aquaculture",
            "amount": 289702930,
            "children": [
              {
                "label": "Pêche et aquaculture",
                "amount": 95597757
              },
              {
                "label": "Innovation et flotte de commerce",
                "amount": 77160247
              },
              {
                "label": "Surveillance et sûreté maritimes",
                "amount": 33829809
              },
              {
                "label": "Emplois et formations maritimes",
                "amount": 31988259
              },
              {
                "label": "Action interministérielle de la mer",
                "amount": 24394714
              },
              {
                "label": "Planification et économie bleue",
                "amount": 17521022
              },
              {
                "label": "Soutien et systèmes d'information",
                "amount": 9211122
              }
            ]
          }
        ]
      },
      {
        "label": "Sécurités",
        "amount": 17693728829,
        "children": [
          {
            "label": "Police nationale",
            "amount": 9753038464,
            "children": [
              {
                "label": "Sécurité et paix publiques",
                "amount": 4178853123
              },
              {
                "label": "Missions de police judiciaire et concours à la justice",
                "amount": 3319128562
              },
              {
                "label": "Commandement, ressources humaines et logistique",
                "amount": 2787584684
              },
              {
                "label": "Ordre public et protection de la souveraineté",
                "amount": 1881605251
              },
              {
                "label": "Police des étrangers et sûreté des transports internationaux",
                "amount": 1274326796
              },
              {
                "label": "Sécurité routière",
                "amount": 449278481
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -4137738433
              }
            ]
          },
          {
            "label": "Gendarmerie nationale",
            "amount": 7050753351,
            "children": [
              {
                "label": "Ordre et sécurité publics",
                "amount": 4249185091
              },
              {
                "label": "Commandement, ressources humaines et logistique",
                "amount": 3137515907
              },
              {
                "label": "Missions de police judiciaire et concours à la justice",
                "amount": 2697532606
              },
              {
                "label": "Sécurité routière",
                "amount": 835906077
              },
              {
                "label": "Exercice des missions militaires",
                "amount": 171769109
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -4041155439
              }
            ]
          },
          {
            "label": "Sécurité civile",
            "amount": 807821862,
            "children": [
              {
                "label": "Préparation et interventions spécialisées des moyens nationaux",
                "amount": 504089130
              },
              {
                "label": "Soutien aux acteurs de la sécurité civile",
                "amount": 207229053
              },
              {
                "label": "Prévention et gestion de crises",
                "amount": 61757823
              },
              {
                "label": "Fonctionnement, soutien et logistique",
                "amount": 34745856
              }
            ]
          },
          {
            "label": "Sécurité et éducation routières",
            "amount": 82115152,
            "children": [
              {
                "label": "Démarches interministérielles et communication",
                "amount": 48657755
              },
              {
                "label": "Éducation routière",
                "amount": 25564055
              },
              {
                "label": "Observation, prospective, réglementation et soutien au programme",
                "amount": 7893342
              }
            ]
          }
        ]
      },
      {
        "label": "Travail, emploi et administration des ministères sociaux",
        "amount": 17362012698,
        "children": [
          {
            "label": "Accompagnement des mutations économiques et développement de l'emploi",
            "amount": 8747467735,
            "children": [
              {
                "label": "Actions pour favoriser la mise en activité professionnelles des demandeurs d'emploi",
                "amount": 3618756394
              },
              {
                "label": "Développement des compétences par l'alternance",
                "amount": 3418355089
              },
              {
                "label": "Formation professionnelle des demandeurs d'emploi",
                "amount": 755069523
              },
              {
                "label": "Financement des structures de la formation professionnelle et de l'emploi",
                "amount": 673528121
              },
              {
                "label": "Anticipation et accompagnement des conséquences des mutations économiques sur l'emploi",
                "amount": 281758608
              }
            ]
          },
          {
            "label": "Accès et retour à l'emploi",
            "amount": 6765692415,
            "children": [
              {
                "label": "Indemnisation des demandeurs d'emploi",
                "amount": 2060903833
              },
              {
                "label": "Structures de mise en oeuvre de la politique de l'emploi",
                "amount": 1905457318
              },
              {
                "label": "Accompagnement des personnes les plus éloignées du marché du travail- Fonds d'inclusion dans l'emploi",
                "amount": 1851204961
              },
              {
                "label": "Insertion des jeunes sur le marché du travail- Contrat d'engagement jeunes (CEJ)",
                "amount": 948126303
              }
            ]
          },
          {
            "label": "Soutien des ministères sociaux",
            "amount": 1771686153,
            "children": [
              {
                "label": "Financement des agences régionales de santé",
                "amount": 627141633
              },
              {
                "label": "Personnels mettant en œuvre les politiques d'amélioration de la qualité de l'emploi et des relations du travail",
                "amount": 372830299
              },
              {
                "label": "Personnels mettant en œuvre les politiques sociales et de la santé",
                "amount": 318713193
              },
              {
                "label": "Personnels mettant en œuvre les politiques de l'emploi et de la formation professionnelle",
                "amount": 209536076
              },
              {
                "label": "Personnels transversaux et de soutien",
                "amount": 160058961
              },
              {
                "label": "Affaires immobilières",
                "amount": 126245356
              },
              {
                "label": "Systèmes d'information",
                "amount": 103648813
              },
              {
                "label": "Politique des ressources humaines",
                "amount": 51576045
              },
              {
                "label": "Fonctionnement des services",
                "amount": 23299833
              },
              {
                "label": "Etudes, statistiques, évaluation et recherche",
                "amount": 19418025
              },
              {
                "label": "Communication",
                "amount": 18985153
              },
              {
                "label": "Personnels mettant en œuvre les politiques de l'égalité entre les femmes et les hommes",
                "amount": 16140479
              },
              {
                "label": "Soutien au plan d'investissement dans les compétences",
                "amount": 8500000
              },
              {
                "label": "Affaires européennes et internationales",
                "amount": 3280000
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -287687713
              }
            ]
          },
          {
            "label": "Amélioration de la qualité de l'emploi et des relations du travail",
            "amount": 77166395,
            "children": [
              {
                "label": "Dialogue social et démocratie sociale",
                "amount": 41201983
              },
              {
                "label": "Santé et sécurité au travail",
                "amount": 24632187
              },
              {
                "label": "Qualité et effectivité du droit",
                "amount": 11332225
              }
            ]
          }
        ]
      },
      {
        "label": "Justice",
        "amount": 10629346857,
        "children": [
          {
            "label": "Administration pénitentiaire",
            "amount": 4303358711,
            "children": [
              {
                "label": "Garde et contrôle des personnes placées sous main de justice",
                "amount": 3899182596
              },
              {
                "label": "Accueil et accompagnement des personnes placées sous main de justice",
                "amount": 1205516471
              },
              {
                "label": "Soutien et formation",
                "amount": 444209554
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -1245549910
              }
            ]
          },
          {
            "label": "Justice judiciaire",
            "amount": 3833875983,
            "children": [
              {
                "label": "Conduite de la politique pénale et jugement des affaires pénales",
                "amount": 1653517405
              },
              {
                "label": "Traitement et jugement des contentieux civils",
                "amount": 1435335963
              },
              {
                "label": "Soutien",
                "amount": 1344732212
              },
              {
                "label": "Formation",
                "amount": 218133475
              },
              {
                "label": "Cassation",
                "amount": 85875207
              },
              {
                "label": "Support à l'accès au droit et à la justice",
                "amount": 13539649
              },
              {
                "label": "Enregistrement des décisions judiciaires",
                "amount": 13159689
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -930417617
              }
            ]
          },
          {
            "label": "Protection judiciaire de la jeunesse",
            "amount": 960133917,
            "children": [
              {
                "label": "Mise en oeuvre des décisions judiciaires",
                "amount": 972350526
              },
              {
                "label": "Soutien",
                "amount": 137908480
              },
              {
                "label": "Formation",
                "amount": 49331891
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -199456980
              }
            ]
          },
          {
            "label": "Accès au droit et à la justice",
            "amount": 808493251,
            "children": [
              {
                "label": "Aide juridictionnelle",
                "amount": 714176431
              },
              {
                "label": "Aide aux victimes",
                "amount": 57839779
              },
              {
                "label": "Médiation et espaces de rencontre",
                "amount": 15494867
              },
              {
                "label": "Développement de l'accès au droit et du réseau judiciaire de proximité",
                "amount": 14282174
              },
              {
                "label": "Indemnisation des avoués",
                "amount": 5700000
              },
              {
                "label": "Subvention au fonds de financement des dossiers impécunieux",
                "amount": 1000000
              }
            ]
          },
          {
            "label": "Conduite et pilotage de la politique de la justice",
            "amount": 717747042,
            "children": [
              {
                "label": "Action informatique ministérielle",
                "amount": 340087030
              },
              {
                "label": "Gestion de l'administration centrale",
                "amount": 217173075
              },
              {
                "label": "Politiques RH transverses",
                "amount": 77949800
              },
              {
                "label": "Developpement des techniques d’enquetes numeriques judiciaires",
                "amount": 56373749
              },
              {
                "label": "Activité normative",
                "amount": 36261787
              },
              {
                "label": "Évaluation, contrôle, études et recherche",
                "amount": 26600758
              },
              {
                "label": "État major",
                "amount": 12644373
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -49343530
              }
            ]
          },
          {
            "label": "Conseil supérieur de la magistrature",
            "amount": 5737953,
            "children": [
              {
                "label": "Conseil supérieur de la magistrature",
                "amount": 6489147
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -751194
              }
            ]
          }
        ]
      },
      {
        "label": "Gestion des finances publiques",
        "amount": 8229155276,
        "children": [
          {
            "label": "Gestion fiscale et financière de l'État et du secteur public local",
            "amount": 5998555387,
            "children": [
              {
                "label": "Fiscalité des particuliers et fiscalité directe locale",
                "amount": 2057101559
              },
              {
                "label": "Soutien",
                "amount": 1947984690
              },
              {
                "label": "Fiscalité des PME",
                "amount": 1638501484
              },
              {
                "label": "Gestion financière du secteur public local hors fiscalité",
                "amount": 1330225279
              },
              {
                "label": "Gestion financière de l'État hors fiscalité",
                "amount": 947919973
              },
              {
                "label": "Fiscalité des grandes entreprises",
                "amount": 137354957
              },
              {
                "label": "Gestion des pensions",
                "amount": 91032806
              },
              {
                "label": "Gestion des fonds déposés",
                "amount": 58074847
              },
              {
                "label": "Élaboration de la législation fiscale",
                "amount": 21747410
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -2231387618
              }
            ]
          },
          {
            "label": "Facilitation et sécurisation des échanges",
            "amount": 1380256017,
            "children": [
              {
                "label": "Surveillance douanière des flux de personnes et de marchandises et lutte contre la grande fraude douanière.",
                "amount": 629531928
              },
              {
                "label": "Soutien des services opérationnels",
                "amount": 537573739
              },
              {
                "label": "Promotion des échanges internationaux et qualité du dédouanement",
                "amount": 259818699
              },
              {
                "label": "Préservation de la sécurité et de la sûreté de l'espace national et européen",
                "amount": 185773984
              },
              {
                "label": "Fiscalité douanière, énergétique et environnementale",
                "amount": 133894520
              },
              {
                "label": "Soutien au réseau des débitants de tabac",
                "amount": 49100000
              },
              {
                "label": "Mobilisation des outils du renseignement au service des missions douanières",
                "amount": 25199747
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -440636600
              }
            ]
          },
          {
            "label": "Conduite et pilotage des politiques économiques et financières",
            "amount": 850343872,
            "children": [
              {
                "label": "Prestations d'appui et support",
                "amount": 411118803
              },
              {
                "label": "Expertise, audit, évaluation et contrôle",
                "amount": 208353496
              },
              {
                "label": "Pilotage des finances publiques et projets interministériels",
                "amount": 189848259
              },
              {
                "label": "Action sociale ministérielle",
                "amount": 185432451
              },
              {
                "label": "Accompagnement du changement de l'action publique",
                "amount": 4107682
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -148516819
              }
            ]
          }
        ]
      },
      {
        "label": "Régimes sociaux et de retraite",
        "amount": 5984017314,
        "children": [
          {
            "label": "Régimes sociaux et de retraite des transports terrestres",
            "amount": 4122679786,
            "children": [
              {
                "label": "Régime de retraite du personnel de la SNCF",
                "amount": 3225801919
              },
              {
                "label": "Régime de retraite du personnel de la RATP",
                "amount": 885633671
              },
              {
                "label": "Autres régimes",
                "amount": 11244196
              }
            ]
          },
          {
            "label": "Régimes de retraite des mines, de la SEITA et divers",
            "amount": 1059391129,
            "children": [
              {
                "label": "Versements au fonds spécial de retraite de la caisse autonome nationale de sécurité sociale dans les mines",
                "amount": 830281572
              },
              {
                "label": "Régime de retraite de la SEITA",
                "amount": 128405635
              },
              {
                "label": "Versements liés à la liquidation de l'ORTF",
                "amount": 71452558
              },
              {
                "label": "Caisse de retraites des personnels de l'Opéra national de Paris",
                "amount": 23907370
              },
              {
                "label": "Caisse de retraites du personnel de la Comédie Française",
                "amount": 4772091
              },
              {
                "label": "Caisse des retraites des régies ferroviaires d'outre-mer",
                "amount": 571903
              }
            ]
          },
          {
            "label": "Régimes de retraite et de sécurité sociale des marins",
            "amount": 801946399,
            "children": [
              {
                "label": "Régimes de retraite et de sécurité sociale des marins",
                "amount": 801946399
              }
            ]
          }
        ]
      },
      {
        "label": "Investir pour la France de 2030",
        "amount": 5497829332,
        "children": [
          {
            "label": "Financement des investissements stratégiques",
            "amount": 3753875009,
            "children": [
              {
                "label": "Soutien au déploiement",
                "amount": 1484390000
              },
              {
                "label": "Démonstration en conditions réelles, amorçage et premières commerciales",
                "amount": 799142700
              },
              {
                "label": "Industrialisation et déploiement",
                "amount": 438378864
              },
              {
                "label": "Accélération de la croissance (fonds propres)",
                "amount": 435563445
              },
              {
                "label": "Maturation de technologies, R&D, valorisation de la recherche",
                "amount": 356400000
              },
              {
                "label": "Programmes et équipements prioritaires de recherche",
                "amount": 240000000
              }
            ]
          },
          {
            "label": "Financement structurel des écosystèmes d’innovation",
            "amount": 1374439597,
            "children": [
              {
                "label": "Aides à l'innovation « bottom-up » (subventions et prêts)",
                "amount": 647267400
              },
              {
                "label": "Financements de l'écosystème ESRI et valorisation",
                "amount": 642172197
              },
              {
                "label": "Aides à l’innovation « bottom-up » (fonds propres)",
                "amount": 85000000
              }
            ]
          },
          {
            "label": "Soutien des progrès de l'enseignement et de la recherche",
            "amount": 200693126,
            "children": [
              {
                "label": "Soutien des grandes universités de recherche",
                "amount": 73000000
              },
              {
                "label": "Constitution d'écoles universitaires de recherche",
                "amount": 35000000
              },
              {
                "label": "Programmes prioritaires de recherche",
                "amount": 31000000
              },
              {
                "label": "Territoires d'innovation pédagogique",
                "amount": 22700000
              },
              {
                "label": "Nouveaux cursus à l'université",
                "amount": 20000000
              },
              {
                "label": "Équipements structurants de recherche",
                "amount": 18993126
              }
            ]
          },
          {
            "label": "Accélération de la modernisation des entreprises",
            "amount": 136660000,
            "children": [
              {
                "label": "Grands défis",
                "amount": 100000000
              },
              {
                "label": "Soutien à l'innovation collaborative",
                "amount": 27000000
              },
              {
                "label": "Accompagnement et transformation des filières",
                "amount": 9660000
              }
            ]
          },
          {
            "label": "Valorisation de la recherche",
            "amount": 32161600,
            "children": [
              {
                "label": "Accélération du développement des écosystèmes d'innovation performants",
                "amount": 27352111
              },
              {
                "label": "Démonstrateurs et territoires d'innovation de grande ambition",
                "amount": 4809489
              }
            ]
          }
        ]
      },
      {
        "label": "Administration générale et territoriale de l'État",
        "amount": 4246711486,
        "children": [
          {
            "label": "Administration territoriale de l'État",
            "amount": 2153599270,
            "children": [
              {
                "label": "Pilotage territorial des politiques gouvernementales",
                "amount": 833604839
              },
              {
                "label": "Fonctionnement courant de l'administration territoriale",
                "amount": 709133531
              },
              {
                "label": "Réglementation générale, garantie de l'identité et de la nationalité et délivrance des titres",
                "amount": 503269877
              },
              {
                "label": "Dépenses immobilières de l'administration territoriale",
                "amount": 354918309
              },
              {
                "label": "Coordination de la sécurité des personnes et des biens",
                "amount": 203918503
              },
              {
                "label": "Contrôle de légalité et conseil aux collectivités territoriales",
                "amount": 150154832
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -601400621
              }
            ]
          },
          {
            "label": "Conduite et pilotage des politiques de l'intérieur",
            "amount": 1792739796,
            "children": [
              {
                "label": "État-major et services centraux",
                "amount": 775845802
              },
              {
                "label": "Affaires immobilières",
                "amount": 453756688
              },
              {
                "label": "Numérique",
                "amount": 399991711
              },
              {
                "label": "Sécurité et éducation routières",
                "amount": 133126769
              },
              {
                "label": "Action sociale et formation",
                "amount": 91424967
              },
              {
                "label": "Affaires juridiques et contentieuses",
                "amount": 85188190
              },
              {
                "label": "Immigration, asile et intégration",
                "amount": 45005628
              },
              {
                "label": "Fonds interministériel de prévention de la délinquance",
                "amount": 43454233
              },
              {
                "label": "Equipements de vidéo-protection et de surveillance électronique du ministère de l'intérieur, des collectivités et des acteurs privés",
                "amount": 26125022
              },
              {
                "label": "Cultes et laïcité",
                "amount": 6699542
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -267878756
              }
            ]
          },
          {
            "label": "Vie politique",
            "amount": 300372420,
            "children": [
              {
                "label": "Organisation des élections",
                "amount": 221639608
              },
              {
                "label": "Financement des partis",
                "amount": 68670672
              },
              {
                "label": "Commission nationale des comptes de campagne et des financements politiques",
                "amount": 10614740
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -552600
              }
            ]
          }
        ]
      },
      {
        "label": "Relations avec les collectivités territoriales",
        "amount": 3931902178,
        "children": [
          {
            "label": "Concours financiers aux collectivités territoriales et à leurs groupements",
            "amount": 3675597351,
            "children": [
              {
                "label": "Soutien aux projets des communes et groupements de communes",
                "amount": 1744897878
              },
              {
                "label": "Dotation générale de décentralisation des régions",
                "amount": 938335116
              },
              {
                "label": "Dotation générale de décentralisation concours particuliers",
                "amount": 274428807
              },
              {
                "label": "Dotation générale de décentralisation des départements",
                "amount": 265353616
              },
              {
                "label": "Dotation générale de décentralisation des communes",
                "amount": 190903261
              },
              {
                "label": "Soutien aux projets des départements et des régions",
                "amount": 166703007
              },
              {
                "label": "Dotation de soutien à l'investissement local exceptionnelle",
                "amount": 94975666
              }
            ]
          },
          {
            "label": "Concours spécifiques et administration",
            "amount": 256304827,
            "children": [
              {
                "label": "Dotations Outre-Mer",
                "amount": 152339875
              },
              {
                "label": "Aides exceptionnelles aux collectivités territoriales",
                "amount": 91060528
              },
              {
                "label": "Administration des relations avec les collectivités territoriales",
                "amount": 12904424
              }
            ]
          }
        ]
      },
      {
        "label": "Avances à l'audiovisuel public",
        "amount": 3878312945,
        "children": [
          {
            "label": "France Télévisions",
            "amount": 2440577000,
            "children": [
              {
                "label": "France Télévisions",
                "amount": 2440577000
              }
            ]
          },
          {
            "label": "Radio France",
            "amount": 648033908,
            "children": [
              {
                "label": "Radio France",
                "amount": 648033908
              }
            ]
          },
          {
            "label": "France Médias Monde",
            "amount": 303883551,
            "children": [
              {
                "label": "France Médias Monde",
                "amount": 303883551
              }
            ]
          },
          {
            "label": "ARTE France",
            "amount": 298114886,
            "children": [
              {
                "label": "ARTE France",
                "amount": 298114886
              }
            ]
          },
          {
            "label": "Institut national de l'audiovisuel",
            "amount": 103461144,
            "children": [
              {
                "label": "Institut national de l'audiovisuel",
                "amount": 103461144
              }
            ]
          },
          {
            "label": "TV5 Monde",
            "amount": 84242456,
            "children": [
              {
                "label": "TV5 Monde",
                "amount": 84242456
              }
            ]
          }
        ]
      },
      {
        "label": "Agriculture, alimentation, forêt et affaires rurales",
        "amount": 3767842168,
        "children": [
          {
            "label": "Compétitivité et durabilité de l'agriculture, de l'agroalimentaire et de la forêt",
            "amount": 2056447002,
            "children": [
              {
                "label": "Gestion équilibrée et durable des territoires",
                "amount": 516427462
              },
              {
                "label": "Moyens de mise en oeuvre des politiques publiques et gestion des interventions",
                "amount": 478132500
              },
              {
                "label": "Gestion durable de la forêt et développement de la filière bois",
                "amount": 289787394
              },
              {
                "label": "Adaptation des filières à l'évolution des marchés",
                "amount": 234452078
              },
              {
                "label": "Planification écologique",
                "amount": 178337296
              },
              {
                "label": "Protection sociale",
                "amount": 142950000
              },
              {
                "label": "Gestion des crises et des aléas de la production agricole",
                "amount": 110900000
              },
              {
                "label": "Appui au renouvellement et à la modernisation des exploitations agricoles",
                "amount": 105460272
              }
            ]
          },
          {
            "label": "Sécurité et qualité sanitaires de l'alimentation",
            "amount": 749925422,
            "children": [
              {
                "label": "Mise en oeuvre de la politique de sécurité et de qualité sanitaires de l'alimentation",
                "amount": 370705156
              },
              {
                "label": "Lutte contre les maladies animales, protection et bien-être animal",
                "amount": 163120070
              },
              {
                "label": "Actions transversales",
                "amount": 115420016
              },
              {
                "label": "Sécurité sanitaire de l'alimentation",
                "amount": 103667500
              },
              {
                "label": "Planification écologique - Stratégie de réduction de l’utilisation des produits phytosanitaires",
                "amount": 42376830
              },
              {
                "label": "Santé, qualité et protection des végétaux",
                "amount": 33504200
              },
              {
                "label": "Qualité de l'alimentation et offre alimentaire",
                "amount": 5810500
              },
              {
                "label": "Elimination des cadavres et des sous-produits animaux",
                "amount": 4000000
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -88678850
              }
            ]
          },
          {
            "label": "Conduite et pilotage des politiques de l'agriculture",
            "amount": 512469744,
            "children": [
              {
                "label": "Moyens des directions régionales de l'alimentation, de l'agriculture et de la forêt, des directions de l'alimentation, de l'agriculture et de la forêt et directions départementales des territoires (et de la mer)",
                "amount": 323341274
              },
              {
                "label": "Moyens de l'administration centrale",
                "amount": 226508902
              },
              {
                "label": "Moyens communs",
                "amount": 95316023
              },
              {
                "label": "Évaluation de l'impact des politiques publiques et information économique",
                "amount": 16604586
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -149301041
              }
            ]
          },
          {
            "label": "Allègements du coût du travail en agriculture (TODE-AG)",
            "amount": 449000000,
            "children": [
              {
                "label": "Allègements de cotisations et contributions sociales",
                "amount": 449000000
              }
            ]
          }
        ]
      },
      {
        "label": "Aide publique au développement",
        "amount": 3669036500,
        "children": [
          {
            "label": "Solidarité à l'égard des pays en développement",
            "amount": 1541928976,
            "children": [
              {
                "label": "Coopération bilatérale",
                "amount": 1062402820
              },
              {
                "label": "Action humanitaire",
                "amount": 294000000
              },
              {
                "label": "Coopération communautaire",
                "amount": 124688830
              },
              {
                "label": "Coopération multilatérale",
                "amount": 60837326
              }
            ]
          },
          {
            "label": "Aide économique et financière au développement",
            "amount": 1289107524,
            "children": [
              {
                "label": "Aide économique et financière bilatérale",
                "amount": 601940000
              },
              {
                "label": "Aide économique et financière multilatérale",
                "amount": 593743754
              },
              {
                "label": "Traitement de la dette des pays pauvres",
                "amount": 93423770
              }
            ]
          },
          {
            "label": "Fonds de solidarité pour le développement",
            "amount": 738000000,
            "children": [
              {
                "label": "Fonds de solidarité pour le développement",
                "amount": 738000000
              }
            ]
          },
          {
            "label": "Renforcement des fonds propres de l’Agence française de développement",
            "amount": 100000000,
            "children": [
              {
                "label": "Renforcement des fonds propres de l'Agence française de développement",
                "amount": 100000000
              }
            ]
          }
        ]
      },
      {
        "label": "Culture",
        "amount": 3542752824,
        "children": [
          {
            "label": "Patrimoines",
            "amount": 1145372429,
            "children": [
              {
                "label": "Patrimoine des musées de France",
                "amount": 440949321
              },
              {
                "label": "Monuments Historiques et patrimoine monumental",
                "amount": 437068491
              },
              {
                "label": "Patrimoine archéologique",
                "amount": 163593552
              },
              {
                "label": "Patrimoine archivistique",
                "amount": 55789225
              },
              {
                "label": "Architecture et sites patrimoniaux",
                "amount": 38630595
              },
              {
                "label": "Acquisition et enrichissement des collections publiques",
                "amount": 9341245
              }
            ]
          },
          {
            "label": "Création",
            "amount": 1009899700,
            "children": [
              {
                "label": "Soutien à la création, à la production et à la diffusion du spectacle vivant",
                "amount": 789366589
              },
              {
                "label": "Soutien à la création, à la production et à la diffusion des arts visuels",
                "amount": 153813951
              },
              {
                "label": "Soutien à l'emploi et structurations des professions",
                "amount": 66719160
              }
            ]
          },
          {
            "label": "Transmission des savoirs et démocratisation de la culture",
            "amount": 722574664,
            "children": [
              {
                "label": "Soutien aux établissements d'enseignement supérieur et insertion professionnelle",
                "amount": 322563981
              },
              {
                "label": "Soutien à la démocratisation et à l'éducation artistique et culturelle",
                "amount": 273426182
              },
              {
                "label": "Recherche culturelle et culture scientifique et technique",
                "amount": 122360163
              },
              {
                "label": "Langue française et langues de France",
                "amount": 4224338
              }
            ]
          },
          {
            "label": "Soutien aux politiques du ministère de la culture",
            "amount": 664906031,
            "children": [
              {
                "label": "Fonctions de soutien du ministère",
                "amount": 859476403
              },
              {
                "label": "Action culturelle internationale",
                "amount": 10533981
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -205104353
              }
            ]
          }
        ]
      },
      {
        "label": "Économie",
        "amount": 3292008366,
        "children": [
          {
            "label": "Développement des entreprises et régulations",
            "amount": 1991209350,
            "children": [
              {
                "label": "Industrie et services",
                "amount": 941505577
              },
              {
                "label": "Développement des postes, des télécommunications et du numérique",
                "amount": 633108694
              },
              {
                "label": "Régulation concurrentielle des marchés, protection économique et sécurité du consommateur",
                "amount": 271104285
              },
              {
                "label": "Développement international des entreprises et attractivité du territoire",
                "amount": 170843358
              },
              {
                "label": "Mise en oeuvre du droit de la concurrence (Autorité de la concurrence)",
                "amount": 27867371
              },
              {
                "label": "Régulation des communications électroniques, des postes et de la distribution de la presse (ARCEP)",
                "amount": 25570203
              },
              {
                "label": "Expertise, conseil et inspection",
                "amount": 17339083
              },
              {
                "label": "Mesures exceptionnelles dans le cadre de la crise sanitaire",
                "amount": 15940652
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -112069873
              }
            ]
          },
          {
            "label": "Stratégies économiques",
            "amount": 645411332,
            "children": [
              {
                "label": "Définition et mise en oeuvre de la politique économique et financière de la France dans le cadre national, international et européen",
                "amount": 581547991
              },
              {
                "label": "Développement international de l'économie française",
                "amount": 72677639
              },
              {
                "label": "Économie sociale, solidaire et responsable",
                "amount": 12332842
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -21147140
              }
            ]
          },
          {
            "label": "Statistiques et études économiques",
            "amount": 368866613,
            "children": [
              {
                "label": "Infrastructures statistiques et missions régaliennes",
                "amount": 152119279
              },
              {
                "label": "Pilotage, soutien et formation initiale",
                "amount": 151894313
              },
              {
                "label": "Information économique, démographique et sociale",
                "amount": 135983629
              },
              {
                "label": "Action régionale",
                "amount": 45147057
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -116277665
              }
            ]
          },
          {
            "label": "Plan France Très haut débit",
            "amount": 286521071,
            "children": [
              {
                "label": "Réseaux d'initiative publique",
                "amount": 258431384
              },
              {
                "label": "Autres projets concourant à la mise en œuvre du plan France très haut débit",
                "amount": 14089687
              },
              {
                "label": "Inclusion numérique",
                "amount": 14000000
              }
            ]
          }
        ]
      },
      {
        "label": "Action extérieure de l'État",
        "amount": 3253049286,
        "children": [
          {
            "label": "Action de la France en Europe et dans le monde",
            "amount": 2493298081,
            "children": [
              {
                "label": "Réseau diplomatique",
                "amount": 783914615
              },
              {
                "label": "Contributions internationales",
                "amount": 602869335
              },
              {
                "label": "Soutien",
                "amount": 308699429
              },
              {
                "label": "Personnel concourant à l'action \"Offre d'un service public de qualité aux français à l'étranger\"",
                "amount": 214133092
              },
              {
                "label": "Dépenses de personnels concourant au programme \"Solidarité à l'égard des pays en développement\"",
                "amount": 178790737
              },
              {
                "label": "Action européenne",
                "amount": 178396684
              },
              {
                "label": "Coordination de l'action diplomatique",
                "amount": 152695459
              },
              {
                "label": "Coopération de sécurité et de défense",
                "amount": 118094690
              },
              {
                "label": "Dépenses de personnel concourant au programme \"Diplomatie culturelle et d'influence\"",
                "amount": 93553293
              },
              {
                "label": "Personnel concourant à l'action \"Instruction des demandes de visa\"",
                "amount": 66526786
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -204376039
              }
            ]
          },
          {
            "label": "Diplomatie culturelle et d'influence",
            "amount": 605940405,
            "children": [
              {
                "label": "Opérateurs",
                "amount": 420542722
              },
              {
                "label": "Appui au réseau culturel et de coopération",
                "amount": 103445956
              },
              {
                "label": "Mobilité étudiante",
                "amount": 56272657
              },
              {
                "label": "Crédits centraux",
                "amount": 25679070
              }
            ]
          },
          {
            "label": "Français à l'étranger et affaires consulaires",
            "amount": 153810800,
            "children": [
              {
                "label": "Accès des élèves français au réseau AEFE",
                "amount": 107024743
              },
              {
                "label": "Offre d'un service public de qualité aux Français à l'étranger",
                "amount": 44586057
              },
              {
                "label": "Instruction des demandes de visa",
                "amount": 2200000
              }
            ]
          }
        ]
      },
      {
        "label": "Outre-mer",
        "amount": 2763584220,
        "children": [
          {
            "label": "Emploi outre-mer",
            "amount": 1737056701,
            "children": [
              {
                "label": "Soutien aux entreprises",
                "amount": 1479150990
              },
              {
                "label": "Aide à l'insertion et à la qualification professionnelle",
                "amount": 297824261
              },
              {
                "label": "Financement de l'économie",
                "amount": 20094775
              },
              {
                "label": "Pilotage des politiques des outre-mer",
                "amount": 3373101
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -63386426
              }
            ]
          },
          {
            "label": "Conditions de vie outre-mer",
            "amount": 1026527519,
            "children": [
              {
                "label": "Collectivités territoriales",
                "amount": 452693694
              },
              {
                "label": "Logement",
                "amount": 211271857
              },
              {
                "label": "Aménagement  du territoire",
                "amount": 181734704
              },
              {
                "label": "Continuité territoriale",
                "amount": 76801512
              },
              {
                "label": "Appui à l'accès aux financements bancaires",
                "amount": 57875761
              },
              {
                "label": "Fonds exceptionnel d'investissement",
                "amount": 32030491
              },
              {
                "label": "Sanitaire, social, culture, jeunesse et sports",
                "amount": 13150000
              },
              {
                "label": "Insertion économique et coopération régionales",
                "amount": 969500
              }
            ]
          }
        ]
      },
      {
        "label": "Immigration, asile et intégration",
        "amount": 2160935708,
        "children": [
          {
            "label": "Immigration et asile",
            "amount": 1792471706,
            "children": [
              {
                "label": "Garantie de l'exercice du droit d'asile",
                "amount": 1379596949
              },
              {
                "label": "Lutte contre l'immigration irrégulière",
                "amount": 327872824
              },
              {
                "label": "Soutien",
                "amount": 84481933
              },
              {
                "label": "Circulation des étrangers et politique des visas",
                "amount": 520000
              }
            ]
          },
          {
            "label": "Intégration et accès à la nationalité française",
            "amount": 368464002,
            "children": [
              {
                "label": "Accueil des étrangers primo arrivants",
                "amount": 268364002
              },
              {
                "label": "Intégration des étrangers primo-arrivants",
                "amount": 97260000
              },
              {
                "label": "Accès à la nationalité française",
                "amount": 1490000
              },
              {
                "label": "Accompagnement des foyers de travailleurs migrants",
                "amount": 1350000
              }
            ]
          }
        ]
      },
      {
        "label": "Contrôle et exploitation aériens",
        "amount": 2078319256,
        "children": [
          {
            "label": "Soutien aux prestations de l'aviation civile",
            "amount": 1330267406,
            "children": [
              {
                "label": "Ressources humaines et management",
                "amount": 1461512072
              },
              {
                "label": "Formation aéronautique",
                "amount": 117844761
              },
              {
                "label": "Logistique",
                "amount": 85923144
              },
              {
                "label": "Affaires financières",
                "amount": 12204465
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -347217036
              }
            ]
          },
          {
            "label": "Navigation aérienne",
            "amount": 700537903,
            "children": [
              {
                "label": "Exploitation et innovation de la Navigation aérienne",
                "amount": 412782484
              },
              {
                "label": "Soutien et prestations externes de la Navigation aérienne",
                "amount": 287755419
              }
            ]
          },
          {
            "label": "Transports aériens, surveillance et certification",
            "amount": 47513947,
            "children": [
              {
                "label": "Surveillance et certification",
                "amount": 25555880
              },
              {
                "label": "Développement durable et régulation",
                "amount": 18078772
              },
              {
                "label": "Enquêtes de sécurité aérienne",
                "amount": 3879295
              }
            ]
          }
        ]
      },
      {
        "label": "Monde combattant, mémoire et liens avec la Nation",
        "amount": 1738029080,
        "children": [
          {
            "label": "Liens entre la Nation et son armée",
            "amount": 1659876270,
            "children": [
              {
                "label": "Reconnaissance envers le monde combattant",
                "amount": 759640562
              },
              {
                "label": "PMI, droits et soutien aux invalides",
                "amount": 715144461
              },
              {
                "label": "Actions en faveur des rapatriés",
                "amount": 118219010
              },
              {
                "label": "Liens armées-jeunesse",
                "amount": 41067551
              },
              {
                "label": "Politique de mémoire",
                "amount": 25804686
              }
            ]
          },
          {
            "label": "Indemnisation des victimes des persécutions antisémites et des actes de barbarie pendant la seconde guerre mondiale",
            "amount": 78152810,
            "children": [
              {
                "label": "Indemnisation des victimes d'actes de barbarie durant la seconde guerre mondiale",
                "amount": 43850196
              },
              {
                "label": "Indemnisation des orphelins de la déportation et des victimes de spoliations du fait des législations antisémites en vigueur pendant l'Occupation",
                "amount": 34573652
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -271038
              }
            ]
          }
        ]
      },
      {
        "label": "Santé",
        "amount": 1672101236,
        "children": [
          {
            "label": "Protection maladie",
            "amount": 1216300000,
            "children": [
              {
                "label": "Aide médicale de l'Etat",
                "amount": 1208300000
              },
              {
                "label": "Fonds d'indemnisation des victimes de l'amiante",
                "amount": 8000000
              }
            ]
          },
          {
            "label": "Compensation à la Sécurité sociale du coût des dons de vaccins à des pays tiers et reversement des recettes de la Facilité pour la Relance et la Résilience (FRR) européenne au titre du volet « Ségur investissement » du plan national de relance et de résilience (PNRR)",
            "amount": 242000000,
            "children": [
              {
                "label": "Ségur investissement du PNRR",
                "amount": 242000000
              }
            ]
          },
          {
            "label": "Prévention, sécurité sanitaire et offre de soins",
            "amount": 213801236,
            "children": [
              {
                "label": "Modernisation de l'offre de soins",
                "amount": 74842517
              },
              {
                "label": "Prévention des maladies chroniques et qualité de vie des malades",
                "amount": 53132163
              },
              {
                "label": "Pilotage de la politique de santé publique",
                "amount": 44927220
              },
              {
                "label": "Prévention des risques liés à l'environnement et à l'alimentation",
                "amount": 28109998
              },
              {
                "label": "Veille et sécurité sanitaire",
                "amount": 7607914
              },
              {
                "label": "Politique des produits de santé et de la qualité des pratiques et des soins",
                "amount": 4261537
              },
              {
                "label": "Santé des populations",
                "amount": 919887
              }
            ]
          }
        ]
      },
      {
        "label": "Sport, jeunesse et vie associative",
        "amount": 1194645238,
        "children": [
          {
            "label": "Jeunesse et vie associative",
            "amount": 626640612,
            "children": [
              {
                "label": "Développement du service civique",
                "amount": 465000000
              },
              {
                "label": "Actions en faveur de la jeunesse et de l'éducation populaire",
                "amount": 113380069
              },
              {
                "label": "Développement de la vie associative",
                "amount": 48260543
              }
            ]
          },
          {
            "label": "Sport",
            "amount": 513198868,
            "children": [
              {
                "label": "Développement du sport de haut niveau",
                "amount": 325081205
              },
              {
                "label": "Promotion du sport pour le plus grand nombre",
                "amount": 146773391
              },
              {
                "label": "Promotion des métiers du sport",
                "amount": 48739150
              },
              {
                "label": "Prévention par le sport et protection des sportifs",
                "amount": 33816634
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -41211512
              }
            ]
          },
          {
            "label": "Jeux olympiques et paralympiques d'hiver 2031",
            "amount": 41600000,
            "children": [
              {
                "label": "Société de livraison des ouvrages olympiques et paralympiques Alpes 2031",
                "amount": 41600000
              }
            ]
          },
          {
            "label": "Jeux olympiques et paralympiques d'hiver 2030",
            "amount": 13205758,
            "children": [
              {
                "label": "Société de livraison des ouvrages olympiques et paralympiques Alpes 2030",
                "amount": 13205758
              }
            ]
          }
        ]
      },
      {
        "label": "Contrôle de la circulation et du stationnement routiers",
        "amount": 1177255819,
        "children": [
          {
            "label": "Contribution à l'équipement des collectivités territoriales pour l'amélioration des transports en commun, de la sécurité et de la circulation routières",
            "amount": 806735047,
            "children": [
              {
                "label": "Contribution à l'équipement des collectivités territoriales pour l'amélioration des transports en commun, de la sécurité et de la circulation routières",
                "amount": 806735047
              }
            ]
          },
          {
            "label": "Structures et dispositifs de sécurité routière",
            "amount": 344340107,
            "children": [
              {
                "label": "Dispositifs de contrôle",
                "amount": 204538214
              },
              {
                "label": "Centre national de traitement",
                "amount": 98301893
              },
              {
                "label": "Système d'information Education routière et permis de conduire",
                "amount": 37700000
              },
              {
                "label": "Soutien au programme",
                "amount": 3800000
              }
            ]
          },
          {
            "label": "Contrôle et modernisation de la politique de la circulation et du stationnement routiers",
            "amount": 26180665,
            "children": [
              {
                "label": "Déploiement du procès-verbal électronique",
                "amount": 26180665
              }
            ]
          }
        ]
      },
      {
        "label": "Pouvoirs publics",
        "amount": 1140179221,
        "children": [
          {
            "label": "Assemblée nationale",
            "amount": 607647569,
            "children": [
              {
                "label": "Assemblée nationale",
                "amount": 607647569
              }
            ]
          },
          {
            "label": "Sénat",
            "amount": 353470900,
            "children": [
              {
                "label": "Sénat",
                "amount": 341864000
              },
              {
                "label": "Jardin du Luxembourg",
                "amount": 11606900
              }
            ]
          },
          {
            "label": "Présidence de la République",
            "amount": 122563852,
            "children": [
              {
                "label": "Présidence de la République",
                "amount": 122563852
              }
            ]
          },
          {
            "label": "La Chaîne parlementaire",
            "amount": 35596900,
            "children": [
              {
                "label": "La Chaîne parlementaire - Assemblée nationale",
                "amount": 17798900
              },
              {
                "label": "Public Sénat",
                "amount": 17798000
              }
            ]
          },
          {
            "label": "Conseil constitutionnel",
            "amount": 20000000,
            "children": [
              {
                "label": "Conseil constitutionnel",
                "amount": 20000000
              }
            ]
          },
          {
            "label": "Cour de justice de la République",
            "amount": 900000,
            "children": [
              {
                "label": "Cour de justice de la République",
                "amount": 900000
              }
            ]
          }
        ]
      },
      {
        "label": "Engagements financiers de l'État",
        "amount": 1102669199,
        "children": [
          {
            "label": "Appels en garantie de l'État (crédits évaluatifs)",
            "amount": 790362961,
            "children": [
              {
                "label": "Financement des entreprises et industrie",
                "amount": 538040190
              },
              {
                "label": "Autres garanties",
                "amount": 162352771
              },
              {
                "label": "Développement international de l'économie française",
                "amount": 68600000
              },
              {
                "label": "Soutien au domaine social, logement, santé",
                "amount": 21170000
              },
              {
                "label": "Agriculture et environnement",
                "amount": 200000
              }
            ]
          },
          {
            "label": "Fonds de soutien relatif aux prêts et contrats financiers structurés à risque",
            "amount": 178679630,
            "children": [
              {
                "label": "Fonds de soutien relatif aux prêts et contrats financiers structurés à risque",
                "amount": 178679630
              }
            ]
          },
          {
            "label": "Épargne",
            "amount": 96166608,
            "children": [
              {
                "label": "Épargne logement",
                "amount": 95902608
              },
              {
                "label": "Instruments de financement du logement",
                "amount": 264000
              }
            ]
          },
          {
            "label": "Dotation du Mécanisme européen de stabilité",
            "amount": 37460000,
            "children": [
              {
                "label": "Dotation du Mécanisme européen de stabilité",
                "amount": 37460000
              }
            ]
          }
        ]
      },
      {
        "label": "Direction de l'action du Gouvernement",
        "amount": 1015683439,
        "children": [
          {
            "label": "Coordination du travail gouvernemental",
            "amount": 797240400,
            "children": [
              {
                "label": "Coordination de la sécurité et de la défense",
                "amount": 431083302
              },
              {
                "label": "Soutien",
                "amount": 158147271
              },
              {
                "label": "Coordination du travail gouvernemental",
                "amount": 110278275
              },
              {
                "label": "Coordination de la politique des ressources humaines en matière d’encadrement supérieur et dirigeant de l’Etat",
                "amount": 47657620
              },
              {
                "label": "Ordre de la Légion d'honneur",
                "amount": 30959316
              },
              {
                "label": "Stratégie et prospective",
                "amount": 23317423
              },
              {
                "label": "Coordination de la politique européenne",
                "amount": 19401670
              },
              {
                "label": "Mission interministérielle de lutte contre les drogues et les conduites addictives",
                "amount": 15338315
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -38942792
              }
            ]
          },
          {
            "label": "Protection des droits et libertés",
            "amount": 136170708,
            "children": [
              {
                "label": "Autorité de régulation de la communication audiovisuelle et numérique",
                "amount": 50521416
              },
              {
                "label": "Commission nationale de l'informatique et des libertés",
                "amount": 31228373
              },
              {
                "label": "Défenseur des droits",
                "amount": 31206422
              },
              {
                "label": "Haute autorité pour la transparence de la vie publique",
                "amount": 11531674
              },
              {
                "label": "Autres autorités indépendantes",
                "amount": 6324505
              },
              {
                "label": "Contrôleur général des lieux de privation de liberté",
                "amount": 6146795
              },
              {
                "label": "Commission nationale de contrôle des techniques de renseignement",
                "amount": 3798954
              },
              {
                "label": "Commission du secret de la Défense nationale",
                "amount": 806088
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -5393519
              }
            ]
          },
          {
            "label": "Autres crédits",
            "amount": 82272331,
            "children": [
              {
                "label": "Autres crédits",
                "amount": 82272331
              }
            ]
          }
        ]
      },
      {
        "label": "Médias, livre et industries culturelles",
        "amount": 690182793,
        "children": [
          {
            "label": "Presse et médias",
            "amount": 346746799,
            "children": [
              {
                "label": "Aides à la presse",
                "amount": 176455448
              },
              {
                "label": "Relations financières avec l'AFP",
                "amount": 147185233
              },
              {
                "label": "Soutien à l'expression radiophonique locale",
                "amount": 19607958
              },
              {
                "label": "Soutien aux médias de proximité",
                "amount": 1831660
              },
              {
                "label": "Compagnie internationale de radio et télévision (CIRT)",
                "amount": 1666500
              }
            ]
          },
          {
            "label": "Livre et industries culturelles",
            "amount": 343435994,
            "children": [
              {
                "label": "Livre et lecture",
                "amount": 321778360
              },
              {
                "label": "Industries culturelles",
                "amount": 21657634
              }
            ]
          }
        ]
      },
      {
        "label": "Conseil et contrôle de l'État",
        "amount": 683781018,
        "children": [
          {
            "label": "Conseil d'État et autres juridictions administratives",
            "amount": 446609698,
            "children": [
              {
                "label": "Fonction juridictionnelle : Tribunaux administratifs",
                "amount": 217766830
              },
              {
                "label": "Soutien",
                "amount": 157223948
              },
              {
                "label": "Fonction juridictionnelle : Cours administratives d'appel",
                "amount": 67637629
              },
              {
                "label": "Cour nationale du droit d'asile",
                "amount": 52255173
              },
              {
                "label": "Fonction juridictionnelle : Conseil d'État",
                "amount": 36351408
              },
              {
                "label": "Fonction consultative",
                "amount": 18239114
              },
              {
                "label": "Commission du contentieux du stationnement payant",
                "amount": 9294063
              },
              {
                "label": "Fonction études, expertise et services rendus aux administrations de l'État et des collectivités",
                "amount": 9188656
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -121347123
              }
            ]
          },
          {
            "label": "Haut Conseil des finances publiques",
            "amount": 206162432,
            "children": [
              {
                "label": "Contrôle des gestions publiques",
                "amount": 77035403
              },
              {
                "label": "Pilotage et soutien des juridictions financières",
                "amount": 55326388
              },
              {
                "label": "Examen des comptes publics",
                "amount": 53976535
              },
              {
                "label": "Evaluation des politiques publiques",
                "amount": 43300796
              },
              {
                "label": "Contrôle des finances publiques",
                "amount": 20653464
              },
              {
                "label": "Information des citoyens",
                "amount": 9223695
              },
              {
                "label": "Mise en jeu de la responsabilité des comptables publics et des gestionnaires publics",
                "amount": 6194835
              },
              {
                "label": "Gouvernance des Finances publiques",
                "amount": 1456048
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -61004732
              }
            ]
          },
          {
            "label": "Conseil économique, social et environnemental",
            "amount": 31008888,
            "children": [
              {
                "label": "Fonctions supports à l'institution",
                "amount": 21726813
              },
              {
                "label": "Travaux consultatifs",
                "amount": 12422625
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -3140550
              }
            ]
          }
        ]
      },
      {
        "label": "Transformation et fonction publiques",
        "amount": 516492869,
        "children": [
          {
            "label": "Fonds d'accompagnement interministériel Ressources humaines",
            "amount": 228212084,
            "children": [
              {
                "label": "Action sociale interministérielle",
                "amount": 119965653
              },
              {
                "label": "Formation des fonctionnaires",
                "amount": 77073184
              },
              {
                "label": "Appui et innovation des ressources humaines",
                "amount": 31173247
              }
            ]
          },
          {
            "label": "Performance et résilience des bâtiments de l’État et de ses opérateurs",
            "amount": 203671667,
            "children": [
              {
                "label": "Travaux et gros entretien à la charge du propriétaire",
                "amount": 145705814
              },
              {
                "label": "Résilience",
                "amount": 40359999
              },
              {
                "label": "Etudes",
                "amount": 17605854
              }
            ]
          },
          {
            "label": "Conduite et pilotage de la transformation et de la fonction publiques",
            "amount": 44659118,
            "children": [
              {
                "label": "Accompagnement des transformations des ressources humaines (DGAFP/CISIRH)",
                "amount": 35778938
              },
              {
                "label": "Pilotage des actions de modernisation (DITP)",
                "amount": 17078245
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -8198065
              }
            ]
          },
          {
            "label": "Transformation publique",
            "amount": 39950000,
            "children": [
              {
                "label": "Fonds pour la transformation de l'action publique",
                "amount": 20000000
              },
              {
                "label": "Accompagnement du changement de l'action publique",
                "amount": 19450000
              },
              {
                "label": "Renouveau démocratique",
                "amount": 500000
              }
            ]
          }
        ]
      },
      {
        "label": "Crédits non répartis",
        "amount": 475000000,
        "children": [
          {
            "label": "Provision relative aux rémunérations publiques",
            "amount": 350000000,
            "children": [
              {
                "label": "Provision relative aux rémunérations publiques",
                "amount": 350000000
              }
            ]
          },
          {
            "label": "Dépenses accidentelles et imprévisibles",
            "amount": 125000000,
            "children": [
              {
                "label": "Dépenses accidentelles et imprévisibles",
                "amount": 125000000
              }
            ]
          }
        ]
      },
      {
        "label": "Financement des aides aux collectivités pour l'électrification rurale",
        "amount": 365300000,
        "children": [
          {
            "label": "Électrification rurale",
            "amount": 362300000,
            "children": [
              {
                "label": "Renforcement des réseaux",
                "amount": 179400000
              },
              {
                "label": "Sécurisation de fils nus",
                "amount": 90000000
              },
              {
                "label": "Enfouissement et pose en façade",
                "amount": 42000000
              },
              {
                "label": "Extension des réseaux",
                "amount": 32000000
              },
              {
                "label": "Intempéries",
                "amount": 18000000
              },
              {
                "label": "Fonctionnement",
                "amount": 700000
              },
              {
                "label": "Déclaration d'utilité publique (Très haute tension)",
                "amount": 200000
              }
            ]
          },
          {
            "label": "Opérations de maîtrise de la demande d’électricité, de production d’électricité par des énergies renouvelables ou de production de proximité dans les zones non interconnectées",
            "amount": 3000000,
            "children": [
              {
                "label": "Transition énergétique",
                "amount": 1000000
              },
              {
                "label": "Appel à projets innovants",
                "amount": 500000
              },
              {
                "label": "Maîtrise de la demande d'énergie",
                "amount": 500000
              },
              {
                "label": "Sites isolés",
                "amount": 500000
              },
              {
                "label": "Installations de proximité en zone non interconnectée",
                "amount": 500000
              }
            ]
          }
        ]
      },
      {
        "label": "Gestion du patrimoine immobilier de l'État",
        "amount": 321500000,
        "children": [
          {
            "label": "Opérations immobilières et entretien des bâtiments de l'État",
            "amount": 321500000,
            "children": [
              {
                "label": "Opérations structurantes et cessions",
                "amount": 161500000
              },
              {
                "label": "Gros entretien, réhabilitation, mise en conformité et remise en état",
                "amount": 80000000
              },
              {
                "label": "Maintenance à la charge du propriétaire",
                "amount": 64000000
              },
              {
                "label": "Contrôles règlementaires, audits, expertises et diagnostics",
                "amount": 16000000
              }
            ]
          }
        ]
      },
      {
        "label": "Développement agricole et rural",
        "amount": 171000000,
        "children": [
          {
            "label": "Recherche appliquée et innovation en agriculture",
            "amount": 103070000,
            "children": [
              {
                "label": "Recherche appliquée et innovation",
                "amount": 102570000
              },
              {
                "label": "Fonction support",
                "amount": 500000
              }
            ]
          },
          {
            "label": "Développement et transfert en agriculture",
            "amount": 67930000,
            "children": [
              {
                "label": "Développement et transfert",
                "amount": 67900000
              },
              {
                "label": "Fonction support",
                "amount": 30000
              }
            ]
          }
        ]
      },
      {
        "label": "Publications officielles et information administrative",
        "amount": 143470856,
        "children": [
          {
            "label": "Pilotage et ressources humaines",
            "amount": 99742011,
            "children": [
              {
                "label": "Dépenses de personnel",
                "amount": 50914751
              },
              {
                "label": "Convention Etat - Société anonyme de composition et d'impression des journaux officiels",
                "amount": 42199000
              },
              {
                "label": "Pilotage, modernisation et activités numériques",
                "amount": 10571075
              },
              {
                "label": "T2 - contribution au CAS",
                "amount": -3942815
              }
            ]
          },
          {
            "label": "Édition et diffusion",
            "amount": 43728845,
            "children": [
              {
                "label": "Accès au droit et diffusion légale",
                "amount": 28073152
              },
              {
                "label": "Information administrative et vie publique",
                "amount": 15655693
              }
            ]
          }
        ]
      }
    ]
  },
  "debt": {
    "meta": {
      "year": 2026,
      "scope": "Dette publique au sens de Maastricht (administrations publiques)",
      "unit": "EUR",
      "population": 68600000,
      "note": "Série de fin d'année INSEE / Banque de France / Eurostat (dette Maastricht). 2025 = 3 460,5 Md€ (115,6 % du PIB). 2026-T1 = 3 536,1 Md€ (117,5 %). Fin 2026 : prévision / estimation ~3 547 Md€ (~118 %). Montants antérieurs à 1999 convertis en euros.",
      "sources": [
        "INSEE — Dette des administrations publiques au sens de Maastricht",
        "INSEE Informations rapides n°78 et n°79 (mars 2026)",
        "INSEE T1 2026 : 3 536,1 Md€, 117,5 % du PIB",
        "Cour des comptes — charge de la dette 2026"
      ]
    },
    "stock": {
      "amount": 3547000000000,
      "perHab": 51706,
      "pctPib": 118,
      "interets2026": 77000000000,
      "interetsNote": "Charge de la dette (intérêts) ~77 Md€ en 2026 selon la Cour des comptes (+12 Md€ vs 2025). Charge budgétaire de l'État (AFT) : 59,3 Md€."
    },
    "series": [
      {
        "year": 1980,
        "amount": 92000000000,
        "pctPib": 21
      },
      {
        "year": 1985,
        "amount": 227000000000,
        "pctPib": 31
      },
      {
        "year": 1990,
        "amount": 363000000000,
        "pctPib": 36
      },
      {
        "year": 1995,
        "amount": 663000000000,
        "pctPib": 55
      },
      {
        "year": 2000,
        "amount": 827000000000,
        "pctPib": 59
      },
      {
        "year": 2005,
        "amount": 1147000000000,
        "pctPib": 67
      },
      {
        "year": 2007,
        "amount": 1212000000000,
        "pctPib": 64
      },
      {
        "year": 2008,
        "amount": 1318000000000,
        "pctPib": 68
      },
      {
        "year": 2010,
        "amount": 1632000000000,
        "pctPib": 85
      },
      {
        "year": 2012,
        "amount": 1869000000000,
        "pctPib": 91
      },
      {
        "year": 2015,
        "amount": 2098000000000,
        "pctPib": 96
      },
      {
        "year": 2017,
        "amount": 2218000000000,
        "pctPib": 98
      },
      {
        "year": 2019,
        "amount": 2380000000000,
        "pctPib": 97
      },
      {
        "year": 2020,
        "amount": 2650000000000,
        "pctPib": 115
      },
      {
        "year": 2021,
        "amount": 2813000000000,
        "pctPib": 113
      },
      {
        "year": 2022,
        "amount": 2950000000000,
        "pctPib": 111
      },
      {
        "year": 2023,
        "amount": 3101000000000,
        "pctPib": 110
      },
      {
        "year": 2024,
        "amount": 3306000000000,
        "pctPib": 113
      },
      {
        "year": 2025,
        "amount": 3460500000000,
        "pctPib": 115.6
      },
      {
        "year": 2026,
        "amount": 3547000000000,
        "pctPib": 118
      }
    ],
    "spikes": [
      {
        "year": "2008–2010",
        "title": "Crise financière",
        "text": "Recapitalisations bancaires, plans de relance, chute des recettes. La dette passe d'environ 1 318 à 1 632 Md€.",
        "delta": "+314 Md€"
      },
      {
        "year": "2020–2021",
        "title": "Pandémie",
        "text": "Chômage partiel, aides aux entreprises, baisses d'activité. Saut du ratio vers 115 % du PIB.",
        "delta": "+~270 Md€"
      },
      {
        "year": "2023–2026",
        "title": "Déficits persistants et taux",
        "text": "Déficits élevés et refinancement à des taux plus hauts : le stock et le coût des intérêts progressent.",
        "delta": "+~446 Md€"
      }
    ],
    "interetsCompare": [
      {
        "label": "Intérêts de la dette (2026)",
        "value": 77000000000
      },
      {
        "label": "Budget Justice (État)",
        "value": 10629346857
      },
      {
        "label": "Aide publique au développement",
        "value": 3669036500
      }
    ],
    "debates": [
      {
        "tag": "Lecture A",
        "title": "La dette finance l'investissement",
        "points": [
          "Une partie des emprunts finance des infrastructures, la transition, la défense.",
          "Avec une croissance nominale supérieure aux taux, le ratio dette/PIB peut se stabiliser.",
          "Les taux longs restent gérables tant que la confiance des marchés tient."
        ]
      },
      {
        "tag": "Lecture B",
        "title": "La dette pèse sur les marges de manœuvre",
        "points": [
          "Environ 77 Md€ d'intérêts en 2026, c'est autant de moins pour d'autres politiques.",
          "Un choc de taux ou de croissance rend le ratio plus difficile à maîtriser.",
          "Les règles européennes et la notation souveraine limitent les options."
        ]
      }
    ],
    "faq": [
      {
        "q": "Qui détient la dette française ?",
        "a": "Environ la moitié est détenue par des non-résidents ; le reste par des banques, assureurs et fonds français, et la Banque de France via l'Eurosystème."
      },
      {
        "q": "La France rembourse-t-elle le capital ?",
        "a": "Comme la plupart des États, elle refinance : elle emprunte pour rembourser les échéances et pour financer le déficit de l'année. Le stock ne diminue que si les excédents le permettent."
      },
      {
        "q": "Pourquoi ~118 % du PIB ?",
        "a": "C'est le ratio dette publique / PIB (définition Maastricht). Fin 2025 : 115,6 % (3 460,5 Md€). Fin T1 2026 : 117,5 % (3 536,1 Md€). La prévision de fin 2026 tourne autour de 118 %."
      }
    ]
  },
  "revenues": {
    "meta": {
      "year": 2026,
      "unit": "EUR",
      "population": 68600000,
      "note": "Structure des entrées publiques par source, à deux périmètres : l'État seul et toutes les administrations publiques (APU). Ordres de grandeur saisis à la main — proportions justes, décimales non garanties — calés sur LFI 2026, INSEE (comptes nationaux) et FIPECO.",
      "sources": [
        "LFI 2026 — recettes de l'État",
        "INSEE — Compte des administrations publiques 2025",
        "FIPECO — répartition des prélèvements obligatoires 2025"
      ]
    },
    "scopes": {
      "etat": {
        "label": "État",
        "badge": "argent de l'État",
        "hint": "L'État seul — celui qui paie les 486 Md€ de sorties.",
        "sorties": 486300000000,
        "tree": [
          {
            "label": "TVA (part revenant à l'État)",
            "amount": 105000000000,
            "note": "Prélevée sur presque tout ce que vous achetez",
            "children": [
              {
                "label": "TVA à 20 % (taux normal)",
                "amount": 78000000000
              },
              {
                "label": "TVA à 5,5 % et 10 % (taux réduits)",
                "amount": 24000000000
              },
              {
                "label": "Autres cas particuliers",
                "amount": 3000000000
              }
            ]
          },
          {
            "label": "Impôt sur le revenu",
            "amount": 96000000000,
            "note": "Payé par un foyer fiscal sur deux",
            "children": [
              {
                "label": "Prélevé directement sur les salaires et les retraites",
                "amount": 82000000000
              },
              {
                "label": "Revenus de l'épargne et des placements",
                "amount": 11000000000
              },
              {
                "label": "Ajustements et autres revenus",
                "amount": 3000000000
              }
            ]
          },
          {
            "label": "Impôt sur les sociétés",
            "amount": 62000000000,
            "note": "Prélevé sur les bénéfices des entreprises",
            "children": [
              {
                "label": "Versements des grandes entreprises",
                "amount": 44000000000
              },
              {
                "label": "Petites et moyennes entreprises",
                "amount": 12000000000
              },
              {
                "label": "Contributions exceptionnelles",
                "amount": 6000000000
              }
            ]
          },
          {
            "label": "Autres impôts et taxes",
            "amount": 55000000000,
            "note": "Successions, ventes de biens, taxes propres à certains secteurs",
            "children": [
              {
                "label": "Droits de succession et de donation",
                "amount": 20000000000
              },
              {
                "label": "Taxes sur les ventes de biens et les actes officiels",
                "amount": 12000000000
              },
              {
                "label": "Taxe sur les transactions financières",
                "amount": 3000000000
              },
              {
                "label": "Impôt sur la fortune immobilière",
                "amount": 2000000000
              },
              {
                "label": "Taxes sectorielles diverses",
                "amount": 18000000000
              }
            ]
          },
          {
            "label": "Ressources hors impôts",
            "amount": 22000000000,
            "note": "Amendes, ventes de services, bénéfices d'entreprises publiques",
            "children": [
              {
                "label": "Bénéfices des entreprises dont l'État est actionnaire",
                "amount": 8000000000
              },
              {
                "label": "Amendes et sanctions",
                "amount": 3000000000
              },
              {
                "label": "Ventes de biens et de services",
                "amount": 6000000000
              },
              {
                "label": "Recettes diverses",
                "amount": 5000000000
              }
            ]
          },
          {
            "label": "Taxes sur les carburants et l'énergie",
            "amount": 17000000000,
            "note": "Essence, diesel, fioul",
            "children": []
          }
        ]
      },
      "apu": {
        "label": "Tout l'argent public",
        "badge": "État, Sécurité sociale, communes et régions",
        "hint": "État, Sécurité sociale et collectivités réunis.",
        "sorties": 1672000000000,
        "tree": [
          {
            "label": "Cotisations sur les salaires",
            "amount": 440000000000,
            "note": "Prélevées sur chaque salaire, part employeur et part salarié",
            "children": [
              {
                "label": "Part payée par les employeurs",
                "amount": 283000000000
              },
              {
                "label": "Part payée par les salariés et les indépendants",
                "amount": 157000000000
              }
            ]
          },
          {
            "label": "Autres impôts et taxes",
            "amount": 262000000000,
            "note": "Tabac, alcool, énergie, environnement, taxes propres à certains secteurs",
            "children": []
          },
          {
            "label": "TVA",
            "amount": 220000000000,
            "note": "Partagée entre l'État, la Sécurité sociale et les collectivités",
            "children": []
          },
          {
            "label": "CSG et CRDS",
            "amount": 152000000000,
            "note": "Prélèvements sur tous les revenus, salaires comme épargne",
            "children": []
          },
          {
            "label": "Ressources hors impôts",
            "amount": 151000000000,
            "note": "Ventes de services publics, redevances, bénéfices d'entreprises publiques",
            "children": []
          },
          {
            "label": "Impôt sur le revenu",
            "amount": 101000000000,
            "note": "Payé par un foyer fiscal sur deux",
            "children": []
          },
          {
            "label": "Impôts locaux",
            "amount": 94000000000,
            "note": "Taxe foncière et taxes payées par les entreprises",
            "children": []
          },
          {
            "label": "Impôt sur les sociétés",
            "amount": 65000000000,
            "note": "Prélevé sur les bénéfices des entreprises",
            "children": []
          },
          {
            "label": "Taxes sur l'énergie",
            "amount": 35000000000,
            "note": "Carburants et électricité",
            "children": []
          }
        ]
      }
    }
  },
  "cofog": {
    "meta": {
      "year": 2024,
      "scope": "Toutes les administrations publiques (État, Sécurité sociale, collectivités)",
      "unit": "EUR",
      "population": 68600000,
      "classification": "Dépenses par fonction (COFOG)",
      "total": 1671793800000,
      "note": "Dépenses de toutes les administrations publiques ventilées par fonction (« à quoi sert l'argent »), classification COFOG. Dernière année disponible : 2024. Les montants 2026 (budget) ne sont pas encore ventilés par fonction ; c'est une statistique établie après coup.",
      "source": {
        "portal": "ec.europa.eu/eurostat",
        "dataset": "gov_10a_exp",
        "api": "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/gov_10a_exp?format=JSON&lang=fr&unit=MIO_EUR&na_item=TE&sector=S13&geo=FR&time=2024",
        "fetchedAt": "2026-07-29T20:13:30.773Z"
      }
    },
    "tree": [
      {
        "key": "GF10",
        "label": "Protection sociale",
        "amount": 693028800000,
        "children": [
          {
            "label": "Vieillesse",
            "amount": 391954300000
          },
          {
            "label": "Maladie et invalidité",
            "amount": 83898900000
          },
          {
            "label": "Famille et enfants",
            "amount": 66711400000
          },
          {
            "label": "Chômage",
            "amount": 48520900000
          },
          {
            "label": "Survivants",
            "amount": 40608300000
          },
          {
            "label": "Exclusion sociale n.c.a.",
            "amount": 36460800000
          },
          {
            "label": "Logement",
            "amount": 21146700000
          },
          {
            "label": "Protection sociale n.c.a.",
            "amount": 3727600000
          }
        ]
      },
      {
        "key": "GF07",
        "label": "Santé",
        "amount": 261156300000,
        "children": [
          {
            "label": "Services hospitaliers",
            "amount": 109338100000
          },
          {
            "label": "Services ambulatoires",
            "amount": 91789000000
          },
          {
            "label": "Produits, appareils et matériels médicaux",
            "amount": 43714600000
          },
          {
            "label": "Services de santé publique",
            "amount": 7958300000
          },
          {
            "label": "R & D dans le domaine de la santé",
            "amount": 6708300000
          },
          {
            "label": "Santé n.c.a.",
            "amount": 1647900000
          }
        ]
      },
      {
        "key": "GF01",
        "label": "Services publics généraux",
        "amount": 181103200000,
        "children": [
          {
            "label": "Opérations concernant la dette publique",
            "amount": 58870200000
          },
          {
            "label": "Services généraux",
            "amount": 53780400000
          },
          {
            "label": "Fonctionnement des organes exécutifs et législatifs, affaires financières et fiscales, affaires étrangères",
            "amount": 42818400000
          },
          {
            "label": "Recherche fondamentale",
            "amount": 19880500000
          },
          {
            "label": "Aide économique extérieure",
            "amount": 4880900000
          },
          {
            "label": "Services généraux des administrations publiques n.c.a.",
            "amount": 866600000
          },
          {
            "label": "R & D concernant des services généraux des administrations publiques",
            "amount": 6100000
          },
          {
            "label": "Transferts de caractère général entre administrations publiques",
            "amount": 100000
          }
        ]
      },
      {
        "key": "GF04",
        "label": "Action économique",
        "amount": 166072800000,
        "children": [
          {
            "label": "Transports",
            "amount": 60688900000
          },
          {
            "label": "Tutelle de l'économie générale, des échanges et de l'emploi",
            "amount": 45256900000
          },
          {
            "label": "R & D concernant les affaires économiques",
            "amount": 21428700000
          },
          {
            "label": "Combustibles et énergie",
            "amount": 15460800000
          },
          {
            "label": "Autres branches d'activité",
            "amount": 11183000000
          },
          {
            "label": "Agriculture, sylviculture, pêche et chasse",
            "amount": 6198700000
          },
          {
            "label": "Affaires économiques n.c.a.",
            "amount": 2609300000
          },
          {
            "label": "Industries extractives et manufacturières, construction",
            "amount": 1625400000
          },
          {
            "label": "Communications",
            "amount": 1621100000
          }
        ]
      },
      {
        "key": "GF09",
        "label": "Éducation",
        "amount": 148639600000,
        "children": [
          {
            "label": "Enseignement secondaire",
            "amount": 63778900000
          },
          {
            "label": "Enseignement préélémentaire et primaire",
            "amount": 42176400000
          },
          {
            "label": "Services annexes à l'enseignement",
            "amount": 20022900000
          },
          {
            "label": "Enseignement supérieur",
            "amount": 12307900000
          },
          {
            "label": "Enseignement non défini par niveau",
            "amount": 8622300000
          },
          {
            "label": "Enseignement postsecondaire non supérieur",
            "amount": 1156400000
          },
          {
            "label": "Enseignement n.c.a.",
            "amount": 574700000
          }
        ]
      },
      {
        "key": "GF02",
        "label": "Défense",
        "amount": 54199000000,
        "children": [
          {
            "label": "Défense militaire",
            "amount": 47701900000
          },
          {
            "label": "Défense n.c.a.",
            "amount": 2580000000
          },
          {
            "label": "Aide militaire à des pays étrangers",
            "amount": 2006600000
          },
          {
            "label": "R & D concernant la défense",
            "amount": 1682000000
          },
          {
            "label": "Défense civile",
            "amount": 228600000
          }
        ]
      },
      {
        "key": "GF03",
        "label": "Sécurité et justice",
        "amount": 52113000000,
        "children": [
          {
            "label": "Services de police",
            "amount": 28896200000
          },
          {
            "label": "Tribunaux",
            "amount": 8295000000
          },
          {
            "label": "Services de protection civile",
            "amount": 7937400000
          },
          {
            "label": "Administration pénitentiaire",
            "amount": 5119800000
          },
          {
            "label": "Ordre et sécurité publics n.c.a.",
            "amount": 1864600000
          }
        ]
      },
      {
        "key": "GF08",
        "label": "Culture, sport et loisirs",
        "amount": 43067600000,
        "children": [
          {
            "label": "Services culturels",
            "amount": 18963000000
          },
          {
            "label": "Services récréatifs et sportifs",
            "amount": 15568600000
          },
          {
            "label": "Services de radiodiffusion, de télévision et d'édition",
            "amount": 7560400000
          },
          {
            "label": "Culte et autres services communautaires",
            "amount": 744200000
          },
          {
            "label": "Loisirs, culture et culte n.c.a.",
            "amount": 231500000
          }
        ]
      },
      {
        "key": "GF06",
        "label": "Logement et cadre de vie",
        "amount": 42128600000,
        "children": [
          {
            "label": "Équipements collectifs",
            "amount": 27229900000
          },
          {
            "label": "Logements",
            "amount": 8415000000
          },
          {
            "label": "Alimentation en eau",
            "amount": 2847800000
          },
          {
            "label": "Éclairage public",
            "amount": 1819200000
          },
          {
            "label": "Logement et équipements collectifs n.c.a.",
            "amount": 1816700000
          }
        ]
      },
      {
        "key": "GF05",
        "label": "Environnement",
        "amount": 30285100000,
        "children": [
          {
            "label": "Gestion des déchets",
            "amount": 15862400000
          },
          {
            "label": "Gestion des eaux usées",
            "amount": 5200000000
          },
          {
            "label": "Lutte contre la pollution",
            "amount": 4268600000
          },
          {
            "label": "R & D dans le domaine de la protection de l'environnement",
            "amount": 1759800000
          },
          {
            "label": "Préservation de la diversité biologique et protection de la nature",
            "amount": 1678400000
          },
          {
            "label": "Protection de l'environnement n.c.a.",
            "amount": 1515900000
          }
        ]
      }
    ]
  },
  "sources": [
    {
      "ref": "lfi-2026",
      "title": "Loi de finances pour 2026 (LOI n° 2026-103 du 19 février 2026)",
      "publisher": "Légifrance / Ministère de l'Économie",
      "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053508155",
      "figures": "Déficit public 152,5 milliards d'euros (objectif ramené à 4,7 % du PIB après 5,4 % en 2025) ; dépenses publiques +1,7 % en valeur (≈ 56,4 % du PIB) ; prélèvements obligatoires +43 milliards d'euros soit +3,3 % (≈ 43,9 % du PIB)."
    },
    {
      "ref": "plf-2026-budget-vert",
      "title": "PLF 2026 - Budget vert (dépenses de l'État par mission)",
      "publisher": "Ministère de l'Économie — data.economie.gouv.fr",
      "url": "https://data.economie.gouv.fr/explore/dataset/plf-2026-budget-vert/",
      "api": "https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/plf-2026-budget-vert/records",
      "figures": "Crédits budgétaires PLF 2026 (CP) agrégés par mission — total ≈ 479,5 milliards d'euros."
    },
    {
      "ref": "insee-dette-2026",
      "title": "Dette publique — comptes nationaux trimestriels",
      "publisher": "INSEE",
      "url": "https://www.insee.fr/fr/statistiques/9010340",
      "figures": "Dette publique 3 536 milliards d'euros, soit 117,5 % du PIB à fin T1 2026 (≈ 3 547 milliards d'euros mi-2026)."
    }
  ]
};
