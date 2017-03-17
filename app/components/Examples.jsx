var React = require('react');
var {Link} = require('react-router');

var Examples =  (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few locations to try!</p>
      <ol>
        <li>
          <Link to='/?location=Boston'>
            Boston, MA
          </Link>
          <li>
            <Link to='/?location=Miami'>
              Miami, FL (I wish I was here)
            </Link>
          </li>
        </li>
        <li>
          <Link to='/?location=Philadelphia'>
            Philadelphia, PA
          </Link>

        </li>
        <li>
          <Link to='/?location=Rio'>
             Rio, Brazil
          </Link>
        </li>
        <li>
          <Link to='/?location=Bangor'>
            Bangor, ME (Hi Mom)
          </Link>

        </li>
      </ol>
    </div>

  )
}
module.exports = Examples;
