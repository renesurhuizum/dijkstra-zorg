import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { sanityClient, CONTENT_QUERY } from './sanity'
import { CONTENT as FALLBACK } from '../content'

type SiteContent = typeof FALLBACK

const ContentContext = createContext<SiteContent>(FALLBACK)

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(FALLBACK)

  useEffect(() => {
    sanityClient.fetch<SiteContent>(CONTENT_QUERY).then((data) => {
      if (data) setContent(data)
    })
  }, [])

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent(): SiteContent {
  return useContext(ContentContext)
}
