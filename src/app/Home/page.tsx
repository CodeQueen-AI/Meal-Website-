import './page.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="content">
          <h2>What</h2>
          <h1>
            What You Like <br />
            To <span>Order</span>Today?
          </h1>
          <p>
            Our Job is to filling your tummy with delicious food with <br />
            fast and free delivery
          </p>
          <div className="buttons">
            <button className="delivery">Free Delivery</button>
          </div>
        </div>
        <div className="dish">
        <Image src='/Home img.png' alt='Home image' width={500} height={500}/>
        </div>
      </section>
    </>
  );
}
