/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { API } from 'utils/API';

interface Props {
  query?: string;
  pageNumber?: number;
}

const UseBookSearch = ({ query, pageNumber }: Props) => {
  const fetchBooks = async () => {
    const res = await API.get('http://openlibrary.org/search.json', {
      params: { q: query, page: pageNumber },
    });
  };

  useEffect(() => {
    fetchBooks();
  }, [query, pageNumber]);

  return null;
};

export { UseBookSearch };
