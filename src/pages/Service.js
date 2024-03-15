import DashboardLayout from '../components/DashboardLayout';
import NoContentPlaceholder from '../components/NoContentPlaceholder';

const Service = () => {
  return (
    <DashboardLayout pageTitle="Service">
      <div className="text-sm">
        <NoContentPlaceholder message={'Coming soon'} />
      </div>
    </DashboardLayout>
  );
};
export default Service;
