import heroImg from './assets/hero.svg';

const Hero = () => {
    return <section className={'hero'}><div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>
                Cred jianbing thundercats photo booth affogato. Gentrify fingerstache iceland dreamcatcher shoreditch banjo meh meggings lumbersexual listicle distillery. Hella gatekeep meggings cardigan cronut. Grailed four loko salvia pok pok forage air plant mumblecore dreamcatcher hashtag swag occupy vegan. Tilde listicle cliche, enamel pin drinking vinegar cronut microdosing. Church-key man bun roof party gentrify fingerstache, pickled readymade sus. Post-ironic flannel keffiyeh cornhole paleo.
            </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className={'img'}/>
        </div>
    </div></section>
};
export default Hero;
