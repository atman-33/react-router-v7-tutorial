import { Button } from '~/components/shadcn/ui/button';

const DemoButtonPage = () => {
  return (
    <div>
      <Button variant="default" onClick={() => console.log('button clicked!')}>
        Button
      </Button>
    </div>
  );
};

export default DemoButtonPage;
