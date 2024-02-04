import { slugify } from '@utils'

const topics = ['Holiday', 'Mountains', 'Korean fashion']

const appData = {
  routes: Array.from({ length: topics.length }, (_, i) => ({
    id: i,
    url: slugify(topics[i]),
    title: topics[i],
    target: '_self',
  })),
  resultsPerPage: 12,
  initImages: [
    {
      id: 1,
      src: 'https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg',
      alt: 'alt',
    },
    {
      id: 2,
      src: 'https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg',
      alt: 'alt',
    },
    {
      id: 3,
      src: 'https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg',
      alt: 'alt',
    },
    {
      id: 4,
      src: 'https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg',
      alt: 'alt',
    },
  ],
}

export default appData
