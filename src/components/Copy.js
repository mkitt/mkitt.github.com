// @flow
import React from 'react'

type Props = {
  children: React.Element<*>,
}

export default ({ children, ...props }: Props) => (
  <p {...props}>{children}</p>
)

