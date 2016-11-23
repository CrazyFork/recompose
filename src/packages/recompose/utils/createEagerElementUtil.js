import React from 'react'

const createEagerElementUtil = (
  hasKey,
  isReferentiallyTransparent,//todo:?
  type,
  props,
  children
) => {
  if (!hasKey && isReferentiallyTransparent) {
    // inside this clause, type has to be a Stateless functional type react element
    // so goes function call
    if (children) {
      return type({ ...props, children })
    }
    return type(props)
  }
  //under here, its either a functional or traditional Component
  const Component = type

  if (children) {
    /*
    React.createElement(type, props, children):
      >Create and return a new React element of the given type. The type argument can
      be either a tag name string (such as 'div' or 'span'), or a React component type
      (a class or a function).
    */
    return <Component {...props}>{children}</Component>
  }

  return <Component {...props} />
}

export default createEagerElementUtil
