import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MicroBanner from "../components/MicroBanner/Index";
import Mobilemicro_bg from '../assets/images/disclaimer-head-bg-desktop.jpg';
import Desktopmicro_bg from '../assets/images/disclaimer-head-bg-desktop.jpg';
import Layout from "../components/Layout";


// Importing the MicroBanner component (Ensure the correct path)


const Disclaimer = () => {
    // Scroll to top when the component loads
    window.scrollTo(0, 0);

    // State to manage background image
    const [microBg, setMicroBg] = useState(Desktopmicro_bg);

    // Breadcrumb data
    const breadcrumbs = {
      title: 'Disclaimer',
      links: [
        { name: 'Home', link: '/' },
        { name: 'Disclaimer' }
      ]
    };


    return (
        <>
        <Layout>
          <MicroBanner bg={microBg} data={breadcrumbs} />
            
            {/* Main Content Section */}
            <section className="section">
            {/* upcoming_page */}
                {/* <div className="micro_content">
                    <div className="micro_data">
                        <div className="content_col position-relative page-header-main-heading">
                      
                        </div>
                    </div>
                </div> */}

                <Container className="terms-condition-content">
                    <h4> Terms & Conditions</h4>

                    <h5>Welcome to MVN Infrastructure!</h5>

                    <p>These terms and conditions outline the rules and regulations for the use of MVN Infrastructure Website, located at https://www.mvn.in/.</p>

                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use MVN Infrastructure if you do not agree to take all of the terms and conditions stated on this page.</p>

                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person who logs on to this website and complies with the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of the provision of the Company’s stated services, in accordance with and subject to the prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to the same.</p>

                    <h5>Cookies</h5>

                    <p> We employ the use of cookies. By accessing MVN Infrastructure, you agreed to use cookies in agreement with the MVN Infrastructure Privacy Policy.</p>

                    <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

                    <h5>License</h5>
                    <p>Unless otherwise stated, MVN Infrastructure and/or its licensors own the intellectual property rights for all material on MVN Infrastructure. All intellectual property rights are reserved. You may access this from MVN Infrastructure for your own personal use subjected to restrictions set in these terms and conditions.</p>

                    <h5>You must not:</h5>

                    <ul>
                        <li>Republish material from MVN Infrastructure</li>
                        <li>Sell, rent or sublicense material from MVN Infrastructure</li>
                        <li>Reproduce, duplicate or copy material from MVN Infrastructure</li>
                        <li>Redistribute content from MVN Infrastructure</li>
                        <li>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Template.</li>
                    </ul>

                    <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. MVN Infrastructure does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of MVN Infrastructure, its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, MVN Infrastructure shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

                    <p>MVN Infrastructure reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes a breach of these Terms and Conditions.</p>

                    <h5>You warrant and represent that:</h5>
                    <uL>
                    <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                    <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;</li>
                    <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                    <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                    <li>You hereby grant MVN Infrastructure a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.</li>
                    </uL>

                    <h5>Hyperlinking To Our Content:</h5>

                    <h5>The following organizations may link to our Website without prior written approval:</h5>

                    <ul>
                   
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>

                    </ul>   

                    <p>These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

                    <p>We may consider and approve other link requests from the following types of organizations:</p>

                    <ul>
                        <li>commonly-known consumer and/or business information sources;</li>
                        <li>dot.com community sites;</li>
                        <li>associations or other groups representing charities;</li>
                        <li>online directory distributors;</li>
                        <li>internet portals;</li>
                        <li>accounting, law, and consulting firms; and educational institutions and trade associations.</li>
                    </ul>

                    <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of MVN Infrastructure; and (d) the link is in the context of general resource information.</p>

                    <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>

                    <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to MVN Infrastructure. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>

                    <ul>

                    <li>Approved organizations may hyperlink to our Website as follows:</li>
                    <li>By use of our corporate name; or</li>
                    <li>By use of the uniform resource locator being linked to; or</li>
                    <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.
                    No use of MVN Infrastructure logo or other artwork will be allowed for linking absent a trademark license agreement.</li>

                    </ul>

                    <h5>IFrames</h5>

                    <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

                    <h5>Content Liability</h5>

                    <p>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.</p>

                    <h5>Your Privacy</h5>
                    <p>Please read Privacy Policy</p>

                    <h5>Reservation Of Rights</h5>

                    <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website</p>

                    <h5>Removal Of Links From Our Website</h5>

                    <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.</p>

                    <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

                    <h5>Disclaimer</h5>

                    <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                    <ul>
                    <li>limit or exclude our or your liability for death or personal injury;</li>
                    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    <li>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</li>

                    </ul>
                   

                    <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>

                </Container>
            </section>
        </Layout>
            {/* MicroBanner component with dynamic background and breadcrumbs */}
            
        </>
    );
};

export default Disclaimer;
