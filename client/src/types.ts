export interface category {
  _id: string,
  title: string,
  description: string,
  lastPost: string,
  timestamp: string,
  user: string,
  topics: number,
  posts: number
  urlName: string
}

export interface reply {
  text: string,
  createdAt: string,
  updatedAt: string,
  author: string,
  _id: string
}

export interface post {
  _id: string
  title: string,
  text: string,
  createdAt: string,
  updatedAt: string,
  author: string,
  views: number,
  replyAmount: number,
  replies: reply[]
  category: string
}

export interface user {
  username: string,
  //Binary data representing avatar image
  avatar: Buffer,
  posts: number,
  topics: number,
  createdAt: string
}