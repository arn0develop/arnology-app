import bgImage from '../../../assets/images/bg_image.jpg';
import './imageContainer.scss';

const ImageContainer = () => {
  return (
    <div className='imageContainer'>
      <img src={bgImage} alt='backgroundImage' />
    </div>
  );
};

export default ImageContainer;
