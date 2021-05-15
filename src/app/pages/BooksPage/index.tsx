import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { InputField } from '../../components/InputField';

interface Props {}

export function BooksPage(props: Props) {
  const [query, setQuery] = useState('');

  const handleSearchBarChange = ({
    e: {
      target: { value },
    },
  }: any) => {
    setQuery(value);
  };

  return (
    <Container>
      <InputField value={query} onChange={handleSearchBarChange} />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 5%;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
