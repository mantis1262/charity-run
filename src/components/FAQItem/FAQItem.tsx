import { IconPlus } from '../../Icons/IconPlus/IconPlus';
import scss from './FAQItem.module.scss';
import React, { useState } from 'react';
// import { useLanguageStore } from '../../Zustand/useLanguageStore';
// import translations from '../../translations';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQItemProps {
  item: FAQItem;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={scss.faq__item}>
      <div className={scss.faq__question}>
        <span>{item.question}</span>
        <div className={scss.faq__icon}>
          <IconPlus onClick={handleIconClick} />
        </div>
      </div>
      {isOpen && (
        <div className={`${scss.faq__answer} ${isOpen ? scss.open : ''}`}>
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;