"use client"

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import heading from "../../public/images/heading.png";
import btn from "../../public/images/btn.png"
import btn1 from "../../public/images/btn1.png"
import hero from "../../public/images/heroIMG.png"
import logo from "../../public/images/logo.png"
import instagram from "../../public/images/instagram.png"
import youtube from "../../public/images/youtube.png"
import telegram from "../../public/images/telegram.png"
import twitter from "../../public/images/twitter.png"
import linkedin from "../../public/images/LinkedIn.png"
import tiktok from "../../public/images/tiktok.png"
import speaker from "../../public/images/speaker.png"
import heroCover from "../../public/images/heroCover.png"
import about from "../../public/images/aboutIMG.png"
import eco from "../../public/images/ecoIMG.png"
import watch from "../../public/images/watch.png"
import iframeImage from "../../public/images/Iframe.png"
import line from "../../public/images/line.png"
import bar1 from "../../public/images/bar1.png"
import bar2 from "../../public/images/bar2.png"
import bar3 from "../../public/images/bar3.png"
import bar4 from "../../public/images/bar4.png"
import bar5 from "../../public/images/bar5.png"
import bar6 from "../../public/images/bar6.png"
import bar7 from "../../public/images/bar7.png"
import bar8 from "../../public/images/bar8.png"
import bar9 from "../../public/images/bar9.png"
import bar10 from "../../public/images/bar10.png"
import bar11 from "../../public/images/bar11.png"
import bar12 from "../../public/images/bar12.png"
import road from "../../public/images/road.png"
import check from "../../public/images/check.png"
import found1 from "../../public/images/found1.png"
import found2 from "../../public/images/found2.png"
import colab1 from "../../public/images/colab1.png"
import ad1 from "../../public/images/ad1.png"
import ad2 from "../../public/images/ad2.png"
import ad3 from "../../public/images/ad3.png"
import ad4 from "../../public/images/ad4.png"
import ad5 from "../../public/images/ad5.png"
import ad6 from "../../public/images/ad6.png"
import l1 from "../../public/images/l1.png"
import l2 from "../../public/images/l2.png"
import l3 from "../../public/images/l3.png"
import l4 from "../../public/images/l4.png"
import l5 from "../../public/images/l5.png"
import l6 from "../../public/images/l6.png"
import l7 from "../../public/images/l7.png"
import l8 from "../../public/images/l8.png"
import l9 from "../../public/images/l9.png"
import l10 from "../../public/images/l10.png"
import l11 from "../../public/images/l11.png"
import { useEffect, useState } from "react";




export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  return (
    <>
      <link rel="icon" href="assets/images/logo.png" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" type="text/css" href="assets/css/index.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,1000;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <title>TWO LANDS</title>
      <header className="header">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} 
        style={{ backgroundColor: isScrolled ? '#000000' : 'transparent' }}
        >
          <div className={`center-menu ${isActive ? 'active' : ''}`} onClick={closeNavbar}>
            <a href="#about" className="tg">
              <li>ABOUT</li>
            </a>
            <a href="#eco" className="tg">
              <li>ECOSYSTEM</li>
            </a>
            <a href="#intro" className="tg">
              <li>GAMING INTRO</li>
            </a>
            <a href="#token" className="tg">
              <li>TOKENOMICS</li>
            </a>
            <a href="#map" className="tg">
              <li>ROADMAP</li>
            </a>
          </div>
          <div className="navbar-toggle" onClick={toggleNavbar}>
            <span />
            <span />
            <span />
          </div>
        </nav>
      </header>
      <div className="body" onClick={closeNavbar}>
        <div className="home" id="home" />
        <div className="hero-section">
          <Image
            className="heading"
            src={heading}
            alt="logo"
            width={10000}
            height={10000}
          />
          <div className="content">
            <div className="left">
              <h1>
                “Indiana Jones x The DaVinci <br /> Code of Blockchain”
              </h1>
              <p>
                Where gaming meets ancient archeology in an engaging,
                sustainable DeFi ecosystem designed to excite the inner explorer
                in us all…
              </p>
              <a
                href="https://linktr.ee/twolandstoken"
                target="_blank"
                className="btn"
              >
                <Image
                  src={btn}
                  alt="logo"
                  width={10000}
                  height={10000}
                />
              </a>
              <a
                href="Two-Lands-LitePaper.pdf"
                target="_blank"
                className="btn1"
              >
                <Image
                  src={btn1}
                  alt="logo"
                  width={500}
                  height={500}
                />
              </a>
              {/* <button>
                  Buy with Credit Card
              </button> */}
            </div>
            <div className="right">
              <Image
                alt="logo"
                src={hero}
                width={5000}
                height={5000}
              />
            </div>
          </div>
          <div className="side-bar">
            <a href="#" className="logo">
              <Image
                src={logo}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="https://www.instagram.com/twolandstoken/">
              <Image
                src={instagram}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCj_kPkfbKRVHYW_3W23Ibgg"
              target="_blank"
            >
              <Image
                src={youtube}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="https://t.me/twolandstokenportal" target="_blank">
              <Image
                src={telegram}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="https://twitter.com/twolandstoken" target="_blank">
              <Image
                src={twitter}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="https://www.tiktok.com/@twolandstoken" target="_blank">
              <Image
                src={tiktok}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <div className="divid">
              <a href="#">
                <Image
                  src={speaker}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <Image
            className="cov"
            src={heroCover}
            alt=""
            height={1000}
            width={1000}
          />
        </div>
        <div className="buy-crypto">
          <h2>buy crypto with credit card</h2>
          <iframe
            width={400}
            height={720}
            frameBorder={0}
            allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
            src="https://flooz.xyz/embed/trade?swapDisabled=true&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampTokenAddress=eth&stakeDisabled=true&network=eth&lightMode=false&primaryColor=%23ffbf19&backgroundColor=transparent&roundedCorners=10&padding=20&refId=fICc58?enablejsapi=1"
          />
        </div>
        <div className="about" id="about">
          <div className="left">
            <Image
              className="img"
              src={about}
              alt="logo"
              width={10000}
              height={10000}
            />
          </div>
          <div className="right">
            <h2>WHO ARE WE?</h2>
            <p>
              Who are we and where did we come from? Well, those are the two
              greatest mysteries in the history of mankind. The duality inherent
              to the Two Lands ecosystem is personified as a bridge between our
              physical world and the cosmos of De-Fi, all in an effort to help
              garner awareness for and fund archaeological expedition &amp;
              research that may contribute to the completion of our species’
              story. In essence, we are like minded individuals with a passion
              for deciphering and uncovering the true mysteries of our origin,
              “to help rewrite history, one block at a time”.
            </p>
          </div>
        </div>
        <div className="eco" id="eco">
          <div className="left">
            <h2>ECOSYSTEM</h2>
            <p>
              Our assets include $lands Token, a gaming ecosystem, pharaoh &amp;
              collaboration NFTs, multiple real-world partnerships, a vibrant
              community &amp; much more!
            </p>
            <p>
              Internal marketplaces will include both in-app and web based
              purchasing environments. Our assets &amp; products will be found
              on external marketplaces like opensea.io, googleplay, appstore and
              selected exchanges.
            </p>
          </div>
          <div className="right">
            <Image
              src={eco}
              alt="logo"
              width={2000}
              height={2000}
            />
          </div>
        </div>
        <div className="intro" id="intro">
          <div className="content">
            <div className="right">
              <h2>GIZA INITIATIVE</h2>
              <p>
                TWO LANDS has partnered with non-profit, THE EVERDEEN
                INITIATIVE, renowned author, researcher, and award winning
                filmmaker, ANYEXTEE, as well as legendary recording artist, “The
                Godfather of Hip-Hop” RAKIM, to sponsor a massive funding
                campaign.
              </p>
              <p>
                After a large voided space was identified above the Grand
                Gallery in 2017, core drill sites located nearby became an area
                of focus for many researchers. These sites have yielded the
                potential for previously undiscovered access now filled with
                desert dust over time. This is where we hope to come in…with the
                potential to excite millions of new historians and even rewrite
                a bit of history!
              </p>
            </div>
          </div>
          <div className="box">
            <p>
              This exciting collaboration will be executed with the intent of
              first doing our due diligence, research &amp; development with a
              team of seasoned academics. Then second is the intent to place
              cutting edge, non-invasive technology inside previously unexplored
              areas within the Great Pyramid that haven’t seen the light of day
              in more than 4500 years!
            </p>
          </div>
        </div>
        <div className="lands">
          <h2>two lands x metaverse</h2>
          <p>
            Two Lands collides with the metaverse in a highly anticipated
            strategic partnership that aims to ignite the spirit of exploration,
            inspiring curiosity while revolutionizing the way we engage with
            history.
          </p>
          <p>
            A massive commercial plot within TCG is currently under construction
            and will house Two Lands’ Virtual Headquarters! Additionally, Two
            Lands’ IP, including our Games, Digital Treasure Hunt, and very own
            Secret Society will all be implemented throughout the expansive
            world of TCG’s Metaverse!
          </p>
          <a
            href="https://www.youtube.com/watch?v=mQhZWFYnMhk"
            target="_blank"
            className="btn"
          >
            <Image
              src={watch}
              alt="logo"
              width={10000}
              height={10000}
            />
          </a>
        </div>
        <div className="sli carousel-container">
          <h2>TWO LANDS GAMING</h2>
          <p>
            WHERE SUSTAINABLE WEB3 GAMING MEETS STUNNING NFT ART, SMOOTH
            GAMEPLAY &amp; FUN OPPORTUNITIES TO LEARN &amp; ENGAGE
          </p>
          <div className="carousel">
            <div className="carousel-item">
              <Image
                src={iframeImage}
                alt="logo"
                width={1000}
                height={1000}
              />
            </div>
            <div className="carousel-item">
              <iframe
                className="carousel-video"
                width={560}
                height={315}
                src="https://www.youtube.com/embed/6kZ7FIFsEuE"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={false}
              />
            </div>
            <div className="carousel-item">
              <iframe
                className="carousel-video"
                width={560}
                height={315}
                src="https://www.youtube.com/embed/KMf2g3TqM7k"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={false}
              />
            </div>
          </div>
        </div>
        <div className="tokenomics" id="token">
          <h2>TOKENOMICS</h2>
          <div className="tax">
            <div className="left">
              <p>Buy Tax: 5%</p>
            </div>
            <div className="right">
              <p>Sell Tax: 5%</p>
            </div>
          </div>
          <div className="supply">
            <div className="box">
              <h3>1,000,000,000</h3>
              <p>Total Supply</p>
            </div>
            <Image
              src={line}
              alt="logo"
              width={1000}
              height={1000}
            />
            <div className="box">
              <h3>346,950,000</h3>
              <p>Circulating Supply at Launch</p>
            </div>
            <Image
              src={line}
              alt="logo"
              width={1000}
              height={1000}
            />
            <div className="box">
              <h3>5.0M</h3>
              <p>Target MC at Launch</p>
            </div>
            <Image
              src={line}
              alt="logo"
              width={1000}
              height={1000}
            />
            <div className="box">
              <h3>0.005</h3>
              <p>Token Price at Launch</p>
            </div>
          </div>
          <div className="bars">
            <div className="left">
              <div className="box">
                <Image
                  src={bar1}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Team</p>
                  <p>10%</p>
                </div>
              </div>
              <div className="box">
                <Image
                  src={bar2}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Seed Sale</p>
                  <p>8%</p>
                </div>
              </div>
              <div className="box">
                <Image
                  src={bar3}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Public Sale</p>
                  <p>15.5%</p>
                </div>
              </div>
              <div className="box">
                <Image
                  src={bar4}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Treasury</p>
                  <p>29.75%</p>
                </div>
              </div>
              <div className="box">
                <Image
                  src={bar5}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Contributors</p>
                  <p>3%</p>
                </div>
              </div>
              <div className="box">
                <Image
                  src={bar6}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Development</p>
                  <p>7%</p>
                </div>
              </div>
            </div>
            <div className="left">
              <div className="box">
                <Image
                  src={bar7}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Games Pool</p>
                  <p>2.5%</p>
                </div>
              </div>
              <div className="box">
                <Image
                  src={bar8}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Private Sale</p>
                  <p>4.8%</p>
                </div>
              </div>
              <div className="box">
                <Image
                  src={bar9}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Dex Liquidity</p>
                  <p>9.25%</p>
                </div>
              </div>
              <div className="box">
                <Image
                  src={bar10}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>The Hunt</p>
                  <p>1%</p>
                </div>
              </div>
              <div className="box">
                <Image
                  src={bar11}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Marketing</p>
                  <p>8%</p>
                </div>
              </div>
              <div className="box">
                <Image
                  src={bar12}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <div className="value">
                  <p>Burn</p>
                  <p>1.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hunt">
          <div className="content">
            <div className="left">
              <h2>THE HUNT</h2>
              <p>
                The most consequential web3 infused, global treasure hunt is
                coming this summer. Concealed within a one of a kind, custom
                made Cryptex, a seed phrase will unlock a wallet containing 1%
                of our $LANDS token supply!
              </p>
              <p>
                To acquire this Cryptex our community will need to hunt high and
                low, with clues and easter eggs carefully hidden throughout our
                ecosystem, going back to day one. These clues, along with a
                cryptic, 24-line riddle require Hunters to be resourceful,
                though this will be a hunt anyone with a smart phone can engage
                in, meaning fun for all ages!
              </p>
            </div>
          </div>
          <div className="box">
            <p>
              So much more on this is yet to come, with new clues being released
              buried inside everything we do! Now go out there and explore!
            </p>
          </div>
        </div>
        <div className="docu">
          <h2>TWO LANDS DOCUSERIES</h2>
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/xZ7ECC8RYPc"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={false}
          />
        </div>
        <div className="lands beer">
          <h2>
            Cobranded beer <br /> &amp; spirits
          </h2>
          <p>
            Two Lands has partnered with both Chatham Brewery &amp; Vale of the
            Fox Distillery to create two new, unique cobranded products! Both a
            beer and a gin product will hit menus, taprooms, and palates all
            over the US in the coming months!
          </p>
          <p>
            This intoxicating enterprise will feature partial proceeds going to
            towards our Robot Initiative, with at least $1 per can &amp; bottle
            sold being donated to The Everdeen Foundation!
          </p>
        </div>
        <div className="road" id="map">
          <h2>GIZA ROAD</h2>
          <Image
            src={road}
            alt="logo"
            width={1000}
            height={1000}
          />
          <div className="box box1">
            <h3>Stage 1 : Pre-Dynastic</h3>
            <ul>
              <li>
                Seed Sale{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                Whitepaper V1{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                Website v1 Launch{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                Introductory Marketing{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
            </ul>
          </div>
          <div className="box box2">
            <h3>Stage 2 : Early Dynastic</h3>
            <ul>
              <li>
                Early Consulting Partnerships
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                Private Sale{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                Website Update{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                Two Lands Beer &amp; SpiritsPartnerships{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                EDocuseries Filming{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                Pyramid Scheme Alpha{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                Pharaohs of Aaru Wireframing &amp; <br /> Game Design{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                Litepaper V1{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
            </ul>
          </div>
          <div className="box box3">
            <h3>Stage 3 : Old Kingdom</h3>
            <ul>
              <li>Formal Product Development</li>
              <li>
                Release of DocuseriesOfficial Trailer{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>
                Basic Security Audit &amp; KYC{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>Private Sale Round 2</li>
              <li>Whitepaper V2</li>
              <li>
                Website V2{" "}
                <Image
                  src={check}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
              </li>
              <li>Robot Team Donation</li>
              <li>Initial Global Marketing Campaign</li>
            </ul>
          </div>
          <div className="box box4">
            <h3>Stage 4 : Intermediate Period</h3>
            <ul>
              <li>Public Sale</li>
              <li>DEX Liquidity Launch</li>
              <li>Formal Security Audit</li>
              <li>Pyramid Scheme 1st PlayableOfficial Beta</li>
              <li>Treasure Hunt Launch</li>
              <li>
                Major Global Marketing Initiatives <br /> &amp; Mainstream Media
              </li>
              <li>Genesis NFT Collection Sale</li>
              <li>Everdeen Initiative Platform Release</li>
              <li>Two Lands Docuseries Pilot Official Release</li>
            </ul>
          </div>
          <div className="box box5">
            <h3>Stage 5 : Middle Kingdom</h3>
            <ul>
              <li>CEX Liquidity Launch</li>
              <li>Pyramid Scheme Full Launch</li>
              <li>Pharaohs of Aaru Beta</li>
              <li>E-commerce &amp; Gaming Specific Strategic Partnerships</li>
              <li>Two Lands Bazaar Launch (Merch Market)</li>
              <li>Dao Phase 1 Rollout</li>
              <li>1st Major Team Driven Donation</li>
            </ul>
          </div>
          <div className="box box6">
            <h3>Stage 6 : New Kingdom</h3>
            <ul>
              <li>Listing on Major CEX's</li>
              <li>DAO Phase 2 Formal Launch</li>
              <li>Pharaohs of Aaru 2nd NFT Collection Release</li>
              <li>POA' Phase 2 Gameplay Rollout</li>
              <li>Broader Brand Related Partnerships</li>
              <li>The Pursuit of Divine Knowledge</li>
            </ul>
          </div>
        </div>
        <div className="team">
          <div className="content">
            <div className="left">
              <h2>FOUNDERS</h2>
              <div className="row">
                <div className="box">
                  <Image
                    className="lo"
                    src={found1}
                    alt="logo"
                    width={1000}
                    height={1000}
                  />
                  <h3>Jared Vergilis</h3>
                  <p>CEO / Founder</p>
                  <div className="social">
                    <a href="https://twitter.com/JaredVergilis">
                      <Image
                        src={twitter}
                        alt="logo"
                        width={1000}
                        height={1000}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/jared-v-b98a5684/">
                      <Image
                        src={linkedin}
                        alt="logo"
                        width={1000}
                        height={1000}
                      />
                    </a>
                  </div>
                </div>
                <div className="box">
                  <Image
                    className="lo"
                    src={found2}
                    alt="logo"
                    width={1000}
                    height={1000}
                  />
                  <h3>Zach Ozyck</h3>
                  <p>COO / Founder</p>
                  <div className="social">
                    <a href="https://twitter.com/zfromtwolands">
                      <Image
                        src={twitter}
                        alt="logo"
                        width={1000}
                        height={1000}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/zach-ozyck-48b7bb20/">
                      <Image
                        src={linkedin}
                        alt="logo"
                        width={1000}
                        height={1000}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="left">
              <h2>COLLABORATORS</h2>
              <div className="row">
                <div className="box">
                  <Image
                    className="lo"
                    src={colab1}
                    alt="logo"
                    width={1000}
                    height={1000}
                  />
                  <h3>Anyextee</h3>
                  <p>Author, Researcher &amp; Filmmaker</p>
                  <div className="social">
                    <a href="https://twitter.com/Anyextee">
                      <Image
                        src={twitter}
                        alt="logo"
                        width={1000}
                        height={1000}
                      />
                    </a>
                  </div>
                </div>
                <div className="box">
                  <Image
                    className="lo"
                    src={colab1}
                    alt="logo"
                    width={1000}
                    height={1000}
                  />
                  <h3>Rakim</h3>
                  <p>Legendary Artist &amp; Producer</p>
                  <div className="social">
                    <a href="https://www.instagram.com/thegodrakim/?hl=en">
                      <Image
                        src={instagram}
                        alt="logo"
                        width={1000}
                        height={1000}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content content2">
            <h2>ADVISOR</h2>
            <div className="row">
              <div className="box">
                <Image
                  className="lo"
                  src={ad1}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <h3>Tony</h3>
                <p>Marketing Consultant</p>
                <div className="social">
                  <a href="https://www.linkedin.com/in/tonydrummond/">
                    <Image
                      src={linkedin}
                      alt="logo"
                      width={1000}
                      height={1000}
                    />
                  </a>
                </div>
              </div>
              <div className="box">
                <Image
                  className="lo"
                  src={ad2}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <h3>Tosha</h3>
                <p>Kryptonite Marketing</p>
                <div className="social">
                  <a href="https://twitter.com/KryptoniteTeam1">
                    <Image
                      src={twitter}
                      alt="logo"
                      width={1000}
                      height={1000}
                    />
                  </a>
                </div>
              </div>
              <div className="box">
                <Image
                  className="lo"
                  src={ad3}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <h3>Sarah</h3>
                <p>Kryptonite Marketing</p>
                <div className="social">
                  <a href="https://www.kryptonitemarketing.com/">
                    <Image
                      src={twitter}
                      alt="logo"
                      width={1000}
                      height={1000}
                    />
                  </a>
                </div>
              </div>
              <div className="box">
                <Image
                  className="lo"
                  src={ad4}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <h3>John</h3>
                <p>Digital Product Advisor</p>
                <div className="social">
                  <a href="https://www.linkedin.com/in/johnfreyer/">
                    <Image
                      src={linkedin}
                      alt="logo"
                      width={1000}
                      height={1000}
                    />
                  </a>
                </div>
              </div>
              <div className="box">
                <Image
                  className="lo"
                  src={ad5}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <h3>Glenn</h3>
                <p>Game Dev Consultant</p>
                <div className="social">
                  <a href="https://www.linkedin.com/in/glenn-burnett-519a2aa5/?originalSubdomain=es">
                    <Image
                      src={linkedin}
                      alt="logo"
                      width={1000}
                      height={1000}
                    />
                  </a>
                </div>
              </div>
              <div className="box">
                <Image
                  className="lo"
                  src={ad6}
                  alt="logo"
                  width={1000}
                  height={1000}
                />
                <h3>Sean</h3>
                <p>Media Product Advisor</p>
                <div className="social">
                  <a href="https://twitter.com/seandaustin?lang=en">
                    <Image
                      src={twitter}
                      alt="logo"
                      width={1000}
                      height={1000}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partners">
          <h2>STRATEGIC PARTNERS</h2>
          <div className="row">
            <a href="#">
              <Image
                src={l1}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="#">
              <Image
                src={l2}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="#">
              <Image
                src={l3}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="#">
              <Image
                src={l4}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="#">
              <Image
                src={l5}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
          </div>
          <div className="row row2">
            <a href="#">
              <Image
                src={l6}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="#">
              <Image
                src={l7}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="#">
              <Image
                src={l8}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="#">
              <Image
                src={l9}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
          </div>
          <div className="row">
            <a href="#">
              <Image
                src={l10}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="#">
              <Image
                src={l11}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
          </div>
        </div>
        <div className="disclaimer">
          <h3>Risk Disclosure</h3>
          <p>
            Please note there are always risks associated with smart-contracts.
            Please use at your own risk. Two LandsToken is not a registered
            broker, analyst or investment advisor. Everything that we provide on
            this site is purely for guidance, informational and educational
            purposes. All information contained herein should be independently
            verified and confirmed. We do not accept any liability for any loss
            or damage whatsoever caused in reliance upon such information or
            services. Please be aware of the risks involved with any trading
            done in any financial market. Do not trade with money that you
            cannot afford to lose. When in doubt, you should consult a qualified
            financial advisor before making any investment decisions.
          </p>
          <h3>Legal Disclaimer</h3>
          <p>
            The information provided on this website does not constitute
            investment advice, financial advice, trading advice, or any other
            sort of advice and you should not treat any of the website’s content
            as such. The Two Lands team does not recommend that any
            cryptocurrency should be bought, sold, or held by you. Do conduct
            your own due diligence and consult your financial advisor before
            making any investment decisions. By purchasing Two Lands, you agree
            that you are not purchasing a security or investment and you agree
            to hold the team harmless and not liable for any losses or taxes you
            may incur. You also agree that the team is presenting the token “as
            is” and is not required to provide any support or services. You
            should have no expectation of any form from Two Lands and its team.
            Although Two Lands is a community driven DeFi token for experimental
            reasons and not a registered digital currency, the team strongly
            recommends that citizens in areas with government bans on Crypto do
            not purchase it because the team cannot ensure compliance with your
            territories regulations. Always make sure that you are in compliance
            with your local laws and regulations before you make any purchase.
          </p>
        </div>
        <div className="thank">
          <h2>THANK YOU</h2>
          <p>
            We at Two Lands are grateful for your consideration. Help us to
            “Rewrite <br /> History” one block at a time.
          </p>
        </div>
        <footer>
          <p> © 2023 Two Lands. All Rights Reserved</p>
          <div className="social">
            <a href="https://www.instagram.com/twolandstoken/" target="_blank">
              <Image
                src={instagram}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="https://t.me/twolandstokenportal" target="_blank">
              <Image
                src={telegram}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="https://twitter.com/twolandstoken" target="_blank">
              <Image
                src={twitter}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a href="http://tiktok.com/@twolandstoken" target="_blank">
              <Image
                src={tiktok}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCj_kPkfbKRVHYW_3W23Ibgg"
              target="_blank"
            >
              <Image
                src={youtube}
                alt="logo"
                width={1000}
                height={1000}
              />
            </a>
          </div>
        </footer>
        {/*  */}
        {/*  */}
        {/*  */}
      </div>
    </>
  );
}
