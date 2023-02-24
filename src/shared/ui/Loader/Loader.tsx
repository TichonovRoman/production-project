import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoaderPropsType {
  className?: string;
}

export const Loader = ({ className }: LoaderPropsType) => (
  <div className={classNames('lds-ellipsis', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
