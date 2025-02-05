import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Layout from '../components/Layout';

const ThankYou = () => {
    window.scrollTo(0, 0);

    return (
        <>
        <Helmet>
            <script>
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '562105226581202');
                    fbq('track', 'PageView');
                `}    
            </script>
            <noscript>
                {`
                    <img alt="facebook" height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=562105226581202&ev=PageView&noscript=1"/>
                `}
            </noscript>

            {/* conversion */}

            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11490416244"></script>

            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'AW-11490416244');
                `}
            </script>

            <script>
                {`
                    gtag('event', 'conversion', {'send_to': 'AW-11490416244/XHAKCNLcmfgZEPSsh-cq'});
                `}
            </script>

            <script>
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1277605383505048');
                    fbq('track', 'PageView');
                `}
            </script>
            <noscript>
                {`
                    <img alt="facebook" height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1277605383505048&ev=PageView&noscript=1"/>
                `}
            </noscript>

            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11490416244"></script>
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'AW-11490416244');
                `}
            </script>

            <script>
                {`
                    gtag('event', 'conversion', {'send_to': 'AW-11490416244/CXo1CMOY_IAaEPSsh-cq'});
                `}
            </script>

            <script type='text/javascript'>
                {`
                    window._tfa = window._tfa || [];
                    window._tfa.push({notify: 'event', name: 'page_view', id: 1787600});
                    !function (t, f, a, x) {
                            if (!document.getElementById(x)) {
                                t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
                            }
                    }(document.createElement('script'),
                    document.getElementsByTagName('script')[0],
                    '//cdn.taboola.com/libtrc/unip/1787600/tfa.js',
                    'tb_tfa_script');
                `}
            </script>

        </Helmet>
        <Layout>
            <div className="thanks-page">
                <Container>
                    <div className="thnu">
                        <h1 style={{ fontWeight: 600 }}>Thank you!</h1>
                        <p style={{ lineHeight: '30px' }}>
                            Thank you for submitting your details.
                            <br />
                            Our professional shall get in touch with you within two working hours. Stay with us.
                        </p>
                    </div>
                    <Link className='backBtn' to="/">
                    Home
                    </Link>
                </Container>
                
            </div>
        </Layout>
            
        </>
    );
};

export default ThankYou;
