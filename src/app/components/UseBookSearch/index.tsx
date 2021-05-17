/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { API } from 'utils/API'

const useBookSearch = (query: string, pageNumber: number) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [books, setBooks] = useState([] as any)
  const [hasMore, setHasMore] = useState(false)

  const fetchBooks = async () => {
    let cancel: () => any
    try {
      const res = await API.get('http://openlibrary.org/search.json', {
        params: { q: query, page: pageNumber },
        cancelToken: new axios.CancelToken(() => (c: any) => (cancel = c)),
      })
      if (res && res.data) {
        setBooks((prevBooks: any) => {
          // Set stores unique values of any type
          return [
            ...Array.from(
              new Set([
                ...prevBooks,
                ...res.data.docs.map((b: { title: any }) => b.title),
              ]),
            ),
          ]
        })
        setHasMore(res.data.docs.length)
        setLoading(false)
      }
    } catch (err) {
      if (axios.isCancel(err)) return
      setError(true)
    }

    return () => cancel()
  }

  useEffect(() => {
    setBooks([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    fetchBooks()
  }, [query, pageNumber])

  return { loading, error, books, hasMore }
}

export { useBookSearch }
// https://openlibrary.org/dev/docs/api/search
