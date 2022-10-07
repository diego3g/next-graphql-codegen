import { useQuery } from "@apollo/client"
import { TrailItem } from "../components/TrailItem"
import { graphql } from "../gql"

const allTrails = graphql(/* GraphQL */`
  query allTrails {
    trails {
      id
      ...TrailItem
    }
  } 
`)

export default function Home() {
  const { data } = useQuery(allTrails)

  return (
    <div>
      <h1>Trails</h1>

      { data.trails.map(trail => {
        return <TrailItem key={trail.id} trail={trail} />
      }) }
    </div>
  )
}
