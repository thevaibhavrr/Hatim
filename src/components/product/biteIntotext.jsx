// import React from 'react'
// import "../../styles/product/biteIntotext.css"
// function BiteIntotext() {
//     return (
//         <>
//             <div className='main_bite_intotext' >
//             {/* main text div */}
//             <div className="bite_intotext_section text-uppercase">
//                     bite into <span className='text_list_bite' >Hppiness</span>
//                     {/* Hppiness */}
//                     {/* JOY */}
//                     {/* PLEASURE */}
//                     {/* DELIGHT */}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default BiteIntotext

// import React, { useState, useEffect } from 'react';
// import "../../styles/product/biteIntotext.css";

// function BiteIntotext() {
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);
//     const texts = ['Happiness', 'JOY', 'PLEASURE', 'DELIGHT'];

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//         }, 3000);

//         return () => clearInterval(intervalId);
//     }, [texts.length]);

//     return (
//         <div className='main_bite_intotext'>
//             <div className="bite_intotext_section text-uppercase">
//                 bite into <span className='text_list_bite'>{texts[currentTextIndex]}</span>
//             </div>
//         </div>
//     );
// }

// export default BiteIntotext;



import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import "../../styles/product/biteIntotext.css";

function BiteIntotext() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = ['JOY', 'PLEASURE', 'Happiness', 'DELIGHT'];
    const [key, setKey] = useState(0);

    const restartAnimation = () => {
        setKey(prevKey => prevKey + 1);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            restartAnimation()
        }, 2000);

        return () => clearInterval(intervalId);
    }, [texts.length]);


    return (
        <div className='main_bite_intotext'>
            <motion.div key={key} initial={{ width: "550px" , x: "-100%" }} animate={{ width: "100%" , x: 0 }} transition={{ duration: 1.9 }} className="bite_intotext_section text-uppercase">
                bite into <motion.span key={key} className='text_list_bite' >{texts[currentTextIndex]}</motion.span>
                {/* bite into <motion.span key={key} className='text_list_bite'  >vai bhav</motion.span> */}
            </motion.div>
        </div>
    );
}

export default BiteIntotext;
