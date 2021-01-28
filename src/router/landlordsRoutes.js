import Landlords from '../components/landlords/Landlords'
import Landlord from '../components/landlords/Landlord'

export default [
  {
    path: "/landlords",
    name: "Landlords",
    component: Landlords
  },
  {
    path: "/landlords/:landlordId",
    name: "landlord",
    component: Landlord,
    props: route => ({ landlordId: route.params.landlordId })
  }
]