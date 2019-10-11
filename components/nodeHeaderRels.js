import React from 'react';
import { i18n, Link, withTranslation } from '../i18n'

const NodeHeaderRels = ({t}) => (
        <div className="grow-1 z-depth-1">
            <h5 className="center">{t('Relations')}</h5>
            <div>{t('Parent nodes')}:</div>
            <div>{t('Child nodes')}:</div>
            <div className="center">
            <a className="btn"><i className="material-icons left">edit</i> {t('edit')} </a>
                            <br />
                    <a href="/admin2016/teapl/js/LiteAccordion-master/#slide-one">{t('All nodes')}</a>
                            <br />
                    <a href="/admin2016/teapl/js/LiteAccordion-master/#slide-two">{t('My nodes')}</a>
            </div>
        </div>
);

export default withTranslation('nodeHeaderRels')(NodeHeaderRels)