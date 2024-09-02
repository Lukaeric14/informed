import HeroSection from '@/components/heroSection';
import Filter from '@/components/filter'; // Added import for Filter component
import VendorCard from '@/components/vendorCard'; // Added import for VendorCard component

export default function Home() {
  return (
    <main className="h-screen w-full bg-[#F3F3F3]">
      <div className="flex flex-col h-full">
        <div className="flex-grow flex justify-center">
          <div className="flex w-full max-w-10xl mx-20 my-10"> {/* Added my-10 for top and bottom margins */}
            <div className="w-1/4 rounded-lg p-4 shadow-md mx-15" style={{ backgroundColor: 'white' }}> {/* Left Column with 30px margins */}
              <Filter /> {/* Filter component inserted */}
            </div>
            <div className="w-1/2 mx-15" style={{ marginLeft: '30px', marginRight: '30px' }}> {/* Center Column with 30px margins */}
              <HeroSection /> {/* HeroSection component inserted */}
              <VendorCard /> {/* VendorCard component inserted */}
            </div>
            <div className="w-1/4 rounded-lg p-4 shadow-md mx-15" style={{ backgroundColor: 'white' }}> {/* Right Column with 30px margins */}
              {/* Content goes here */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
