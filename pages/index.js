import React from 'react'
import {Link} from '../routes'
//import { i18n, Link, withTranslation } from 'next-i18next'
import Head from 'next/head'
import Nav from '../components/nav'
import NodeHeader from '../components/nodeHeader'
import NodeBody from '../components/nodeBody'
import 'materialize-css/dist/css/materialize.min.css'
import '../static/teapl.css'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className='hero'>
        <Link to='node' params={{id: 123}}>
            <a>Node</a>
        </Link>
    </div>

    
  </div>
);

export default Home
