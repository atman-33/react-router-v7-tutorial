import { Outlet } from 'react-router';

const AppLayout = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
