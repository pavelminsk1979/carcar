import st from './Icon.module.scss';
import { Krugstrelki } from '../../icons/krugstrelki';
import sprite from '../../sprite.svg';

export const Icon = () => {
  return (
    <div className={st.box}>
      <svg className={st.iconOne} viewBox="0 -960 960 960">
        <use xlinkHref={`${sprite}#first`} />
      </svg>

      <svg className={st.iconTwo} viewBox="0 -960 960 960">
        <use xlinkHref={`${sprite}#secong`} />
      </svg>

      <Krugstrelki className={st.iconKrugstrelki} />
    </div>
  );
};
