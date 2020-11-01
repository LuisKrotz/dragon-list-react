// import {useEffect, useState} from 'react'

// export function useGetRequest(url, method, data){
//     const [request, setRequest] = useState({
//         loading: false,
//         response: null,
//         error: false
//     })

//     let headers = {
//         method: method
//     }

//     if (method === 'POST' || 'PUT') {
//         headers.headers = { 'Content-Type': 'application/json'};
//         headers.body = JSON.stringify(data);
//     }

//     useEffect(() => {
//         setRequest({
//             loading: true,
//             response: null,
//             error: false
//         })
//         fetch(url, headers)
//             .then(res => {
//                 setRequest({
//                     loading: false,
//                     response: res.data,
//                     error: false
//                 })
//             })
//             .catch(() => {
//                 setRequest({
//                     loading: false,
//                     response: null,
//                     error: true
//                 })
//             })
//     }, [url])

//     return request
// }