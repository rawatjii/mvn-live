import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MicroBanner from "../components/MicroBanner/Index";

import Mobilemicro_bg from '../assets/images/privacy-policy.webp';
import Desktopmicro_bg from '../assets/images/privacy-policy.webp';

const PrPolcy = ()=>{
    window.scrollTo(0, 0);

    // State to manage background image
    const [microBg, setMicroBg] = useState(Desktopmicro_bg);

    // Breadcrumb data
    const breadcrumbs = {
      title: 'Privacy Policy',
      links: [
        { name: 'Home', link: '/' },
        { name: 'Privacy Policy' }
      ]
    };

    // Update background image based on window width
    useEffect(() => {
      const updateBackground = () => {
        if (window.innerWidth <= 768) {
          setMicroBg(Mobilemicro_bg);
        } else {
          setMicroBg(Desktopmicro_bg);
        }
      };

      // Initial check for background image
      updateBackground();

      // Add resize event listener to update background on window resize
      window.addEventListener('resize', updateBackground);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateBackground);
      };
    }, []); // Empty dependency array to run once on mount




    return(
        <>

        <MicroBanner bg={microBg} data={breadcrumbs} />
            

        <section className="upcoming_page">
            <Container className="privacy-policy-content">
                 <h4>Privacy Policy</h4>
                 <h5>Welcome to MVN Infrastructure!</h5>
                 <p>Thank you for visiting the MVN Infrastructure website. This is to inform user / customer(s) that mvn.in is/are the only official websites of MVN Infrastructure Private Limited (“Company”). User/Customer(s) are cautioned and advised not to rely upon any information stated on any other websites which may appear to be similar to the company’s official website, including containing the company's logo / brand name. The information contained in such websites may be misleading/false and user/customer(s) may suffer loss if they rely on such information. In the event user/customer(s) come across any such websites similar to the company's official website containing its brand name/logo or any other information, then kindly contact and inform us on info@mvn.in in order to enable the Company to take necessary action. Please ensure that you deal with only RERA registered real estate agents (“Registered Real Estate Agents”) whose name appears as a real estate agent under the project name on the RERA web site. If you have received any unsolicited calls or text messages in breach of the regulatory norms or from agents not registered with us, please do not trust such information and report such instances to us on info@mvn.in for our further investigation. Specifications and amenities mentioned in this website are only representative and informative. Information, images and visuals, drawings, plans or sketches shown in this website are only an architect’s impression and are only indicative of the envisaged developments and the same are subject to approvals from local authorities and finalization by the Company. The Company reserves rights to make additions, deletions, alterations or amendments as and when it deems fit and proper, without any prior notice. No representation or warranty is made or intended as to the accuracy or completeness of information and no commitments are being given under this website as to its suitability or adequacy for any purpose or otherwise however.</p>

                <p>All dimensions mentioned in the drawings may vary/differ due to construction contingencies and site conditions. Actual product/development and any other aspect may differ from what is portrayed herein. All layouts, plans, specifications, dimensions, designs, measurements and locations are indicative and not to scale and are subject to change as may be decided by the company and/or competent authority. Revision, alteration, modification, addition, deletion, substitution or recast, if any, may be necessary during construction. For accurate information, you are requested to contact the Company’s authorized sales personnel. We endeavor to keep the information up to date and correct however we make no representations, guarantees, or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services or related graphics contained on the website for any purpose. Information about projects is indicative. Artist's impressions, products, features, furniture, floor coverings, curtains, mirrors, wall hangings, light fittings, furnishings, pictures, images, plans, drawings, amenities, dimensions, elevations etc., if any, are shown as illustrations and for reference only. The views shown in the picture may vary over the period of time and Company does not guarantee the same. All intending purchasers are bound and expected to inspect all plans and approvals and visit project site and apprise themselves of all plans and approvals and other relevant information and nothing in this website is intended to substitute to the intending purchaser the actual plans and approvals obtained from time to time. The relationship between the Company and the actual customers will be governed strictly by the agreement for sale to be executed from time to time and not on the terms of this website. All details and prices quoted are indicative and have been calculated on the basic rate. This website is merely conceptual and is not a legal document. It cannot be treated as a part of the final purchase agreement/s that may be executed from time to time. The Company reserves the right to change, amend, modify the contents of the brochure and architectural specifications during development stages. The Company/its Management and employees hold no responsibility for its accuracy and shall not be liable to any intending purchaser or anyone for the changes/alterations/improvements so made.</p>

                <p>The copyright, database rights, trademarks, patents, know-how, confidential information and personal data and all other intellectual property contained in this website are the property of MVN Infrastructure and/or its affiliates. The Company uses the information that we collect on the Site to contact you when requested in order to further discuss your interest in our company, our services, and to send information regarding our company or partners, such as marketing promotions and events. This information may also be used to improve the services we provide you. The information is collected and stored in a manner that is appropriate for the nature of the data that we collect, and the need to fulfill your request. This information is not provided to third parties for their use unless specifically authorized by you. The Company or its directors or employees will not be liable for any loss, damage, errors, injury, whether direct, indirect, consequential or incidental, suffered or incurred by any person/s or due to any use and/or inability to use this site or information or its links, hyperlinks, action taken or abstained, any transmission made through this site and news groups, even if the Company and/or its employees or directors have been notified of the possibilities of potential damages or losses. Any recipient or user of any information or material from this site may avail of the same entirely at his/her own risk as to costs and consequences, thereof.</p>

                <p>When you voluntarily send us electronic mail, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address, or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email, or WhatsApp about our products and offers, even if your number has DND activated on it.</p>





            </Container>
        </section>
        </>
    )
}

export default PrPolcy;