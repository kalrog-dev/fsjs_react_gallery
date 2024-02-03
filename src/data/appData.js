import { slugify } from '@utils'

const topics = ['Holiday', 'Mountains', 'Korean fashion']

const appData = {
  routes: Array.from({ length: topics.length }, (_, i) => ({
    id: i,
    url: slugify(topics[i]),
    title: topics[i],
    target: '_self'
  }))
}

export default appData
