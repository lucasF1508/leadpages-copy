import type {
  ArrayInputFunctionsProps,
  ArrayOfPrimitivesInputProps,
  ArraySchemaType,
  Rule,
  RuleSpec,
  SchemaValidationValue,
} from 'sanity'
import React from 'react'
import {ArrayOfPrimitivesFunctions} from 'sanity'

type ArrayFunctionsProps = ArrayInputFunctionsProps<boolean | number | string, ArraySchemaType>

const isRule = (rule: SchemaValidationValue): rule is Rule =>
  typeof rule === 'object' && '_rules' in rule
const isMaxRule = (rule: RuleSpec): rule is Extract<RuleSpec, {flag: 'max'}> => rule.flag === 'max'

const IsArrayAtMaxLength = (props: ArrayFunctionsProps) => {
  const {schemaType, value} = props
  if (
    !schemaType?.validation ||
    !Array.isArray(schemaType?.validation) ||
    !isRule(schemaType.validation[0])
  ) {
    return false
  }

  const flag = schemaType.validation[0]._rules.find(isMaxRule)

  if (!flag) {
    return false
  }

  const max = flag.constraint
  const total = value?.length || 0

  return total >= max
}

function ArrayFunctions(props: ArrayFunctionsProps) {
  if (IsArrayAtMaxLength(props)) return null

  return <ArrayOfPrimitivesFunctions {...props} />
}

export default function ArrayMaxItems(props: ArrayOfPrimitivesInputProps) {
  return props.renderDefault({...props, arrayFunctions: ArrayFunctions})
}
