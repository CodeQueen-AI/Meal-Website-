import Image from 'next/image';
import './page.css'

export default function Services() {
  return (
    <div className="container">
      <section className="services-section">
        <h1 className="heading">Our Services</h1>
        
        <div className="services-grid">
          <div className="service-box">
            <Image src="/Service1.png" alt="Box Service" width={300} height={200} />
            <h2>Box Service</h2>
            <p>Enjoy our specially packed box meals, perfect for takeaways or delivery!</p>
          </div>

          <div className="service-done">
            <Image src="/Service2.png" alt="Done Service" width={300} height={200} />
            <h2>Done Service</h2>
            <p>Order online and get your meals delivered right to your doorstep. Fast and reliable!</p>
          </div>

          <div className="service-car">
            <Image src="/Service3.png" alt="Car Service" width={300} height={200} />
            <h2>Car Service</h2>
            <p>Our car service lets you dine from the comfort of your vehicle. Order and enjoy your meal in your car.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
