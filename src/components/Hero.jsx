// eslint-disable-next-line no-unused-vars
import React from 'react';
import  bussyAI  from '../assets/bussyAI.png';


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3 space-x-4'>
      <img src={bussyAI}  alt="bussyAI" className='w-72 object-contain'/>

         <button type="button" onClick={() => window.open("https://github.com/Busayor2020")} className='black_btn bg-black text-white py-2 px-4 rounded'>
          GitHub
         </button>
      </nav>
      <h1 className='head_text'>
 Summarize Articles with <br className='max-md:hidden' />
 <span className='orange_gradient'> OpenAI GPT-4 </span>
      </h1>
      <h2 className='desc'>
Simplify your reading with this summarizer, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
