export const required = value => (value ? undefined : 'Write some think')

export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)

export const minSymbol = min => value =>
    value.length > min ? undefined : `Should be greater than ${min} symbol `

export const minValue = min => value =>
    value || value.length >= min ? undefined : `Should be greater than ${min}`

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)