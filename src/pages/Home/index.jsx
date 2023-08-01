import React, { useRef } from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import Menu from '../../components/common/Menu';
import { menuItemsData } from '../../components/common/Menu/data';
import Header from '../../components/Header/Header'
const Home = () => {
  const menuRef = useRef();

  // const handleScrollMenu = () => {
  //   menuRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div>
      <Header></Header>
      <div className="container"><h1>OUR MENU</h1></div>
      {/* <Banner handleScrollMenu={handleScrollMenu} /> */}
      <Menu list={menuItemsData} ref={menuRef} />
      {/* <Footer /> */}
      <ButtonCartCount />
    </div>
  );
};

export default Home;

