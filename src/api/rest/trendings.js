import axios from 'axios'
import { makeRequest } from '../requests'

const addStartingZero = (value) => value < 10 ? `0${value}` : value

export const getTrendings = (lang = 'javascript') => {
  const params = new URLSearchParams()
  const weeksMS = 7 * 24 * 60 * 60 * 1000
  const weekAgo = new Date(Date.now() - weeksMS)

  const formattedDate = [
    weekAgo.getFullYear(),
    addStartingZero(weekAgo.getMonth() + 1),
    addStartingZero(weekAgo.getDate())
  ].join('-')

  params.append('order', 'desc')
  params.append('sort', 'stars')
  params.append('per_page', 10)
  params.append('q', `language:${lang} created:>${formattedDate}`)

  return makeRequest({
    url: `/search/repositories?${params}`
  })
}

export const starRepo = ({ owner, repo }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put'
})

export const unstarRepo = ({ owner, repo }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete'
})

export const getUser = () => makeRequest({
  url: '/user'
})

export const getStarredRepos = (id) => makeRequest({
  url: `/users/${id}/starred`
})

export const getIssuesByRepo = ({ owner, repo }) => makeRequest({
  url: `/repos/${owner}/${repo}/issues`
})

export const getFollowing = () => makeRequest({
  url: '/user/following'
})

export const getToken = (params) => axios.post('https://webdev-api.loftschool.com/github', params)

export const followUser = (username) => makeRequest({
  url: `/user/following/${username}`,
  method: 'put',
  headers: {
    'content-length': 0
  }
})

export const unfollowUser = (username) => makeRequest({
  url: `/user/following/${username}`,
  method: 'delete'
})
