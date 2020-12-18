// import React, { useCallback } from 'react';
// import { usePlaidLink } from 'react-plaid-link';


// const TestLogin = props => {
//     const  onSuccess = (public_token, metadata) => {
//         fetch('http://localhost:3000/get_access_token', {
//           method: 'POST',
//           body: {
//             public_token: public_token,
//             accounts: metadata.accounts,
//             institution: metadata.institution,
//             link_session_id: metadata.link_session_id,
//           },
//         });
//       }
    
//       const onEvent = useCallback(
//         (eventName, metadata) => console.log('onEvent', eventName, metadata),
//         []
//       );
    
//       const onExit = useCallback(
//         (err, metadata) => console.log('onExit', err, metadata),
//         []
//       );
        
//       const config = {
//         token: props.token.link_token,
//         onSuccess,
//         onEvent,
//         onExit,
//         // –– optional parameters
//         // receivedRedirectUri: props.receivedRedirectUri || null,
//         // ...
//       };
    
//       const { open, ready, error } = usePlaidLink(config);
    
//       return (
//         <>
//           <button
//             type="button"
//             className="button"
//             onClick={() => open()}
//             disabled={!ready || error}
//           >
//             Open Plaid Link
//           </button>
//         </>
//       );
//     };  
// //     const submitHandler = (e) => {
// //         e.preventDefault()
// //         console.log('clicked Submit')
// //         let user = {}
// //         user['username'] = e.target.username.value
// //         user['password'] = e.target.password.value
// //         user['password_confirmation'] = e.target.password_confirmation.value
// //         user['address'] = e.target.address.value
// //         user['first_name'] = e.target.first_name.value
// //         user['last_name'] = e.target.last_name.value

// //         console.log(user)

// //         let options = {
// //             method: "POST",
// //             headers: {
// //                 "Authorization": `Bearer <token>`,
// //                 "content-type": "application/json",
// //                 "accept": "application/json"
// //             },
// //             body: JSON.stringify({user: {...user}})
// //         }

// //         fetch(`http://localhost:3000/users/`, options)
// //         .then(resp=>resp.json())
// //         .then(console.log)
// //         .catch(console.log)
// //     }

// //     const loginHandler = (e) => {
// //         e.preventDefault()
// //         let user = {}
// //         user['username'] = e.target.username.value
// //         user['password'] = e.target.password.value
// //         console.log("Logging in")
// //         fetch(`http://localhost:3000/create_token`, {
// //             method: "POST",
// //             headers: {
// //                 "content-type": "application/json",
// //                 "accept": "application/json"
// //             },
// //             body: JSON.stringify({user})
// //         })
// //         .then(resp=>resp.json())
// //         .then(console.log)
// //         .catch(console.log)

// //     }

// //     return (
// //         <form onSubmit={submitHandler}>
// //             <input type="text" name="username" placeholder="username"/>
// //             <input type="password" name="password" placeholder="password"/>
// //             <input type="password" name="password_confirmation"placeholder="password_confirmation"/>
// //             <input type="text" name="address"placeholder="address"/>
// //             <input type="text" name="first_name"placeholder="first_name"/>
// //             <input type="text" name="last_name"placeholder="last_name"/>
// //             <input type="submit" value="submit"/>
// //         </form>,
// //         <form onSubmit={loginHandler}>
// //             <input type="text" name="username" placeholder="username"/>
// //             <input type="password" name="password" placeholder="password"/>
// //             <input type="submit" value="submit"/>
// //         </form>
// //     )

// // }

// export default TestLogin