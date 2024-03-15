import DashboardLayout from '../components/DashboardLayout';
import NoContentPlaceholder from '../components/NoContentPlaceholder';

const Vendors = () => {
  return (
    <DashboardLayout pageTitle="Vendors">
      <div className="text-sm">
        <NoContentPlaceholder message={'Coming soon'} />
      </div>
    </DashboardLayout>
  );
};
export default Vendors;
