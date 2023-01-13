import React from 'react';
import Media from 'react-media';
import { device } from 'styles/theme'
 

export const MediaQ = ({deviceName, children}) => {
  return (
    <Media queries={device}>
      {matches => { console.log(matches); return matches[deviceName] && children}}
        </Media>
  )
}


// export class MediaQ extends React.Component {
//   render() {
//     return (
//         <Media queries={{
//           mob: "(max-width: 599px)",
//           tab: "(min-width: 600px) and (max-width: 1199px)",
//           desc: "(min-width: 1200px)"
//         }}>
//           {matches => (
//             <Fragment>
//               {matches[this.props.device] && this.props.children}
//             </Fragment>
//           )}
//         </Media>
//     );
//   }
// }