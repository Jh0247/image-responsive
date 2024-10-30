import { useState, useEffect } from 'react';
import '../styles/RankingComponent.css';

// Import all assets
import firstPlaceIconMobile from '../assets/mobile/1x/Icon_award1_m_1st.png';
import secondPlaceIconMobile from '../assets/mobile/1x/Icon_award1_m_2nd.png';
import thirdPlaceIconMobile from '../assets/mobile/1x/Icon_award1_m_3rd.png';
import firstPlaceBGMobile from '../assets/mobile/1x/ranking1_m_bg.png';
import secondPlaceBGMobile from '../assets/mobile/1x/ranking2_m_bg.png';
import thirdPlaceBGMobile from '../assets/mobile/1x/ranking3_m_bg.png';
import fourthPlaceBGMobile from '../assets/mobile/1x/ranking4_m_bg.png';

import firstPlaceIconPC from '../assets/pc/1x/Icon_award1_1st.png';
import secondPlaceIconPC from '../assets/pc/1x/Icon_award1_2nd.png';
import thirdPlaceIconPC from '../assets/pc/1x/Icon_award1_3rd.png';
import firstPlaceBGPC from '../assets/pc/1x/ranking1_bg.png';
import secondPlaceBGPC from '../assets/pc/1x/ranking2_bg.png';
import thirdPlaceBGPC from '../assets/pc/1x/ranking3_bg.png';
import fourthPlaceBGPC from '../assets/pc/1x/ranking45_bg.png';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // when resized, update the state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

// data array
const rankingData = [
  {
    position: '1',
    price: '32,000',
    labelText: '#DooTrader賞状',
    iconMobile: firstPlaceIconMobile,
    iconPC: firstPlaceIconPC,
    bgMobile: firstPlaceBGMobile,
    bgPC: firstPlaceBGPC,
    className: 'first-place',
    trophyClassName: 'trophy-icon-first',
    priceColor: '#f5bd4c',
  },
  {
    position: '2',
    price: '20,000',
    labelText: '#DooTrader賞状',
    iconMobile: secondPlaceIconMobile,
    iconPC: secondPlaceIconPC,
    bgMobile: secondPlaceBGMobile,
    bgPC: secondPlaceBGPC,
    className: 'second-place',
    trophyClassName: 'trophy-icon-sec',
    priceColor: '#85c2f1',
  },
  {
    position: '3',
    price: '10,000',
    labelText: '#DooTrader賞状',
    iconMobile: thirdPlaceIconMobile,
    iconPC: thirdPlaceIconPC,
    bgMobile: thirdPlaceBGMobile,
    bgPC: thirdPlaceBGPC,
    className: 'third-place',
    trophyClassName: 'trophy-icon-third',
    priceColor: '#CD7F32',
  },
  {
    position: '4 - 5',
    price: '3,000',
    iconMobile: null,
    iconPC: null,
    bgMobile: fourthPlaceBGMobile,
    bgPC: fourthPlaceBGPC,
    className: 'fourth-place',
    trophyClassName: null,
    priceColor: '#000000',
  },
  {
    position: '6 - 10',
    price: '1,000',
    iconMobile: null,
    iconPC: null,
    bgMobile: fourthPlaceBGMobile,
    bgPC: fourthPlaceBGPC,
    className: 'sixth-place',
    trophyClassName: null,
    priceColor: '#000000',
  },
];

const ResponsiveRankingComponent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="ranking-container">
      {rankingData.map((item, index) => {
        const icon = isMobile ? item.iconMobile : item.iconPC;
        const background = isMobile ? item.bgMobile : item.bgPC;
        return (
          <div
            key={index}
            className={`ranking-item ${item.className}`}
            style={{ backgroundImage: `url(${background})` }}
          >
            {icon && (
              <div className={`trophy-wrapper ${item.trophyClassName}`}>
                <img src={icon} alt={`${item.position}`} className="trophy-icon" />
              </div>
            )}
            <div className="ranking-details">
              <a className="ranking-label">{item.position}位</a>
              <a className="ranking-price" style={{color: item.priceColor}}><a className="price-tag">¥</a>{item.price}</a>
              {item.labelText && <span className="label-text">{item.labelText}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResponsiveRankingComponent;
