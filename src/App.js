import './App.scss';
import equilibrium from './images/image-equilibrium.jpg';
import avatar from './images/image-avatar.png';

function App() {
  return (
    <main className="App">
      <section className='nft-preview-card'>
        <picture className='container-img-nft'>
          <img className='nft-preview-card__img' src={equilibrium} alt='equilibrium' />
          <div className='overlay'>
            <svg className='nft-preview-card__icon-view' width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z" /><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero" /></g></svg>
          </div>
        </picture>
        <h1 className='nft-preview-card__title'>Equilibrium #3429</h1>
        <p className='nft-preview-card__desc'>
          Our Equilibrium collection promotes balance and calm
        </p>
        <div className='container-coin'>
          <h2 className='nft-preview-card__eth'><svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" /></svg> 0.041 ETH</h2>
          <p className='nft-preview-card__days-left'><svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9" /></svg> 3 days left</p>
        </div>
        <hr className='nft-preview-card__divider' />
        <div className='container-img-avatar'>
          <picture className='nft-preview-card__avatar'>
            <img className='nft-preview-card__img-avatar' src={avatar} alt='avatar' />
          </picture>
          <p className='nft-preview-card__creation'>Creation of <span className='nft-preview-card__creation-span'>Jules Wyvern</span></p>
        </div>
      </section>
    </main>
  );
}

export default App;
