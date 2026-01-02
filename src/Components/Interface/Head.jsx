import React from 'react'

const Head = ({ title, description }) => {
  React.useEffect(() => {
    console.debug('Head useEffect', { title, description })
    document.title = title ? `${title} | Road` : 'Road'

    const meta = document.querySelector("meta[name='description']")
    if (meta) {
      meta.setAttribute('content', description || '')
    } else if (description) {
      const newMeta = document.createElement('meta')
      newMeta.name = 'description'
      newMeta.content = description
      document.head.appendChild(newMeta)
    }
  }, [title, description])

  return null
}

export default Head
