import React from 'react'
import {Link} from '../routes'
import {withTranslation} from '../i18n'

const Home = () => (
  <div>
    <div className='hero'>
        <Link to='node' params={{id: 123}}>
            <a>Node</a>
        </Link>
    </div>    
  </div>
);
Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default withTranslation('common')(Home)
