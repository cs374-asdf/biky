import { Link } from "react-router-dom";

export default function NotFound()
{
  return <div style={{    position: 'fixed',
    top: 0,
    left: 0,
    background: 'linear-gradient(0deg, #FFEDE8, #FFFFF5)',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
}}>
  <div style={{position: 'relative', textAlign: "center", top: '50%'}}>
    No such page!
     Please go to
    <div style={{marginLeft: 8}}>
           <Link to="/biky"> login page </Link>


  </div>
    </div>
  </div>
}