declare module "react-lazyload"{
    import { ReactNode, ComponentType } from "react"
    
    interface LazyLoadProps{
        children:ReactNode;
    }

    const LazyLoad = ComponentType<LazyLoadProps>;
    export default LazyLoad;
}   