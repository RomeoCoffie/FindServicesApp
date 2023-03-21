// // This is a template to be injected into the component

// import { createSlice } from '@reduxjs/toolkit';

// const initialState ={
//     counter: 0
// }

// export const someSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         sayIncrement: (state)=>{
//             state.count += 1
//         },
//         //etc

//     }
// })

// export const { sayIncrement } = someSlice.actions;
// export default someSlice.reducer; 

// setDoc(collectionRef, {
//     AccountDetails: {
//         id: user.uid,
//         name: '',
//         email:'',
//         profilePic:'profilepicture',
//         mobileNumbers:[user.phoneNumber,],
//         professionalTitle:'',
//         favoriteQuote:'',
//         languagesSpoken:[],
//         password: '',
//         about:'',
//         experiences:[],
//         skills:[{
//           skill:'',
//           tool:''
//         }],
//         certificates:[{
//           cerOf:'',
//           institution:'',
//           references:[{
//             name:'',
//             phoneNumber:'',
//             email:'',
//             position:''
//           }],
//           dateIssued:'',
//           photo:'photolink in storage'
//         }]
//     },
//     Services:[{
//         serviceTitle:'',
//         category:'',
//         subcategory:'',
//         iWill:'',
//         location:'',
//         heroPicture:'picture link',
//         keywords:[''],
//         youExpect:'',
//         quotation:'',
//     }],
//     Companies:[{
//         companyName:'',
//         location:'',
//         RegDetail:{
//           detail:''
//         },
//         PhoneNumber:'',
//         email:'',
//         whatWeDo:''
//     }],
//     Requests:[{
//         requests:{
//           title:'',
//           description:'',
//           budget:'',
//           location:'',
//           speedContact:'',
//           conditions:''
//         },
//         response:['']
//     }],
//     Others:{
//         MyNotice:[{
//           title:'',
//           description:''
//         }],
//         qNa:[{
//           question:'',
//           answer:''
//         }]
//     },
//     Messages:[{
//         title:'',
//         message:''
//     }]

// })