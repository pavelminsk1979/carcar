import testImage from '../../images/3388.jpg';
import st from './Image.module.scss';

export const Image = () => {
  return <img className={st.sizeImage} src={testImage} alt="" />;
};
