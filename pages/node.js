import React from 'react'
import PropTypes from 'prop-types'
import { i18n, Link, withTranslation } from '../i18n'
import Nav from '../components/nav'
import NodeHeader from '../components/nodeHeader'
import NodeBody from '../components/nodeBody'

const Node = ({t}) => (
  <div>
    <div className='hero'>
    <button
        className="btn"
        type='button'
        onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
    >{t('changeLanguage')}</button>
    <button
        className="btn"
        type='button'
        onClick={() => {
            console.log(window.deferredPrompt);
            window.deferredPrompt.prompt();
        }}
    >установить</button>
      <NodeHeader />
      <NodeBody />
    </div>
  </div>
);

Node.getInitialProps = async () => ({
  namespacesRequired: ['common','node', 'nodeHeaderData', 'nodeHeaderRels']
});

Node.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('node')(Node)