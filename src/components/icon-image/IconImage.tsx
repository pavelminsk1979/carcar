import st from './IconImage.module.scss';
import sprite from '../../sprite.svg';
import testImage from '../../images/Rectangle 4.png';

export const IconImage = () => {
  return (
    <div className={st.box}>
      <svg className={st.iconOne} viewBox="0 0 50 50">
        <use xlinkHref={`${sprite}#third`} />
      </svg>
      <img className={st.sizeImage} src={testImage} alt="" />
    </div>
  );
};
