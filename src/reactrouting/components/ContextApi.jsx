// import React, { createContext } from 'react'
// import IMG from "../../../public/assets/cutecat.jpg"
// import Story from './Story'
// import Cards from './Cards'


// export const GlobalContext = createContext()
// const ContextApi = () => {
//      const users = [
//             {
//                 image: IMG,
//                 username: "cat_1"
//             },
//             {
//                 image: IMG,
//                 username: "cat_2"
//             },
//             {
//                 image: IMG,
//                 username: "cat_3"
//             },
//             {
//                 image: IMG,
//                 username: "cat_4"
//             },
//             {
//                 image: IMG,
//                 username: "cat_5"
//             },
//             {
//                 image: IMG,
//                 username: "cat_6"
//             },
//             {
//                 image: IMG,
//                 username: "cat_7"
//             },
//             {
//                 image: IMG,
//                 username: "cat_8"
//             },
//             {
//                 image: IMG,
//                 username: "cat_9"
//             },
//             {
//                 image: IMG,
//                 username: "cat_10"
//             },
//         ]
//   return (
//     <div>
//         <GlobalContext.Provider value ={users}>
//             <Story/>
//             <Cards/>
//         </GlobalContext.Provider>
//     </div>
//   )
// }

// export default ContextApi










import React, { createContext } from 'react'
import IMG from "../../../public/assets/cutecat.jpg"
import IMG2 from "../../../public/assets/love.jpeg"

export const GlobalContext = createContext()

const ContextApi = ({ children }) => {

    const users = [
        {
            image: IMG,
            username: "cat_1",
            likes: "1.4k",
            comments: "50",
            text: "And what is the point of love, you may ask?...more",
            post: IMG2
        },
        {
            image: IMG,
            username: "cat_2",
            likes: "1.5k",
            comments: "550",
            text: "And what is the point of love, you may ask?...more",
            post: IMG2
        },
        {
            image: IMG,
            username: "cat_3",
            likes: "1.4k",
            comments: "119",
            text: "And what is the point of love, you may ask?...more",
            post: IMG2
        },
        {
            image: IMG,
            username: "cat_4",
            likes: "1.4k",
            comments: "358",
            text: "And what is the point of love, you may ask?...more",
            post: IMG2
        },
        {
            image: IMG,
            username: "cat_5",
            likes: "1.4k",
            comments: "319",
            text: "And what is the point of love, you may ask?...more",
            post: IMG2
        },
        {
            image: IMG,
            username: "cat_6",
            likes: "1.4k",
            comments: "554",
            text: "And what is the point of love, you may ask?...more",
            post: IMG2
        },
        {
            image: IMG,
            username: "cat_7",
            likes: "1.4k",
            comments: "105",
            text: "And what is the point of love, you may ask?...more",
            post: IMG2
        },
        {
            image: IMG,
            username: "cat_8",
            likes: "1.4k",
            comments: "509",
            text: "And what is the point of love, you may ask?...more",
            post: IMG2
        },
        {
            image: IMG,
            username: "cat_9",
            likes: "1.4k",
            comments: "255",
            text: "And what is the point of love, you may ask?...more",
            post: IMG2
        },
        {
            image: IMG,
            username: "cat_10",
            likes: "1.4k",
            comments: "600",
            text: "And what is the point of love, you may ask?...more",
            post: IMG2
        }
    ]

    return (
        <GlobalContext.Provider value={users}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextApi