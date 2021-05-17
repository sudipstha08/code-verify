import React, { useState, useRef, useCallback } from 'react'
import styled from 'styled-components/macro'
import { InputField, useBookSearch } from '../../components'

interface Props {}

export function BooksPage(props: Props) {
  const [query, setQuery] = useState<string>('')
  const [pageNumber, setPageNumber] = useState<number>(1)
  const observer = useRef<any>()
  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber)

  const handleSearchBarChange = e => {
    const { value } = e.target
    setQuery(value)
    setPageNumber(1)
  }

  const lastBookElementRef = useCallback(
    node => {
      if (loading) return
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNum => prevPageNum + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore],
  )

  return (
    <Container>
      <InputField value={query} onChange={handleSearchBarChange} />
      {books?.map((book, idx) => {
        if (books.length === idx + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              <span>{idx + 1}&nbsp;</span>
              {book}
            </div>
          )
        }
        return (
          <div key={book}>
            <span>{idx + 1}&nbsp;</span>
            {book}
          </div>
        )
      })}
      <h1>{loading && 'loading ...'}</h1>
      <h1>
        <mark>{error && 'Error'}</mark>
      </h1>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px 5%;
  @media (max-width: 768px) {
    padding: 10px;
  }
`
