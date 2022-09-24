import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Brands from "../components/Brands";
import ServicesItem from "../components/ServicesItem";
import VideoFrame from "../components/VideoFrame";
import TestimonialCard from "../components/TestimonialCard";
import styles from "./SaaSLandingPage.module.css";

const SaaSLandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNewsletterButtonClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.saaSLandingPage}>
      <div className={styles.navBarDiv}>
        <div className={styles.navbarDiv}>
          <button className={styles.saasifyButton}>Saasify</button>
          <div className={styles.linksDiv}>
            <div className={styles.menuLinksDiv}>
              <div className={styles.productDiv}>Product</div>
              <div className={styles.productDiv}>Solution</div>
              <div className={styles.productDiv}>Customer</div>
              <div className={styles.productDiv}>Pricing</div>
              <div className={styles.productDiv}>About us</div>
            </div>
            <button className={styles.hamburgerIconButton}>
              <img className={styles.group2Icon} alt="" src="../group2.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.introDiv}>
        <div className={styles.contentDiv}>
          <div className={styles.theFastestWayForStartupsT}>
            The fastest way for startups to do any analysis
          </div>
          <div className={styles.equalsIsTheOnlySpreadsheet}>
            Equals is the only spreadsheet with built-in connections to any
            database, versioning, and collaboration.
          </div>
          <div className={styles.frameDiv}>
            <input
              className={styles.heroNewsletterInput}
              type="text"
              placeholder="Enter your email"
            />
            <button
              className={styles.newsletterButton}
              onClick={onNewsletterButtonClick}
            >
              <div className={styles.startForFree}>Start for free</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.externalDiv}>
        <Brands />
      </div>
      <div className={styles.servicesDiv}>
        <div className={styles.servicesDiv1}>
          <div className={styles.frameDiv1}>
            <b className={styles.ourServicesMadeForYou}>
              Our services made for you?
            </b>
          </div>
          <div className={styles.itemWrapperDiv}>
            <ServicesItem
              title="Task Management"
              text="The process of managing a task through its life cycle. It involves planning, testing, tracking."
              icon="../icon.svg"
            />
            <ServicesItem
              title="Design System"
              text="The technology by which a process or procedure is performed with minimal human assistance."
              icon="../icon1.svg"
            />
            <div className={styles.itemDiv}>
              <div className={styles.rectangleDiv} />
              <b className={styles.bestPractices}>Best Practices</b>
              <div className={styles.creatingPlanToSpendYourMo}>
                Creating plan to spend your money, This spending planer is
                called a budgeting tool for business.
              </div>
              <button className={styles.readMoreBtn}>
                <div className={styles.readMoreDiv}>Read More</div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector-9.svg"
                />
              </button>
              <div className={styles.iconDiv}>
                <div className={styles.rectangleDiv1} />
                <div className={styles.protectCloudDiv}>
                  <div className={styles.unionDiv}>
                    <div className={styles.rectangleDiv2} />
                    <div className={styles.rectangleDiv3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.marketingDiv}>
        <div className={styles.sectionDiv}>
          <div className={styles.sectionLeftDiv}>
            <b className={styles.powerfulAndEasyToUseSaaS}>
              Powerful and easy to use SaaS platform
            </b>
            <div className={styles.useMarketingAutomationToId}>
              Use marketing automation to identify hot leads and email your
              sales team telling them to follow up. Nurture and contact leads at
              the opportune time to maximize.
            </div>
            <button className={styles.ctaBtnButton}>
              <b className={styles.getStartedB}>Get Started</b>
            </button>
          </div>
          <div className={styles.imageDiv}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-148.svg"
            />
            <img
              className={styles.digitalService21Icon}
              alt=""
              src="../digitalservice2-1@2x.png"
            />
            <div className={styles.imgDiv}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle-78.svg"
              />
              <div className={styles.conversionRateDiv}>Conversion Rate</div>
              <b className={styles.b}>$7,350</b>
              <div className={styles.div}>+16%</div>
              <div className={styles.kDiv}>10k</div>
              <div className={styles.kDiv1}>4k</div>
              <div className={styles.kDiv2}>2k</div>
              <div className={styles.div1}>0</div>
              <div className={styles.sDiv}>S</div>
              <div className={styles.rectangleDiv4} />
              <div className={styles.mDiv}>M</div>
              <div className={styles.rectangleDiv5} />
              <div className={styles.tDiv}>T</div>
              <div className={styles.rectangleDiv6} />
              <div className={styles.wDiv}>W</div>
              <div className={styles.rectangleDiv7} />
              <div className={styles.tDiv1}>T</div>
              <div className={styles.rectangleDiv8} />
              <div className={styles.fDiv}>F</div>
              <div className={styles.rectangleDiv9} />
              <div className={styles.sDiv1}>S</div>
              <div className={styles.rectangleDiv10} />
              <div className={styles.sDiv2}>S</div>
              <div className={styles.rectangleDiv11} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.instructionsDiv}>
        <div className={styles.contentDiv}>
          <div className={styles.headerDiv}>
            <b className={styles.workSmarterWithEasyAccess}>
              <p className={styles.workSmarterP}>Work smarter</p>
              <p className={styles.withEasyAccess}>
                with easy access for user..
              </p>
            </b>
            <button className={styles.button}>
              <div className={styles.rectangleDiv12} />
              <b className={styles.getStartedNow}>Get Started Now</b>
            </button>
          </div>
          <div className={styles.contentDiv1}>
            <div className={styles.frameDiv2}>
              <div className={styles.process1Div}>
                <div
                  className={styles.afterLearningAboutYourCust}
                >{`After learning about your customer service needs, we will get you up `}</div>
                <button className={styles.createAccountButton}>
                  Create Account
                </button>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse-45.svg"
                />
                <b className={styles.b1}>1</b>
              </div>
              <div className={styles.process2Div}>
                <div
                  className={styles.afterLearningAboutYourCust1}
                >{`After learning about your customer service needs, we will get you up `}</div>
                <b className={styles.installTrackingCode}>
                  Install tracking code
                </b>
                <img
                  className={styles.ellipseIcon1}
                  alt=""
                  src="../ellipse-45.svg"
                />
                <b className={styles.b2}>2</b>
              </div>
              <div className={styles.process3Div}>
                <div
                  className={styles.afterLearningAboutYourCust2}
                >{`After learning about your customer service needs, we will get you up `}</div>
                <b className={styles.installTrackingCode}>Track analytics</b>
                <img
                  className={styles.ellipseIcon2}
                  alt=""
                  src="../ellipse-452.svg"
                />
                <b className={styles.b3}>3</b>
              </div>
            </div>
            <VideoFrame />
          </div>
        </div>
      </div>
      <div className={styles.testimonialsDiv}>
        <div className={styles.testimonialSectionDiv}>
          <b className={styles.whatPeopleAreSayingAboutU}>
            What people are saying about us
          </b>
          <div className={styles.testimonialsDiv1}>
            <TestimonialCard
              name="Kartik Bansal"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna"
              location="Kota, Rajasthan"
              image="../image@2x.png"
            />
            <TestimonialCard
              name="Anil Dvivedi"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna"
              location="New Delhi"
              image="../image1@2x.png"
            />
            <TestimonialCard
              name="Srijan Sirasikar"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna"
              location="Bhadrak"
              image="../image2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.testimonialSectionDiv}>
          <div className={styles.footerCtaDiv}>
            <div className={styles.weAreHereToHelpYouGrowY}>
              <p className={styles.workSmarterP}>We are here to help</p>
              <p className={styles.withEasyAccess}>you grow your business</p>
            </div>
            <button className={styles.ctaBtnButton1}>
              <button className={styles.ctaBtnBg} />
              <b className={styles.getStartedNow1}>Get Started Now</b>
            </button>
          </div>
          <div className={styles.linksDiv1}>
            <div className={styles.frameDiv3}>
              <b className={styles.saasifyB}>Saasify</b>
              <div className={styles.dataVisualizationAndExpens}>
                <p
                  className={styles.workSmarterP}
                >{`Data visualization, and `}</p>
                <p className={styles.workSmarterP}>{`expense management `}</p>
                <p className={styles.withEasyAccess}>for your business.</p>
              </div>
            </div>
            <div className={styles.frameDiv4}>
              <div className={styles.companyDiv}>Product</div>
              <div className={styles.digitalInvoiceDiv}>Digital Invoice</div>
              <div className={styles.digitalInvoiceDiv}>Insights</div>
              <div className={styles.digitalInvoiceDiv}>Reimbursements</div>
              <div className={styles.digitalInvoiceDiv}>Virtual Assistant</div>
              <div className={styles.digitalInvoiceDiv}>
                Artificial Intelligence
              </div>
            </div>
            <div className={styles.frameDiv4}>
              <div className={styles.companyDiv}>Company</div>
              <div className={styles.digitalInvoiceDiv}>About Us</div>
              <div className={styles.digitalInvoiceDiv}>Newsletters</div>
              <div className={styles.digitalInvoiceDiv}>Our Partners</div>
              <div className={styles.digitalInvoiceDiv}>Career</div>
              <div className={styles.digitalInvoiceDiv}>Contact Us</div>
            </div>
            <div className={styles.frameDiv4}>
              <div className={styles.companyDiv}>Resources</div>
              <div className={styles.digitalInvoiceDiv}>Blog</div>
              <div className={styles.digitalInvoiceDiv}>Pricing</div>
              <div className={styles.digitalInvoiceDiv}>FAQ</div>
              <div className={styles.digitalInvoiceDiv}>Events</div>
              <div className={styles.digitalInvoiceDiv}>{`Ebook & Guide`}</div>
            </div>
            <div className={styles.frameDiv4}>
              <div className={styles.companyDiv}>Follow Us</div>
              <div className={styles.digitalInvoiceDiv}>LinkedIn</div>
              <div className={styles.digitalInvoiceDiv}>Twitter</div>
              <div className={styles.digitalInvoiceDiv}>Instagram</div>
              <div className={styles.digitalInvoiceDiv}>Facebook</div>
              <div className={styles.digitalInvoiceDiv}>YouTube</div>
            </div>
          </div>
          <div className={styles.frameDiv8}>
            <div className={styles.copyrightKartikBansal2022}>
              Copyright @ Kartik Bansal 2022. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaaSLandingPage;
