export type CategoryId =
  | 'icebreaker'
  | 'wellbeing'
  | 'status'
  | 'wins_challenges'
  | 'goals'
  | 'feedback'
  | 'team'
  | 'manager_company'
  | 'remote'
  | 'wrap_up';

export interface Category {
  id: CategoryId;
  label: string;
}

export interface Question {
  id: string;
  category: CategoryId;
  text: string;
}

export const CATEGORIES: Category[] = [
  { id: 'icebreaker', label: 'Icebreaker & Rapport' },
  { id: 'wellbeing', label: 'Check-in & Wellbeing' },
  { id: 'status', label: 'Current Work & Status' },
  { id: 'wins_challenges', label: 'Wins & Challenges' },
  { id: 'goals', label: 'Goals & Career Development' },
  { id: 'feedback', label: 'Feedback & Performance' },
  { id: 'team', label: 'Team & Collaboration' },
  { id: 'manager_company', label: 'Manager & Company Feedback' },
  { id: 'remote', label: 'Remote & Hybrid Work' },
  { id: 'wrap_up', label: 'Wrap-Up & Action Items' },
];

export const QUESTIONS: Question[] = [
  // 1. Icebreaker & Rapport
  { id: 'icebreaker_1', category: 'icebreaker', text: 'What’s a recent highlight from your life outside of work?' },
  { id: 'icebreaker_2', category: 'icebreaker', text: 'If this past week had a weather forecast, how would you describe it?' },
  { id: 'icebreaker_3', category: 'icebreaker', text: 'What’s something you’re looking forward to in the next few weeks?' },
  { id: 'icebreaker_4', category: 'icebreaker', text: 'What hobby or interest have you been enjoying lately?' },
  { id: 'icebreaker_5', category: 'icebreaker', text: 'Has anything fun or memorable happened since we last spoke?' },
  { id: 'icebreaker_6', category: 'icebreaker', text: 'What’s something you’ve read, watched, or listened to recently that stuck with you?' },
  { id: 'icebreaker_7', category: 'icebreaker', text: 'If you could take next Friday completely off, how would you spend it?' },

  // 2. Check-in & Wellbeing
  { id: 'wellbeing_1', category: 'wellbeing', text: 'How are you feeling about work and life right now?' },
  { id: 'wellbeing_2', category: 'wellbeing', text: 'On a scale of 1–10, how sustainable does your current workload feel?' },
  { id: 'wellbeing_3', category: 'wellbeing', text: 'What has been draining your energy recently, and what’s been giving it back?' },
  { id: 'wellbeing_4', category: 'wellbeing', text: 'How is your work-life balance feeling this week?' },
  { id: 'wellbeing_5', category: 'wellbeing', text: 'Is there anything personal or work-related you’d like me to be aware of?' },
  { id: 'wellbeing_6', category: 'wellbeing', text: 'When did you last take real time off, and when is the next break on your calendar?' },
  { id: 'wellbeing_7', category: 'wellbeing', text: 'What’s one thing I could take off your plate this week?' },
  { id: 'wellbeing_8', category: 'wellbeing', text: 'Are you getting enough uninterrupted focus time, or is your week mostly meetings?' },

  // 3. Current Work & Status
  { id: 'status_1', category: 'status', text: 'What are your top priorities between now and our next 1:1?' },
  { id: 'status_2', category: 'status', text: 'What took most of your time this past week, and did it feel like the right focus?' },
  { id: 'status_3', category: 'status', text: 'Which project are you most excited about right now?' },
  { id: 'status_4', category: 'status', text: 'Is there anything you’re working on that you’re not sure really matters?' },
  { id: 'status_5', category: 'status', text: 'Are any responsibilities on your plate that you think someone else should own?' },
  { id: 'status_6', category: 'status', text: 'What’s blocking you right now that you haven’t asked for help with yet?' },
  { id: 'status_7', category: 'status', text: 'If you had to drop one thing from your plate this week, what would it be?' },
  { id: 'status_8', category: 'status', text: 'What decision are you waiting on from someone else?' },

  // 4. Wins & Challenges
  { id: 'wins_challenges_1', category: 'wins_challenges', text: 'What’s a recent win you’re proud of that I might not know about?' },
  { id: 'wins_challenges_2', category: 'wins_challenges', text: 'What has felt most frustrating or challenging lately?' },
  { id: 'wins_challenges_3', category: 'wins_challenges', text: 'Are there small annoyances that keep showing up and never get fixed?' },
  { id: 'wins_challenges_4', category: 'wins_challenges', text: 'Do you see any risks on the horizon that we haven’t talked about yet?' },
  { id: 'wins_challenges_5', category: 'wins_challenges', text: 'If you had an uninterrupted day tomorrow, what would you tackle first?' },
  { id: 'wins_challenges_6', category: 'wins_challenges', text: 'What did you learn from something that didn’t go the way you hoped?' },
  { id: 'wins_challenges_7', category: 'wins_challenges', text: 'Whose work deserves more recognition than it’s been getting?' },

  // 5. Goals & Career Development
  { id: 'goals_1', category: 'goals', text: 'When you picture yourself 2–3 years from now, what kind of work do you hope to be doing?' },
  { id: 'goals_2', category: 'goals', text: 'What skills or experiences would you most like to develop over the next year?' },
  { id: 'goals_3', category: 'goals', text: 'Are there stretch projects or responsibilities you’d like to take on?' },
  { id: 'goals_4', category: 'goals', text: 'How well does your current role support your longer-term career goals?' },
  { id: 'goals_5', category: 'goals', text: 'Who, inside or outside the company, would you like to learn from — and about what?' },
  { id: 'goals_6', category: 'goals', text: 'Which part of your job would you happily do more of, and which would you hand off tomorrow?' },
  { id: 'goals_7', category: 'goals', text: 'What would need to be true for the next six months to feel like real progress for you?' },
  { id: 'goals_8', category: 'goals', text: 'Is there a role or a person here whose job you’d want in a few years?' },

  // 6. Feedback & Performance
  { id: 'feedback_1', category: 'feedback', text: 'What do you feel you’ve been doing particularly well recently?' },
  { id: 'feedback_2', category: 'feedback', text: 'Where do you see room for improvement in your work, and how can I help?' },
  { id: 'feedback_3', category: 'feedback', text: 'What expectations for your role or performance could be clearer?' },
  { id: 'feedback_4', category: 'feedback', text: 'What feedback have you heard — from me or from others — that you’d like to unpack together?' },
  { id: 'feedback_5', category: 'feedback', text: 'How do you prefer to receive feedback and recognition?' },
  { id: 'feedback_6', category: 'feedback', text: 'Is there any feedback you’ve been sitting on because the timing never felt right?' },
  { id: 'feedback_7', category: 'feedback', text: 'What would a genuinely great next quarter look like for you, in concrete terms?' },

  // 7. Team & Collaboration
  { id: 'team_1', category: 'team', text: 'How are things going with the people you work most closely with?' },
  { id: 'team_2', category: 'team', text: 'Are there any interactions or team dynamics you’d like to talk through?' },
  { id: 'team_3', category: 'team', text: 'Do our communication patterns help you do your best work?' },
  { id: 'team_4', category: 'team', text: 'Are there cross-functional teams you’d like to collaborate with more?' },
  { id: 'team_5', category: 'team', text: 'What’s one change that would improve how the team works together?' },
  { id: 'team_6', category: 'team', text: 'Who on the team has helped you recently in a way worth calling out?' },
  { id: 'team_7', category: 'team', text: 'Which of our recurring meetings would you cancel if it were entirely up to you?' },

  // 8. Manager & Company Feedback
  { id: 'manager_company_1', category: 'manager_company', text: 'What’s one thing I could do differently that would make your work life better?' },
  { id: 'manager_company_2', category: 'manager_company', text: 'Do you get enough context about where the company is heading?' },
  { id: 'manager_company_3', category: 'manager_company', text: 'How aligned do you feel with the company’s current direction and priorities?' },
  { id: 'manager_company_4', category: 'manager_company', text: 'Is there a recent decision you wish you’d been more involved in or informed about?' },
  { id: 'manager_company_5', category: 'manager_company', text: 'If you were in my role, what’s one change you’d make?' },
  { id: 'manager_company_6', category: 'manager_company', text: 'Am I giving you too much direction, too little, or about right?' },
  { id: 'manager_company_7', category: 'manager_company', text: 'What do you wish leadership understood about the day-to-day of your work?' },

  // 9. Remote & Hybrid Work
  { id: 'remote_1', category: 'remote', text: 'What’s most challenging about working remotely or hybrid for you right now?' },
  { id: 'remote_2', category: 'remote', text: 'Do you get enough informal contact with the team, or is everything a scheduled meeting?' },
  { id: 'remote_3', category: 'remote', text: 'When you’re stuck, do you know who to reach out to and how?' },
  { id: 'remote_4', category: 'remote', text: 'Are our meeting times and channels working across time zones and schedules?' },
  { id: 'remote_5', category: 'remote', text: 'Is anything about our remote setup wearing on you over time?' },
  { id: 'remote_6', category: 'remote', text: 'Does your workspace at home actually work for you, or are you making do?' },
  { id: 'remote_7', category: 'remote', text: 'Do the in-office days feel worth the trip? What would make them worth it?' },

  // 10. Wrap-Up & Action Items
  { id: 'wrap_up_1', category: 'wrap_up', text: 'What’s one concrete action you’ll take based on today’s conversation?' },
  { id: 'wrap_up_2', category: 'wrap_up', text: 'What’s one concrete action I should take to support you before our next 1:1?' },
  { id: 'wrap_up_3', category: 'wrap_up', text: 'Are there topics we didn’t get to that you’d like on the next agenda?' },
  { id: 'wrap_up_4', category: 'wrap_up', text: 'What would make our next 1:1 feel especially valuable to you?' },
  { id: 'wrap_up_5', category: 'wrap_up', text: 'Based on today, what should we stop, start, or keep doing?' },
  { id: 'wrap_up_6', category: 'wrap_up', text: 'Did we spend today’s time on what mattered most to you?' },
  { id: 'wrap_up_7', category: 'wrap_up', text: 'Is there anything we opened up today that we should come back to properly?' },
];

export const CATEGORY_BY_ID: Record<CategoryId, Category> = CATEGORIES.reduce(
  (acc, category) => {
    acc[category.id] = category;
    return acc;
  },
  {} as Record<CategoryId, Category>,
);
