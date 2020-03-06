import React from 'react';
import './App.css';
import Services from './components/ourservice';
import FashionCard from './components/fashion-card';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const services = [{ icon: 'fas fa-sync-alt', title: '30 days replacement' },
    { icon: 'fas fa-gift', title: 'Gift Card' }, { icon: 'fas fa-lock', title: 'secure payments' },
    { icon: 'fas fa-shipping-fast', title: 'free shipping' }];

    const fashionImages = [{ title: 'womens fashion', path: 'images/a1.jpg' }, { title: 'mens fashion', path: 'images/a2.jpg' },
    { title: 'kids fashion', path: 'images/a3.jpg' }]
    return (
      <div className="App">
        <div className="agileits-services" id="services">
          <div className="no-gutters agileits-services-row row">
            {
              services.map((item) => {
                return <Services key={item.icon} icon={item.icon} title={item.title} />
              })
            }
          </div>
        </div>
        <div className="row no-gutters pb-5">
          {
            fashionImages.map((d) => {
              return <FashionCard key={d.title} title={d.title} imagePath={d.path} />
            })
          }

        </div>
      </div>
    );
  }

}

export default App;
