// import React, { useState, useEffect } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// export function Pagination({ from, to, total, current, per_page, tabs }: any) {
//   const location = useLocation();
//   const [pages, setPages] = useState([]);
//   let navigate = useNavigate();
//   const changePage = (page: number) => {
//     navigate(`${location.pathname}?page=${page}`);
//   };

//   const calcPages = () => {
//     let first_page = Math.max(current - (tabs || 3), 0);
//     let last_page = Math.min(
//       current + (tabs ? tabs - 1 : 2),
//       Math.floor(total / per_page)
//     );
//     setPages(
//       Array.from(Array(last_page - first_page).keys()).map(
//         (i) => i + first_page + 1
//       )
//     );
//   };

//   useEffect(() => {
//     calcPages();
//     return () => {};
//   }, [current]);
//   return (
//     <>
//       <div className="flex justify-between py-4">
//         <div className="mx-8">
//           <div className="text-secondary_gray font-OSSL">
//             Showing {from} -{Math.min(to)} of {total} entries
//           </div>
//         </div>
//         <div className="flex items-center gap-4 mx-8">
//           {current > 1 && (
//             <div
//               className="cursor-pointer shadow-sm prev rounded-full bg-alt_table px-3 py-1"
//               onClick={() => changePage(current - 1)}
//             >
//               <svg
//                 width="8"
//                 height="14"
//                 viewBox="0 0 8 14"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M7 1.16669L1.16667 7.00002L7 12.8334" fill="#9699A2" />
//                 <path
//                   d="M7 1.16669L1.16667 7.00002L7 12.8334"
//                   stroke="#9699A2"
//                   strokeMiterlimit="10"
//                 />
//               </svg>
//             </div>
//           )}
//           <div className="pages flex gap-3">
//             {pages.map((page) => (
//               <NavLink key={page} to={`${location.pathname}?page=${page}`}>
//                 <div
//                   className="cursor-pointer shadow-sm bg-blue-400 px-3 py-1 text-white rounded-full"
//                   // onClick={() => changePage(page)}
//                 >
//                   {page}
//                 </div>
//               </NavLink>
//             ))}
//           </div>
//           {to < total && (
//             <div
//               className="cursor-pointer shadow-sm next rounded-full bg-alt_table px-3 py-1"
//               onClick={() => changePage(current + 1)}
//             >
//               <svg
//                 width="8"
//                 height="14"
//                 viewBox="0 0 8 14"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M1 12.8333L6.83333 6.99998L1 1.16665" fill="#9699A2" />
//                 <path
//                   d="M1 12.8333L6.83333 6.99998L1 1.16665"
//                   stroke="#9699A2"
//                   strokeMiterlimit="10"
//                 />
//               </svg>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
export {};
