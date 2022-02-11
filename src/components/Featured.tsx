import { FC } from 'react';

interface IProps {
  type?: string;
}

const Featured: FC<IProps> = ({ type }) => {
  const typeElement = type && (
    <div className="category">
      <span>{type === 'movie' ? 'Movie' : 'Series'}</span>
      <select name="genre" id="genre">
        <option value="genre">Genre</option>
        <option value="adventure">Adventure</option>
        <option value="comedy">Comedy</option>
        <option value="crime">Crime</option>
        <option value="fantasy">Fantasy</option>
        <option value="historical">Historical</option>
        <option value="horror">Horror</option>
        <option value="romance">Romance</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="thriller">Thriller</option>
        <option value="western">Western</option>
        <option value="animation">Animation</option>
        <option value="drama">Drama</option>
        <option value="Documentary">Documentary</option>
      </select>
    </div>
  );
  return (
    <div className="featured">
      {type && typeElement}
      <img
        src="https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398?k=20&m=1287459398&s=612x612&w=0&h=-BH-AsvbdjM8G-Uc_UabWztbQxFmYstg_Z2-Ix4_IEg="
        alt="img-home"
      />
      <div className="info">
        <img src="https://seeklogo.com/images/M/Matrix-logo-835A411FAF-seeklogo.com.png" alt="matrix-img" />
        <span className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae odio blanditiis suscipit, ad quos saepe
          voluptatibus hic. Inventore, impedit accusantium.
        </span>
        <div className="buttons">
          <div className="play">
            <i className="bx bx-play" />
            <span>Play</span>
          </div>
          <div className="more">
            <i className="bx bx-info-circle" />
            <span>Info</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

Featured.defaultProps = {
  type: '',
};
