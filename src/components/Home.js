import logo from '../images/logo.png';
import bookCover from '../images/Astrophysics-for-People-in-a-Hurry-eBook.webp';
import buyIcon from '../images/buy-icon.png';
import audioHeadphonesIcon from '../images/audio-headphones-icon.png';
import foldedNewspaperIcon from '../images/folded-newspaper-icon.png';
import markIcon from '../images/mark-icon.png';

export const Home = () => {
    return (<>
            <nav>
                <div className="nav-wrapper">
                    <div className="nav-logo-wrapper">
                        <img src={logo} alt="Books summary logo" />
                    </div>
                    <div className="nav-item">Discover</div>
                    <div className="nav-item">Search</div>
                    <div className="nav-item selected">Try Instaread</div>
                    <div className="nav-item login">Login<div className="login-arrow" /></div>
                </div>
            </nav>
            <main>
                <div className="main-wrapper">
                    <section>
                        <img src={bookCover} alt="Books cover image" />
                    </section>
                    <section className="book-meta-wrapper">
                        <div className="book-meta-title">Astrophysics for People in a Hurrys Summary</div>
                        <div className="book-meta-category">Key Insights & Analysis</div>
                        <div className="book-meta-authors">Kelly Brogan MD with Kristin Loberg</div>
                        <div className="book-meta-toolbox-wrapper">
                            <img src={foldedNewspaperIcon} alt="Folded paper icon" />
                            <p className="book-meta-toolbox-text">18 min read</p>
                            <img src={audioHeadphonesIcon} alt="Audio headphones icon" />
                            <p className="book-meta-toolbox-text">14 min listen</p>
                            <img src={markIcon} alt="Mark icon" />
                            <p className="book-meta-toolbox-text">Add to library</p>
                            <img src={buyIcon} alt="Buy icon" />
                            <p className="book-meta-toolbox-text">Buy book</p>
                        </div>
                        <div className="book-meta-tags-wrapper">
                            <div className="book-meta-tag">Business & Finance</div>
                            <div className="book-meta-tag">Business & Finance</div>
                        </div>
                    </section>
                </div>
            </main>
        </>)
}
