import { useRouter } from 'next/router';
import { supabase } from "@/lib/supabase";

const VendorPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the vendor ID from the URL

  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const fetchVendor = async () => {
      const { data, error } = await supabase.from("vendors").select('*').eq('id', id).single();
      if (data) {
        setVendor(data);
      }
      if (error) console.log(error.message);
    };
    if (id) fetchVendor(); // Fetch vendor data if ID is available
  }, [id]);

  if (!vendor) return <div>Loading...</div>; // Loading state

  return (
    <div>
      <h1>{vendor.name}</h1>
      <p>{vendor.description}</p>
      {/* Add more vendor details here */}
    </div>
  );
};

export default VendorPage;
