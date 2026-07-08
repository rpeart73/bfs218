/* BFS218 experiments: predict, run, outcome, mirror, reflect.
   Every outcome is grounded in the week's taught readings; the mirror names
   the student's move, never the student. */
window.BFS218_EXPERIMENTS = {
  2: {
    title: 'Same file, two histories',
    setup: 'A screening rule reads two applications. They are identical in every way a person would check: same qualifications, same answers. File A carries an old flag from a database built years ago; File B carries none. The rule is brand new, and it treats every file by exactly the same steps.',
    commit: 'Before you run it: what does the rule do?',
    options: [
      { label: 'Both get through. The rule is new and neutral, so identical files get identical results.', lens: 'neutrality' },
      { label: 'File A is slowed or denied. The old flag rides along inside the neutral rule.', lens: 'outcome' },
      { label: 'File B gets extra checks. A file with no history looks riskier to a new system.', lens: 'unfamiliar' }
    ],
    outcome: {
      headline: 'File A is routed to DENIED.',
      body: 'The rule scored both files by the same steps, and that is exactly the problem: it read the old flag as a fact about the person instead of a fact about the old database. Nothing in the rule mentions race, history, or intent. The discrimination arrived in the data the rule trusted. This is what Week 2 calls engineered inequity and default discrimination: a neutral-looking process carrying an old pattern forward (Benjamin, 2019).'
    },
    mirrors: {
      neutrality: 'You trusted the rule because it was new and treated the files identically. That is the neutrality assumption: judging a system by its intentions and freshness instead of its inputs and outcomes. It is the most common way this kind of harm stays invisible, which is why Week 2 trains the opposite move (Benjamin, 2019).',
      outcome: 'You predicted the old flag would ride along, which is the Week 2 move working: judge the system by what it does, not what it claims. One caution for the rest of the course: assuming every system must be biased tells you nothing on its own. The finding is the mechanism, and here it was the inherited data, not the rule.',
      unfamiliar: 'You placed the risk on the file with no history, expecting the system to distrust what it had not seen. It did the reverse: it trusted the old record more than the blank one. Notice the pull to locate danger in the unfamiliar; systems usually encode the past they were fed, not the newcomers they meet (Benjamin, 2019).'
    },
    reflect: 'Where in your own field could an old flag ride along inside a neutral rule? One sentence.'
  },
  10: {
    title: 'Set the cutoff',
    setup: 'A support program has limited seats, and a prediction tool scores every student. Records above the line get a seat; records below it wait. The tool’s maker shipped it with the line at 71. You are the administrator today, and the line is yours to place.',
    commit: 'Where do you set the cutoff?',
    options: [
      { label: 'Lower it to 65. More students get through to support.', lens: 'inclusion' },
      { label: 'Keep it at 71. The maker set the default for a reason.', lens: 'default' },
      { label: 'Raise it to 78. Focus the seats on the clearest need the score can show.', lens: 'efficiency' }
    ],
    outcome: {
      headline: 'Whichever line you chose, the same thing happened just below it.',
      body: 'Two records sat just under your line. One score dipped in the term a parent was ill; one was dragged down by attendance from a long commute. The score cannot see either story, and the line cannot ask. And the maker’s 71 was set to fit the budget, not to measure need. A cutoff turns support into a gate: the number looks objective, but where the line sits is a judgment somebody made, exactly the gatekeeping pattern Week 10 examines in education (Bird, 2023).'
    },
    mirrors: {
      inclusion: 'You widened the gate. Notice the instinct that more inclusion fixes the tool: the records at 64 are still waiting, and the line is still blind to context. Moving a cutoff redistributes who is unseen; it does not teach the system to see. The Week 10 question is who reviews the line, not only where it sits.',
      default: 'You kept the maker’s number. That is the default-trust move from Week 4 returning: a shipped setting feels like a measured fact, and 71 was a budget decision wearing a number. Defaults are choices someone else made early; Week 10 asks who gets to challenge them.',
      efficiency: 'You tightened the line to concentrate on the clearest cases. That is the efficiency instinct: fewer weak positives, and more people the system never sees at all. Every cutoff optimizes for something; the experiment is asking you to notice what you were optimizing for, and who pays for it.'
    },
    reflect: 'Think of a cutoff in your own field, a score, a wait time, a quota. Who set it, and who reviews it? One sentence.'
  }
};
