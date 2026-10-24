import service1 from '../assets/images/service1.png';
import service2 from '../assets/images/service2.svg';
import service3 from '../assets/images/service3.svg';

import story1 from '../assets/images/story1.svg';
import story2 from '../assets/images/story2.svg';
import story3 from '../assets/images/story3.svg';

const text =
  'Teachers don’t get lost in the grid view and have a dedicated Podium space Teachers don’t get lost in the grid view and have a dedicated Podium space.';

export const servicesData = {
  id: 'services',
  title: 'Our Services',
  texts: [text],
  items: ['Personality Assessment', 'Skill Evaluations', 'Career Workshop'],
  images: [service1, service2, service3],
};

export const storiesData = {
  id: 'stories',
  title: 'Stories',
  texts: [text, text],
  items: ['Skill Evaluations', 'Career Workshop'],
  images: [story1, story2, story3],
  reverse: true,
};