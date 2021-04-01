import {Loading} from "../components/task6/Loading"
import React from "react"

const withCardsLoading = (Component)=> (props)=> {
!props.images.length ? <Loading/> : <Component {...props}/>
}

export default withCardsLoading
// export const DataWithLoading = OriginalComponent => {
//     class NewComponent extends React.Component {
//         render(){
//             return(<OriginalComponent/>)
//         }
//     }
//     return NewComponent
// }
// export default DataWithLoading;
