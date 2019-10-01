import React from 'react'
import {Link} from '../routes'
//import { i18n, Link, withTranslation } from 'next-i18next'

const Home = () => (
  <div>
    <div className='hero'>
        <Link to='node' params={{id: 123}}>
            <a>Node</a>
        </Link>
    </div>    
  </div>
);

export default Home
