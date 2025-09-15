import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { fetchProject } from '../../redux/projectDataSlice';

export default function MetaComponents() {
    const { project, loading } = useSelector((state) => state.project);
    const dispatch = useDispatch();
    const urlName = location.href.split("/").pop();
          
    useEffect(() => {
        dispatch(fetchProject(urlName));
    }, [dispatch, urlName]);
         
    if (!project) return null;
    
    console.log(project['data'].head_data);

    // Function to parse HTML string and extract individual tags
    const parseHeadData = (htmlString) => {
        if (!htmlString) return [];
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const elements = [];
        
        // Extract meta tags
        const metaTags = doc.querySelectorAll('meta');
        metaTags.forEach((meta, index) => {
            const attrs = {};
            Array.from(meta.attributes).forEach(attr => {
                attrs[attr.name] = attr.value;
            });
            elements.push(<meta key={`meta-${index}`} {...attrs} />);
        });
        
        // Extract link tags
        const linkTags = doc.querySelectorAll('link');
        linkTags.forEach((link, index) => {
            const attrs = {};
            Array.from(link.attributes).forEach(attr => {
                attrs[attr.name] = attr.value;
            });
            elements.push(<link key={`link-${index}`} {...attrs} />);
        });
        
        // Extract script tags
        const scriptTags = doc.querySelectorAll('script');
        scriptTags.forEach((script, index) => {
            const attrs = {};
            Array.from(script.attributes).forEach(attr => {
                attrs[attr.name] = attr.value;
            });
            
            if (script.innerHTML) {
                elements.push(
                    <script 
                        key={`script-${index}`} 
                        {...attrs}
                        dangerouslySetInnerHTML={{ __html: script.innerHTML }}
                    />
                );
            } else {
                elements.push(<script key={`script-${index}`} {...attrs} />);
            }
        });
        
        return elements;
    };

    return (
        <Helmet>
            {project['data'].meta_title && (
                <title>{project['data'].meta_title}</title>
            )}
            {project['data'].meta_description && (
                <meta name="description" content={project['data'].meta_description} />
            )}
            {project['data'].meta_keywords && (
                <meta name="keywords" content={project['data'].meta_keywords} />
            )}
            
           {project['data'].head_data && parseHeadData(project['data'].head_data)}
            
            {project['data'].footer_data && (
                <noscript dangerouslySetInnerHTML={{ __html: project['data'].footer_data }} />
            )}
        </Helmet>
    );
}