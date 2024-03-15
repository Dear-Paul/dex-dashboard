import DashboardLayout from '../components/DashboardLayout';
import NoContentPlaceholder from '../components/NoContentPlaceholder';

const ServiceRequests = () => {
  return (
    <DashboardLayout pageTitle="Service Requests">
      <div className="text-sm">
        <NoContentPlaceholder message={'Coming soon'} />
      </div>
    </DashboardLayout>
  );
};
export default ServiceRequests;
