import Ourvalues from '../components/aboutus/Ourvalues'
import Timeline from '../components/aboutus/Timeline';
import PeopleBehind from '../components/aboutus/PeopleBehind';
import Testimonials from '../components/homepage/Testimonials';
import BrandEthos from '../components/homepage/BrandEthos';
import OurInfrastructure from '../components/homepage/Infrastructure';
import OtherVerticals from '../components/homepage/OtherVerticals';

export default function Homepage(){
  return (
    <>
      <OtherVerticals />
      <OurInfrastructure />
      <BrandEthos/>
      <Testimonials/>
    </>
  );
}
