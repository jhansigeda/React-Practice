import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

function MyApp()
{
   return(
      <div>
         <h1>Custom APP</h1>
      </div>
   )
}

// const reactElement = {
//    type : 'a',
//    props:{
//        href : 'https://www.google.com',
//        target : '_blank'
//    },
//    children: 'Click me to visit google'
// }

const anotherUser = "Jhansi"

const anotherElement = (
   <div>
      <h1> Custom element </h1>
      <a href='http://www.google.com' target='_blank'> visit google </a>
   </div>
)

const reactElement = React.createElement(
                           'a',
                           {href :'https://www.google.com',target:"_balnk"},
                           'Click me',
                           anotherUser
                        )


ReactDOM.createRoot(document.getElementById('root')).render(
   // <MyApp />  // Babble is a bundler which is used to convert the function to react understandable code.

   // ReactElement // this will not work as it is custom element and is not in the format which render is expecting 

   //anotherElement // this will work as this in the format which react is expecting.

   reactElement
)
