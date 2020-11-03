import React from "react"
import firebase from "gatsby-plugin-firebase"

function FirebaseTest() {
  const [data, setData] = React.useState(null)
  console.log(firebase)
  // React.useEffect(() => {
  //   firebase.database().ref("/data").once("value").then(snapshot => {
  //       setData(snapshot.val())
  //     })
  // }, [])

  return <div className="firebaseComp">{data ? data : "Loading..."}</div>
}

export default FirebaseTest