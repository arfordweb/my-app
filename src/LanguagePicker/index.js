import React from 'react';

const LanguagePicker = ({
  lang,
  onLanguageChange,
}) => {
  return (<button onClick={onLanguageChange}>
    {lang === 'sp' ? 'A Inglés' : 'To Spanish'}</button>);
};

export default LanguagePicker;
