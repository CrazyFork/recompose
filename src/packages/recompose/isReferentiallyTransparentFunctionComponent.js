import isClassComponent from './isClassComponent.js'


//:todo: why has to include defaultProps & propTypes
const isReferentiallyTransparentFunctionComponent = Component => Boolean(
  typeof Component === 'function' &&
  !isClassComponent(Component) &&
  !Component.defaultProps &&
  !Component.contextTypes &&
  !Component.propTypes
)

export default isReferentiallyTransparentFunctionComponent
