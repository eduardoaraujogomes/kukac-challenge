import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './style.scss';


const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="pagination-box">
        <button className="pagination-button" disabled={true} >
          <Arrow />
        </button>
        <p>{`${1} de ${4}`}</p>
        <button className="pagination-button" disabled={false} >
          <Arrow className="flip-horizontal" />
        </button>
      </div>
    </div>

  );
};

export default Pagination;
