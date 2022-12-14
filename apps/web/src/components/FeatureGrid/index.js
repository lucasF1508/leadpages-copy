import FeatureGrid from './FeatureGrid'
import FeatureGridToolkit from './FeatureGridToolkit'

const FeatureGridComponent = ({ legacyComponent, ...props }) => {
  switch (legacyComponent) {
    case 'toolkitCards':
      return FeatureGridToolkit(props)
    default:
      return FeatureGrid(props)
  }
}

export default FeatureGridComponent
export { FeatureGrid, FeatureGridToolkit }
