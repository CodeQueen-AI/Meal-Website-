import './page.css'; 
import Image from 'next/image';

const SpecialSection = () => {
  return (
    <div className="special" id="Special">
      <h1>Our <span>Special</span></h1>
      <div className="image-box">
        <div className="special-image">
            <Image src='/S1.webp' alt='special1' width={100} height={100}/>
        </div>
        <div className="special-image">
        <Image src='/S2.jpg' alt='special1' width={100} height={100}/>
        </div>
        <div className="special-image">
        <Image src='/S3.jpg' alt='special1' width={100} height={100}/>
        </div>
        <div className="special-image">
        <Image src='/S4.jpg' alt='special1' width={100} height={100}/>
        </div>
        <div className="special-image">
        <Image src='/S5.webp' alt='special1' width={100} height={100}/>
        </div>
        <div className="special-image">
        <Image src='/S6.jpg' alt='special1' width={100} height={100}/>
        </div>
      </div>
    </div>
  );
};

export default SpecialSection;
