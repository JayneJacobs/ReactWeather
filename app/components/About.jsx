var React = require('react');
var {Link} = require('react-router');
 var About =  (props) => {
   return (
     <div>
        <h1 className="text-center">About</h1>
        <p>Author: Jayne Jacobs</p>
        <ol>
          <li>
            <a href='http://jaynejacobs.com'>jaynejacobs.com</a>
          </li>
          <li>
               <a href='mailto:jaynejacobs@jaynejacobs.com'>jaynejacobs@jaynejacobs.com</a>
          </li>
          <li>
            <p>If you have any comments or
             suggestions, please feel free to email me here
            </p>

          </li>
          <li>
            <p>If you have any comments or
             suggestions, please feel free to email me here
            </p>
            <a href='https://github.com/JayneJacobs'>GitHub Link</a>
          </li>
        </ol>
     </div>
   )
 }
module.exports = About;
