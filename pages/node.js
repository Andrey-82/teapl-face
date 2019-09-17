/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
//import { i18n, Link, withTranslation } from 'next-i18next'
import {Link} from '../routes'
//import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import NodeHeader from '../components/nodeHeader'
import NodeBody from '../components/nodeBody'
import 'materialize-css/dist/css/materialize.min.css'
import '../static/teapl.css'

const Node = () => (
  <div>
    <Head>
      <title>Node</title>
    </Head>

    <div className='hero'>
      <NodeHeader />
      <NodeBody />
    </div>

    
  </div>
);

export default Node

