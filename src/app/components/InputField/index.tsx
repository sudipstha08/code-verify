import * as React from 'react';
import styled from 'styled-components/macro';
import { Input } from 'antd';

interface Props {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ value, placeholder, onChange }: Props) => {
  return (
    <Div>
      <Input value={value} placeholder={placeholder} onChange={onChange} />
    </Div>
  );
};

const Div = styled.div``;

export { InputField };
