/* Per-concept, per-field examples: FIELD_EXAMPLES[field][week][concept heading].
   WRITING RULES (Raymond): accurate, robust, nuanced, DISTINCT for all 13 fields, written
   fluidly in the vocabulary of the program itself, never templated; every empirical claim cited. */
window.BFS218_FIELD_EXAMPLES = {
  'Health and Wellness': {
    2: {
      'Structural and systemic racism': 'Think about the extra-care programs your future patients will depend on: care coordination, chronic disease management, follow-up outreach. In United States hospitals, the algorithm deciding who was referred into those programs scored patients by what their care had cost before, treating spending as a proxy for clinical need. But where a health system has historically underspent on Black patients carrying the same disease burden, that proxy reads undertreatment as wellness: equally sick Black patients scored healthier and missed the referral. Repairing that one design choice would have raised the share of Black patients flagged for extra care from roughly 18 to 47 percent. Nobody was biased at the bedside; the harm was written into the risk score itself (Obermeyer et al., 2019).'
    }
  },
  'Business': {
    2: {
      'Structural and systemic racism': 'Recruitment is a pipeline problem, so Amazon built a model to rank incoming resumes and protect recruiter time. Trained on ten years of its own hiring data, the tool learned what past success looked like at a male-dominated company and started penalizing resumes containing the word women\'s, as in women\'s chess club captain, and downgrading graduates of women\'s colleges. No manager wrote discriminate into the requirements; the training data carried the firm\'s history into the screen, and the project was scrapped once engineers could not guarantee it had stopped finding proxies. When your KPI is fit with the past, the model inherits the past\'s exclusions (Dastin, 2018).'
    }
  },
  'Law, Administration and Public Safety': {
    2: {
      'Structural and systemic racism': 'Bail, sentencing, and supervision decisions increasingly arrive with a risk score attached to the file. COMPAS, used in courtrooms across the United States, was audited on more than 7,000 defendants in Broward County, Florida: Black defendants who did not reoffend were nearly twice as likely as white defendants to have been misclassified as high risk, while white defendants who did reoffend were more often mislabelled low risk. The instrument never asks about race, but its inputs, prior contacts, neighbourhood, employment, carry the history of policing itself. An officer or judge can act in good faith on the score and still deliver the disparity (Angwin et al., 2016).'
    }
  },
  'Information Technology': {
    2: {
      'Structural and systemic racism': 'You will ship systems built on pretrained models and benchmark suites you did not assemble. When commercial facial analysis systems from IBM, Microsoft, and Face++ were benchmarked on a balanced dataset, error rates on lighter-skinned men fell below one percent while darker-skinned women were misclassified at rates up to 34.7 percent, a gap traced to unrepresentative training data and unaudited evaluation sets. Nothing in the code says race; the disparity lives in the data pipeline, the test coverage, and the definition of done that let it ship. The lesson for your practice: an untested demographic is an untested feature (Buolamwini and Gebru, 2018).'
    }
  },
  'Education, Community and Social Services': {
    2: {
      'Structural and systemic racism': 'When exams were cancelled in 2020, England replaced them with an algorithm that standardized teacher predictions using each school\'s historical results. The design sounded fair, until nearly 40 percent of grades came in below teacher predictions, with the harshest downgrades landing on high-achieving students in historically low-performing state schools, while small private-school classes kept their inflated predictions. A student\'s mark was capped by the past performance of a school they had no part in. Public outcry forced a full reversal within days. For anyone entering education or community work, this is the pattern to watch: standardizing on history penalizes the students history already underserved (Ofqual A-level grading, 2020).'
    }
  },
  'Media and Communications': {
    2: {
      'Structural and systemic racism': 'In advertising, delivery is the message. United States housing regulators charged Facebook after its systems let housing advertisers exclude audiences by ethnic affinity, and researchers then showed something subtler: even with neutral targeting, the delivery algorithm itself skewed who saw housing and employment ads along race and gender lines, because it optimized for engagement patterns that carry demographic history. No copywriter chose an audience by race; the optimizer did it as a side effect of relevance. In your field, that means the audit cannot stop at the creative brief; it has to follow the campaign into delivery (Ali et al., 2019; HUD v. Facebook, 2019).'
    }
  },
  'Engineering Technology': {
    2: {
      'Structural and systemic racism': 'A pulse oximeter is a straightforward piece of optical engineering: shine light through tissue, read oxygen saturation. But the devices were calibrated on predominantly light-skinned populations, and a large clinical comparison found they overestimated oxygen levels in Black patients nearly three times as often as in white patients, reporting a safe reading while blood gases showed hidden hypoxemia. During a respiratory pandemic, that calibration choice decided who looked sick enough to treat. This is what structural harm looks like in engineering: a spec, a test population, a tolerance band, each defensible alone, together producing a device that works worse on darker skin (Sjoding et al., 2020).'
    }
  },
  'Science': {
    2: {
      'Structural and systemic racism': 'Modern genomics rests on reference data, and that foundation is skewed: the great majority of genome-wide association studies have been run on participants of European ancestry, which means polygenic risk scores and some diagnostic references transfer poorly to everyone else. A lab can follow protocol perfectly and still produce results that are less accurate for African, Indigenous, and Asian-ancestry patients, because the evidence base itself was sampled unequally. Structural racism in science rarely looks like a biased scientist; it looks like a reference panel, a cohort, a funding history that decided whose biology counts as baseline (Popejoy and Fullerton, 2016).'
    }
  },
  'Aviation': {
    2: {
      'Structural and systemic racism': 'Airports are becoming face-first: bag drop, security, and boarding gates increasingly match travellers against passport photos. The United States national standards body tested nearly 200 face recognition algorithms and found false positive rates were often one to two orders of magnitude higher for West and East African and East Asian faces than for Eastern European faces, with the highest false match rates clustering on women from those groups. In an aviation setting a false match is a secondary screening, a missed connection, a pattern of who gets pulled aside. The gate agent follows procedure; the disparity boarded with the algorithm (Grother et al., NIST, 2019).'
    }
  },
  'Hospitality and Tourism': {
    2: {
      'Structural and systemic racism': 'Hospitality runs on bookings, reviews, and host discretion, and each can carry bias at scale. In a field experiment on Airbnb, identical booking requests were sent from accounts differing only in the guest\'s name: requests from names commonly perceived as African American were about 16 percent less likely to be accepted than identical requests from white-sounding names, across hosts of all backgrounds and price points. No platform policy said no; a thousand individual judgment calls, aggregated by the platform\'s design, produced a measurable barrier to travel. The operational question for your field is what the booking flow does to make discretion accountable (Edelman, Luca, and Svirsky, 2017).'
    }
  },
  'Creative Arts, Animation and Design': {
    2: {
      'Structural and systemic racism': 'Design defaults decide who renders well. Twitter\'s automatic photo cropping used a saliency model to choose which part of an image to preview, and the company\'s own audit, run after users demonstrated the pattern, confirmed the crop favoured lighter-skinned faces over darker-skinned ones in paired tests, so the platform retired the automatic crop. Upstream of that sit the training corpora and the century of film stock and lighting practice calibrated to light skin that your discipline inherited. For a working designer or animator the lesson is concrete: test your pipeline on the full range of skin tones, or the tool will quietly art-direct for you (Yee et al., 2021).'
    }
  },
  'Fashion and Esthetics': {
    2: {
      'Structural and systemic racism': 'In 2016 an international beauty contest was judged by an algorithm trained to assess faces, marketed as objectivity itself. Of forty-four winners drawn from six thousand entrants across one hundred countries, nearly all were white, a handful were Asian, and one had visibly dark skin, because the training corpus barely contained darker faces and the model learned a narrow standard as if it were beauty. Your industry already knows this pattern from shade ranges built around lighter skin and sample sizing built around one body; the algorithm did not invent the bias, it automated the industry\'s old defaults and called them neutral (Levin, 2016).'
    }
  },
  'Liberal Arts and University Transfers': {
    2: {
      'Structural and systemic racism': 'Speech recognition now sits inside transcription services, voice assistants, and the tools universities use for lectures and interviews. When researchers tested five major commercial speech systems, average word error rates for Black speakers were roughly double those for white speakers, driven largely by the systems\' unfamiliarity with African American English, a rule-governed variety the training data simply lacked. A student dictating an essay or being auto-transcribed in a seminar inherits that gap as garbled quotes and lost participation. Language itself became the sorting mechanism, which is precisely the kind of structure this course trains you to see and name (Koenecke et al., 2020).'
    }
  }
};
