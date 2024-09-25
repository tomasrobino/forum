export interface category {
  _id: string,
  title: string,
  description: string,
  lastPost: string,
  timestamp: Date,
  user: string,
  topics: number,
  posts: number
  urlName: string
}

export interface reply {
  text: string,
  createdAt: Date,
  updatedAt: Date,
  author: string,
  _id: string
}

export interface post {
  _id: string
  title: string,
  text: string,
  createdAt: Date,
  updatedAt: Date,
  author: string,
  views: number,
  replyAmount: number,
  replies: reply[]
  category: string
}

export interface user {
  username: string,
  //Binary data representing avatar image
  avatar: string,
  posts: number,
  topics: number,
  profile: string
  createdAt: Date
}