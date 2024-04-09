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
import "../../styles/product/biteIntotext.css";

function BiteIntotext() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = ['Happiness', 'JOY', 'PLEASURE', 'DELIGHT'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [texts.length]);

    return (
        <div className='main_bite_intotext'>
            <div className="bite_intotext_section text-uppercase">
                bite into <span className='text_list_bite'>{texts[currentTextIndex]}</span>
            </div>
        </div>
    );
}

export default BiteIntotext;
