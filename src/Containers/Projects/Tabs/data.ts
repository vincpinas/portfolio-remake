import { ParsedProject } from '../../../interfaces';

const projects: ParsedProject[] = [
  {
    id: 1,
    title: 'Manga.ly',
    introduction: 'Simple manga reading/sharing website for casuals and manga addicted.',
    status: 1,
    description: '',
    img_src: '',
    learned: '',
    links: { github: '', live: '#' },
    skills: ['React', 'PHP'],
    categories: ['side', 'webapp'],
    team: 'Solo'
  },
  {
    id: 2,
    title: 'TS Chat',
    introduction: 'A web chat app to chat around with your friends',
    status: 1,
    description: 'In this project I made use of the lightweight Socket.io with React.js to make a simple discord like chat app website.',
    img_src: '',
    learned: 'I learned how to work with simple backend JS in Node and setup a HTTP Server, I also learned how emit and receive events in Socket.io. I feel like I also bolstered my React knowledge',
    links: { github: 'https://github.com/vincpinas/TSChat', live: '#' },
    skills: ['Node', 'React', 'Socket.io', 'TypeScript', 'Express'],
    categories: ['side', 'chatapp'],
    team: 'Solo'
  },
  {
    id: 3,
    title: 'Stedelijk Events',
    introduction: 'A event promotion site for Stedelijk Museum in Amsterdam',
    status: 1,
    description: 'This school project started out by choosing a team to work with and then research the client as a group, after a 2 week period of researching we started with development in Wordpress',
    img_src: '',
    learned: 'In this project I learned the basics of working with wordpress and I learned how to design a website mobile first in CSS for making the site responsive.',
    links: { github: 'https://github.com/vincpinas/Stedelijk-Museum-BO', live: '#' },
    skills: ['PHP', 'SCSS', 'WordPress'],
    categories: ['work', 'prototype'],
    team: 'Collaboration'
  },
  {
    id: 4,
    title: 'Transformers',
    introduction: 'A safe community for young adults with mental health problems.',
    status: 1,
    img_src: '',
    description: 'This is the first ever project I made for a real client, this is also the first mid-sized project I made with Laravel. The idea behind this project was to create a platform for young adults to reach out to each other and be able to give out advice, both anonymously and with a name.',
    learned: 'In this project I learned alot about Laravel. How to easily setup a login system with Breeze, how to play around with the Auth object, how to setup a nice view with Blade and the Eloquent basics like making a post through user input.',
    links: { github: 'https://github.com/vincpinas/transformers.Community/', live: 'https://vincent.student-sd.site/' },
    skills: ['Laravel', 'Blade', 'SQL', 'JavaScript'],
    categories: ['work', 'working prototype', 'online community'],
    team: 'Solo',
  },
  {
    id: 5,
    title: 'Kennishub',
    introduction: '',
    status: 1,
    description: 'In this project I teamed up with two other interns at my internship to create a working prototype for a online platform where students, teacher and experts in the field can freely share their knowledge.',
    img_src: '',
    learned: 'In this project I learned how to work with professional level react and redux during my internship at UncInc. Further more I learned how to work with tickets and in a SCRUM environment.',
    links: { github: '#', live: '#' },
    skills: ['React', 'SCSS', 'Redux'],
    categories: ['work', 'working prototype'],
    team: 'Collaboration'
  },
]

export default projects;