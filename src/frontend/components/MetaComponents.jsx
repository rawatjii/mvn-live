import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { fetchProject } from '../../redux/projectDataSlice';

export default function MetaComponents() {
    const { project, loading } = useSelector((state) => state.project);
    const dispatch = useDispatch();
    const urlName=location.href.split("/").pop();


        useEffect(() => {
        dispatch(fetchProject(urlName));
        }, [dispatch, urlName]);

        if(!project) return;

  return (
    <Helmet>
      {project['data'].meta_title && <title>{project['data'].meta_title}</title>}
      {project['data'].meta_description && (
        <meta name="description" content={project['data'].meta_description} />
      )}
      {project['data'].meta_keywords && (
        <meta name="keywords" content={project['data'].meta_keywords} />
      )}
      {project['data'].head_data && (
        <div dangerouslySetInnerHTML={{ __html: project['data'].head_data }} />
      )}
      {project['data'].footer_data && (
        <noscript>{parse(project['data'].footer_data)}</noscript> 
      )}
    </Helmet>
  )
}
