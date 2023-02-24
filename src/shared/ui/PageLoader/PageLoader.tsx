import cls from './PageLoader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderPropsType {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderPropsType) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
