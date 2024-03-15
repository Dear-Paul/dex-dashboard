import DashboardLayout from '../components/DashboardLayout';
import RatingCard from '../components/RatingCard';
import VariantCard from '../components/VariantCard';
import VariantFour from '../icons/VariantFour';
import VariantOne from '../icons/VariantOne';
import VariantThree from '../icons/VariantThree';
import VariantTwo from '../icons/VariantTwo';
import CalenderIcon from '../icons/CalenderIcon';
import ChevronLeft from '../icons/ChevronLeft';
import ChevronRight from '../icons/ChevronRight';
import placeholderImgUrlOne from '../assets/images/placeholder.png';
import placeholderImgUrlTwo from '../assets/images/placeholder2.png';
import placeholderImgUrlThree from '../assets/images/placeholder3.png';
import LineChartContainer from '../components/LineChartContainer';

const dashboardVariants = [
  {
    title: 'Vendors',
    textColor: 'text-[#5B5B5B]',
    numbers: '350',
    icon: <VariantOne />
  },
  {
    title: 'Active Services',
    textColor: 'text-[#F7B32B]',
    numbers: '10',
    icon: <VariantTwo />
  },
  {
    title: 'Active Services Requests',
    textColor: 'text-[#C1292E]',
    numbers: '56',
    icon: <VariantThree />
  },
  {
    title: 'Users',
    textColor: 'text-[#5B5B5B]',
    numbers: '1100+',
    icon: <VariantFour />
  }
];
const vendorRatings = [
  {
    name: 'Esosa Bolaji',
    role: 'Electrician',
    rating: 4,
    placeholderImg: placeholderImgUrlOne
  },
  {
    name: 'Efik Ayo',
    role: 'Carpenter',
    rating: 4,
    placeholderImg: placeholderImgUrlTwo
  },
  {
    name: 'Victor Siji',
    role: 'Makeup Artiste',
    rating: 4,
    placeholderImg: placeholderImgUrlOne
  },
  {
    name: 'Tolani Chelsea',
    role: 'House Cleaner',
    rating: 4,
    placeholderImg: placeholderImgUrlTwo
  },
  {
    name: 'Amala Moon',
    role: 'Restaurant',
    rating: 4,
    placeholderImg: placeholderImgUrlThree
  }
];
const userRatings = [
  {
    name: 'Coco M',
    rating: 3,
    placeholderImg: placeholderImgUrlOne
  },
  {
    name: 'Ifeoluwa',
    rating: 4,
    placeholderImg: placeholderImgUrlThree
  },
  {
    name: 'Oluchi',
    rating: 4,
    placeholderImg: placeholderImgUrlTwo
  },
  {
    name: 'Emiliano Rora',
    rating: 4,
    placeholderImg: placeholderImgUrlTwo
  },
  {
    name: 'Sabi Girl',
    rating: 4,
    placeholderImg: placeholderImgUrlThree
  }
];
const Home = () => {
  return (
    <DashboardLayout pageTitle="Welcome Dexter Admin,">
      <section className="flex flex-col">
        <div className="flex gap-16">
          {dashboardVariants?.map((variant, i) => (
            <VariantCard key={i} variant={variant} />
          ))}
        </div>
        <div className="mt-10 flex gap-8 h-[600px]">
          <section className="w-[65%] flex flex-col gap-6">
            <div className="h-[38px] rounded-lg bg-white w-[92%]">
              <section className="flex items-center w-full justify-between">
                <h4 className="ml-1 text-xl text-[#8D9091] font-semibold">Users on Dexter App</h4>
                <div className="flex items-center gap-[6px] w-[213px] rounded-md py-2 px-3 border h-[38px]">
                  <CalenderIcon />
                  <span className="text-[#8D9091] font-normal text-sm">Last 6 months</span>
                  <ChevronLeft />
                  <ChevronRight />
                </div>
              </section>
            </div>
            <div className="flex h-[558px] bg-white rounded-lg">
              <div className="w-[540px] mt-4 h-[358px] ml-8">
                <LineChartContainer />
              </div>
              <section className="h-[358px] flex flex-col justify-center w-[100px]">
                <div className="flex gap-3">
                  <div className="rotate-90 mx-2 border-2 border-primary"></div>
                  <span className="mt-1">Users</span>
                </div>
                <div className="flex gap-3">
                  <div className="rotate-90 mx-2 border-2 border-[#F7B32B]"></div>
                  <span className="mt-1">Month</span>
                </div>
              </section>
            </div>
          </section>
          <section className="w-1/3 flex flex-col gap-4">
            <RatingCard title="Top Rated Vendors" ratings={vendorRatings} />
            <RatingCard title="Top Rated Users" ratings={userRatings} />
          </section>
        </div>
      </section>
    </DashboardLayout>
  );
};
export default Home;
