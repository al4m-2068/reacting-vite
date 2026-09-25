// 2 types of JS type
// 1. Statement: WHatever thing that can be inputted directly into a variable

// Usage 1, dynamic props name passing
export default function Props(props) {
  return (
    <div>
      <p>{props.person} added {props.username}</p>
    </div>
  )
}

// Usage 1, Props Destructuring
export function PropsTwo({username, person}) {

}