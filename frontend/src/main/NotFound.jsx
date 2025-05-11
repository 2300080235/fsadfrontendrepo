import NotFoundImage from './NotFound.png';
import './style.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>Page Not Found</h1>
      <img src={NotFoundImage} alt="Page Not Found" className="not-found-image" />
    </div>
  );
}
