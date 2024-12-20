import st from './Button.module.scss';

export const Button = () => {
  return (
    <div className={st.box}>
      <button className={st.buttonRight} style={{ backgroundColor: '#fa7d7d' }}>
        Right
      </button>
      <a href="https://www.youtube.com/" className={st.buttonRight}>
        Link
      </a>
    </div>
  );
};
