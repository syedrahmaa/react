import React, { Component } from 'react'
import CV from 'react-cv'
import './App.css';
class Example extends Component {
  render () {
    return (
      <CV

personalData: {{
  name: 'syed.Rahmaa',
  title: 'student',
  contacts: [
    { type: 'email', value: 'syedrahmaa1803@gmail.com' },
    { type: 'phone', value: '9876543210' },
    { type: 'location', value: 'Nellore' },
  ]
},
sections: [
  {
    type: 'text',
    title: 'Career Objective',
    content: "To secure a challenging position in a reputable organization to expand my learnings,knowledge,and skills."
    
  },
  />
  {
    type: 'common-list',
    title: 'Education',
    icon: 'graduation',
    items: [
      {
        title: 'Computer science Engineering (CS)',
        authority: 'University',
        rightSide: '2018 - 2022'
      },
      {
        title: 'Intermediate',
        authority: 'Narayana College',
        rightSide: '2015 - 2018'
      }
    ]
  },
      
  {
    type: 'common-list',
    title: 'Languages',
    icon: 'language',
    items: [
      {
        authority: 'English',
        authorityMeta: 'Professional'
      },
      {
        authority: 'Spanish',
        authorityMeta: 'Beginner'
      }
    ]
  },
  {
    type: 'tag-list',
    title: 'Skills Proficiency',
    icon: 'rocket',
    items: ['React', 'Javascript', 'CSS', 'SQL', 'python', 'java']
  },
  {
    type: 'tag-list',
    title: 'Hobbies & Interests',
    icon: 'cubes',
    items: ['Photography', 'Poetry']
  }
]
}
