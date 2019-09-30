import React from 'react';
import { i18n, Link, withTranslation } from '../i18n'

const NodeHeaderData = ({t}) => (
        <div className="grow-2 z-depth-1">
            <h6>Course<span className="right">{t('Last update')}: July 15th, 2019</span></h6>
            <h3 className="center">Name node</h3>
            <h5>{t('autor')}: Ivan Ivanov &amp; co</h5>
            <h6>{t('access')}: All</h6>
            <h6>{t('public')}: Yes</h6>
            <div className="switch">
                <label>
                    {t('light')}
                    <input id="colorTheme" type="checkbox" />
                    <span className="lever"></span>
                    {t('dark')}
                </label>
            </div>
        </div>
);

export default withTranslation('nodeHeaderData')(NodeHeaderData)

