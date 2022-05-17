import React from 'react'
import { styled } from '@design'
import * as Primitives from '@radix-ui/react-visually-hidden'

const $VisuallyHidden = styled(Primitives.Root, {})

const VisuallyHidden = (...props) => <$VisuallyHidden {...props} />

export default VisuallyHidden
