import React from 'react';
import PropTypes from 'prop-types';

const LanguagePicker = ({
  lang,
  onLanguageChange,
}) => {
  return (<button onClick={onLanguageChange}>
    {lang === 'sp' ? 'A Inglés' : 'To Spanish'}</button>);
};

LanguagePicker.propTypes = {
  lang: PropTypes.string.isRequired,
  missingProp: PropTypes.number.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default LanguagePicker;
