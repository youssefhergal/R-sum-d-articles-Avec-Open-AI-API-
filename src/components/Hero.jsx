import React from "react";

import { logo1 } from "../assets";

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo1} alt='sumz_logo' className='w-28 object-contain' />

                <button
                    type='button'
                    onClick={() =>
                        window.open("https://github.com/TidbitsJS/Summize", "_blank")
                    }
                    className='black_btn  h-10'
                >
                    GitHub
                </button>
            </nav>

            <h1 className='head_text'>
                Résumé d'articles avec <br className='max-md:hidden' />
                <span className='orange_gradient '>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Simplifiez votre lecture avec Summize, un résumeur d'articles open-source
                qui transforme les articles longs en résumés clairs et concis.
            </h2>
        </header>
    );
};

export default Hero;