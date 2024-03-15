import DashboardLayout from '../components/DashboardLayout';
import NoContentPlaceholder from '../components/NoContentPlaceholder';

const Payments = () => {
  return (
    <DashboardLayout pageTitle="Payments">
      <div className="text-sm">
        <NoContentPlaceholder message={'Coming soon'} />
      </div>
    </DashboardLayout>
  );
};
export default Payments;
