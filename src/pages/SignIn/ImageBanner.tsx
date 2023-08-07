import mazeBackground from './images/maze-background.jpeg';
import mazeBackground2 from './images/maze-background-2.jpeg';

const oneOrZero = Math.random() >= 0.5 ? 1 : 0;
const images = [mazeBackground, mazeBackground2];

export default function ImageBanner() {
  return (
    <div className="relative hidden w-0 flex-1 lg:block">
      <img className="absolute inset-0 h-full w-full object-cover" src={images[oneOrZero]} alt="" />
    </div>
  );
}
