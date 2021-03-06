import { technologiesType } from '../../model';
import './homeContainerTab.scss';

const HomeContainerTab = ({ desc }: technologiesType) => {
  return (
    <div className='homeContainerTab'>
      {desc?.map((des: any) => {
        return (
          <div key={des.id} className='homeContainerTab__desc'>
            {des.imgSrc}
            <p className='homeContainerTab__desc--info'>{des.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomeContainerTab;
