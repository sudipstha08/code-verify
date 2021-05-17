/**
 *
 * Button
 *
 */
import * as React from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

interface Props {}

export function Button(props: Props) {
  const { t } = useTranslation()

  return <Div>{t('')}</Div>
}

const Div = styled.div``
