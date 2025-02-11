import { Link } from 'react-router';
import { Button } from '~/components/shadcn/ui/button';

const AppPage = () => {
  return (
    <div className="flex flex-col gap-4">
      React Router Tutorial
      <Button variant="default" className="self-start" asChild>
        <Link to={'./contacts'}>Addres Book</Link>
      </Button>
    </div>
  );
};

export default AppPage;
