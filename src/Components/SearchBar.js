// import React from 'react';

// export default class SearchBar extends React.Component {
//   state = { term: ''};

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.term);
//   };


//   render() {
//     return (
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col">
//             <form onSubmit={this.onFormSubmit}>
//               <div className="form-group">
//                 <input 
//                   type="text" 
//                   className="form-control" 
//                   value={this.state.term} 
//                   onChange={e => this.setState({ term: e.target.value})} 
//                   placeholder="Search Player name" 
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

