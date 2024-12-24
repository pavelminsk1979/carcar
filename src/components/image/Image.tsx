import testImage from '../../images/3388.jpg';
import testMinSizeImage from '../../images/3399.jpg';
import st from './Image.module.scss';

export const Image = () => {
  return (
    <div className={st.box}>
      <img className={st.sizeImage} src={testImage} alt="" />
      <img className={st.sizeImage} src={testMinSizeImage} alt="" />
    </div>
  );
};
