export interface category {
  title: string,
  desc: string,
  lastPost: string,
  timestamp: string,
  user: string,
  topics: number,
  posts: number
  urlName: string
}

export interface reply {
  title: string,
  text: string,
  timestamp: string,
  author: string,
}

export interface post {
  id: number
  title: string,
  content: string,
  timestamp: string,
  author: string,
  views: number,
  replyAmount: number,
  replies: reply[]
}