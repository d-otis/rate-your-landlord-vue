import Properties from '../components/properties/Properties'
import Property from '../components/properties/Property'

export default [
  {
    path: "/properties",
    name: "Properties",
    component: Properties
  },
  {
    path: "/properties/:propertyId",
    name: "property",
    component: Property,
    props: route => ({ propertyId: route.params.propertyId })
  }
]