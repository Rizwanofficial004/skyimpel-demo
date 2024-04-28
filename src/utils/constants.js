import { Briefcase, CircleCheckFull, Polygon1, Polygon2, User } from "./imagesUrl";

export const joinUsCardsData = [
  {
    id: 1,
    active: true,
    polygon: Polygon1,
    polygonChild: User,
    title: 'Individual',
    text: 'Personal account to manage all you activities.',
  },
  {
    id: 2,
    active: false,
    polygon: Polygon2,
    polygonChild: Briefcase,
    title: 'Business',
    text: 'Own or belong to a company, this is for you.',
  }
]

export const userLoginFormInfo = [
  {
    type: 'email',
    name: 'email',
    inputTitle: 'Email address*',
    placeholder: 'Enter email address',
    required: true
  },
  {
    type: 'password',
    name: 'password',
    inputTitle: 'Password*',
    placeholder: 'Enter password',
    required: true
  },
]

export const userRegistrationStep1 = [
  {
    type: 'text',
    name: 'fullName',
    inputTitle: 'Your fullname*',
    placeholder: 'Steve Balbar',
    required: true
  },
  {
    type: 'email',
    name: 'email',
    inputTitle: 'Email address*',
    placeholder: 'Enter email address',
    required: true
  },
  {
    type: 'password',
    name: 'password',
    inputTitle: 'Create password*',
    placeholder: 'Create new password',
    required: true
  },
]

export const userRegistrationStep2 = [
  {
    type: 'text',
    name: 'address',
    inputTitle: 'Your address',
    placeholder: 'Please enter address',
    required: false
  }
]

export const userRegistrationStep3 = [
  {
    type: 'text',
    name: 'bankVerificationNo',
    inputTitle: 'Bank verification number (BVN)',
    placeholder: '090912345567',
    required: false,
    iconRight: CircleCheckFull
  },
]