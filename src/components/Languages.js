import React, { useState, useEffect } from 'react';
import { languageList } from '../constants/languageList';
import Image from 'next/image';

const Languages = ({ setInputLanguage, switched, setSwitched }) => {
  const [languages, setLanguages] = useState(languageList);

  useEffect(() => {
    setLanguages(prevLanguages => {
      const sortedLanguages = [...prevLanguages].sort((a, b) =>
        switched ? b.sortOrder - a.sortOrder : a.sortOrder - b.sortOrder
      );
      return sortedLanguages;
    });
    switched ? setInputLanguage('Dari') : setInputLanguage('English');
  }, [switched, setInputLanguage]);

  const switchLanguages = () => {
    setSwitched(!switched);
  }
  
  return (
    <div className='Languages'>
      {languages.map((item, index) => {
        return (
          <div key={item?.sortOrder || index} className='language input-language'>
            {/* <img 
              src={item?.icon}
              alt='icon' 
              className={!item.text ? 'switch-button' : 'language-icon'}
              onClick={switchLanguages} 
            /> */}
            <Image
              src={item?.icon}
              alt="language icon"
              className={!item.text ? 'switch-button' : 'language-icon'}
              onClick={switchLanguages}
            />
          </div>
        )
      })}
    </div>
  );
}

export default Languages;