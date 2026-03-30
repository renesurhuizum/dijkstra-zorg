import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { sanityClient, CONTENT_QUERY } from './sanity'
import { CONTENT as FALLBACK } from '../content'

type SiteContent = typeof FALLBACK
type ContentMeta = { loading: boolean; error: string | null }

const ContentContext = createContext<SiteContent>(FALLBACK)
const ContentMetaContext = createContext<ContentMeta>({ loading: true, error: null })

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(FALLBACK)
  const [meta, setMeta] = useState<ContentMeta>({ loading: true, error: null })

  useEffect(() => {
    const controller = new AbortController()

    sanityClient
      .fetch<SiteContent>(CONTENT_QUERY)
      .then((data) => {
        if (controller.signal.aborted) return
        if (data) setContent(data)
        setMeta({ loading: false, error: null })
      })
      .catch(() => {
        if (controller.signal.aborted) return
        setMeta({ loading: false, error: 'Inhoud kon niet worden geladen.' })
      })

    return () => controller.abort()
  }, [])

  return (
    <ContentContext.Provider value={content}>
      <ContentMetaContext.Provider value={meta}>
        {children}
      </ContentMetaContext.Provider>
    </ContentContext.Provider>
  )
}

export function useContent(): SiteContent {
  return useContext(ContentContext)
}

export function useContentMeta(): ContentMeta {
  return useContext(ContentMetaContext)
}
