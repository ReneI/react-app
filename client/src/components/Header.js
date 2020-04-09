import React from 'react';
const Header =() =>{
  return(  
    <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold text-xl tracking-tight"><a href="/">Transform text - api Redux react hooks tdd End to End testing can be slow and boring. Cypress </a></span>
  </div>
 
  <div>
      <a href="/info" className="inline-block text-sm  px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Preguntas</a>
    </div>
</nav>
  );

  }



  export default Header;