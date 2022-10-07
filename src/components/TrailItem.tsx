import { FragmentType, graphql, useFragment } from "../gql";

export const TrailItemFragment = graphql(/* GraphQL */ `
  fragment TrailItem on Trail {
    id
    title
  }
`)
 
interface TrailItemProps {
  trail: FragmentType<typeof TrailItemFragment>
}

export function TrailItem(props: TrailItemProps) {
  const trail = useFragment(TrailItemFragment, props.trail)

  return (
    <div>
      <h2>{trail.title}</h2>
      <h3>ID: {trail.id}</h3>
    </div>
  )
}