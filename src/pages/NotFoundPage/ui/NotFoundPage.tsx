import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface NotFoundPagePropsType {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPagePropsType) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
